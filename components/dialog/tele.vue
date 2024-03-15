<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const dialogConfirmStore = useDialogConfirmStore()
const { isShowTeleport } = storeToRefs(dialogConfirmStore)

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <div class="text-center">
    <v-dialog v-if="isMounted" v-model="isShowTeleport" activator="parent" width="auto">
      <TelegramSection />
    </v-dialog>
  </div>
</template>

<style lang="scss" scoped></style>
