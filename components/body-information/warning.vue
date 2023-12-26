<script lang="ts" setup></script>
<template>
  <div class="alert-warning">
    <p>
      <strong>
        lưu ý : không nhận giao dịch tạo bằng web ngân hàng .&nbsp;
      </strong>
      <span style="font-weight: 700">
        không hỗ trợ bill sai hoặc thiếu nội dung, sai hạn mức.
        <br />
      </span>
      <strong>
        - chơi cùng bank sẽ dùng mã bên gửi . chơi khác bank sẽ dùng mã bên
        nhận.
        <br />
        - riêng VCB phải chơi cùng bank ( khác bank sẽ không nhận - bảo trì từ
        23h đêm đến 6h sáng hôm sau )
        <br />
        -&nbsp; bidv + vietinbank ( BẢO TRÌ từ 23h đến 6h sáng hôm sau ) mã giao
        dịch là chữ nên sẽ quy đổi thành số, chi tiết xem tại nhóm thông báo.
        <br />
        - chơi vào những bank trong thời gian quy định BẢO TRÌ sẽ không được
        tính không được hoàn.
        <br />
      </strong>
      <span
        style="
          color: rgb(255, 255, 255);
          font-family: 'Open Sans', sans-serif;
          font-size: 14px;
          background-color: rgb(40, 40, 45);
        "
      >
        &nbsp;CHUYỂN LIÊN BANK NỘI DUNG CÓ THỂ BỊ NGÂN HÀNG THÊM THẮT HOẶC THAY
        ĐỔI. HT TÍNH THEO NỘI DUNG BANK HT NHẬN ĐƯỢC.
      </span>
      <br />
    </p>
  </div>
</template>

<style lang="scss" scoped>
.alert-warning {
  color: #7d6608;
  background-color: #fcf3cf;
  border-color: #fbeebc;
  padding: 12px;
}
</style>
