<template>
  <div class="order">
    <div class="order__price">实付金额 <b>￥{{ calculations.price }}</b></div>
    <div class="order__btn">提交订单</div>
  </div>
  <div class="mask">
    <div class="mask__content">
      <h3 class="mask__content__title">确认离开收银台？</h3>
      <p class="mask__content__desc">请尽快完成支付，否则将被取消</p>
      <div class="mask__content__btns">
        <div
          class="mask__content__btn mask__content__btn--first"
          @click="() => handleConfirmOrder(true)"
        >取消订单</div>
        <div
          class="mask__content__btn mask__content__btn--last"
          @click="() => handleConfirmOrder(false)"
        >确认支付</div>
      </div>
    </div>
  </div>
</template>

<script>
import { useRoute, useRouter } from 'vue-router'
import { useStore } from 'vuex'
import { useCommonCartEffect } from '../../effects/cartEffects'
import { post } from '../../utils/request'

export default {
  name: 'OrderView',
  setup () {
    const route = useRoute()
    const router = useRouter()
    const store = useStore()
    const shopId = parseInt(route.params.id, 10)
    const { calculations, shopName, productList } = useCommonCartEffect(shopId)

    const handleConfirmOrder = async (isCanceled) => {
      const products = []
      for (const i in productList.value) {
        const product = productList.value[i]
        products.push({ id: parseInt(product._id, 10), num: product.count })
      }
      console.log(products)
      try {
        const result = await post('/api/order', {
          addressId: 1,
          shopId,
          shopName: shopName.value,
          isCanceled,
          products
        })
        console.log(result)
        if (result?.errno === 0) {
          store.commit('clearCartData', shopId)
          router.push({ name: 'HomeView' })
        }
      } catch (e) {
        // 提示失败
      }
    }
    return { calculations, handleConfirmOrder }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.order {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: .49rem;
  line-height: .49rem;
  background: #fff;

  &__price {
    flex: 1;
    text-indent: .24rem;
    font-size: .14rem;
    color: #333333;
  }

  &__btn {
    width: .98rem;
    background: #4FB0F9;
    color: #fff;
    text-align: center;
    font-size: .14rem;
  }
}
.mask {
  z-index: 1;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0,0,0,0.50);

  &__content {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 3rem;
    height: 1.56rem;
    background: #FFF;
    border-radius: .04rem;
    text-align: center;

    &__title {
      font-size: .18rem;
      color: #333;
      margin:.24rem 0 0 0;
      line-height: .26rem;

    }

    &__desc {
      font-size: .14rem;
      margin: .08rem 0 0 0;
      color: #666666;
    }

    &__btns {
      display: flex;
      margin: .24rem .58rem 0 .58rem;
    }

    &__btn {
      flex: 1;
      width: .8rem;
      line-height: .32rem;
      border-radius: .16rem;
      font-size: .14rem;

      &--first {
        margin-right: .12rem;
        border: .01rem solid #4FB0F9;
        color: #4FB0F9;
      }

      &--last {
        margin-left: .12rem;
        background-color: #4FB0F9;
        color: #FFF;
      }
    }
  }
}
</style>
