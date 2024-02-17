<script lang="ts" setup>

const route = useRoute()

const maintainStore = useMaintainStore()

const useApp = useDialogConfirmStore()
const isOpenMenuBar = computed(() => useApp.isOpenMenuBar)
const { checkTokenValid, getUserName } = useAuth()
const isAuth = computed(() => checkTokenValid())

onMounted(async () => {
  await maintainStore.getCalenderMaintain()

  if (window.innerWidth > 1200) useApp.isOpenMenuBar = true
})

const isMaintain = computed(() => {
  if (maintainStore.maintain) {
    if (maintainStore.maintain?.status) {
      const startTime = new Date(maintainStore.maintain?.start ?? new Date())
      const endTime = new Date(maintainStore.maintain?.end ?? new Date())
      const currentTime = new Date()

      if (currentTime >= startTime && currentTime <= endTime) {
        return false
      } else {
        return true
      }
    } else {
      return true
    }
  } else {
    return false
  }
})

const MENU_BARS =
  [
    {
      url: '/',
      text: 'Trang Chủ',
      icon: 'mdi-home',
      active: false,
      show: true,
    },
    {
      url: '/bank-setting',
      text: 'Cài Đặt Bank',
      icon: 'mdi-cog-outline',
      active: false,
      show: isAuth.value
    },
    {
      url: '/user/login',
      text: 'Đăng Nhập',
      icon: 'mdi-login-variant',
      active: false,
      show: !isAuth.value
    },
    {
      url: '/user/register',
      text: 'Đăng Kí',
      icon: 'mdi-account-plus-outline',
      active: false,
      show: !isAuth.value
    },
    {
      url: '/user/change-password',
      text: 'Đổi Mật Khẩu',
      icon: 'mdi-key-change',
      active: false,
      show: isAuth.value
    },
    {
      url: '/tele/chanel',
      text: 'Chanel telegram',
      icon: 'mdi-chat-question-outline',
      active: false,
      show: true
    },
    {
      url: '/tele/group',
      text: 'Group telegram',
      icon: 'mdi-account-group',
      active: false,
      show: true
    },
    {
      url: '/user/login',
      text: 'Đăng Xuất',
      icon: 'mdi-logout-variant',
      active: false,
      show: isAuth.value
    },
  ]
const menuBars = ref(MENU_BARS.map(item => {
  return {
    ...item,
    active: item.url === route.path,
  }
}))

const chooseMenu = (index: number) => {
  menuBars.value.forEach((item, i) => {
    if (i === index) {
      item.active = true
    } else {
      item.active = false
    }
  })

  if (window.innerWidth < 1200) useApp.isOpenMenuBar = false
}
const router = useRouter()
const logout = () => {
  localStorage.removeItem('accessToken')

  router.push('/user/login')
}

</script>
<template>
  <div class="default-layout">
    <div class="app-bar-menu">
      <a href="/" class="logo">
        <img src="~/assets/images/logo_chanlebank1.png" alt="">
      </a>
      <v-icon class="icon" icon="mdi-menu" @click="useApp.isOpenMenuBar = !useApp.isOpenMenuBar"></v-icon>
      <div class=" line">
      </div>
    </div>
    <v-layout class="layout">
      <v-navigation-drawer class="navigation-drawer" v-model="isOpenMenuBar" color="#28282d">
        <div class="container-drawer">
          <a href="/" class="logo">
            <img src="~/assets/images/logo_chanlebank1.png" alt="">
          </a>

          <div class="auth" v-if="isAuth">
            <a href="/" class="logo">
              <img src="~/assets/images/CLB_logo.gif" alt="">
            </a>
            <div class="user">
              <span class="hi">Xin chào</span>
              <span class="userid">{{ getUserName() }}</span>
            </div>

            <v-icon class="icon" icon="mdi-logout-variant" @click="logout"></v-icon>
          </div>

          <ul class="menu">
            <li v-for="(item, index) in menuBars" :key="index" class="item" @click="chooseMenu(index)"
              :class="{ 'hidden': !item.show }">
              <nuxt-link :to="item.url" class="link">
                <v-icon :class="{ active: item.active }" class="icon" :icon="item.icon"></v-icon>
                <span :class="{ active: item.active }" class="text">{{ item.text }}</span>
              </nuxt-link>
            </li>
          </ul>
        </div>
      </v-navigation-drawer>
      <v-main class="main-content">
        <div class="container">
          <slot></slot>
        </div>
      </v-main>
    </v-layout>
  </div>
