<template>
  <div class="position">
      <span class="iconfont position__icon">&#xe619;</span>
      合肥工业大学宣城校区五号楼4层
      <span class="iconfont position__notice">&#xe69f;</span>
    </div>
    <div class="search">
      <span class="iconfont">&#xe741;</span>
      <span class="search__text">山姆会员商店优惠商品</span>
    </div>
    <div class="banner">
      <img
        class="banner__image"
        src="http://www.dell-lee.com/imgs/vue3/banner.jpg"
      />
    </div>
    <div class="icons">
      <div
        class="icons__item"
        v-for="item in iconList"
        :key="item.desc"
      >
        <img class="icons__item__img" :src="item.src" />
        <p class="icons__item__desc">{{item.desc}}</p>
      </div>
    </div>
  <div class="gap"></div>
</template>

<script>
export default {
  name: 'StaticPart',
  setup () {
    const iconList = [{
      src: 'http://www.dell-lee.com/imgs/vue3/超市.png',
      desc: '超市便利'
    }, {
      src: 'http://www.dell-lee.com/imgs/vue3/菜市场.png',
      desc: '菜市场'
    }, {
      src: 'http://www.dell-lee.com/imgs/vue3/水果店.png',
      desc: '水果店'
    }, {
      src: 'http://www.dell-lee.com/imgs/vue3/鲜花.png',
      desc: '鲜花绿植'
    }, {
      src: 'http://www.dell-lee.com/imgs/vue3/医药健康.png',
      desc: '医药健康'
    }, {
      src: 'http://www.dell-lee.com/imgs/vue3/家居.png',
      desc: '家居时尚'
    }, {
      src: 'http://www.dell-lee.com/imgs/vue3/蛋糕.png',
      desc: '烘培蛋糕'
    }, {
      src: 'http://www.dell-lee.com/imgs/vue3/签到.png',
      desc: '签到'
    }, {
      src: 'http://www.dell-lee.com/imgs/vue3/大牌免运.png',
      desc: '大牌免运'
    }, {
      src: 'http://www.dell-lee.com/imgs/vue3/红包.png',
      desc: '红包套餐'
    }]
    return { iconList }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
@import '../../style/mixins.scss';
.position{
  position: relative;
  padding: .16rem .24rem .16rem 0;
  line-height:.22rem;
  font-size:.16rem;
  color: $content-fontcolor;
  @include ellipsis;
  .position__icon{
    position:relative;
    top:.02rem;
    font-size:.18rem;
  }
  .position__notice{
    position:absolute;
    top:.17rem;
    right:0;
    font-size:.2rem;
  }
}
.search{
  margin-bottom: .12rem;
  line-height:.29rem;
  background: #F5F5F5;
  color: #B7B7B7;
  border-radius: .16rem;
  font-size: .14rem;
  .iconfont{
    position: relative;
    top:.03rem;
    padding: 0 .08rem 0 .16rem;
    display: inline-block;
    font-size:.18rem;
  }
  &__text{
    display:inline-block;
    font-size:.14rem;
  }
}
.banner{
  height: 0;                //区域高度是零
  overflow: hidden;        //超出区域的不展示
  padding-bottom: 25.4%;  //区域宽度的25.4%也就是算出来的图片高宽比
  &__image{
    width: 100%;
  }
}
.icons{
  display:flex;
  flex-wrap: wrap;
  margin-top: .16rem;
  &__item{
    width: 20%;
    &__img{
      display: block;
      width: .4rem;
      height: .4rem;
      margin: 0 auto;
    }
    &__desc{
      margin: .06rem 0 .16rem 0;
      text-align: center;
      color: $content-fontcolor;
    }
  }
}
.gap {
  margin: 0 -0.18rem;
  height: .1rem;
  background: $content-bgColor;
}
</style>
