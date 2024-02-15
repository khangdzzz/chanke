<script lang="ts" setup>
import { formatDate, maskNumber } from "~/utils/formatters"
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'

const transactionStore = useTransactionStore()

const page = ref(1)
const limit = 10
const condition = ref("")

onMounted(async () => {
  await transactionStore.getHistoryTransactionLatest(condition.value, page.value, limit)
})

const gameStore = useGameStore()

const defaultGame = ref({ gameType: "", name: "Tất cả" })

const games = computed(() => {
  return [defaultGame.value, ...gameStore.listGamesDetail]
})

const transactions = computed(() => transactionStore.historyTransactionLatest?.transactions)
const totalPage = computed(() => transactionStore.historyTransactionLatest?.totalPages)

const isShowPagination = computed(() => {
  return totalPage.value ? totalPage.value > 1 : false
})

const nickname = ref("")

const startDate = ref(new Date())

const endDate = ref(new Date())

const isSearchTime = ref(false)

const searchHistoryPlayer = async () => {
  condition.value = ''
  condition.value += nickname.value ? `&nickname=${nickname.value}` : ''
  condition.value += defaultGame.value.gameType ? `&gameName=${defaultGame.value.gameType}` : ''

  if (isSearchTime.value) {
    condition.value += `&startDate=${startDate.value.toISOString()}`
    condition.value += `&endDate=${endDate.value.toISOString()}`
  }

  page.value = 1

  await transactionStore.getHistoryTransactionLatest(condition.value, page.value, limit)
};

watch(page,
  async () => {
    await transactionStore.getHistoryTransactionLatest(condition.value, page.value, limit)
  }
)

const callbackPayment = async (item: any) => {
  const nickname = item.nickname
  const transactionId = item.transId

  await transactionStore.callBackPayment(nickname, transactionId)
  await transactionStore.getHistoryTransactionLatest(condition.value, page.value, limit)
}


</script>
<template>
  <div class="search-user">
    <v-select v-model="defaultGame" :items="games" item-value="gameType" item-title="name" variant="outlined"
      label="Loại Game" class="games" dense :clearable="false" return-object></v-select>
    <input v-model="nickname" class="input" type="text" placeholder="Nhập Nickname để kiểm tra" />
    <div class="content__item">
      <div class="content__item__title">Thời Gian Bắt Đầu</div>
      <div class="content__item__input">
        <VueDatePicker v-model="startDate"></VueDatePicker>
      </div>
    </div>
    <div class="content__item">
      <div class="content__item__title">Thời Gian Kết Thúc</div>
      <div class="content__item__input">
        <VueDatePicker v-model="endDate"></VueDatePicker>
      </div>
    </div>
    <v-checkbox v-model="isSearchTime" label="Chọn để tìm kiếm theo thời gian"></v-checkbox>
    <v-btn class="icon" append-icon="mdi-magnify" @click="searchHistoryPlayer()">Tìm Kiếm</v-btn>
  </div>
  <div class="container-search">
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
          <th class="cell">TRẠNG THÁI THANH TOÁN TIỀN</th>
          <th class="cell">CALLBACK</th>
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
          <td class="cell">{{ item.paymentStatus ? "Đã Thanh Toán " : "Chưa Thanh Toán" }}</td>
          <td class="cell">
            <v-btn class="payment" variant="outlined" v-if="!item.paymentStatus"
              @click="callbackPayment(item)">Payment</v-btn>
          </td>
        </tr>
      </tbody>
    </table>
    <div class="text-center">
      <v-pagination v-if="isShowPagination" v-model="page" :length="totalPage" rounded="circle" prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"></v-pagination>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.search-user {
  display: flex;
  padding-bottom: 35px;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  color: #000;

  >.games {
    width: 100%;
  }

  >.input {
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

  >.icon {
    background-color: $primary-color;
    color: #fff;
    padding: 20px 26px;
    border-radius: 4px;
    max-width: 127px;
    width: 100%;
  }
}

.container-search {
  width: 100%;
  overflow-x: auto;
  color: #000;

  >.table {
    width: 100%;
    margin-bottom: 12px;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #e0e0e0;
  }

  >.table>.head {
    background-color: $primary-color;
    color: white;
  }

  >.table>.head>.row>.cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 900;
    line-height: 1.5;
    text-align: center;
    border: 1px solid #e0e0e0;
    white-space: nowrap;
  }

  >.table tbody>.row:nth-child(odd) {
    background-color: #fff;
  }

  >.table tbody>.row:nth-child(even) {
    background-color: #f6f6f6;
  }

  >.table tbody>.row>.cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    border: 1px solid #e0e0e0;
    white-space: nowrap;
  }

  >.table tbody>.row>.cell>.payment {
    background-color: $primary-color;
    color: #fff !important;
    padding: 0 8px !important;
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
