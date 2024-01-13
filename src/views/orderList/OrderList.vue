<template>
  <div class="wrapper">
    <div class="title">我的订单</div>
    <div class="orders">
      <div
        class="order"
        v-for="(item, index) in list"
        :key="index"
      >
        <div class="order__title">
          {{ item.shopName }}
          <span class="order__status">
            {{ item.isCanceled ? '已取消' : '已下单' }}
          </span>
        </div>
        <div class="order__content">
          <div class="order__content__imgs">
            <template
              v-for="(innerItem, innerIndex) in item.products"
                :key="innerIndex"
            >
              <img
                class="order__content__img"
                :src="innerItem.product.img"
                v-if="innerIndex <= 3"
              />
            </template>
          </div>
          <div class="order__content__info">
            <div class="order__content__price">￥{{item.totalPrice}}</div>
            <div class="order__content__count">共{{item.totalNum}}件</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <DockerView :currentIndex="2"></DockerView>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { get } from '../../utils/request'
import DockerView from '../../components/DockerView.vue'

// 处理订单列表逻辑
const useOrderListEffect = () => {
  const data = reactive({ list: [] })
  const getNearbyList = async () => {
    const result = await get('/api/order')
    if (result?.errno === 0 && result?.data?.length) {
      const orderList = result.data
      orderList.forEach((order) => {
        const products = order.products || []
        let totalPrice = 0
        let totalNum = 0
        products.forEach((productItem) => {
          totalPrice += ((productItem?.product?.price * productItem?.orderSales) || 0)
          totalNum += (productItem?.orderSales || 0)
        })
        order.totalPrice = totalPrice
        order.totalNum = totalNum
      })
      data.list = result.data
    }
  }
  getNearbyList()
  const { list } = toRefs(data)
  return { list }
}

export default {
  name: 'OrderView',
  components: { DockerView },
  setup () {
    const { list } = useOrderListEffect()
    return { list }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wrapper{
  overflow-y: auto;
  position: absolute;
  left:0;
  top:0;
  bottom: 0.5rem;
  right:0;
  background: rgb(248,248,248);
}
.title {
  line-height: .44rem;
  background: #FFF;
  font-size: .16rem;
  color: #333;
  text-align: center;
}
.orders {

}
.order {
  padding: .16rem;
  margin: .16rem .18rem;
  background: #FFF;

  &__title {
    margin-bottom: .16rem;
    line-height: .22rem;
    font-size: .16rem;
    color: #333;
  }

  &__status {
    float: right;
    color: #999;
    font-size: .14rem;
  }

  &__content {
    display: flex;

    &__imgs {
      flex: 1;
    }

    &__img {
      width: .4rem;
      height: .4rem;
      margin-right: .12rem;
    }

    &__info {
      width: .7rem;
    }

    &__price {
      margin-bottom: .04rem;
      line-height: .2rem;
      font-size: .14rem;
      color:#E93B3B;
      text-align: right;
    }

    &__count {
      font-size: .12rem;
      color: #333;
      text-align: right;
      line-height: .14rem;
    }
  }
}
</style>
