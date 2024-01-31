<script lang="ts" setup>
import openCart from '@/assets/icons/openCart.svg'

const openCartIcon = ref(openCart)
</script>
<template>
  <div class="container-header">
    <div class="header">
      <img class="icon" :src="openCartIcon" alt="" />
      <a class="label" href="/">clmm.cam</a>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-header {
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  background-color: $primary-color;
  > .header {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    margin: 0 auto;
    gap: 5px;
    z-index: 10;
    height: 50px;
    justify-content: center;

    @media (min-width: 1281px) {
      max-width: 1200px;
      height: 70.4px;
      justify-content: flex-start;
    }
  }

  > .header > .icon {
    width: 31.2px;
    height: 25px;
    margin-bottom: 6px;
  }

  > .header > .label {
    font-size: 1.1rem;
    white-space: nowrap;
    font-weight: 900;
    text-decoration: none;
    color: white;
    letter-spacing: 0;
  }
}
</style>
