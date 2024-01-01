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
        prepend-avatar="http://66.42.54.207:8000/images/dashboard.png"
        title="DashBoard"
      ></v-list-item>

      <v-list class="menu">
        <nuxt-link to="/" class="nuxt-link">
          <v-list-item prepend-icon="mdi-home" title="Home"></v-list-item>
        </nuxt-link>

        <v-list-group
          v-for="item in menus"
          :key="item.key"
          :value="item.value"
          class="submenu"
        >
          <template #activator="{ props }">
            <v-list-item
              v-bind="props"
              :title="item.title"
              prepend-icon="mdi-account-circle"
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
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-main class="main-content">
      <v-toolbar density="compact" class="nav-bar">
        <v-app-bar-nav-icon @click.stop="rail = !rail"></v-app-bar-nav-icon>

        <v-spacer></v-spacer>

        <span>Hi, Admin</span>
        <v-btn icon>
          <v-avatar>
            <v-img
              src="http://66.42.54.207:8000/images/admin.png"
              rounded
            ></v-img>
          </v-avatar>
        </v-btn>
        <v-btn icon>
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

.main-content {
  > .nav-bar {
    background-color: $color-white;
  }

  > .container {
    background-color: white;
    height: 100vh;
    padding: 20px;
  }
}

.nuxt-link {
  text-decoration: none;
  color: #000;
}
</style>
