<template>
  <div class="nearby">
    <h3 class="nearby__title">附近店铺</h3>
    <div
      class="nearby__item"
      v-for="item in nearbyList"
      :key="item.title"
    >
      <img :src="item.imgUrl" class="nearby__item__img" />
      <div class="nearby__content">
        <div class="nearby__content__title">{{item.title}}</div>
        <div class="nearby__content__tags">
          <span
            class="nearby__content__tag"
            v-for="(innerItem,innerIndex) in item.tags"
            :key="innerIndex"
          >{{ innerItem }}</span>
        </div>
        <p class="nearby__content__highlight">{{ item.desc }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'NearBy',
  setup () {
    const nearbyList = [{
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '沃尔玛',
      tags: ['月售2万+', '起送￥15', '基础运费￥5'],
      desc: 'VIP尊享满89元减4元运费券（每月三张）'
    }, {
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '永辉超市',
      tags: ['月售1万+', '起送￥12', '基础运费￥5'],
      desc: '会员客户尊享满200八折券'
    }, {
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '金鼎',
      tags: ['月售8997', '起送￥12', '基础运费￥5'],
      desc: 'VIP尊享满89元减4元运费券'
    }, {
      imgUrl: 'http://www.dell-lee.com/imgs/vue3/near.png',
      title: '豪客来',
      tags: ['月售3459', '起送￥11', '基础运费￥5'],
      desc: '双十一下单立减99'
    }]
    return { nearbyList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.nearby{
  &__title{
    margin: .16rem 0 .02rem 0;
    font-size:.18rem;
    font-weight:normal;
    color:$content-fontcolor;
  }
  &__item{
    display:flex;
    padding-top: .12rem;
    &__img{
      margin-right: .16rem;
      width: .56rem;
      height: .56rem;
    }
  }
  &__content{
    flex:1;
    padding-bottom: .12rem;
    border-bottom: .01rem solid $content-bgColor;
    &__title{
      line-height: .22rem;
      font-size: .16rem;
      color:$content-fontcolor;
    }
    &__tags{
      margin-top: .08rem;
      line-height: .18rem;
      font-size: .13rem;
      color:$content-fontcolor;
    }
    &__tag{
      margin-right: .16rem;
    }
    &__highlight{
      line-height: .18rem;
      font-size: .13rem;
      color: #E93B3B;
      margin: .08rem 0 0 0;
    }
  }
}
</style>
