<script lang="ts" setup>

</script>
<template>
  <div class="chanel-page">
    <h3 class="title">
      <v-icon class="icon" icon="mdi-chart-pie-outline"></v-icon>
      CHANEL TELEGRAM
    </h3>
    <div class="subpage-wrapper">
      <p class="label">Tham Gia Chanel Để Có Thêm Nhiều Thông Tin Hơn Về Game</p>
      <p class="text-center mb-4 link"><a class="lnk__btn" href="https://t.me/clmmsupport" target="_blank">THAM GIA
          NGAY</a></p>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.chanel-page {
  margin-top: 25px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 4px;

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

  >.subpage-wrapper {
    width: 100%;
    text-align: center;
    padding: 25px 0 20px 0;
  }

  >.subpage-wrapper .label {
    padding: 30px 20px;
    line-height: 30px;
  }

  >.subpage-wrapper .link .lnk__btn {
    border-radius: 8px;
    background: linear-gradient(90deg, #fe5b09 0%, #fef9a6 100%);
    box-shadow: 0 0 16px 0 rgb(254 155 33 / 30%);
    position: relative;
    color: #000;
    padding: 5px 15px;
    text-decoration: none;

  }

}
</style>
