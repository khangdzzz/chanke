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
      nameBank: bank?.shortName
    }
  })
})

const { checkTokenValid } = useAuth()

const isLogin = ref(false)

onMounted(async () => {
  isLogin.value = checkTokenValid()
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
  <div class="container-table-bank">
    <h3 class="title">
      <v-icon class="icon" icon="mdi-bank"></v-icon>
      THÔNG TIN BANK NHẬN
    </h3>
    <div class="warning" v-if="!isLogin">
      ĐỂ LẤY THÔNG TIN BANK CHUYỂN KHOẢN, VUI LÒNG
      <span class="login"><nuxt-link to="/user/login">ĐĂNG NHẬP</nuxt-link></span> HOẶC
      <span class="register"><nuxt-link to="/user/register">ĐĂNG KÝ NHANH</nuxt-link></span>
    </div>
    <table class="table" v-if="isLogin">
      <thead class="head">
        <tr class="row">
          <th class="cell">Trạng thái</th>
          <th class="cell">Ngân Hàng</th>
          <th class="cell">Số Tài Khoản</th>
          <th class="cell">Chủ Tài Khoản</th>
          <th class="cell">Mã QR</th>
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
            {{ item.nameBank }}
          </td>
          <td class="cell">
            {{ item.accountNumber }}
            <v-icon class="icon-copy" icon="mdi-content-copy" @click="copyBankNumber(item.accountNumber)" />

            <v-snackbar v-model="snackbar" :timeout="1000" rounded="pill" location="top" color="success" elevation="24"
              transition="fade-transition">
              {{ text }}
            </v-snackbar>
          </td>
          <td class="cell">{{ item.name }}</td>
          <td class="cell"><v-icon class="icon-qr" icon="mdi-qrcode" @click="openQrCode(item.qr as string)" /></td>
        </tr>
      </tbody>
    </table>
    <V2HomeRateBankQrCode :logo-qr-code="logoQrCode" />
  </div>
</template>
<style lang="scss" scoped>
.container-table-bank {
  display: block;
  overflow-x: auto;
  margin-bottom: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  flex: 1;

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

  >.warning {
    font-weight: 500;
    font-size: 15px;
    text-align: center;
    padding: 10px 20px;
  }

  >.warning>.login a,
  >.warning>.register a {
    color: #fef142;
    font-weight: 600;
    text-decoration: none;
  }

  >.table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  >.table>.head {
    border-bottom: 4px solid rgba(255, 255, 255, 0.05);
  }

  >.table>.head>.row>.cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 900;
    line-height: 1.5;
    text-align: center;
  }

  >.table tbody>.row {
    border-bottom: 4px solid rgba(255, 255, 255, 0.05);
  }

  >.table tbody>.row>.cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;

  }

  >.table tbody>.row>.cell>.icon-copy,
  >.table tbody>.row>.cell>.icon-qr {
    cursor: pointer;
    color: #fe5b09;
    margin-left: 5px;
  }

  >.table tbody>.row>.cell>.icon-copy:hover,
  >.table tbody>.row>.cell>.icon-qr:hover {
    color: #903001;
  }
}
</style>
