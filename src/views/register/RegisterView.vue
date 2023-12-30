<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png"/>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入手机号" />
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入密码" type="password"/>
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="确认密码" type="password"/>
    </div>
    <div class="wrapper__register-button">注册</div>
    <div class="wrapper__signup" @click="handleLoginClick">已有账号去登陆</div>
  </div>
</template>

<script>
import { useRouter } from 'vue-router'
export default {
  name: 'RegisterView',
  setup () {
    const router = useRouter() // 通过这个方法获得router的实例
    const handleLoginClick = () => {
      router.push({ name: 'LoginView' })
    }
    return { handleLoginClick }
  }
}
</script>

<style lang="scss" scoped>
@import '../../style/variables.scss';
.wrapper {
  position: absolute;
  top: 50%;
  left: 0;
  right: 0;
  transform: translateY(-50%);
  &__img {
    display: block;
    margin: 0 auto .4rem auto;
    width: .66rem;
    height: .66rem;
  }
  &__input {
    height: .48rem;
    margin: 0 .4rem .16rem .4rem;
    padding: 0 .16rem;
    background: #F9F9F9;
    border: .01rem solid rgba(0,0,0,0.10);
    border-radius: .06rem;
    &__content {
      width: 100%;
      line-height: .48rem;
      outline: none;
      background: none;
      border: none;
      font-size: .16rem;
      color: $content-notice-fontcolor;
      &::placeholder {
        color: $content-notice-fontcolor;
      }
    }
  }
  &__register-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0,144,255,0.32);
    border-radius: .04rem;
    border-radius: .04rem;
    color: #fff;
    font-size: .16rem;
    text-align: center;
  }
  &__signup {
    text-align: center;
    font-size: .14rem;
    color: $content-notice-fontcolor;
  }
}
</style>
