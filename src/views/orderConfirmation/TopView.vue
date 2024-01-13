<template>
  <div class="top">
    <div class="top__header">
      <div class="top__header__back iconfont" @click="handleBackClick">&#xe6db;</div>
      确定订单
    </div>
    <div class="top__receiver">
      <div class="top__receiver__title">收货地址</div>
      <div class="top__receiver__address">合肥工业大学宣城校区五号楼4层</div>
      <div class="top__receiver__info">
        <span class="top__receiver__info__name">林（先生）</span>
        <span class="top__receiver__inf__name">19887542876</span>
      </div>
      <div class="top__receiver__icon iconfont">&#xe6db;</div>
    </div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'

export default {
  name: 'TopView',
  setup () {
    const router = useRouter()
    const handleBackClick = () => { router.back() }
    return { handleBackClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.top {
  position: relative;
  height: 1.96rem;
  background-size: 100% 1.59rem;
  background-image: linear-gradient(0deg, rgba(0, 145, 255, 0.00) 4%, #0091FF 50%);
  background-repeat: no-repeat;

  &__header {
    position: relative;
    padding-top: .2rem;
    line-height: .24rem;
    color: #FFF;
    text-align: center;
    font-size: .16rem;

    &__back {
      position: absolute;
      font-size: .22rem;
      left: .18rem;
    }
  }

  &__receiver {
    position: absolute;
    left: .18rem;
    right: .18rem;
    bottom: 0;
    height: 1.11rem;
    background: #FFF;
    border-radius: .04rem;

    &__title {
      line-height: .22rem;
      padding: .16rem 0 .14rem .16rem;
      font-size: .16rem;
      color: #333;
    }

    &__address {
      line-height: .2rem;
      padding: 0 .4rem 0 .16rem;
      font-size: .14rem;
      color: #333;
    }

    &__info {
      padding: .06rem 0 0 .16rem;

      &__name {
        margin-right: .06rem;
        line-height: .18rem;
        font-size: .12rem;
        color: #666;
      }
    }

    &__icon {
      transform: rotate(180deg);
      position: absolute;
      right: .16rem;
      top: .5rem;
      color: #666;
      font-size: .2rem;
    }
  }
}

</style>
