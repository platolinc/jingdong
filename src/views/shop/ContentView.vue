<template>
  <div class="content">
    <div class="category">
      <div
        :class="{ 'category__item': true, 'category__item--active': currentTab === item.tab }"
        v-for="item in categories"
        :key="item.name"
        @click="() => handleTabClick(item.tab)"
      >
        {{ item.name }}
      </div>
      <div class="category__item">秒杀</div>
      <div class="category__item">新鲜水果</div>
      <div class="category__item">休闲食品</div>
      <div class="category__item">时令蔬菜</div>
      <div class="category__item">肉蛋家禽</div>
      <div class="category__item">烘培蛋糕</div>
      <div class="category__item">电脑数码</div>
      <div class="category__item">新鲜花束</div>
      <div class="category__item">母婴</div>
      <div class="category__item">买药</div>
      <div class="category__item">手机通讯</div>
    </div>
    <div class="product">
      <div
        class="product__item"
        v-for="item in list"
        :key="item._id"
      >
        <img class="product__item__img" :src="item.imgUrl" />
        <div class="product__item__detail">
          <h4 class="product__item__title">{{ item.name }}</h4>
          <p class="product__item__sales">月售  {{item.sales}} 件</p>
          <p class="product__item__price">
            <span class="product__item__yen">&yen;</span>{{ item.price }}
            <span class="product__item__origin">&yen;{{ item.oldPrice }}</span>
          </p>
        </div>
        <div class="product__number">
          <span
            class="product__number__minus"
            @click="() => { changeCartItem(shopId, item._id, item, -1, shopName ) }"
          >-</span>
            {{ cartList?.[shopId]?.productList?.[item._id]?.count || 0 }}
          <span
            class="product__number__plus"
            @click="() => { changeCartItem(shopId, item._id, item, 1, shopName ) }"
          >+</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { reactive, ref, toRefs, watchEffect } from 'vue'
import { useRoute } from 'vue-router'
import { useStore } from 'vuex'
import { get } from '../../utils/request'
import { useCommonCartEffect } from '../../effects/cartEffects'

const categories = [
  { name: '全部商品', tab: 'all' },
  { name: '秒杀', tab: 'seckill' },
  { name: '新鲜水果', tab: 'fruit' }
]

// 与tab切换相关的逻辑
const useTabEffect = () => {
  const currentTab = ref(categories[0].tab)
  const handleTabClick = (tab) => {
    currentTab.value = tab
  }
  return { currentTab, handleTabClick }
}

// 与列表内容相关的逻辑
const useCurrentListEffect = (currentTab, shopId) => {
  const content = reactive({ list: [] })
  // 获取列表内容
  const getContentData = async (tab) => {
    const result = await get(`/api/shop/${shopId}/products`, { tab: currentTab.value })
    if (result?.errno === 0 && result?.data?.length) {
      content.list = result.data
    }
  }

  watchEffect(() => {
    getContentData()
  })
  const { list } = toRefs(content)
  return { list }
}

// 和购物车相关的逻辑
const useCartEffect = () => {
  const store = useStore()
  const { changeCartItemInfo, cartList } = useCommonCartEffect()
  const changeShopName = (shopId, shopName) => {
    store.commit('changeShopName', { shopId, shopName })
  }

  const changeCartItem = (shopId, productId, item, num, shopName) => {
    changeCartItemInfo(shopId, productId, item, num)
    changeShopName(shopId, shopName)
  }

  return { cartList, changeCartItem }
}

export default {
  name: 'ContentView',
  props: ['shopName'],
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { currentTab, handleTabClick } = useTabEffect()
    const { list } = useCurrentListEffect(currentTab, shopId)
    const { cartList, changeCartItem } = useCartEffect()

    return { list, currentTab, categories, cartList, changeCartItem, handleTabClick, shopId }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.content {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  top: 1.5rem;
  bottom: .5rem;
}
.category {
  overflow-y: scroll;
  width: .76rem;
  background: $search-bgColor;
  height: 100%;

  &__item {
    line-height: .4rem;
    text-align: center;
    font-size: .14rem;
    color: $content-fontcolor;

    &--active {
      background: $bgColor;
    }
  }
}
.product {
  overflow-y: scroll;
  flex: 1;

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
      width: .68rem;
      height: .68rem;
      margin-right: .16rem;
    }

    &__title {
      line-height: .2rem;
      font-size: .14rem;
      margin: 0;
      color: $content-fontcolor;
      @include ellipsis;
    }

    &__sales {
      margin: .06rem 0;
      font-size: .12rem;
      color: $content-fontcolor;
    }

    &__price {
      margin: 0;
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
</style>
