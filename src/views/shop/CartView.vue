<template>
  <div
    class="mask"
    v-if="showCart && calculations.total > 0"
    @click="handleCartShowChange"
  />
  <div class="cart">
    <div class="product" v-if="showCart && calculations.total > 0">
      <div class="product__header">
        <div class="product__header__all" @click="() => setCartItemsChecked(shopId)">
          <span
            class="product__header__icon iconfont"
            v-html="calculations.allChecked ? '&#xe618;' : '&#xe61a;'"
          ></span>
          全选
        </div>
        <div
          class="product__header__clear"
          @click="() => cleanCartProducts(shopId)"
        >清空购物车</div>
      </div>
      <div
        class="product__item"
        v-for="item in productList"
        :key="item._id"
      >
        <div
          class="product__item__checked iconfont"
          v-html=" item.check ? '&#xe618;':'&#xe61a;'"
          @click="() => changeCartItemChecked(shopId, item._id)"
        >
        </div>
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
    </div>

    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
          @click="handleCartShowChange"
        />
        <div class="check__icon__tag">{{ calculations.total }}</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen; {{calculations.price}}</span>
      </div>
      <div class="check__btn" v-show="calculations.total > 0">
        <router-link :to="{path: `/OrderConfirmation/${shopId}`}">
          去结算
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'

// 获取购物车信息逻辑
const useCartEffect = (shopId) => {
  const store = useStore()
  const { calculations, productList, changeCartItemInfo } = useCommonCartEffect(shopId)

  const changeCartItemChecked = (shopId, productId) => {
    store.commit('changeCartItemChecked', { shopId, productId })
  }

  const cleanCartProducts = (shopId) => {
    store.commit('cleanCartProducts', { shopId })
  }

  const setCartItemsChecked = (shopId) => {
    store.commit('setCartItemsChecked', { shopId })
  }

  return {
    calculations, productList, cleanCartProducts, changeCartItemInfo, changeCartItemChecked, setCartItemsChecked
  }
}

const toggleCartEffect = () => {
  const showCart = ref(false)
  const handleCartShowChange = () => {
    showCart.value = !showCart.value
  }
  return { showCart, handleCartShowChange }
}

export default {
  name: 'CartView',
  setup () {
    const route = useRoute()
    const shopId = route.params.id

    const {
      calculations, productList, setCartItemsChecked,
      cleanCartProducts, changeCartItemInfo, changeCartItemChecked
    } = useCartEffect(shopId)
    const { showCart, handleCartShowChange } = toggleCartEffect()
    return { showCart, calculations, productList, shopId, cleanCartProducts, changeCartItemInfo, changeCartItemChecked, setCartItemsChecked, handleCartShowChange }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.mask {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  top: 0;
  background: rgba(0, 0, 0, .5);
}
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  background: $bgColor;
}
.product {
  overflow-y: scroll;
  flex: 1;
  background: $bgColor;

  &__header {
    display: flex;
    line-height: .52rem;
    border-bottom: .01rem solid $content-bgColor;
    font-size: .14rem;
    color: $content-fontcolor;

    &__icon {
      color: $btn-bgColor;
      margin-right: .1rem;
      font-size: .15rem;
    }

    &__all {
      width: .64rem;
      margin-left: .18rem;
    }

    &__clear {
      flex: 1;
      margin-right: .16rem;
      text-align: right;
      font-size: .14rem;
      color: #333;
    }
  }

  &__item {
    position: relative;
    display: flex;
    padding: .12rem 0;
    margin: 0 .16rem;
    border-bottom: .01rem solid $content-bgColor;

    &__checked{
      margin-right: .2rem;
      color: $btn-bgColor;
      font-size: .2rem;
      line-height: .5rem;
    }

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
      bottom: .26rem;

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
      color: $bgColor;
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
    line-height: .49rem;
    font-size: .14rem;
    background-color: #4FB0F9;
    text-align: center;
    a {
    text-decoration: none;
    color: $bgColor;
    }
  }
}
</style>
