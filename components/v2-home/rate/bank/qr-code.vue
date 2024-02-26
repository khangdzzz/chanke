<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const props = defineProps<{
	logoQrCode: string
}>()

const dialogConfirmStore = useDialogConfirmStore()
const { isVisibleQrCode } = storeToRefs(dialogConfirmStore)

const qrCode = computed(() => props.logoQrCode)


const handleImageLoad = () => {
	isLoading.value = false
}

const isLoading = ref(true)

watch(qrCode, () => {
	isLoading.value = true
})
</script>
<template>
	<v-dialog transition="dialog-top-transition" width="auto" v-model="isVisibleQrCode">
		<v-card>
			<v-btn variant="text" :loading="isLoading">
			</v-btn>
			<img class="mx-auto" height="300" max-width="500" :src="qrCode" @load="handleImageLoad" />
			<h2 class="text-center">Quét mã QR để chuyển tiền</h2>
		</v-card>
	</v-dialog>
</template>

<style lang="scss" scoped>
</style>
