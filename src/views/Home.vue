<template>
  <div class="mx-auto h-screen flex items-center">
    <div class="login_box flex border-2 border-black_x shadow-login bg-loginBg max-w-4xl mx-auto py-24 px-12">
      <img src="@/assets/login.svg" alt="login" class="w-2/5">
      <div class="content w-3/5 px-12">
        <img src="@/assets/metaWall.png" alt="MetaWall" class="mx-auto -mt-4">
        <div v-if="!isRegister">
          <p class="text-center text-2xl font-extrabold mb-9">到元宇宙展開全新社交圈</p>
          <form>
            <input type="mail" class="base_input" placeholder="Email" v-model="loginForm.email" @focus="cleanLoginHint()">
            <input type="password" class="base_input" placeholder="Password" v-model="loginForm.password" @focus="cleanLoginHint()">
            <p v-if="hint.isDisable" class="hint_text text-center">
              帳號或密碼錯誤，請重新輸入！
            </p>
            <button v-if="hint.isDisable" class="base_btn disable_btn">登入</button>
            <button v-else class="base_btn bg-blue_x shadow-btn border-black_x" type="button" @click="loginAccount()">登入</button>
          </form>
        </div>
        <div v-else>
          <p class="text-center text-2xl font-extrabold mb-9">註冊</p>
          <form>
            <input type="text" class="base_input" placeholder="暱稱" v-model="registerForm.name" @focus="cleanRegisterHint()">
            <p v-if="hint.errorName" class="hint_text">
              暱稱至少 2 個字元以上
            </p>
            <input type="email" class="base_input" placeholder="Email" v-model="registerForm.email" @focus="cleanRegisterHint()">
            <p v-if="hint.errorMail" class="hint_text">
              帳號已被註冊，請替換新的 Email！
            </p>
            <input type="password" class="base_input" placeholder="Password" v-model="registerForm.password" @focus="cleanRegisterHint()">
            <p v-if="hint.errorPsd" class="hint_text">
              密碼需至少 8 碼以上，並中英混合
            </p>
            <button class="base_btn disable_btn" @click="registerAccount()">註冊</button>
          </form>
        </div>
        <div v-if="!isRegister" class="mt-4 text-center font-semibold cursor-pointer" @click.prevent="isRegister = true; cleanForm()">註冊帳號</div>
        <div v-else class="mt-4 text-center font-semibold cursor-pointer" @click.prevent="isRegister = false; cleanForm()">登入</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      loginForm: {
        email: '',
        password: ''
      },
      registerForm: {
        name: '',
        email: '',
        password: ''
      },
      isRegister: false,
      hint: {
        isDisable: false,
        errorMail: false,
        errorName: false,
        errorPsd: false
      }
    }
  },
  methods: {
    loginAccount () {
      console.log(this.loginForm)
      if (this.loginForm.email === 'hello@mail.com' && this.loginForm.password === 'hello') {
        this.$router.push('/dynamicWall')
        this.loginForm.email = ''
        this.loginForm.password = ''
      } else {
        this.hint.isDisable = true
      }
    },
    registerAccount () {
      console.log(this.registerForm)
      this.hint.errorName = true
      this.hint.errorMail = true
      this.hint.errorPsd = true
    },
    cleanForm () {
      this.loginForm.email = ''
      this.loginForm.password = ''
      this.registerForm.name = ''
      this.registerForm.email = ''
      this.registerForm.password = ''
    },
    cleanLoginHint () {
      this.hint.isDisable = false
    },
    cleanRegisterHint () {
      this.hint.errorName = false
      this.hint.errorMail = false
      this.hint.errorPsd = false
    }
  }
}
</script>

<style lang="postcss">

</style>
