<template>
  <div class="wrapper">
    <StaticPart></StaticPart>
    <NearBy></NearBy>
  </div>
  <DockerView></DockerView>
</template>

<script>
import StaticPart from './StaticPart.vue'
import NearBy from './NearBy.vue'
import DockerView from './DockerView.vue'
export default {
  name: 'HomeView',
  components: { StaticPart, NearBy, DockerView }
}
</script>

<style lang="scss">
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
