<template>
  <div class="docker">
    <div
      v-for="(item, index) in dockerList"
      :key="item.icon"
      :class="{'docker__item': true, 'docker__item--active': index===currentIndex}"
    >
      <router-link :to='item.to'>
        <div class="iconfont" v-html="item.icon" />
        <div class="docker__title">{{item.text}}</div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DockerView',
  props: ['currentIndex'],
  setup () {
    const dockerList = [
      { icon: '&#xe8cf;', text: '首页', to: { name: 'HomeView' } },
      { icon: '&#xe7e5;', text: '购物车', to: { name: 'CartList' } },
      { icon: '&#xe65a;', text: '订单', to: { name: 'OrderList' } },
      { icon: '&#xe660;', text: '我的', to: { name: 'HomeView' } }
    ]
    return { dockerList }
  }
}
</script>

<style lang="scss" scoped>
@import '../style/variables.scss';
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

  &__item{
    flex:1;
    text-align: center;
    a {
    text-decoration: none;
    color: $content-fontcolor;
    }
    .iconfont{
      margin: .07rem 0 .02rem 0;
      font-size: .18rem;
    }
    &--active{
      a {
        color:#1FA4FC;
      }
    }
  }
  &__title{
    font-size: .2rem;
    transform: scale(0.5, 0.5);
    transform-origin: center top;
  }
}
</style>
