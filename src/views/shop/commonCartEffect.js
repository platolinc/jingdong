import { useStore } from 'vuex'
import { toRefs } from 'vue'
// 购物车相关逻辑
export const useCommonCartEffect = () => {
  const store = useStore()
  const { cartList } = toRefs(store.state)// store里的数据vuex会转换成reactive，所以必须用toRefs解构
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
  }
  return { cartList, changeCartItemInfo }
}
