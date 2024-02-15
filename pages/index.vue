<script lang="ts" setup>

</script>
<template>
  <div class="home-page">
    <V2HomeGamesSection />
    <V2HomeRateSection />
    <V2HomeHistorySection />
    <V2HomeHistoryJoinSection />
    <V2HomeRankSection />
    <V2HomeRoleSection />
    <V2HomeDefineSection />
  </div>
</template>
<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

@include mediaquery-up(lg) {
  .home-page {
    padding: 25px 0 40px;
  }
}
</style>
