<script lang="ts" setup></script>
<template>
  <div class="container-history">
    <table class="table">
      <thead class="head">
        <tr class="row">
          <th class="cell">THỜI GIAN</th>
          <th class="cell">Ngân Hàng</th>
          <th class="cell">Số Tài Khoản</th>
          <th class="cell">NICKNAME</th>
        </tr>
      </thead>
      <tbody class="body">
        <tr class="row">
          <td class="cell">19:09:40 24/12/2023</td>
          <td class="cell">
            <img src="https://api.vietqr.io/img/MB.png" width="100" />
          </td>
          <td class="cell">***********8389</td>
          <td class="cell">hieudeptrai</td>
        </tr>
        <tr class="row">
          <td class="cell">19:09:40 24/12/2023</td>
          <td class="cell">
            <img src="https://api.vietqr.io/img/MB.png" width="100" />
          </td>
          <td class="cell">***********8389</td>
          <td class="cell">hieudeptrai</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.container-history {
  display: block;
  overflow-x: auto;
  margin-bottom: 12px;
  > .table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #e0e0e0;
  }

  > .table > .head {
    background-color: $primary-color;
    color: white;
  }

  > .table > .head > .row > .cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 900;
    line-height: 1.5;
    text-align: center;
    border: 1px solid #e0e0e0;
    white-space: nowrap;
  }

  > .table tbody > .row:nth-child(odd) {
    background-color: #fff;
  }

  > .table tbody > .row:nth-child(even) {
    background-color: #f6f6f6;
  }

  > .table tbody > .row > .cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    border: 1px solid #e0e0e0;
    white-space: nowrap;
  }

  > .table tbody > .row > .cell > .icon-copy,
  > .table tbody > .row > .cell > .icon-qr {
    cursor: pointer;
    background-color: #fff;
    color: $primary-color;
    margin-left: 5px;
  }

  > .table tbody > .row > .cell > .icon-copy:hover,
  > .table tbody > .row > .cell > .icon-qr:hover {
    color: #2bcbf3;
  }
}
</style>
