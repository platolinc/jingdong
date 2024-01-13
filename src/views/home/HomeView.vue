<template>
  <div class="wrapper">
    <StaticPart></StaticPart>
    <NearBy></NearBy>
  </div>
  <DockerView :currentIndex="0"></DockerView>
</template>

<script>
import StaticPart from './StaticPart.vue'
import NearBy from './NearBy.vue'
import DockerView from '../../components/DockerView.vue'
export default {
  name: 'HomeView',
  components: { StaticPart, NearBy, DockerView }
}
</script>

<style lang="scss" scoped>
.wrapper{
  overflow-y: auto;
  position: absolute;
  left:0;
  top:0;
  bottom: 0.5rem;
  right:0;
  padding:0 .18rem;
}
</style>
