<script lang="ts" setup>
definePageMeta({
	middleware: 'auth',
	layout: 'dashboad',
})

const taskStore = useTaskStore()
const codeTask = ref('')
const snackbar = ref(false)

onMounted(async () => {
	await taskStore.getTask()

	codeTask.value = taskStore.task?.code ?? ''
})

const isUpdated = computed(() => taskStore.isCreateOrUpdate)

const notification = computed(() => taskStore.isCreateOrUpdate ? 'Cập nhật nhiệm vụ thành công' : 'Cập nhật nhiệm vụ thất bại')

const updateTask = async () => {
	await taskStore.createTask(codeTask.value)
	snackbar.value = true
}
</script>
<template>
	<div class="setup-task">
		<input class="code-task" type="text" placeholder="Vui lòng nhập mã nhiệm vụ" v-model="codeTask" />
		<v-btn class="btn-task" color="primary" @click="updateTask">Cập nhật</v-btn>
	</div>
	<v-snackbar v-model="snackbar" :timeout="1000" rounded="pill" location="top" :color="isUpdated ? 'success' : 'red'"
		elevation="24" transition="fade-transition">
		<div style="width: 100%; text-align: center;">
			{{ notification }}
		</div>
	</v-snackbar>
</template>
<style lang="scss" scoped>
.setup-task {
	display: flex;
	align-items: center;
	height: 100%;
	color: #000;

	>.code-task {
		width: 300px;
		height: 40px;
		border: 1px solid #ccc;
		border-radius: 5px;
		padding: 0 10px;
	}

	>.btn-task {
		margin-left: 10px;
	}
}
</style>
