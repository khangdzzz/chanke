<script lang="ts" setup>
definePageMeta({
  middleware: 'auth',
})

useHead({
  title: 'Đổi Mật Khẩu',
})

const notification = ref('')
const snackbar = ref(false)
const oldPassword = ref('')
const newPassword = ref('')
const confirmPassword = ref('')

const userStore = useUserStore()

const { getUserName } = useAuth()

const isUpdatePass = computed(() => userStore.isUpdatePassword)

const updatePassWord = async () => {
  if (oldPassword.value === '' || newPassword.value === '' || confirmPassword.value === '') {
    notification.value = 'Vui lòng nhập đầy đủ thông tin'
    snackbar.value = true
    return
  }

  if (newPassword.value !== confirmPassword.value) {
    notification.value = 'Mật khẩu không trùng khớp'
    snackbar.value = true
    return
  }

  if (newPassword.value.length < 6) {
    notification.value = 'Mật khẩu phải có ít nhất 6 ký tự'
    snackbar.value = true
    return
  }

  const username = getUserName()

  const body = {
    username,
    password: oldPassword.value,
    newPassword: newPassword.value
  }

  await userStore.updatePassword(body)

  if (isUpdatePass.value) {
    notification.value = 'Cập Nhật Mật Khẩu Thành Công'
    snackbar.value = true
  } else {
    notification.value = 'Cập Nhật Mật Khẩu Thất Bại'
    snackbar.value = true
  }
}


</script>

<template>
  <div class="container">
    <h3 class="title">
      <v-icon class="icon" icon="mdi-wrench-cog-outline"></v-icon>
      Đổi Mật Khẩu
    </h3>

    <form class="action-change">
      <v-snackbar v-model="snackbar" :timeout="1000" rounded="pill" location="top"
        :color="isUpdatePass ? 'success' : 'red'" elevation="24" transition="fade-transition">
        <div style="width: 100%; text-align: center;">
          {{ notification }}
        </div>
      </v-snackbar>

      <div class="input-text">
        <v-text-field v-model="oldPassword" type="password" class="text" placeholder="Nhập Mật Khẩu Cũ"></v-text-field>
      </div>

      <div class="input-text">
        <v-text-field v-model="newPassword" type="password" class="text" placeholder="Nhập Mật Khẩu Mới"></v-text-field>
      </div>

      <div class="input-text">
        <v-text-field v-model="confirmPassword" type="password" class="text"
          placeholder="Nhập Lại Mật Khẩu Mới"></v-text-field>
      </div>

      <v-btn class="submit" @click="updatePassWord">Cập Nhật</v-btn>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.container {
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-top: 25px;
  padding-bottom: 50px;
  height: calc(100vh - 100px);

  >.title {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    width: auto;
    color: #fef142;
    font-weight: 500;
    font-size: 18px;
    line-height: 100%;
    margin-bottom: 0;
    background-image: linear-gradient(90deg, #fe5b09 0%, #fef9a6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    padding: 20px;
    gap: 10px;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);

    >.icon {
      -webkit-text-fill-color: #fe5b09;
    }
  }

  >.confirm {
    display: flex;
    padding: 20px;
    justify-content: center;
    font-size: 16px;
  }
}


.action-change {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #28282d;
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
  padding: 40px 20px;
  width: 100%;
  max-width: 440px;
  border-radius: 8px;
  overflow: hidden;
  margin: auto;
  margin-top: 40px;

  >.input-text {
    width: 100%;
    margin-bottom: 20px;

    >.text {
      width: 100%;
      background: #1e1e23;
      border-radius: 8px;
      color: #fff;
      font-size: 16px;
      line-height: 100%;
      padding: 15px 20px;
      border: 1px solid #1e1e23;
      transition: all 0.3s ease;
      box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);

      &:focus {
        border-color: #fbb034;
      }
    }
  }

  >.submit {
    color: #fff;
    background: linear-gradient(to bottom right, #f1d313 0%, #fbb034 100%);
    border-color: #fbb034;
  }
}

@include mediaquery-up(lg) {
  .bank-setting {
    padding: 25px 0 20px;
  }

  .setting {
    margin-top: 0;
  }
}
</style>
