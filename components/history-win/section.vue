<script lang="ts" setup>
import { formatDate, maskNumber } from '~~/utils/formatters'

const transactionStore = useTransactionStore()
onMounted(async () => {
  await transactionStore.getTenHistoryTransactionWinNewset()
})

const historyTransactionWin = computed(() => transactionStore.tenHistoryTransactionWinNewest)

</script>
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
          <tr class="row" v-for="(history, index) in historyTransactionWin" :key="index">
            <td class="cell">{{ formatDate(history.time) }}</td>
            <td class="cell">{{ maskNumber(history.accountNumberClient) }}</td>
            <td class="cell">{{ maskNumber(history.transId) }}</td>
            <td class="cell">{{ Number(history.amount).toLocaleString() }}</td>
            <td class="cell">{{ history.detailGameName }}</td>
            <td class="cell">
              <span class="betName">{{ history.betValue }}</span>
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
