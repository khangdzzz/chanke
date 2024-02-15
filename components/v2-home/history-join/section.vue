<script lang="ts" setup>
import { formatDate, maskNumber } from '~~/utils/formatters'

const transactionStore = useTransactionStore()
onMounted(async () => {
  await transactionStore.getTenHistoryTransactionWinNewset()
})

const historyTransactionWin = computed(() => transactionStore.tenHistoryTransactionWinNewest)

</script>
<template>
  <div class="container">
    <h3 class="title">
      <v-icon class="icon" icon="mdi-clock-time-eight-outline"></v-icon>
      LỊCH SỬ THAM GIA
    </h3>
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
</template>

<style lang="scss" scoped>
.container {
  display: block;
  overflow-x: auto;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);

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

  >.table tbody>.row>.cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
  }

  >.table tbody>.row>.cell>.betName {
    cursor: pointer;
    background-color: $primary-color;
    color: #fff;
    padding: 1px 2px;
    border-radius: 1px;
  }

  >.table tbody>.row>.cell {
    &>.result {
      padding: 3px 6px;
      color: #fff;
      border-radius: 3px;
    }

    &>.-lose {
      background: #343a40;
    }

    &>.-win {
      background: linear-gradient(to bottom right, #62fb62, #21a544) !important;
    }
  }
}
</style>
