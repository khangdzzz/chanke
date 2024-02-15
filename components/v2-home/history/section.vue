<script lang="ts" setup>
import { formatDate } from "~/utils/formatters"
const { checkTokenValid, getUserName } = useAuth()

const username = computed(() => getUserName())

const transactionStore = useTransactionStore()

const page = ref(1)
const limit = 10
const condition = ref("")

onMounted(async () => {
  condition.value = `&nickname=${username.value}`
  await transactionStore.getHistoryTransactionLatest(condition.value, page.value, limit)
})

const transactions = computed(() => transactionStore.historyTransactionLatest?.transactions)

</script>
<template>
  <div class="container-history">
    <h3 class="title">
      <v-icon class="icon" icon="mdi-clock-time-eight-outline"></v-icon>
      LỊCH SỬ CHƠI GẦN ĐÂY
    </h3>
    <table class="table">
      <thead class="head">
        <tr class="row">
          <th class="cell">THỜI GIAN</th>
          <th class="cell">Nick Name</th>
          <th class="cell">Số Tài Khoản</th>
          <th class="cell">MGD</th>
          <th class="cell">TIỀN CƯỢC</th>
          <th class="cell">TIỀN THẮNG</th>
          <th class="cell">TRÒ CHƠI</th>
          <th class="cell">MESSAGE</th>
          <th class="cell">CƯỢC</th>
          <th class="cell">KẾT QUẢ</th>
        </tr>
      </thead>
      <tbody class="body">
        <tr class="row" v-for="item in transactions" :key="item._id">
          <td class="cell">{{ formatDate(item.createdAt as string) }}</td>
          <td class="cell">{{ item.nickname }}</td>
          <td class="cell">{{ item.accountNumberClient }}</td>
          <td class="cell">{{ item.transId }}</td>
          <td class="cell">{{ Number(item.amount).toLocaleString() }}</td>
          <td class="cell">{{ Number(item.bonus).toLocaleString() }}</td>
          <td class="cell">{{ item.detailGameName }}</td>
          <td class="cell">
            <span class="betName">{{ item.code }}</span>
          </td>
          <td class="cell">
            <span class="betName">{{ item.betValue }}</span>
          </td>
          <td class="cell">
            <span class="result -lose" :class="{ '-win': item.status === 'win' }">{{ item.status }}</span>
          </td>
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
    display: block;
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
