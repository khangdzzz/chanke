<script lang="ts" setup></script>
<template>
  <div class="container-confirm">
    <h3 class="title">
      <img src="~/assets/images/search.png" style="width: 30px" class="search" />
      <b>Kiểm Tra Mã Giao Dịch</b>
    </h3>
    <p class="text-center note">
      Nếu quá 3 phút chưa nhận được tiền vui lòng dán mã vào đây kiểm tra
    </p>
    <div class="search-user">
      <input class="input" type="text" placeholder="Nhập Nickname để kiểm tra" />
      <v-icon class="icon" icon="mdi-magnify"></v-icon>
    </div>
    <div class="warning">
      Nếu bạn chuyển sai hạn mức tối thiểu và tối đa của trò chơi hoặc sai nội
      dung, hệ thống không hỗ trợ hoàn tiền!
    </div>
    <div class="doc">
      <p style="text-align: center">
        <a href="#" style="color: #d0640f">Chẵn lẻ Bank</a>
        là một trò chơi xanh chín, dựa vào mã giao dịch của ngân hàng MB Bank, Vietcombank (VCB), Techcombank (TCB),
        Vietinbank (VTB), BIDV, VPB Bank, ACB, Agribank, TPBANK (TPB), Sacombank (STB), SHB và nhiều ngân hàng khác. Hiện
        nay clmm.cam đang là hệ thống bank chẵn lẻ, chẵn lẻ zalopay, chẵn lẻ momo thanh toán tự động chỉ trong 3
        giây và uy tín nhất hiện tại, Hỗ trợ khách hàng 24/7

        Chẵn lẻ là một trò chơi phổ biến, thường được chơi trong các dịp tết đầu năm, lễ hội hoặc tụ tập bạn bè. Hiện nay,
        Chẵn Lẻ Bank đã được phát triển thành một trò chơi trực tuyến trên ứng dụng thanh toán di động Bank.

        Chẵn lẻ trên Bank có cách chơi đơn giản và dễ hiểu. Người chơi chỉ cần chọn cược vào chẵn hoặc lẻ, hoặc cược vào
        một số lẻ nhất định từ 1 đến 9. Kết quả của trò chơi sẽ được xác định dựa trên số cuối của mã giao dịch chuyển
        tiền qua ứng dụng Bank.

        Ngoài ra Chẵn Lẻ Bank còn phát triển thêm rất nhiều loại khác như Tài Xỉu, Xiên, Đoán Số háy Xổ Số Miền Bắc ...

        Chẵn lẻ trên Bank có nhiều ưu điểm vượt trội so với các trò chơi khác. Đầu tiên, trò chơi này hoàn toàn xanh chín
        do mã giao dịch ngân hàng là không thể thay đổi và can thiệp. Thêm vào đó người chơi có thể tham gia trò chơi mọi
        lúc mọi nơi chỉ cần có kết nối Internet. Thứ hai, không hề có chế độ nạp rút như các game khác. Tiền được chuyển
        thẳng về Tài Khoản Ngân Hàng của bạn ngay sau khi bạn Thắng.
      </p>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-confirm {
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  background-color: #fff;
  width: 100%;
  height: 100%;
  padding: 20px 25px 40px;

  >.title {
    margin-bottom: 24px;
  }

  >.title .search {
    margin-right: 10px;
  }

  >.note {
    font-size: 0.875rem;
    margin-bottom: 12px;
  }

  >.search-user {
    display: flex;
    margin-bottom: 12px;
    gap: 10px;
    width: 100%;

    >.input {
      display: block;
      width: 100%;
      padding: 0.375rem 0.75rem;
      font-size: 0.9375rem;
      line-height: 1.6;
      color: #898989;
      background-color: #fff;
      background-clip: padding-box;
      border: 1px solid #eaeaea;
      border-radius: 3px;
      transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    }

    >.icon {
      background-color: $primary-color;
      color: #fff;
      padding: 20px 26px;
      border-radius: 4px;
    }
  }

  >.warning {
    width: 100%;
    color: #7d6608;
    background-color: #fcf3cf;
    border-color: #fbeebc;
    font-size: 0.9375rem;
    line-height: 1.6;
    letter-spacing: 0.04em;
    padding: 0.75rem 1.25rem;
    margin-bottom: 1rem;
    border: 1px solid transparent;
    border-radius: 3px;
    text-align: center;
  }

  >.doc {
    text-align: center;
    margin-bottom: 1em;
    font-size: 0.9rem;
  }
}
</style>
