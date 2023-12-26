import { text } from 'stream/consumers';
<script lang="ts" setup></script>
<template>
  <div class="history-win">
    <div class="title">
      <img src="~/assets/images/history.png" class="clock" />
      <b class="label">Lịch Sử Thắng</b>
    </div>
    <div class="container">
      <table class="table">
        <thead class="head">
          <tr class="row">
            <th class="cell">THỜI GIAN</th>
            <th class="cell">Số Tài Khoản</th>
            <th class="cell">MGD</th>
            <th class="cell">TIỀN CƯỢC</th>
            <th class="cell">TRÒ CHƠI</th>
            <th class="cell">CƯỢC</th>
            <th class="cell">KẾT QUẢ</th>
          </tr>
        </thead>
        <tbody class="body">
          <tr class="row">
            <td class="cell">19:09:40 24/12/2023</td>
            <td class="cell">***********8389</td>
            <td class="cell">***********517</td>
            <td class="cell">10000</td>
            <td class="cell">Chẳn Lẻ</td>
            <td class="cell">
              <span class="betName">L</span>
            </td>
            <td class="cell">
              <span class="result -lose">Thua</span>
            </td>
          </tr>
          <tr class="row">
            <td class="cell">19:09:40 24/12/2023</td>
            <td class="cell">***********8389</td>
            <td class="cell">***********517</td>
            <td class="cell">10000</td>
            <td class="cell">Chẳn Lẻ</td>
            <td class="cell">
              <span class="betName">L</span>
            </td>
            <td class="cell">
              <span class="result -win">Thắng</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.history-win {
  display: block;
  margin-bottom: 12px;
  padding: 20px 25px 40px;
  background-color: #fff;

  > .title {
    margin-bottom: 24px;
    text-align: center;
  }

  > .title > .clock {
    width: 30px;
    margin-right: 10px;
  }

  > .title > .label {
    font-size: 1.1rem;
    font-weight: 700;
  }

  > .container {
    display: block;
    overflow-x: auto;
  }
  > .container > .table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #e0e0e0;
  }

  > .container > .table > .head {
    background-color: $primary-color;
    color: white;
  }

  > .container > .table > .head > .row > .cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 900;
    line-height: 1.5;
    text-align: center;
    border: 1px solid #e0e0e0;
    white-space: nowrap;
  }

  > .container > .table tbody > .row > .cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    border: 1px solid #e0e0e0;
    white-space: nowrap;
  }

  > .container > .table tbody > .row:nth-child(odd) {
    background-color: #fff;
  }

  > .container > .table tbody > .row:nth-child(even) {
    background-color: #f6f6f6;
  }

  > .container > .table tbody > .row > .cell > .betName {
    cursor: pointer;
    background-color: $primary-color;
    color: #fff;
    padding: 1px 2px;
    border-radius: 1px;
  }

  > .container > .table tbody > .row > .cell {
    & > .result {
      padding: 3px 6px;
      color: #fff;
      border-radius: 3px;
    }
    & > .-lose {
      background: #343a40;
    }
    & > .-win {
      background: linear-gradient(to bottom right, #62fb62, #21a544) !important;
    }
  }
}
</style>
