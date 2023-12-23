<script lang="ts" setup></script>
<template>
  <div class="main-container">
    <HeaderSection />
    <div class="spacer-background">
      <div class="content">
        <slot />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.spacer-background {
  height: 230px;
  background: $primary-color;
  width: 100%;
  position: relative;
  z-index: 1;

  > .content {
    width: 100%;
    max-width: 564px;
    margin: 0 auto;
    position: absolute;
    top: 50px;
    left: 0;
    right: 0;
    padding: 0 16px;
    @media (min-width: 769px) {
      max-width: 660px;
      padding: 0;
    }
    @media (min-width: 981px) {
      max-width: 960px;
      padding: 0;
    }
    @media (min-width: 1281px) {
      max-width: 1200px;
      top: 70.4px;
      padding: 0;
    }
  }
}
</style>
