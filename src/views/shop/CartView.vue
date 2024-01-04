<template>
  <div class="cart">
    <div class="check">
      <div class="check__icon">
        <img
          src="http://www.dell-lee.com/imgs/vue3/basket.png"
          class="check__icon__img"
        />
        <div class="check__icon__tag">1</div>
      </div>
      <div class="check__info">
        总计：<span class="check__info__price">&yen;128</span>
      </div>
      <div class="check__btn">去结算</div>
    </div>
  </div>
</template>

<script>
// import { reactive, toRefs } from 'vue'
// import { useRouter, useRoute } from 'vue-router'
// import { get } from '../../utils/request'
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.cart {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}
.check {
  display: flex;
  box-sizing: border-box;
  line-height: .49rem;
  height: .49rem;
  border-top: .01rem solid $content-bgColor;

  &__icon {
    width: .84rem;
    position: relative;

    &__img {
      display: block;
      width: .28rem;
      height: .26rem;
      margin: .12rem auto
    }

    &__tag {
      position: absolute;
      right: .2rem;
      top: .04rem;
      width: .2rem;
      height: .2rem;
      line-height: .2rem;
      background-color: $highlight-fontcolor;
      border-radius: 50%;
      font-size: .12rem;
      text-align: center;
      color: #FFF;
      transform: scale(.5);
    }
  }

  &__info {
    flex: 1;
    color: $content-fontcolor;
    font-size: .12rem;

    &__price {
      color: $highlight-fontcolor;
      font-size: .18rem;
      line-height: .49rem;
    }
  }

  &__btn {
    width: .98rem;
    color: #FFF;
    font-size: .14rem;
    background-color: #4FB0F9;
    text-align: center;
  }
}
</style>
