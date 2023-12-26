<script lang="ts" setup>
import { storeToRefs } from 'pinia'
const scrollStore = useScrollStore()
const { tasksSection } = storeToRefs(scrollStore)

onMounted(() => {
  const instance = getCurrentInstance()
  if (instance && instance.refs.tasksSection) {
    tasksSection.value = instance.refs.tasksSection
  }
})
</script>
<template>
  <div class="home-page">
    <MainInformationSection />
    <BodyInformationSection />
    <HistoryWinSection />
    <TasksSection ref="tasksSection" />
    <ConfirmSection />
  </div>
</template>
<style lang="scss" scoped>
.home-page {
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 60px;
}
</style>
