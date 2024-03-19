<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const channel = 'https://t.me/chanlebankpagenews';
const chat = 'https://t.me/chanlebankpage';

const dialogConfirmStore = useDialogConfirmStore()
const { isShowTeleport } = storeToRefs(dialogConfirmStore)

const joinTelegram = (url: string) => {
	window.open(url, '_blank');
};

const closeDialog = () => {
	isShowTeleport.value = false;
};
</script>

<template>
	<div class="telegram">
		<img src="~/assets/images/BG.png" alt="">
		<div class="channel">
			<img src="~/assets/images/ChanelTelegram.png" alt="" @click="joinTelegram(channel)">
		</div>
		<div class="chat">
			<img src="~/assets/images/ChatBox.png" alt="" @click="joinTelegram(chat)">
		</div>
		<div class="btn-close" @click="closeDialog">
		</div>
	</div>
</template>

<style lang="scss" scoped>
.telegram {
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	gap: 2vw;
	margin-top: 2vh;
	width: 95%;
	margin: auto;

	img {
		width: 100%;
	}

	.chat {
		position: absolute;
		top: 54%;
		left: 20%;
		width: 30%;
	}

	.channel {
		position: absolute;
		top: 54%;
		left: 54%;
		width: 30%;
	}

	.btn-close {
		position: absolute;
		bottom: 1%;
		width: 32%;
		height: 15%;
		cursor: pointer;
	}
}
</style>
