<script lang="ts" setup>
definePageMeta({
  layout: false,
})

onMounted(() => {
  localStorage.removeItem('accessToken')
})
const router = useRouter()

const username = ref('')
const password = ref('')

const userStore = useUserStore()
const isLoginSuccess = computed(() => userStore.isLoginSuccess)
const isLoginFail = computed(() => userStore.isLoginFail)
const isLoading = ref(false)

const useApp = useDialogConfirmStore()

const login = async () => {
  isLoading.value = true
  const body = {
    username: username.value,
    password: password.value,
  }
  await userStore.login(body)
  isLoading.value = false
  if (isLoginSuccess.value) {
    const { checkTokenValid, checkUpdateBank } = useAuth()

    if (checkTokenValid()) {
      const isUpdateBank = checkUpdateBank()
      useApp.isOpenMenuBar = false
      if (!isUpdateBank) {
        router.push('/bank-setting')
        return
      }
      router.push('/')
      return
    }
    router.push('/user/login')
    userStore.isLoginSuccess = false
    userStore.isLoginFail = false
  }
  userStore.isLoginFail = false

}
</script>
<template>
  <div class="login-container">
    <div v-if="isLoginFail" class="fail">Đang Nhập Không Thành Công</div>
    <div class="card">
      <a href="/" class="logo">
        <img src="~/assets/images/logo_chanlebank1.png" alt="">
      </a>
      <form @submit.prevent="login" class="form">
        <input v-model="username" class="username" type="text" placeholder="Nickname" required />
        <input v-model="password" class="password" type="password" placeholder="Mật Khẩu" required />
        <v-btn type="submit" class="btn" :loading="isLoading" @click="login">Đăng Nhập</v-btn>
      </form>

      <div class="register">Chưa có tài khoản? <nuxt-link class="link" to="/user/register">Đăng Ký!</nuxt-link></div>
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
