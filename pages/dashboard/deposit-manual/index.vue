<script lang="ts" setup>
import '@vuepic/vue-datepicker/dist/main.css'
import { formatDate } from '~/utils/formatters'
import { BANKS } from '../../../utils/constants'

definePageMeta({
  middleware: 'auth',
  layout: 'dashboad',
})

const loading = ref(false)
const isRefund = ref(false)
const snackbar = ref(false)
const notification = ref('')

const userStore = useUserStore()

const refundUser = async () => {
  loading.value = true

  const body = {
    amount: amount.value,
    content: content.value,
    requestId: requestId.value,
    bankType: selectedBank.value.value,
  }

  if (!amount.value || !content.value || !requestId.value) {
    snackbar.value = true
    notification.value = 'Vui lý điền đầy đủ thư viện'
    loading.value = false
    return
  }

  await userStore.refundDepositManual(body)

  setTimeout(() => {
    loading.value = false
    isRefund.value = true
    snackbar.value = true
    notification.value = 'Thanh Toán Thành Công'
  }, 1000)
}

const selectedBank = ref({ value: 'VCB', label: 'VCB' })
const BANK_TYPES = [
  { value: 'VCB', label: 'VCB' },
  { value: 'MBB', label: 'MBB' },
  { value: 'BIDV', label: 'BIDV' },
]

const amount = ref()
const content = ref()
const requestId = ref()
</script>
<template>
  <div class="bank-client">
    <h1 class="title">Bank Hoàn Tiền Lệnh Lỗi</h1>
    <v-select
      v-model="selectedBank"
      :items="BANK_TYPES"
      item-value="value"
      item-title="label"
      variant="outlined"
      label="Ngân Hàng"
      class="bank"
      dense
      :clearable="false"
      return-object
    ></v-select>
    <div class="nickname">
      <input v-model="amount" class="input" type="text" placeholder="Số Tiền" />
    </div>

    <div class="nickname">
      <input
        v-model="content"
        class="input"
        type="text"
        placeholder="Nội Dung"
      />
    </div>

    <div class="nickname">
      <input
        v-model="requestId"
        class="input"
        type="text"
        placeholder="Request ID"
      />
    </div>

    <v-btn class="btn" :loading="loading" @click="refundUser()">
      Chuyển khoản
    </v-btn>

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
  padding-bottom: 35px;
  flex-direction: column;
  gap: 10px;
  width: 50%;
  color: #000;

  .btn {
    width: 150px;
  }

  > .bank {
    width: 300px;
  }

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
</style>
