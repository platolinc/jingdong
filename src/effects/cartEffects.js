import { computed } from 'vue'
import { useStore } from 'vuex'

// 购物车相关逻辑
export const useCommonCartEffect = (shopId) => {
  const store = useStore()
  const cartList = store.state.cartList
  const changeCartItemInfo = (shopId, productId, productInfo, num) => {
    store.commit('changeCartItemInfo', { shopId, productId, productInfo, num })
  }

  const productList = computed(() => {
    const productList = cartList[shopId]?.productList || {}
    const notEmptyProductList = {}
    for (const i in productList) {
      const product = productList[i]
      if (product.count > 0) {
        notEmptyProductList[i] = product
      }
    }
    return notEmptyProductList
  })

  const shopName = computed(() => {
    const shopName = cartList[shopId]?.shopName || ''
    return shopName
  })

  const calculations = computed(() => {
    const productList = cartList[shopId]?.productList
    let total = 0
    let price = 0
    let allChecked = true
    if (productList) {
      for (const i in productList) {
        const product = productList[i]
        total += product.count
        if (product.check) {
          price += product.count * product.price
        }
        if (product.count > 0 && !product.check) {
          allChecked = false
        }
      }
    }
    return { total, price: price.toFixed(2), allChecked }
  })

  return { calculations, changeCartItemInfo, productList, cartList, shopName }
}
