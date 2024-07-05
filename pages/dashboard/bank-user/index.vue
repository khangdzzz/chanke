<script lang="ts" setup>
import '@vuepic/vue-datepicker/dist/main.css'
import { formatDate } from '~/utils/formatters'

definePageMeta({
  middleware: 'auth',
  layout: 'dashboad',
})

const transactionStore = useTransactionStore()

const page = ref(1)
const limit = 10
const condition = ref('&type=refund')

onMounted(async () => {
  await transactionStore.getHistoryTransactionLatest(
    condition.value,
    page.value,
    limit
  )
})

const nickname = ref('')
const userStore = useUserStore()

const searchPlayerByNickName = async () => {
  await userStore.getDetailUser(nickname.value)
}
const accountName = ref('')
const accountNumber = ref('')
const money = ref(0)
const content = ref('')
const user = computed(() => userStore.authUser)

watch(user, () => {
  accountName.value = user.value?.accountName ?? ''
  accountNumber.value = user.value?.accountNumber ?? ''
})

const transactions = computed(
  () => transactionStore.historyTransactionLatest?.transactions
)
const totalPage = computed(
  () => transactionStore.historyTransactionLatest?.totalPages
)

const searchHistoryPlayer = async () => {
  page.value = 1

  await transactionStore.getHistoryTransactionLatest(
    condition.value,
    page.value,
    limit
  )
}

watch(page, async () => {
  await searchHistoryPlayer()
})

const isShowPagination = computed(() => {
  return totalPage.value ? totalPage.value > 1 : false
})

const getPaymentStatus = (item: any) => {
  if (item.paymentStatus) return 'Đã Thanh Toán'
  else if (!item.paymentStatus && item.status == 'win') return 'Chưa Thanh Toán'
  else if (!item.paymentStatus && item.status == 'lose')
    return 'Chưa Thanh Toán'
  else if (!item.paymentStatus && item.status == 'pending')
    return 'Đang Xử Lí Thanh Toán'
}

const isRefund = ref(false)
const snackbar = ref(false)
const notification = ref('')

const refundUser = async () => {
  const body = {
    username: nickname.value,
    money: money.value,
    content: content.value,
  }

  const result = await userStore.refundBankUser(body)

  if (result?.success) {
    snackbar.value = true
    notification.value = 'Thanh Toán Thành Công'
    isRefund.value = true
    await searchHistoryPlayer()
  }
}

const timers = setInterval(async () => {
  await searchHistoryPlayer()
}, 3000)

onUnmounted(() => clearInterval(timers))
</script>
<template>
  <div class="bank-client">
    <h1 class="title">Bank Hoàn Tiền Lệnh Lỗi</h1>
    <div class="nickname">
      <input
        v-model="nickname"
        class="input"
        type="text"
        placeholder="Nhập Nickname để kiểm tra"
      />
      <v-btn @click="searchPlayerByNickName()">Tìm</v-btn>
    </div>
    <div class="nickname">
      <input
        v-model="accountNumber"
        class="input"
        type="text"
        placeholder="Số Tài Khoản"
      />
    </div>
    <div class="nickname">
      <input
        v-model="accountName"
        class="input"
        type="text"
        placeholder="Tên Tài Khoản"
      />
    </div>
    <div class="nickname">
      <input v-model="money" class="input" type="text" placeholder="Số Tiền" />
    </div>
    <div class="nickname">
      <input
        v-model="content"
        class="input"
        type="text"
        placeholder="Nội Dung"
      />
      <v-btn @click="refundUser()">Chuyển khoản</v-btn>
    </div>

    <div class="container-search">
      <table class="table">
        <thead class="head">
          <tr class="row">
            <th class="cell">THỜI GIAN</th>
            <th class="cell">Nick Name</th>
            <th class="cell">Số Tài Khoản</th>
            <th class="cell">MGD</th>
            <th class="cell">TIỀN BANK</th>
            <th class="cell">MESSAGE</th>
            <th class="cell">KẾT QUẢ</th>
            <th class="cell">TRẠNG THÁI THANH TOÁN TIỀN</th>
          </tr>
        </thead>
        <tbody class="body">
          <tr v-for="item in transactions" :key="item._id" class="row">
            <td class="cell">{{ formatDate(item.createdAt as string) }}</td>
            <td class="cell">{{ item.nickname }}</td>
            <td class="cell">{{ item.accountNumberClient }}</td>
            <td class="cell">{{ item.transId }}</td>
            <td class="cell">{{ Number(item.amount).toLocaleString() }}</td>
            <td class="cell">
              <span class="betName">{{ item.code }}</span>
            </td>
            <td class="cell">
              <span
                class="result -lose"
                :class="{ '-win': item.status === 'win' }"
              >
                {{ item.status }}
              </span>
            </td>
            <td class="cell">{{ getPaymentStatus(item) }}</td>
          </tr>
        </tbody>
      </table>
      <div class="text-center">
        <v-pagination
          v-if="isShowPagination"
          v-model="page"
          :length="totalPage"
          rounded="circle"
          prev-icon="mdi-menu-left"
          next-icon="mdi-menu-right"
        ></v-pagination>
      </div>
    </div>
    <v-snackbar
      v-model="snackbar"
      :timeout="1000"
      rounded="pill"
      location="top"
      :color="isRefund ? 'success' : 'red'"
      elevation="24"
      transition="fade-transition"
    >
      <div style="width: 100%; text-align: center">
        {{ notification }}
      </div>
    </v-snackbar>
  </div>
</template>

<style lang="scss" scoped>
.bank-client {
  display: flex;
  flex-direction: column;
  gap: 20px;

  > .title {
    color: black;
  }

  > .nickname {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  > .nickname > .input {
    border: 1px solid #0300006b;
    border-radius: 4px;
    padding: 5px 20px;
    width: 300px;
    color: black;
  }
}

.container-search {
  width: 100%;
  overflow-x: auto;
  color: #000;

  > .table {
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

  > .table tbody > .row > .cell > .payment {
    background-color: $primary-color;
    color: #fff !important;
    padding: 0 8px !important;
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
