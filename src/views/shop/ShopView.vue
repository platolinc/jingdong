<template>
  <div class="wrapper">
    <div class="search">
      <div
        class="search__back iconfont"
        @click="handleBackClick"
      >&#xe6db;</div>
      <div class="search__content">
        <span class="search__content__icon iconfont">&#xe741;</span>
        <input class="search__content__input" placeholder="请输入商品名称搜索" />
      </div>
    </div>
    <ShopInfo
      :item="item"
      :hideBorder="true"
      v-show="item.imgUrl"
    />
    <ContentView :shopName="item.name"/>
    <CartView />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
import ContentView from './ContentView.vue'
import CartView from './CartView.vue'
// 获取当前商铺信息
const useShopInfoEffect = () => {
  const route = useRoute()
  const data = reactive({ item: {} })
  const getItemData = async () => {
    const result = await get(`/api/shop/${route.params.id}`)
    if (result?.errno === 0 && result?.data) {
      data.item = result.data
    }
  }
  const { item } = toRefs(data)
  return { item, getItemData }
}

// 点击回退的逻辑
const useBackRouterEffect = () => {
  const router = useRouter()
  const handleBackClick = () => {
    router.back()
  }
  return handleBackClick
}

export default {
  name: 'ShopView',
  components: { ShopInfo, ContentView, CartView },
  setup () {
    const { item, getItemData } = useShopInfoEffect()
    const handleBackClick = useBackRouterEffect()
    getItemData()
    return { item, handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wrapper {
  padding: 0 .18rem;
}
.search {
  margin: .14rem 0 .04rem 0;
  line-height: .32rem;
  display: flex;
  &__back {
    width: .3rem;
    font-size: .24rem;
    color: #B6B6B6;
  }
  &__content {
    display: flex;
    flex: 1;
    border-radius: .16rem;
    background: $search-bgColor;
    &__icon {
      font-size: .20rem;
      width: .44rem;
      text-align: center;
      color: $search-fontColor;
    }
    &__input {
      padding-right:.2rem;
      width: 100%;
      border: none;
      outline: none;
      background: none;
      height: .32rem;
      font-size: .14rem;
      color: $content-fontcolor;
      &::placeholder {
        color: $content-fontcolor;
      }
    }
  }
}
</style>
