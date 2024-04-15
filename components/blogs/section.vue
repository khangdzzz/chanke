<script lang="ts" setup>
defineProps<{
	title: string;
	excerpt?: string;
	image?: string;
	slug?: string;
}>();
</script>

<template>
	<div class="blog-container">
		<img class="image" :src="image" alt="">
		<div class="content">
			<h3 class="title" v-html="title"></h3>
			<p class="text" v-html=excerpt></p>
			<NuxtLink class="link" v-if="slug" :to="`post/${slug}`">Xem Thêm
			</NuxtLink>
		</div>
	</div>
</template>
<style lang="scss" scoped>
.blog-container {
	background-color: #322a2a;
	margin-bottom: 15px;
	border-radius: 5px;
	padding: 15px;
	display: flex;
	gap: 30px;
	box-shadow: 0 0 25px 0 rgb(0 0 0 / 20%);
	transition: all .5s ease-in-out;

	>.image {
		min-width: 150px;
		max-width: 150px;
		height: 155px;
		-o-object-fit: fill;
		object-fit: fill;
		border-radius: 3px;
	}

	>.content {
		display: flex;
		flex-direction: column;
		gap: 10px;

		>.link {
			color: white;
		}
	}

}
</style>
