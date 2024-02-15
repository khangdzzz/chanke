<script lang="ts" setup>
</script>
<template>
  <div class="container-history">
    <h3 class="title">
      <v-icon class="icon" icon="mdi-cash"></v-icon>
      ĐẠI GIA TUẦN
    </h3>
    <table class="table">
      <thead class="head">
        <tr class="row">
          <th class="cell">HẠNG</th>
          <th class="cell">NICKNAME</th>
          <th class="cell">TỔNG CƯỢC</th>
          <th class="cell">PHẦN THƯỞNG</th>
        </tr>
      </thead>
      <tbody class="body">
      </tbody>
    </table>
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

  >.table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  >.table>.head {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  >.table>.head>.row>.cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 900;
    line-height: 1.5;
    text-align: center;
  }

  >.table tbody>.row {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  >.table tbody>.row>.cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
  }
}
</style>
