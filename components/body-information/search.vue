<script lang="ts" setup></script>
<template>
  <div class="container-search">
    <div class="search-user">
      <input
        class="input"
        type="text"
        placeholder="Nhập Nickname để kiểm tra"
      />
      <v-icon class="icon" icon="mdi-magnify"></v-icon>
    </div>
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
            <span class="result -lose">Thua</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.container-search {
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
  > .table {
    display: block;
    overflow-x: auto;
    width: 100%;
    margin-bottom: 12px;
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

  > .table tbody > .row > .cell > .betName {
    cursor: pointer;
    background-color: $primary-color;
    color: #fff;
    padding: 1px 2px;
    border-radius: 1px;
  }

  > .table tbody > .row > .cell {
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
