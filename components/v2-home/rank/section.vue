<script lang="ts" setup>
</script>
<template>
  <div class="container">
    <V2HomeRankTopSection />
    <V2HomeRankEventSection />
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
