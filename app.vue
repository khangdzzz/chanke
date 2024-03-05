<script lang="ts" setup>
useHead({
  titleTemplate: (titleChunk) => {
    return titleChunk ? `${titleChunk} - Chẵn Lẻ Bank` : 'Chẵn Lẻ Bank';
  }
})
</script>

<template>
  <Suspense>
    <template #default>
      <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
      </NuxtLayout>
    </template>

    <template #fallback>
      <div class="overlay-loader">
        <v-progress-circular color="primary" indeterminate class="loading -circular" />
      </div>
    </template>
  </Suspense>
</template>

<style lang="scss" scoped>
.overlay-loader {
  display: flex;
  flex-direction: column;
  position: fixed;
  z-index: 100;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  >.loading {
    width: 50px;
    height: 50px;
  }
}
</style>
