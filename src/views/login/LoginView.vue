<template>
  <div class="wrapper">
    <img class="wrapper__img" src="http://www.dell-lee.com/imgs/vue3/user.png" />
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入用户名" v-model="username" />
    </div>
    <div class="wrapper__input">
      <input class="wrapper__input__content" placeholder="请输入密码" type="password" v-model="password" />
    </div>
    <div class="wrapper__login-button" @click="handleLogin">登录</div>
    <div class="wrapper__signup" @click="handleRegisterClick">立即注册</div>
    <Toast v-if="show" :message="toastMessage" />
  </div>
</template>

<script>
import { reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
import { post } from '../../utils/request'
import Toast, { useToastEffect } from '../../components/ToastView'

// 处理登录相关逻辑
const useLoginEffect = (showToast) => {
  const router = useRouter() // 通过这个方法获得router的实例
  const data = reactive({ username: '', password: '' })

  const handleLogin = async () => {
    try {
      const { username, password } = data
      if (username !== 'lch' || password !== '666') {
        showToast('登陆失败')
        return
      }
      const result = await post('/api/user/login', {
        username: data.username,
        password: data.password
      })
      if (result?.errno === 0) {
        localStorage.isLogin = true
        router.push({ name: 'HomeView' }) // 通过路由实例的push方法跳转页面
      } else {
        showToast('登陆失败')
      }
    } catch (e) {
      showToast('请求失败')
    }
  }
  const { username, password } = toRefs(data)
  return { username, password, handleLogin }
}

// 处理跳转到注册页面
const useRegisterEffect = () => {
  const router = useRouter() // 通过这个方法获得router的实例
  const handleRegisterClick = () => {
    router.push({ name: 'RegisterView' })
  }
  return { handleRegisterClick }
}

export default {
  name: 'LoginView',
  components: { Toast },
  // setup()函数的职责就是告诉你，代码执行的一个流程
  setup () {
    const { show, toastMessage, showToast } = useToastEffect()
    const { username, password, handleLogin } = useLoginEffect(showToast)
    const { handleRegisterClick } = useRegisterEffect()

    return { username, password, handleLogin, handleRegisterClick, show, toastMessage }
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
    border: .01rem solid rgba(0, 0, 0, 0.10);
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

  &__login-button {
    margin: .32rem .4rem .16rem .4rem;
    line-height: .48rem;
    background: #0091FF;
    box-shadow: 0 .04rem .08rem 0 rgba(0, 144, 255, 0.32);
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
