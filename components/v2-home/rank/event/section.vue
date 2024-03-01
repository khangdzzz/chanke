<script lang="ts" setup>
</script>
<template>
	<div class="container-history">
		<h3 class="title">
			<v-icon class="icon" icon="mdi-bullhorn-variant-outline"></v-icon>
			SỰ KIỆN ĐANG DIỄN RA
		</h3>
		<div class="event">
			<span class="item">[TB] RA MẮT GAME BTC TÍNH KẾT QUẢ DỰA VÀO BIẾN ĐỘNG VOL (BTC) .<span class="note">[THAM
					GIA]</span></span>
			<span class="item">[FAQ] HƯỚNG DẪN CÁCH TÍNH KẾT QUẢ <span class="note">[TẠI ĐÂY].</span></span>
			<span class="item">[EVENT] NHẬN MIỄN PHÍ 25K HẰNG NGÀY KHI TRỞ THÀNH FAN CHANLEBANK.PAGE. <span class="note">[THAM
					GIA]</span></span>
			<span class="item">[EVENT] ĐUA TOP TƯƠNG TÁC NHẬN NGAY 700K VNĐ. <span class="note">[CHI TIẾT]</span></span>
			<span class="item">[EVENT] NHẬN HOÀN CƯỢC LÊN TỚI 60% BẤT CHẤP THẮNG THUA. <span class="note">[THAM
					GIA]</span></span>


			<span class="item">[CẢNH BÁO] CHỈ CHUYỂN KHOẢN VÀO SỐ TÀI KHOẢN TRÊN WEB.</span>


			<span class="item">[CẢNH BÁO] <span class="title">CHANLEBANK.PAGE</span> KHÔNG HỀ CÓ BẤT KỲ ADMIN/HỖ TRỢ NÀO TRÊN TELEGRAM.
				MỌI ĐỐI TƯỢNG NHẬN LÀ
				ADMIN/HỖ TRỢ TRÊN
				TELEGRAM ĐỀU LÀ LỪA ĐẢO.</span>
		</div>
	</div>
</template>

<style lang="scss" scoped>
.container-history {
	display: block;
	overflow-x: auto;
	margin-bottom: 12px;
	border-radius: 8px;
	border: 1px solid rgba(255, 255, 255, 0.05);
	flex: 1;

	>.title {
		display: flex;
		flex-direction: row;
		justify-content: flex-start;
		align-items: center;
		width: auto;
		color: #fef142;
		font-weight: 500;
		font-size: 18px;
		line-height: 100%;
		margin-bottom: 0;
		background-image: linear-gradient(90deg, #fe5b09 0%, #fef9a6 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
		padding: 20px;
		gap: 10px;
		border-bottom: 1px solid rgba(255, 255, 255, 0.05);

		>.icon {
			-webkit-text-fill-color: #fe5b09;
		}
	}

	>.event {
		font-size: 14px;
		padding: 30px 20px 20px;
		display: flex;
		gap: 10px;
		flex-direction: column;
	}

	>.event>.item>.title {
		color: #fef142;

		background-image: linear-gradient(90deg, #fe5b09 0%, #fef9a6 100%);
		-webkit-background-clip: text;
		-webkit-text-fill-color: transparent;
	}
}
</style>
