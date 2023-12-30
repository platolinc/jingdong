<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :key="item.icon"
      :class="{'docker__item': true, 'docker__item--active': index===0}"
    >
      <div class="iconfont" v-html="item.icon" />
      <div class="docker__title">首页</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DockerView',
  setup () {
    const dockerList = [
      { icon: '&#xe8cf;', text: '首页' },
      { icon: '&#xe7e5;', text: '购物车' },
      { icon: '&#xe65a;', text: '订单' },
      { icon: '&#xe660;', text: '我的' }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.docker{
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding:0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: .01rem solid $content-bgColor;
  color: $content-fontcolor;
  &__item{
    flex:1;
    text-align: center;
    .iconfont{
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &--active{
      color:#1FA4FC;
    }
  }
  &__title{
    font-size: .2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
