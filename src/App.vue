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
    <div class="icons">
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/超市.png" />
        <p class="icons__item__desc">超市便利</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/菜市场.png" />
        <p class="icons__item__desc">菜市场</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/水果店.png" />
        <p class="icons__item__desc">水果店</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/鲜花.png" />
        <p class="icons__item__desc">鲜花绿植</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/医药健康.png" />
        <p class="icons__item__desc">医药健康</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/家居.png" />
        <p class="icons__item__desc">家居时尚</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/蛋糕.png" />
        <p class="icons__item__desc">烘焙蛋糕</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/签到.png" />
        <p class="icons__item__desc">签到</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/大牌免运.png" />
        <p class="icons__item__desc">大牌免运</p>
      </div>
      <div class="icons__item">
        <img class="icons__item__img" src="http://www.dell-lee.com/imgs/vue3/红包.png" />
        <p class="icons__item__desc">红包套餐</p>
      </div>
    </div>
    <div class="gap"></div>
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
