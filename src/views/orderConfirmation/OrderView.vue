<template>
  <div class="order">
    <div class="order__price">实付金额 <b>￥{{ calculations.price }}</b></div>
    <div class="order__btn">提交订单</div>
  </div>
</template>

<script>
import { useRoute } from 'vue-router'
import { useCommonCartEffect } from '../../effects/cartEffects'

export default {
  name: 'OrderView',
  setup () {
    const route = useRoute()
    const shopId = route.params.id
    const { calculations } = useCommonCartEffect(shopId)
    return { calculations }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.order {
  display: flex;
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  height: .49rem;
  line-height: .49rem;
  background: #fff;

  &__price {
    flex: 1;
    text-indent: .24rem;
    font-size: .14rem;
    color: #333333;
  }

  &__btn {
    width: .98rem;
    background: #4FB0F9;
    color: #fff;
    text-align: center;
    font-size: .14rem;
  }
}

</style>
