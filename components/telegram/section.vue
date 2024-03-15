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

		<div class="infor">
			<p>1: XEM HƯỚNG DẪN CÁCH CHƠI VÀ THÔNG TIN KHUYẾN MẠI CÁC BẠN HÃY JOIN KÊNH TELEGRAM</p>
			<p>2: ĐỂ THẢO LUẬN VÀ NHẬN HỖ TRỢ CSKH CÁC BẠN HÃY JOIN VÀO CHAT BOX</p>
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

	.infor {
		position: absolute;
		top: 30%;
		text-align: left;
		font-size: 2vw;
		color: #fff;
		width: 80%;
		font-weight: 900;
		font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
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
