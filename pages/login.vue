<script lang="ts" setup>
definePageMeta({
  layout: false,
})
const router = useRouter()

const username = ref('')
const password = ref('')

const userStore = useUserStore()
const isLoginSuccess = computed(() => userStore.isLoginSuccess)
const isLoginFail = computed(() => userStore.isLoginFail)
const isLoading = ref(false)

const login = async () => {
  isLoading.value = true
  const body = {
    username: username.value,
    password: password.value,
  }
  await userStore.login(body)
  isLoading.value = false
  if (isLoginSuccess.value) {
    router.push('/dashboard')
    userStore.isLoginSuccess = false
    userStore.isLoginFail = false
  }
}
</script>
<template>
  <div class="login-container">
    <div v-if="isLoginSuccess" class="status">Đang Nhập Thành Công</div>
    <div v-if="isLoginFail" class="fail">Đang Nhập Không Thành Công</div>
    <div class="card">
      <h2 class="title">Login</h2>
      <div class="form">
        <input
          v-model="username"
          class="username"
          type="text"
          placeholder="Enter your username"
          required
        />
        <input
          v-model="password"
          class="password"
          type="password"
          placeholder="Enter your password"
          required
        />
        <v-btn class="btn" :loading="isLoading" @click="login">Đang Nhập</v-btn>
      </div>
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
  background-color: #f0f0f0;
  flex-direction: column;
  gap: 16px;

  > .status {
    color: #316100;
    background-color: #dff1cc;
    border-color: #d2ecb8;
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 3px;
    min-width: 400px;
  }

  > .fail {
    color: #6b1110;
    background-color: #f5d2d2;
    border-color: #f1c1c0;
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 3px;
    min-width: 400px;
  }

  > .card {
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
    text-align: center;
    min-width: 400px;
  }
  > .card > .title {
    color: #333;
  }

  > .card > .form {
    display: flex;
    flex-direction: column;
  }

  > .card > .form > .username,
  > .card > .form > .password {
    padding: 10px;
    margin-bottom: 16px;
    border: 1px solid #ccc;
    border-radius: 4px;
    color: $color-black;
  }

  > .card > .form > .btn {
    background-color: $primary-color;
    color: #fff;
    border: none;
    cursor: pointer;
    font-size: 16px;
    transition: background-color 0.3s ease;
  }

  > .card > .form > .btn:hover {
    background-color: #0593b8;
  }
}
</style>
