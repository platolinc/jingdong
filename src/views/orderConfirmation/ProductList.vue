<template>
  <div class="products">
    <div class="products__title">
      {{ shopName }}
    </div>
    <div class="products__wrapper">
      <div class="products__list">
        <template v-for="item in productList" :key="item._id">
          <div class="products__item" v-if="item.count > 0">
            <img class="products__item__img" :src="item.imgUrl" />
            <div class="products__item__detail">
              <h4 class="products__item__title">{{ item.name }}</h4>
              <p class="products__item__price">
                <span>
                  <span class="products__item__yen">&yen;</span>
                  {{ item.price }} × {{ item.count }}
                </span>
                <span class="products__item__totalprice">
                  <span class="products__item__yen">&yen;</span>
                  {{ (item.price * item.count).toFixed(2) }}
                </span>
              </p>
            </div>
          </div>
        </template>
      </div>
    </div>
  </div>
</template>

<script>
import { useCommonCartEffect } from '../../effects/cartEffects'
import { useRoute } from 'vue-router'

export default {
  name: 'ProductList',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { shopName, productList } = useCommonCartEffect(shopId)
    return { shopName, productList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.products {
  margin: .16rem .18rem .1rem .18rem;
  background: #FFF;

  &__title {
    padding: .16rem;
    font-size: .16rem;
    color: #333;
  }

  &__wrapper {
    overflow-y: scroll;
    position: absolute;
    top: 2.61rem;
    left: 0;
    right: 0;
    bottom: .6rem;
    margin: 0 .18rem;
  }

  &__list {
    background: #FFF;
  }

  &__item {
    position: relative;
    display: flex;
    padding: 0 .16rem .16rem .16rem;

    &__img {
      width: .46rem;
      height: .46rem;
      margin-right: .16rem;
    }

    &__detail {
      flex: 1;
    }
    &__title {
      line-height: .2rem;
      font-size: .14rem;
      margin: 0;
      color: $content-fontcolor;
      @include ellipsis;
    }

    &__price {
      display: flex;
      margin: .06rem 0 0 0;
      line-height: .2rem;
      font-size: .14rem;
      color: $highlight-fontcolor;
    }

    &__totalprice {
      flex: 1;
      text-align: right;
      color: #000;
    }
    &__yen {
      font-size: .12rem;
    }
  }
}
</style>
