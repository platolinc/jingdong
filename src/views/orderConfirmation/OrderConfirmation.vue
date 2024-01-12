<template>
  <div class="wrapper">
    <TopView></TopView>
    <ProductList></ProductList>
    <OrderView></OrderView>
  </div>
</template>

<script>
import TopView from './TopView.vue'
import ProductList from './ProductList.vue'
import OrderView from './OrderView.vue'

export default {
  name: 'OrderConfirmation',
  components: { TopView, ProductList, OrderView },
  setup () {
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.wrapper {
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #EEE;
  overflow-y: scroll;
}
</style>
