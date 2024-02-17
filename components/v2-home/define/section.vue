<script lang="ts" setup>
</script>
<template>
  <div class="container-history">
    <h3 class="title">
      <v-icon class="icon" icon="mdi-cog-outline"></v-icon>
      CHẴN LẺ BANK LÀ GÌ?
    </h3>
    <div class="event">
      <span class="item">Chẵn lẻ bank là một trò chơi xanh chín, dựa vào mã giao dịch của ngân hàng MB Bank, Vietcombank
        (VCB), Techcombank (TCB), Vietinbank (VTB), BIDV, VPB Bank, ACB, Agribank, TPBANK (TPB), Sacombank (STB), SHB và
        nhiều ngân hàng khác. Hiện nay clmm.cam đang là hệ thống bank chẵn lẻ, chẵn lẻ zalopay, chẵn lẻ momo thanh toán
        tự động chỉ trong 3 giây và uy tín nhất hiện tại, Hỗ trợ khách hàng 24/7</span>
      <span class="item">Chẵn lẻ là một trò chơi phổ biến, thường được chơi trong các dịp tết đầu năm, lễ hội hoặc tụ tập
        bạn bè. Hiện nay, Chẵn Lẻ Bank đã được phát triển thành một trò chơi trực tuyến trên ứng dụng thanh toán di động
        Bank.</span>
      <span class="item">Chẵn lẻ trên Bank có cách chơi đơn giản và dễ hiểu. Người chơi chỉ cần chọn cược vào chẵn hoặc
        lẻ, hoặc cược vào một số lẻ nhất định từ 1 đến 9. Kết quả của trò chơi sẽ được xác định dựa trên số cuối của mã
        giao dịch chuyển tiền qua ứng dụng Bank.</span>
      <span class="item">Ngoài ra Chẵn Lẻ Bank còn phát triển thêm rất nhiều loại khác như Tài Xỉu, Xiên, Đoán Số háy Xổ
        Số Miền Bắc ...
      </span>
      <span class="item">Chẵn lẻ trên Bank có nhiều ưu điểm vượt trội so với các trò chơi khác. Đầu tiên, trò chơi này
        hoàn toàn xanh chín do mã giao dịch ngân hàng là không thể thay đổi và can thiệp. Thêm vào đó người chơi có thể
        tham gia trò chơi mọi lúc mọi nơi chỉ cần có kết nối Internet. Thứ hai, không hề có chế độ nạp rút như các game
        khác. Tiền được chuyển thẳng về Tài Khoản Ngân Hàng của bạn ngay sau khi bạn Thắng.</span>
      <span class="item">Lưu Ý: Hiện nay do tính phổ biến của trò chơi có rất nhiều đối tượng lừa đảo, scam giả mạo để lừa
        người chơi. Hãy cẩn thận và chỉ chơi trên website của chúng tôi để đảm bảo tính an toàn và xanh chín.</span>
      <span class="item">Các lưu ý khi chơi chẵn lẻ Bank được chúng tôi khuyến nghị:</span>
      <span class="item">- Đọc rõ luật chơi và các chú ý trước khi bắt đầu đặt cược.</span>
      <span class="item">- Khởi đầu với một số tiền hợp lý, không nên vội vàng dẫn tới cháy tài khoản.</span>
      <span class="item">- Đặt cược một cách thông minh, không lên tất tay vào một lệnh.</span>
      <span class="item">- Không nên lạm dung hoặc tìm cách lợi dụng lỗi của hệ thống bạn có thể bị Block mà không được
        thanh toán.</span>
      <span class="item">- Cuối cùng chúc bạn may mắn và kiếm được nhiều tiền thông qua trò chơi Chẵn Lẻ Bank!</span>
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
    gap: 15px;
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

