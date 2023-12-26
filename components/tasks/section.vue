<script lang="ts" setup></script>
<template>
  <div class="container-tasks">
    <div class="task-daily">
      <h3 class="title">
        <img
          src="~/assets/images/mission.png"
          style="width: 30px"
          class="mission"
        />
        <b class="label">Nhiệm Vụ Ngày</b>
        <img
          src="~/assets/images/mission.png"
          style="width: 30px"
          class="mission"
        />
      </h3>
      <div class="search-user">
        <input
          class="input"
          type="text"
          placeholder="Nhập Nickname để kiểm tra"
        />
        <v-icon class="icon" icon="mdi-magnify"></v-icon>
      </div>
      <div class="container">
        <table class="table">
          <thead class="head">
            <tr class="row">
              <th class="cell">MỐC CHƠI</th>
              <th class="cell">THƯỞNG</th>
            </tr>
          </thead>
          <tbody class="body">
            <tr class="row">
              <td class="cell">1,000,000</td>
              <td class="cell">+ 12,000</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="ranking">
      <h3 class="title">
        <img src="~/assets/images/cup.png" style="width: 30px" />
        <b>Đua Top Đại Gia Tuần</b>
        <img src="~/assets/images/cup.png" style="width: 30px" />
      </h3>
      <div class="container">
        <table class="table">
          <thead class="head">
            <tr class="row">
              <th class="cell">#</th>
              <th class="cell">SỐ TÀI KHOẢN</th>
              <th class="cell">TIỀN THẮNG</th>
              <th class="cell">PHẦN THƯỞNG</th>
            </tr>
          </thead>
          <tbody class="body">
            <tr class="row">
              <td class="cell">1</td>
              <td class="cell">038458****</td>
              <td class="cell">187,500</td>
              <td class="cell">+ 500,000</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="notification">
        Đua TOP bắt đầu từ 0h00 Thứ 2 đầu tuần và chốt lúc 23h59 Chủ Nhật cuối
        tuần.
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-tasks {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 20px;
  > .task-daily,
  > .ranking {
    box-sizing: border-box;
    width: calc(50% - 10px);
    padding: 20px 25px 40px;
    background-color: #fff;
    border-radius: 4px;
  }

  > .ranking {
    width: calc(50% - 10px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    > .task-daily {
      width: 100%;
    }
    > .ranking {
      width: 100%;
    }
  }
}

.task-daily {
  > .title {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 24px;
  }

  > .search-user {
    display: flex;
    margin-bottom: 12px;
    gap: 10px;
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

  > .container > .table tbody > .row > .cell:last-child {
    color: #4ecc48 !important;
  }

  > .container > .table tbody > .row:nth-child(odd) {
    background-color: #fff;
  }

  > .container > .table tbody > .row:nth-child(even) {
    background-color: #f6f6f6;
  }
}

.ranking {
  > .title {
    display: flex;
    justify-content: center;
    gap: 10px;
    margin-bottom: 24px;
  }
  > .container {
    display: block;
    overflow-x: auto;
    margin-bottom: 12px;
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

  > .container > .table tbody > .row > .cell:last-child {
    color: #4ecc48 !important;
  }

  > .container > .table tbody > .row:nth-child(odd) {
    background-color: #fff;
  }

  > .container > .table tbody > .row:nth-child(even) {
    background-color: #f6f6f6;
  }

  > .notification {
    color: #464a4e;
    background-color: #e7e8ea;
    border-color: #dddfe2;
    font-size: 0.9375rem;
    padding: 0.75rem 1.25rem;
    border-radius: 4px;
  }
}
</style>
