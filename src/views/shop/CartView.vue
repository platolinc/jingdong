<template>
  <div class="cart">
    <div class="products">
      <template
        v-for="item in productList"
        :key="item._id"
      >
        <div class="product__item" v-if="item.count > 0">
          <img class="product__item__img" :src="item.imgUrl" />
          <div class="product__item__detail">
            <h4 class="product__item__title">{{ item.name }}</h4>
            <p class="product__item__price">
              <span class="product__item__yen">&yen;</span>{{ item.price }}
              <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
            </p>
          </div>
          <div class="product__number">
            <span
              class="product__number__minus"
              @click="() => { changeCartItemInfo(shopId, item._id, item, -1 ) }"
            >-</span>
              {{ item.count || 0 }}
            <span
              class="product__number__plus"
              @click="() => { changeCartItemInfo(shopId, item._id, item, 1 ) }"
            >+</span>
          </div>
        </div>
      </template>
    </div>

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
import { useCommonCartEffect } from './commonCartEffect'

// 获取购物车信息逻辑
const useCartEffect = (shopId) => {
  const store = useStore()
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

  const productList = computed(() => {
    const productList = cartList[shopId] || []
    return productList
  })

  return { total, price, productList }
}

export default {
  name: 'CartView',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { changeCartItemInfo } = useCommonCartEffect()
    const { total, price, productList } = useCartEffect(shopId)
    return { total, price, productList, shopId, changeCartItemInfo }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: #FFF;

  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;

    &__detail {
      overflow: hidden;
    }

    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }

    &__title {
      line-height: .2rem;
      font-size: .14rem;
      margin: 0;
      color: $content-fontcolor;
      @include ellipsis;
    }

    &__price {
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $highlight-fontcolor;
    }

    &__yen {
      font-size: .12rem;
    }

    &__origin {
      margin-left: .06rem;
      line-height: .2rem;
      font-size: .12rem;
      color: $light-fontColor;
      text-decoration: line-through;
    }
    .product__number {
      position: absolute;
      right: 0;
      bottom: .12rem;

      &__minus,
      &__plus {
        display: inline-block;
        width: .2rem;
        height: .2rem;
        line-height: .17rem;
        border-radius: 50%;
        font-size: .2rem;
        text-align: center;
      }

      &__minus {
        border: .01rem solid $medium-fontColor;
        color: $medium-fontColor;
        margin-right: .05rem;
      }

      &__plus {
        background: $btn-bgColor;
        color: $bgColor;
        margin-left: .05rem;
      }
    }
  }
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
