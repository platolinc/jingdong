<template>
  <div class="wrapper">
    <div class="title">我的购物车</div>
    <div class="orders">
    </div>
  </div>
  <DockerView :currentIndex="1"></DockerView>
</template>

<script>
import DockerView from '../../components/DockerView.vue'
export default {
  name: 'CartList',
  components: { DockerView },
  setup () {

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
  padding: .16rem;
  margin: .16rem .18rem;
  background: #FFF;
}
</style>
