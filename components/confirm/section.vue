<script lang="ts" setup></script>
<template>
  <div class="container-confirm">
    <h3 class="title">
      <img
        src="~/assets/images/search.png"
        style="width: 30px"
        class="search"
      />
      <b>Kiểm Tra Mã Giao Dịch</b>
    </h3>
    <p class="text-center note">
      Nếu quá 3 phút chưa nhận được tiền vui lòng dán mã vào đây kiểm tra
    </p>
    <div class="search-user">
      <input
        class="input"
        type="text"
        placeholder="Nhập Nickname để kiểm tra"
      />
      <v-icon class="icon" icon="mdi-magnify"></v-icon>
    </div>
    <div class="warning">
      Nếu bạn chuyển sai hạn mức tối thiểu và tối đa của trò chơi hoặc sai nội
      dung, hệ thống không hỗ trợ hoàn tiền!
    </div>
    <div class="doc">
      <p style="text-align: center">
        <a href="#" style="color: #d0640f">Chẵn lẻ Bank</a>
        là một trò chơi phổ biến và thường được chơi trong các dịp tiệc tùng,
        hội hè hay giải trí cùng bạn bè. Tuy nhiên, thời gian gần đây, trò chơi
        này cũng đã được phát triển thành một trò chơi trực tuyến trên ứng dụng
        thanh toán di động Bank. Trò chơi chẵn lẻ trên Bank được thiết kế với
        giao diện đơn giản và dễ sử dụng, cho phép người chơi đặt cược và tham
        gia trò chơi chỉ bằng vài thao tác đơn giản. Người chơi có thể chọn cược
        vào chẵn hoặc lẻ, hoặc cược vào một số lẻ nhất định từ 1 đến 9. Một
        trong những lợi ích của việc chơi clmm là tính tiện lợi và an toàn. Thay
        vì phải đến các sòng bài và chơi trực tiếp, người chơi có thể tham gia
        trò chơi mọi lúc mọi nơi chỉ cần có kết nối Internet. Bên cạnh đó, trò
        chơi cũng được bảo mật và kiểm soát nghiêm ngặt, đảm bảo rằng các giao
        dịch và thông tin cá nhân của người chơi được bảo vệ. Nếu bạn mới bắt
        đầu chơi chẵn lẻ trên Bank, hãy tìm hiểu kỹ càng về cách chơi và các quy
        tắc trước khi bắt đầu đặt cược. Bạn có thể tham khảo các hướng dẫn trực
        tuyến hoặc xem các video hướng dẫn để nắm rõ cách chơi và các quy tắc
        của trò chơi. Cuối cùng, hãy nhớ rằng
        <b>chơi chẵn lẻ Bank</b>
        là một hình thức giải trí và không nên trở thành một thói quen độc hại.
        Nếu bạn cảm thấy mình đang gặp phải vấn đề về tài chính hoặc kiểm soát
        bản thân khi chơi trò chơi này.
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

  > .title {
    margin-bottom: 24px;
  }

  > .title .search {
    margin-right: 10px;
  }

  > .note {
    font-size: 0.875rem;
    margin-bottom: 12px;
  }

  > .search-user {
    display: flex;
    margin-bottom: 12px;
    gap: 10px;
    width: 100%;
    > .input {
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
    > .icon {
      background-color: $primary-color;
      color: #fff;
      padding: 20px 26px;
      border-radius: 4px;
    }
  }
  > .warning {
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

  > .doc {
    text-align: center;
    margin-bottom: 1em;
    font-size: 0.9rem;
  }
}
</style>
