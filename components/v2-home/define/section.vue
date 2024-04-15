<script lang="ts" setup>
</script>
<template>
  <div class="container-history">
    <h3 class="title">
      <v-icon class="icon" icon="mdi-cog-outline"></v-icon>
      <a href="/" class="link_home">CHẴN LẺ BANK LÀ GÌ?</a>
    </h3>
    <div class="event">
      <div>
        <h3 class="title"><a href="/" class="link_home_title">Chẵn Lẻ Bank</a> Là Gì?</h3>
        <p class="content"><a href="/" class="link_home">Chẵn Lẻ Bank</a> là một trò chơi dựa trên việc dự đoán kết quả
          chẵn hoặc lẻ từ mã giao dịch của các
          ngân
          hàng như
          MB Bank, Vietcombank, Techcombank, và nhiều ngân hàng khác ở nước ta. Đây là một hình thức giải trí phổ biến,
          đặc biệt là trong dịp lễ tết và các buổi tụ tập bạn bè sum họp.</p>
      </div>
      <div>
        <h3 class="title">Luật Chơi <a href="/" class="link_home_title">Chẵn Lẻ Bank</a></h3>
        <p class="content"><a href="/" class="link_home">Chẵn Lẻ Bank</a> là một trò chơi dựa trên kết quả của mã giao
          dịch ngân hàng. Dưới đây sẽ là chi tiết luật chơi chẵn lẻ bank :</p>
        <ul>
          <li><b>Kết quả dựa trên mã giao dịch:</b>Chẵn lẻ bank tính kết quả chuyển khoản cùng ngân hàng dựa trên mã
            giao dịch của anh em. </li>
          <li><b>Chuyển khoản liên ngân hàng:</b>Hệ thống sử dụng mã giao dịch của ngân hàng nhận để tính kết quả.</li>
          <li><b>Nội dung chuyển khoản:</b>Khi chuyển khoản liên ngân hàng, nội dung có thể bị ngân hàng chỉnh sửa. Hệ
            thống sẽ tính kết quả dựa trên nội dung mà ngân hàng nhận được.</li>
          <li><b>Minh bạch:</b> Hệ thống luôn hiển thị sao kê và lịch sử của ngân hàng nhận để người chơi có thể kiểm
            tra.
            Có thể yêu cầu xem qua live stream với phí 500k.</li>
          <li><b>Cập nhật thông tin ngân hàng:</b>Hệ thống sẽ tự động đổi thông tin ngân hàng liên tục. Trước khi chơi,
            hãy tải lại trang web để cập nhật thông tin mới nhất.</li>
          <li><b>Jackpot:</b>Hệ thống trích 1% tiền cược của giao dịch thắng vào hũ jackpot.</li>
          <li><b>Chuyển khoản sai quy định:</b>Chuyển khoản sai nội dung, hạn mức, hoặc vào tài khoản đang bảo trì sẽ
            không được hoàn tiền.</li>
          <li><b>Hạn mức chuyển khoản:</b>Tối thiểu là 20k và tối đa là 5 triệu VNĐ cho mỗi lượt giao dịch.</li>
          <li><b>Truy cập web:</b>Nếu quá 12 giờ không có hoạt động, anh em cần truy cập lại web. Nếu không, hệ thống sẽ
            không tính nội dung của anh em.</li>
        </ul>
      </div>
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

.link_home {
  color: #fe5b09;
  text-decoration: none;
  font-weight: bold;
}

.link_home_title {
  color: white;
  text-decoration: none;
  font-weight: bold;
}
ul {
  margin-top: 10px;
}
li {
  list-style-type: disc;
  margin-left: 30px;
}
</style>
