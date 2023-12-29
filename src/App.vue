<template>
  <div class="wrapper">
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
  </div>
  <div class="docker">
    <span class="docker__item docker__item--active">
      <div class="iconfont">&#xe8cf;</div>
      <div class="docker__title">首页</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe7e5;</div>
      <div class="docker__title">购物车</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe65a;</div>
      <div class="docker__title">订单</div>
    </span>
    <span class="docker__item">
      <div class="iconfont">&#xe660;</div>
      <div class="docker__title">我的</div>
    </span>
  </div>
</template>

<style lang="scss">
@import './style/variables.scss';
@import './style/mixins.scss';
.wrapper{
  position: absolute;
  left:0;
  top:0;
  bottom: 0.5rem;
  right:0;
  padding:0 .18rem;
}
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
  margin-button: .12rem;
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
.docker{
  display: flex;
  box-sizing: border-box;
  position: absolute;
  padding:0 .18rem;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 0.49rem;
  border-top: .01rem solid white;
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
