<script setup lang="ts">
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
definePageMeta({
  middleware: 'auth',
  layout: 'dashboad',
})

const playerTableColumns = ref([
  {
    id: 1,
    text: 'NickName',
    width: '15%',
  },
  {
    id: 2,
    text: 'Tên Tài Khoản',
    width: '15%',
  },
  {
    id: 3,
    text: 'Số Tài Khoản',
    width: '15%',
  },
  {
    id: 4,
    text: 'Tổng Tiền Cược',
    width: '15%',
  },
  {
    id: 5,
    text: 'Tổng Tiền Thắng',
    width: '15%',
  },
  {
    id: 6,
    text: 'Tổng Tiền Thua',
    width: '15%',
  },
  {
    id: 7,
    text: 'Tiền Giới Thiệu',
    width: '15%',
  },
  {
    id: 68,
    text: 'Payment',
    width: '10%',
  },
])

const month = ref(new Date())

onMounted(async () => {
  await transactionStore.getCtvInfor(month.value.getMonth() + 1)
})

const statusUpdate = ref(false)
const notification = ref('')
const snackbar = ref(false)

const transactionStore = useTransactionStore()

const getCtvInfor = async () => {
  const condition = month.value['month'] + 1

  await transactionStore.getCtvInfor(condition)
}

const formatNumber = (value?: number) => {
  return value ? Number(value).toLocaleString() : 0
}

const ctv = computed(() => transactionStore.ctvData)
const userName = ref('')
const name = ref('')
const money = ref(0)
const dialogConfirmStore = useDialogConfirmStore()

const callbackPayment = (item: any) => {
  if (item.totalMoneyIntroNotPaymnent > 20000) {
    name.value = item.accountName
    dialogConfirmStore.isOpenConfirmPaymentIntro = true
    userName.value = item._id
    money.value = item.totalMoneyIntroNotPaymnent
  } else {
    snackbar.value = true
    statusUpdate.value = false
    notification.value = "Số tiền Thanh toán cần phải lớn hơn 20000"
  }
}

const isPaymentIntro = computed(() => transactionStore.isPaymentIntro)

const handlePayment = async () => {
  dialogConfirmStore.isOpenConfirmPaymentIntro = false

  await transactionStore.paymentIntro(userName.value)

  if (isPaymentIntro) {
    snackbar.value = true
    statusUpdate.value = true
    notification.value = "Đã Thực thiện thanh toán"
    await getCtvInfor()
  } else {
    snackbar.value = true
    statusUpdate.value = false
    notification.value = "Thực thiện thanh toán thất bại"
  }
}
</script>
<template>
  <div class="container-player">
    <div class="search">
      <VueDatePicker v-model="month" month-picker />
      <v-btn class="see" @click="getCtvInfor()">Xem</v-btn>
    </div>
    <div class="table-manager">
      <table class="table">
        <thead class="header">
          <tr class="row">
            <th v-for="column in playerTableColumns" :key="column.id" class="head">
              {{ column.text }}
            </th>
          </tr>
        </thead>
        <tbody class="body">
          <tr class="row" v-for="item in ctv" :key="item._id">
            <td class="cell">{{ item._id }}</td>
            <td class="cell">{{ item.accountName }}</td>
            <td class="cell">{{ item.accountNumber }}</td>
            <td class="cell">{{ formatNumber(item.amountSum) }}</td>
            <td class="cell">{{ formatNumber(item.bonusSum) }}</td>
            <td class="cell">{{ formatNumber(item.bonusSum - item.amountSum) }}</td>
            <td class="cell">{{ formatNumber(item.totalMoneyIntroNotPaymnent) }}</td>
            <td class="cell">
              <v-btn class="payment" variant="outlined" :disabled="!!item.totalMoneyIntroNotPaymnent"
                @click="callbackPayment(item)">Payment</v-btn>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <v-snackbar v-model="snackbar" :timeout="1000" rounded="pill" location="top"
      :color="statusUpdate ? 'success' : 'red'" elevation="24" transition="fade-transition">
      {{ notification }}
    </v-snackbar>
    <DialogConfirmPaymentIntro :user-name="name" :content="money" @payment="handlePayment">
    </DialogConfirmPaymentIntro>
  </div>
</template>
<style scoped lang="scss">
.container-player {
  padding-top: 10px;
  display: block;
  width: 100%;
  color: #000;
}

.search {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  gap: 10px;
  width: 50%;
}

.table-manager {
  border: 1px solid #f4f3f3;
  display: block;
  overflow-x: auto;

  >.table {
    width: 100%;
  }

  >.table>.header>.row {
    background-color: $primary-color;
    height: 32px;
    line-height: 1;
    font-weight: 700;
    color: $color-white;
    font-size: 0.875rem;
    padding: 8px;
    text-align: left;
  }

  >.table>.header>.row>.head {
    font-weight: 700;
    padding: 0 4px;
  }

  >.table>.header>.row>.head:last-child {
    text-align: right;
    padding-right: 60px;
  }

  >.table>.body>.row {
    display: revert;
    color: $color-black;
    margin: 15px;
  }

  >.table>.body>.row>.cell {
    text-align: left;
    height: 48px;
    line-height: 48px;
    font-size: 0.875rem;
    padding: 0 8px;
  }

  >.table>.body>.row>.cell:last-child {
    display: flex;
    justify-content: center;
    gap: 10px;
  }

  >.table tbody>.row>.cell>.payment {
    background-color: $primary-color;
    color: #fff !important;
    padding: 0 4px !important;
  }

}
</style>
