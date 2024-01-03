<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <!-- 最外层有router-link那么循环相关的v-for key都必须写到最外层 -->
    <router-link
      v-for="item in nearbyList"
      :key="item._id"
      :to="`/shop/${item._id}`"
    >
      <ShopInfo :item="item" />
    </router-link>
  </div>
</template>

<script>
import { ref } from 'vue'
import { get } from '../../utils/request'
import ShopInfo from '../../components/ShopInfo'
const useNearbyListEffect = () => {
  const nearbyList = ref([])
  const getNearbyList = async () => {
    const result = await get('/api/shop/hot-list')
    if (result?.errno === 0 && result?.data?.length) {
      nearbyList.value = result.data
    }
  }
  return { nearbyList, getNearbyList }
}

export default {
  name: 'NearBy',
  components: { ShopInfo },
  setup () {
    const { nearbyList, getNearbyList } = useNearbyListEffect()
    getNearbyList()
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.nearby{
  &__title{
    margin: .16rem 0 .02rem 0;
    font-size:.18rem;
    font-weight:normal;
    color:$content-fontcolor;
  }
  a {
    text-decoration: none; //如果包了一个<router-link>，就会在最外层加一个<a>标签，出现下划线。此行解决该问题
  }
}
</style>
