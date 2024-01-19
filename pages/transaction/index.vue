<script lang="ts" setup>
import { BANK_USED } from '~/utils/constants'
import { isNumber, formatDate } from '~/utils/formatters'

definePageMeta({
  middleware: 'auth',
  layout: 'dashboad',
})

const selectedBank = ref({ code: 'VCB', shortName: '(970436) Vietcombank' })
const amount = ref(100000)
const content = ref('hongha T')

const adminStore  = useAdminStore()
const isHandleTransactionSuccess = computed(() => adminStore.isHandleTransactionSuccess)
const isHandleTransactionFail = computed(() => adminStore.isHandleTransactionFail)
const isLoading = ref(false)

const handleFakeTransaction = async () => {
  isLoading.value = true
  const body = {
    content: content.value,
    amount: Number(amount.value),
    bank_type: selectedBank.value.code,
  }
 
  await adminStore.handleTransaction(body)
  isLoading.value = false
  setTimeout(() => {
    adminStore.isHandleTransactionSuccess = false
    adminStore.isHandleTransactionFail = false
  }, 1000);
}

</script>
<template>
  <div class="transaction-container">
    <div class="form">
      <v-select
          v-model="selectedBank"
          :items="BANK_USED"
          item-value="code"
          item-title="shortName"
          variant="outlined"
          label="Loại ngân hàng "
          class="row"
          dense
          :clearable="false"
          return-object
      ></v-select>
      <v-text-field 
        class="row -money" 
        v-model="amount"
        label="Nhập tiền cược" 
        outlined  
        @keypress="isNumber($event)"
      ></v-text-field>
       <v-text-field 
        class="row -money" 
        v-model="content"
        label="Nhập content (hoangnam n1)" 
        outlined  
      ></v-text-field>
      <v-btn class="add" @click="handleFakeTransaction()" :loading="isLoading">Test Transaction</v-btn>
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
