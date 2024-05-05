<script lang="ts" setup>
</script>
<template>
  <div class="container-history">
    <h3 class="title">
      <v-icon class="icon" icon="mdi-cog-outline"></v-icon>
      QUY ĐỊNH LUẬT CHƠI
    </h3>
    <div class="event">
      <span class="item">1. HỆ THỐNG CHẴN LẺ BANK TÍNH THEO KẾT QUẢ MÃ GIAO DỊCH CỦA BẠN NẾU CHUYỂN KHOẢN CÙNG NGÂN
        HÀNG.</span>
      <span class="item">2. RIÊNG VCB SẼ TÍNH KẾT QUẢ LÀ SỐ GIAO DỊCH CỘNG VỚI MÃ GIAO DỊCH. CÙNG NGÂN HÀNG PHẢI CHUYỂN TỪ
        APP VCB DIGIBANK NẾU KHÔNG SẼ KHÔNG ĐƯỢC HOÀN. NẾU GẶP THÔNG BÁO GIAO DỊCH KHÔNG HỢP LỆ. VUI LÒNG KHÔNG CK THÊM
        NẾU KHÔNG SẼ KHÔNG ĐƯỢC HOÀN TRẢ.</span>
      <span class="item">3. HỆ THÔNG SỬ DỤNG MÃ GIAO DỊCH CỦA BANK NHẬN ĐỂ TÍNH KẾT QUẢ TRÒ CHƠI NẾU BẠN CHUYỂN KHOẢN
        LIÊN
        NGÂN HÀNG.</span>
      <span class="item">4. CHUYỂN LIÊN BANK NỘI DUNG CÓ THỂ BỊ NGÂN HÀNG THÊM THẮT HOẶC THAY ĐỔI. HT TÍNH THEO NỘI DUNG
        BANK HT NHẬN ĐƯỢC.</span>
      <span class="item">5. HỆ THỐNG LUÔN SHOW SAO KÊ, LỊCH SỬ CỦA BANK NHẬN ĐỂ NGƯỜI CHƠI KIỂM TRA - XANH CHÍN. NGƯỜI
        CHƠI CŨNG CÓ THỂ YÊU CẦU XEM QUA LIVE STREAM TRÊN ĐT ĐỂ KIỂM TRA. PHÍ MỖI LẦN LÀ 500K VNĐ. NẾU SAI WEB XIN ĐỀN 1
        TỶ. NGOẠI TRỪ CÁC TRƯỜNG HỢP LẠM DỤNG/CHEAT ĐÃ BỊ WEB ĐƯA VÀO DANH SÁCH ĐEN.</span>
      <span class="item">6. HỆ THỐNG SẼ TỰ ĐỘNG ĐỔI BANK LIÊN TỤC, TRƯỚC KHI CHƠI KHÁCH HÀNG VUI LÒNG LÊN WEB TẢI LẠI
        TRANG ĐỂ CẬP NHẬT. NẾU CK VÀO SỐ OFF SẼ KHÔNG ĐƯỢC HOÀN TIỀN.</span>
      <span class="item">7. HỆ THỐNG TRÍCH 1% TIỀN CƯỢC GIAO DỊCH WIN CHO VÀO HŨ JACKPOT.</span>
      <span class="item">8. ĐỐI VỚI ZALOPAY MỖI LẦN CHUYỂN KHOẢN CÁC BẠN CẦN LẤY LẠI QRCODE. NẾU CK VÀO SỐ OFF SẼ KHÔNG
        ĐƯỢC HOÀN TIỀN.</span>
      <span class="item">9. CÁC GD ZALO TỪ 0:00 TỚI 0:05 ĐỀU KHÔNG ĐƯỢC TÍNH VÀ KHÔNG HOÀN TIỀN. VUI LÒNG KHÔNG CK TỪ
        PHÚT
        58 TỚI 05 HÔM SAU.</span>
      <span class="item">10. CHUYỂN KHOẢN SAI NỘI DUNG/HẠN MỨC/TÀI KHOẢN BẢO TRÌ SẼ KHÔNG ĐƯỢC HOÀN TIỀN.</span>
      <span class="item">11. HẠN MỨC CHUYỂN KHOẢN TỐI THIỂU LÀ 20K, TỐI ĐA 5M CHO MỖI LƯỢT GIAO DỊCH.</span>
      <span class="item">12. BẠN CẦN TRUY CẬP LẠI WEB NẾU QUÁ 12H KHÔNG CÓ HOẠT ĐỘNG NÀO. NẾU KHÔNG HT SẼ KHÔNG TÍNH NỘI
        DUNG CỦA BẠN.</span>

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
