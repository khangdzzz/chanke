<script lang="ts" setup>
import removeAccents from 'remove-accents'
definePageMeta({
  layout: false,
})

useHead({
  title: 'Đăng Kí',
})

const router = useRouter()

const username = ref('')
const password = ref('')
const repeatPassword = ref('')

const userStore = useUserStore()
const isRegisterSuccess = computed(() => userStore.isRegisterSuccess)
const isLoading = ref(false)

const registerUser = async () => {
  isLoading.value = true

  const regex = /^[a-zA-Z0-9]+$/
  if (!regex.test(username.value)) {
    warning.value = 'Tên đăng nhập chỉ bao gồm số và chữ'
    isLoading.value = false
    return
  }

  if (!username.value || !password.value || !repeatPassword.value) {
    warning.value = 'Vui lòng nhập đầy đủ thông tin'
    isLoading.value = false
    return
  }

  if (username.value.includes(' ')) {
    warning.value = 'Tên đăng nhập không được chứa khoảng trắng'
    isLoading.value = false
    return
  }

  if (username.value.length > 10 || username.value.length < 6) {
    warning.value = 'Tên đăng nhập không quá 10 kí tự và ít nhất phải 6 kí tự'
    isLoading.value = false
    return
  }

  if (password.value !== repeatPassword.value) {
    warning.value = 'Mật khẩu không khớp'
    isLoading.value = false
    return
  }

  const body = {
    username: username.value,
    password: password.value,
  }
  await userStore.register(body)
  isLoading.value = false

  if (!isRegisterSuccess.value) {
    warning.value = 'Tạo tài khoản thất bại'
    return
  }

  const { checkTokenValid } = useAuth()

  if (checkTokenValid()) {
    router.push('/')
    return
  }
  router.push('/user/login')
}

watch(username, (newValue) => {
  username.value = removeAccents(newValue).toLowerCase()
})

const toLower = () => {
  username.value = username.value.toLowerCase()
}

const warning = ref('')
</script>

<template>
  <div class="login-container">
    <div class="card">
      <a href="/" class="logo">
        <img src="~/assets/images/logo_chanlebank1.png" alt="">
      </a>
      <form @submit.prevent="registerUser" class="form">
        <span class="warning" v-if="warning">{{ warning }}</span>
        <input v-model="username" class="username" type="text" placeholder="Nickname" required
          @input="toLower" />
        <input v-model="password" class="password" type="password" placeholder="Mật Khẩu" required />
        <input v-model="repeatPassword" class="password" type="password" placeholder="Nhập Lại Mật Khẩu" required />
        <v-btn type="submit" class="btn" :loading="isLoading" @click="registerUser">Đăng Ký</v-btn>
      </form>

      <div class="register">Đã có tài khoản? <nuxt-link class="link" to="/user/login">Đăng Nhập!</nuxt-link></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.login-container {
  margin: 0;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: $primary-color-1;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px;

  >.status {
    color: #316100;
    background-color: #dff1cc;
    border-color: #d2ecb8;
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 3px;
    min-width: 400px;
  }

  >.fail {
    color: #6b1110;
    background-color: #f5d2d2;
    border-color: #f1c1c0;
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 3px;
    min-width: 400px;
  }

  >.card {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #28282d;
    box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
    padding: 40px 20px;
    position: relative;
    width: 100%;
    max-width: 440px;
    border-radius: 8px;
    overflow: hidden;
    gap: 20px;
  }

  >.card>.logo {
    width: 220px;
    margin-bottom: 30px;
  }

  >.card>.title {
    color: #333;
  }

  >.card>.form {
    display: flex;
    flex-direction: column;
    gap: 20px;
    width: 80%;
  }

  >.card>.form>.warning {
    color: #f00;
    font-size: 14px;
    text-align: center;
  }

  >.card>.form>.username,
  >.card>.form>.password {
    background-color: #2b2b31;
    border: 1px solid transparent;
    height: 50px;
    position: relative;
    color: #fff;
    font-size: 16px;
    width: 100%;
    border-radius: 8px;
    padding: 0 44px;
  }

  >.card>.form>.btn {
    background: linear-gradient(90deg, #fe5b09 0%, #fef9a6 100%);
    color: #fff;
    font-size: 16px;
    height: 46px;
    border-radius: 8px;
    padding: 0 44px;
  }

  >.card>.register {
    color: #fff;
    font-size: 14px;
    text-align: center;
  }

  >.card>.register>.link {
    color: #fef142;
    cursor: pointer;
  }
}
</style>
