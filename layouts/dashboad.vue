<script lang="ts" setup>
const drawer = ref(true)
const rail = ref(false)

const menus = ref([
  {
    key: 'admin',
    value: 'Admin',
    title: 'Admin',
    icon: 'mdi-account-circle',
    submenu: [
      {
        title: 'Management',
        icon: 'mdi-account-multiple-outline',
        url: '/',
      },
      {
        title: 'Settings',
        icon: 'mdi-cog-outline',
        url: '/',
      },
    ],
  },
])

const router = useRouter()
const logout = () => {
  localStorage.removeItem('accessToken')

  router.push('/login')
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
    url: '/dashboard/games',
    text: 'Quản Lí Games',
    icon: 'mdi-gamepad-variant-outline',
  },
  {
    url: '/dashboard/games/detail',
    text: 'Chi Tiết Games',
    icon: 'mdi-gamepad-variant',
  },
  {
    url: '/dashboard/player',
    text: 'Quản Lí Người Chơi',
    icon: 'mdi-account-group',
  },
  {
    url: '/dashboard/maintain',
    text: 'Bảo Trì',
    icon: 'mdi-wrench-clock',
  },
]

const header = ref('Trang Chủ')

const switchMenuBar = (title: string) => header.value = title

</script>
<template>
  <v-layout class="main-container">
    <v-navigation-drawer v-model="drawer" :rail="rail" permanent class="side-bar" @click="rail = false">
      <v-list-item class="title" prepend-avatar="http://66.42.54.207:8000/images/dashboard.png" title="DashBoard"
        @click="openHome()"></v-list-item>

      <v-list class="menu">
        <nuxt-link v-for="(item, index) in menuBars" :key="index" :to="item.url" class="nuxt-link"
          @click="switchMenuBar(item.text)">
          <v-list-item :prepend-icon="item.icon" :title="item.text"></v-list-item>
        </nuxt-link>
        <!-- <v-list-group
          v-for="item in menus"
          :key="item.key"
          :value="item.value"
          class="submenu"
        >
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="item.title"
              :prepend-icon="item.icon"
              class="header"
            ></v-list-item>
          </template>

          <nuxt-link
            v-for="(submenu, i) in item.submenu"
            :key="i"
            :to="submenu.url"
            class="nuxt-link"
          >
            <v-list-item
              :title="submenu.title"
              :value="`${item.key}/${submenu.title}`"
            ></v-list-item>
          </nuxt-link>
        </v-list-group> -->
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
            <v-img src="http://66.42.54.207:8000/images/admin.png" rounded></v-img>
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
  >.v-navigation-drawer__content>.title {
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
  >.nav-bar {
    background-color: $color-white;
  }

  >.container {
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
