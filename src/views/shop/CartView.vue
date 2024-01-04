<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
        />
        <div class="check__icon__tag">{{ total }}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{price}}</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
import { computed } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'

// 获取购物车信息逻辑
const useCartEffect = () => {
  const store = useStore()
  const route = useRoute()
  const shopId = route.params.id
  const cartList = store.state.cartList

  const total = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count
      }
    }
    return count
  })

  const price = computed(() => {
    const productList = cartList[shopId]
    let count = 0
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        count += product.count * product.price
      }
    }
    return count.toFixed(2)
  })
  return { total, price }
}

export default {
  name: 'CartView',
  setup () {
    const { total, price } = useCartEffect()
    return { total, price }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.check {
  display: flex;
  box-sizing: border-box;
  line-height: .49rem;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;

  &__icon {
    width: .84rem;
    position: relative;

    &__img {
      display: block;
      width: .28rem;
      height: .26rem;
      margin: .12rem auto
    }

    &__tag {
      position: absolute;
      left: .46rem;
      top: .04rem;
      padding: 0 .04rem;
      min-width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background-color: $highlight-fontcolor;
      border-radius: .1rem;
      font-size: .12rem;
      text-align: center;
      color: #FFF;
      transform: scale(.5);//默认是从中心开始缩放
      transform-origin: left center;//改为以左侧为中心缩放
    }
  }

  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: .12rem;

    &__price {
      color: $highlight-fontcolor;
      font-size: .18rem;
      line-height: .49rem;
    }
  }

  &__btn {
    width: .98rem;
    color: #FFF;
    font-size: .14rem;
    background-color: #4FB0F9;
    text-align: center;
  }
}
</style>
