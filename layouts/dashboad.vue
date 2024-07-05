<script lang="ts" setup>
const drawer = ref(true)
const rail = ref(false)

const router = useRouter()
const logout = () => {
  localStorage.removeItem('accessToken')

  router.push('/user/login')
}

const openHome = () => {
  router.push('/')
}

const gameStore = useGameStore()

onMounted(async () => {
  await gameStore.getListGameDetail()
})

const menuBars = [
  {
    url: '/dashboard',
    text: 'Trang Chủ',
    icon: 'mdi-home',
  },
  {
    url: '/dashboard/player',
    text: 'Quản Lí Người Chơi',
    icon: 'mdi-account-group',
  },
  {
    url: '/dashboard/ctv',
    text: 'Giới Thiệu User',
    icon: 'mdi-account-heart',
  },
  {
    url: '/dashboard/transaction',
    text: 'Giao Dịch',
    icon: 'mdi-cash-marker',
  },
  {
    url: '/dashboard/cash',
    text: 'Lịch Sử Rút Tiền',
    icon: 'mdi-cash-100',
  },
  {
    url: '/dashboard/statistical',
    text: 'Thống Kê',
    icon: 'mdi-finance',
  },
  {
    url: '/dashboard/games',
    text: 'Quản Lí Games',
    icon: 'mdi-gamepad-variant-outline',
  },
  {
    url: '/dashboard/bank-user',
    text: 'Chuyển Khoản',
    icon: 'mdi-bank-transfer',
  },
  {
    url: '/dashboard/games/detail',
    text: 'Chi Tiết Games',
    icon: 'mdi-gamepad-variant',
  },
  {
    url: '/dashboard/maintain',
    text: 'Bảo Trì Hệ Thống',
    icon: 'mdi-wrench-clock',
  },
  {
    url: '/dashboard/bank',
    text: 'Bảo Trì Bank',
    icon: 'mdi-cogs',
  },
  {
    url: '/dashboard/task',
    text: 'Thiết Lập Mã Nhiệm Vụ',
    icon: 'mdi-cog-pause-outline',
  },
]

const header = ref('Trang Chủ')

const switchMenuBar = (title: string) => (header.value = title)
</script>

<template>
  <v-layout class="main-container">
    <v-navigation-drawer
      v-model="drawer"
      :rail="rail"
      permanent
      class="side-bar"
      @click="rail = false"
    >
      <v-list-item
        class="title"
        prepend-avatar="https://api.bapcaitim.club/public/dashboard.png"
        title="DashBoard"
        @click="openHome()"
      ></v-list-item>

      <v-list class="menu">
        <nuxt-link
          v-for="(item, index) in menuBars"
          :key="index"
          :to="item.url"
          class="nuxt-link"
          @click="switchMenuBar(item.text)"
        >
          <v-list-item
            :prepend-icon="item.icon"
            :title="item.text"
          ></v-list-item>
        </nuxt-link>
      </v-list>
    </v-navigation-drawer>
    <v-main class="main-content">
      <v-toolbar density="compact" class="nav-bar">
        <v-app-bar-nav-icon @click.stop="rail = !rail"></v-app-bar-nav-icon>
        <span class="header-dashboard">{{ header }}</span>
        <v-spacer></v-spacer>

        <span>Hi, Admin</span>
        <v-btn icon>
          <v-avatar>
            <v-img
              src="https://api.bapcaitim.club/public/admin.png"
              rounded
            ></v-img>
          </v-avatar>
        </v-btn>
        <v-btn icon @click="logout">
          <v-icon>mdi-logout</v-icon>
        </v-btn>
      </v-toolbar>
      <div class="container">
        <slot></slot>
      </div>
    </v-main>
  </v-layout>
</template>

<style lang="scss" scoped>
.side-bar {
  > .v-navigation-drawer__content > .title {
    padding: 4px 10px;
  }

  // > .v-navigation-drawer__content > .menu > .submenu {
  //   // --parent-padding: -16px;
  // }
}

.header-dashboard {
  font-size: 20px;
  font-weight: 600;
  line-height: 1;
}

.main-content {
  > .nav-bar {
    background-color: $color-white;
  }

  > .container {
    background-color: white;
    padding: 20px;
    min-height: 100vh;
  }
}

.nuxt-link {
  text-decoration: none;
  color: #000;
}
</style>
