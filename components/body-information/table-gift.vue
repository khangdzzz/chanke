<script lang="ts" setup>
import { BANKS_MAP } from '~~/utils/constants'
import copy from 'clipboard-copy'

const adminStore = useAdminStore()
const bankAdminClient = computed(() => {
  return adminStore.bankAdminClient.map(item => {
    const bank = BANKS_MAP.find(bank => bank.bin === item.binBank)
    return {
      ...item,
      logo: bank?.logo,
    }
  })
})


onMounted(async () => {
  await adminStore.getBankAdminClient()
})

const dialogConfirmStore = useDialogConfirmStore()
const logoQrCode = ref('')

const openQrCode = (logo: string) => {
  logoQrCode.value = logo
  dialogConfirmStore.showQrCode()
}

const snackbar = ref(false)
const text = ref('')

const copyBankNumber = (accountNumber: string) => {
  copy(accountNumber)
  text.value = `Sao chép thành công < ${accountNumber} >`
  snackbar.value = true
}

</script>
<template>
  <div class="table-gift">
    <table class="table">
      <thead class="head">
        <tr class="row">
          <th class="cell">Trạng thái</th>
          <th class="cell">Ngân Hàng</th>
          <th class="cell">Số Tài Khoản</th>
          <th class="cell">Chủ Tài Khoản</th>
        </tr>
      </thead>
      <tbody class="body">
        <tr class="row" v-for="item in bankAdminClient" :key="item.accountNumber">
          <td class="cell">
            <v-chip variant="flat" :color="item.active ? 'green' : ' '">
              {{ item.active ? "Hoạt động" : "Bảo trì" }}
            </v-chip>
          </td>
          <td class="cell">
            <img :src="item.logo" width="100" />
          </td>
          <td class="cell">
            {{ item.accountNumber }}
            <v-icon class="icon-copy" icon="mdi-content-copy" @click="copyBankNumber(item.accountNumber)" />
            <v-icon class="icon-qr" icon="mdi-qrcode" @click="openQrCode(item.qr as string)" />
            <v-snackbar v-model="snackbar" :timeout="1000" rounded="pill" location="top" color="success" elevation="24"
              transition="fade-transition">
              {{ text }}
            </v-snackbar>
          </td>
          <td class="cell">{{ item.name }}</td>
        </tr>
      </tbody>
    </table>
    <BodyInformationQrCode :logo-qr-code="logoQrCode" />
  </div>
</template>

<style lang="scss" scoped>
.table-gift {
  display: block;
  overflow-x: auto;
  margin-bottom: 12px;

  >.table {
    width: 100%;
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

  >.table tbody>.row>.cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 400;
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

  >.table tbody>.row>.cell>.icon-copy,
  >.table tbody>.row>.cell>.icon-qr {
    cursor: pointer;
    background-color: #fff;
    color: $primary-color;
    margin-left: 5px;
  }

  >.table tbody>.row>.cell>.icon-copy:hover,
  >.table tbody>.row>.cell>.icon-qr:hover {
    color: #2bcbf3;
  }
}
</style>
