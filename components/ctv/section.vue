<script lang="ts" setup>
import copy from 'clipboard-copy'
const userStore = useUserStore()
const authUser = computed(() => userStore.authUser)
const { getUserName, getAuthUser } = useAuth()

const userName = ref(authUser.value?.accountName)
const urlIntroduce = ref('')
const isCopyUrlIntro = ref(false)
const totalIntro = ref(0)

onMounted(async () => {
  await userStore.getDetailUser(getUserName())
  userName.value = authUser.value?.username || ''
  urlIntroduce.value = `https://chanlebank.page/user/register/?u=${userName.value}`

  totalIntro.value = authUser?.value?.countIntro || 0
})

const copyUrlIntroduce = () => {
  copy(`https://chanlebank.page/user/register/?u=${userName.value}`)
  isCopyUrlIntro.value = true

  setTimeout(() => {
    isCopyUrlIntro.value = false
  }, 3000)
}

const isAuthUser = computed(() => getUserName())
</script>
<template>
  <div class="container">
    <h3 class="title">
      <v-icon class="icon" icon="mdi-gift-outline"></v-icon>
      GIỚI THIỆU NGƯỜI CHƠI
    </h3>

    <div v-if="!isAuthUser" class="warning">
      ĐỂ LẤY LINK GIỚI THIỆU CTV, VUI LÒNG
      <span>
        <nuxt-link class="login" to="/user/login">ĐĂNG NHẬP</nuxt-link>
      </span>
      HOẶC
      <span>
        <nuxt-link class="register" to="/user/register">
          ĐĂNG KÝ NHANH
        </nuxt-link>
      </span>
    </div>

    <div v-if="isAuthUser" class="body">
      <h3 class="title">LINK GIỚI THIỆU CỦA BẠN:</h3>
      <div class="link">
        <v-icon class="icon" icon="mdi-google-chrome"></v-icon>
        <span class="content">{{ urlIntroduce }}</span>
        <v-icon
          v-if="!isCopyUrlIntro"
          class="copy"
          icon="mdi-content-copy"
          @click="copyUrlIntroduce"
        ></v-icon>
        <v-icon v-if="isCopyUrlIntro" class="copy" icon="mdi-check"></v-icon>
      </div>

      <div class="week-intro">SỐ LƯỢT GIỚI THIỆU : {{ totalIntro }}</div>
    </div>

    <div v-if="isAuthUser" class="content-note">
      <h3 class="note">Quyền lợi người giới thiệu:</h3>
      <ul class="text">
        <li>+ User B đăng ký theo link giới thiệu của user A</li>
        <li>
          + A sẽ dc hưởng 1% tổng tiền thắng trong 1 tháng của B và 5% tổng tiền
          thua trong 1 tháng của B
        </li>
      </ul>

      <h3 class="note marked">Lưu ý:</h3>
      <ul class="text">
        <li>
          + TÀI KHOẢN BANK CỦA BẠN TỰ ĐỘNG Ở CHẾ ĐỘ BẢO VỆ SAU LẦN TRẢ THƯỞNG
          THÀNH CÔNG ĐẦU TIÊN.
        </li>
      </ul>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: block;
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);

  > .title {
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

    > .icon {
      -webkit-text-fill-color: #fe5b09;
    }
  }

  > .body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 20px 0;

    > .title {
      font-weight: 400;
      font-size: 17px;
    }

    > .link {
      display: flex;
      gap: 5px;
      font-size: 12.5px;
      font-weight: 400;
      margin-top: 20px;

      > .content {
        font-size: 12.5px;
        color: #fff;
        background-color: rgba(254, 88, 8, 0.1);
        white-space: nowrap;
        border-radius: 4px;
      }

      > .copy {
        color: #fe5808;
        cursor: pointer;
      }
    }

    > .week-intro {
      margin-top: 20px;
    }
  }

  > .content-note {
    padding: 20px;

    > .note {
      font-size: 15px;
    }

    > .text {
      font-size: 14px;
    }

    > .marked {
      margin-top: 20px;
    }
  }
}

.warning {
  padding: 10px 15px;

  .register {
    color: #f5c221;
  }

  .login {
    color: #f5c221;
  }
}
</style>
