<script lang="ts" setup>
</script>
<template>
  <div class="container">
    <V2HomeRateGameSection />
    <V2HomeRateBankSection />
  </div>
</template>

<style lang="scss" scoped>
.container {
  display: flex;
  gap: 20px;
}

@include mediaquery-up(lg) {
  .container {
    flex-direction: column;
  }
}
</style>