</template>
<style lang="scss" scoped>
.navigation-drawer {
  transform: translate3d(0, 0, 0);
  box-shadow: 0 5px 25px 0 rgba(0, 0, 0, 0.2);
}

.container-drawer {
  >.logo {
    display: flex;
    align-items: center;
    height: 85px;
    min-height: 85px;
    padding: 0 30px;
    background-color: #28282d;
    width: 100%;
    position: relative;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 2px;
      display: block;
      background-image: linear-gradient(90deg, #fe5b09 0%, #fef9a6 100%);
      box-shadow: 0 0 20px 0 rgba(254, 155, 33, 0.5);
      pointer-events: none;
    }
  }

  >.auth {
    padding: 15px 30px;
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  >.auth>.logo {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 40px;
    height: 40px;
    overflow: hidden;
    margin-right: 12px;
  }

  >.auth>.user {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    font-size: 14px;
  }

  >.auth>.icon {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 40px;
    width: 40px;
    border-radius: 8px;
    background-color: rgba(255, 255, 255, 0.05);
    box-shadow: 0 0 20px 0 rgba(0, 0, 0, 0.05);
    margin-left: auto;
  }

  >.menu {
    margin-top: 20px;
    width: 100%;
  }

  >.menu>.item {
    display: flex;
    align-items: center;
    height: 50px;
    min-height: 50px;
    padding: 0 30px;
    background-color: #28282d;
    width: 100%;
    position: relative;
    color: #fff;
    font-size: 16px;
    font-weight: 300;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    justify-content: flex-start;

    &.hidden {
      display: none;
    }
  }

  >.menu>.item>.link>.active {
    color: #fef142;
    background-image: linear-gradient(90deg, #fe5b09 0%, #fef9a6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }

  >.menu>.item>.link {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;
    height: 100%;
    color: #fff;
    text-decoration: none;
    gap: 10px;

    >.icon {
      font-size: 24px;
      margin-right: 10px;
    }
  }

  >.menu>.item:hover>.link>.text,
  >.menu>.item:hover>.link>.icon {
    color: #fef142;
    background-image: linear-gradient(90deg, #fe5b09 0%, #fef9a6 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
}

.app-bar-menu {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  background-color: $primary-color-1;
  position: relative;
  display: none;

  >.logo {
    width: 160px;
  }

  >.icon {
    font-size: 30px;
    color: #fff;
    cursor: pointer;

    &:hover {
      color: #fef142;
      scale: 1.1;
    }
  }

  >.line {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 2px;
    display: block;
    background-image: linear-gradient(90deg, #fe5b09 0%, #fef9a6 100%);
    box-shadow: 0 0 20px 0 rgba(255, 88, 96, 0.5);
    pointer-events: none;
  }
}

.main-content {
  >.container {
    padding: 0 24px 30px 24px;
  }
}

:deep(.v-navigation-drawer__content) {
  color: #fff !important;
}

:deep(.v-navigation-drawer__scrim) {
  display: none !important;
}

@include mediaquery-up(lg) {
  .container-drawer {
    >.logo {
      height: 70px;
      min-height: 70px;
    }
  }

  .app-bar-menu {
    display: flex;
    position: fixed;
    z-index: 10;
    width: 100%;
    margin-bottom: 200px;
  }

  .main-content {
    >.container {
      margin-top: 70px;
      padding: 0 12px;
    }
  }

}
</style>
