<script lang="ts" setup>
import { BANKS } from '~/utils/constants'
import { isNumber, formatDate } from '~/utils/formatters'

definePageMeta({
  middleware: 'auth',
  layout: 'dashboad',
})

const defaultTime = ref(formatDate(new Date().toISOString()))
const content = ref('kandz N1')
const accountNumberClient = ref('09878723884242')
const selectedBank = ref({ value: '970415', label: '(970415) VietinBank' })

const accountNumberAdmin = ref('09878723884242')
const selectedBankAdmin = ref({ value: '970415', label: '(970415) VietinBank' })

const money = ref(11110)
const transactionId = ref('343242342342342')
const transactionDetail = ref('transaction detail')

const adminStore = useAdminStore()
const isHandleTransactionSuccess = computed(() => adminStore.isHandleTransactionSuccess)
const isHandleTransactionFail = computed(() => adminStore.isHandleTransactionFail)

const handleFakeTransaction = async () => {
  const body = {
    content: content.value,
    accountNumberClient: accountNumberClient.value,
    bankClient: selectedBank.value.value,
    accountNumberAdmin: accountNumberAdmin.value,
    bankAdmin: selectedBankAdmin.value.value,
    money: money.value,
    transactionId: transactionId.value,
    transactionDetail: transactionDetail.value,
    time: defaultTime.value,
  }
 
  await adminStore.handleTransaction(body)
  setTimeout(() => {
    adminStore.isHandleTransactionSuccess = false
    adminStore.isHandleTransactionFail = false
  }, 1000);
}

</script>
<template>
  <div class="transaction-container">
    <div class="form">
      <v-text-field v-model="content" class="row -account-number" label="Nội dung" outlined ></v-text-field>
      <br>
      <v-select
          v-model="selectedBank"
          :items="BANKS"
          item-value="value"
          item-title="label"
          variant="outlined"
          label="Loại ngân hàng người chơi"
          class="row"
          dense
          :clearable="false"
          return-object
      ></v-select>
       <v-text-field 
        class="row -account-number" 
        v-model="accountNumberClient"
        label="Nhập Số Tài Khoản Người Chơi" 
        outlined  
        @keypress="isNumber($event)"
      ></v-text-field>
      <br>
      <v-select
          v-model="selectedBankAdmin"
          :items="BANKS"
          label="Loại ngân hàng nhà cái"
          item-value="value"
          item-title="label"
          variant="outlined"
          class="row"
          dense
          :clearable="false"
          return-object
      ></v-select>
         <v-text-field 
        class="row -account-number" 
        v-model="accountNumberAdmin"
        label="Nhập Số Tài Khoản Nhà Cái" 
        outlined  
        @keypress="isNumber($event)"
      ></v-text-field>
      <br>
      <v-text-field 
        class="row -money" 
        v-model="money"
        label="Nhập tiền cược" 
        outlined  
        @keypress="isNumber($event)"
      ></v-text-field>

      <v-text-field 
        class="row -transaction" 
        v-model="transactionId"
        label="Nhập transaction Id" 
        outlined  
      ></v-text-field>

      <v-text-field 
        class="row -transaction-detail" 
        v-model="transactionDetail"
        label="Nhập transaction detail" 
        outlined  
      ></v-text-field>

      <v-text-field 
        class="row -time" 
        label="Nhập time" 
        v-model="defaultTime"
        outlined
      ></v-text-field>

      <v-btn class="add" @click="handleFakeTransaction()">Test Transaction</v-btn>
      <span class="success" v-if="isHandleTransactionSuccess">Thành Công</span>
      <span class="fail" v-if="isHandleTransactionFail">Thất Bại</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.transaction-container {
  display: block;
  overflow-x: auto;
  padding: 12px;

  >.add {
    margin-bottom: 12px;
  }

  >.form {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 12px;
    width: 50%;

    >.row {
      width: 100%;
      margin-bottom: 12px;
      border-radius: 4px;
    }

    >.add {
      width: 150px;
    }

    > .success {
      color: green;
      font-size: 0.9rem;
      font-weight: 900;
      line-height: 1.5;
      margin: 12px 0;
    }

    > .fail {
      color: red;
      font-size: 0.9rem;
      font-weight: 900;
      line-height: 1.5;
      margin: 12px 0;
    }
  }
}
</style>
