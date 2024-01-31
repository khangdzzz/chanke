<script lang="ts" setup>
import openCart from '@/assets/icons/openCart.svg'

const openCartIcon = ref(openCart)
</script>
<template>
  <v-app-bar
    class="container-header"
    :elevation="0"
    color="#3fb7d5"
    height="70.4"
  >
    <div class="header">
      <img class="icon" :src="openCartIcon" alt="" />
      <a class="label" href="/">clmm.cam</a>
    </div>
    <div class="spacer"></div>
  </v-app-bar>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.container-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
}

.spacer {
  height: 230px;
  background: $primary-color;
  position: absolute;
  z-index: -1;
  width: 100%;
  top: 0;
}

.header {
  display: flex;
  align-items: center;
  background-color: $primary-color;
  height: 70.4px;
  width: 100%;
  width: 1200px;
  margin: 0 auto;
  gap: 5px;
  border-bottom: 1px solid rgba(0, 0, 0, 0.1);
  > .icon {
    width: 31.2px;
    height: 25px;
    margin-bottom: 6px;
  }

  > .label {
    font-size: 1.1rem;
    white-space: nowrap;
    font-weight: 900;
    text-decoration: none;
    color: white;
    letter-spacing: 0;
  }

  @media (max-width: 1280px) {
    width: 960px;
    justify-content: center;
  }

  @media (max-width: 768px) {
    height: 50px;
  }
}
</style>
