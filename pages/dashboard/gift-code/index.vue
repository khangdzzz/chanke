<script lang="ts" setup>
import '@vuepic/vue-datepicker/dist/main.css'
import { formatDate } from '~/utils/formatters'
import { BANKS } from '../../../utils/constants'

definePageMeta({
  middleware: 'auth',
  layout: 'dashboad',
})

const giftCode = ref('')
const money = ref(0)

const giftCodeStore = useGiftCode()

const randomGiftCode = () => {
  const characters =
    'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
  let result = ''
  const charactersLength = characters.length
  for (let i = 0; i < 20; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength))
  }

  giftCode.value = result
}

const createGiftCode = async () => {
  if (!giftCode.value) {
    return alert('Vui lý nhập gift code')
  }

  if (!money.value) {
    return alert('Vui lý nhập số tiền')
  }

  const body = {
    giftCodeText: giftCode.value,
    money: money.value,
  }

  await giftCodeStore.createGiftCode(body)

  if (giftCodeStore.statusCreateGiftCode) {
    giftCode.value = ''
    money.value = 0

    snackbar.value = true
    notification.value = 'Tạo gift code successfully'
  } else {
    snackbar.value = true
    notification.value = 'Tạo gift code failed'
  }

  await giftCodeStore.getAllGiftCode()
}

onMounted(async () => {
  await giftCodeStore.getAllGiftCode()
})

const listGiftCodes = computed(() => giftCodeStore.listGiftCodes)

const isCreateGiftCode = computed(() => giftCodeStore.statusCreateGiftCode)
const snackbar = ref(false)
const notification = ref('')
</script>
<template>
  <div class="gift-container">
    <h1 class="title">Thêm Mới Gift-Code</h1>
    <div class="gift-code">
      <h3 class="label">Gift Code Text</h3>
      <input v-model="giftCode" class="input" type="text" />
      <v-btn @click="randomGiftCode()">Random</v-btn>
    </div>
    <div class="money">
      <h3 class="label">Số tiền</h3>
      <input
        v-model="money"
        class="input"
        type="text"
        placeholder="Nhập số tiền"
      />
    </div>

    <v-btn class="create" @click="createGiftCode()">Tạo Gift Code</v-btn>

    <div class="container-search">
      <table class="table">
        <thead class="head">
          <tr class="row">
            <th class="cell">Gift Code Text</th>
            <th class="cell">Số Tiền</th>
            <th class="cell">Trạng Thái</th>
            <th class="cell">Người Chơi</th>
            <th class="cell">Thời Gian Tạo</th>
            <th class="cell">Thời Gian Sử Dụng</th>
          </tr>
        </thead>
        <tbody class="body">
          <tr
            v-for="item in listGiftCodes"
            :key="item.giftcodeText"
            class="row"
          >
            <td class="cell">{{ item.giftcodeText }}</td>
            <td class="cell">{{ item.sotien }}</td>
            <td class="cell">{{ item.trangthai ? 'Đã Dùng' : 'Chưa Dùng' }}</td>
            <td class="cell">{{ item.NguoiChoi }}</td>

            <td class="cell">
              {{
                item.ThoiGianTao ? formatDate(item.ThoiGianTao as string) : ''
              }}
            </td>
            <td class="cell">
              {{
                item.ThoiGianSudung
                  ? formatDate(item.ThoiGianSudung as string)
                  : ''
              }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
  <v-snackbar
    v-model="snackbar"
    :timeout="1000"
    rounded="pill"
    location="top"
    :color="isCreateGiftCode ? 'success' : 'red'"
    elevation="24"
    transition="fade-transition"
  >
    <div style="width: 100%; text-align: center">
      {{ notification }}
    </div>
  </v-snackbar>
</template>

<style lang="scss" scoped>
.gift-container {
  display: flex;
  flex-direction: column;
  gap: 20px;

  > .title {
    color: black;
  }

  > .gift-code > .label,
  > .money > .label {
    color: black;
    min-width: 200px;
  }

  > .gift-code {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  > .gift-code > .input {
    border: 1px solid #0300006b;
    border-radius: 4px;
    padding: 5px 20px;
    width: 300px;
    color: black;
  }

  > .money {
    display: flex;
    align-items: center;
    gap: 25px;
  }

  > .money > .input {
    border: 1px solid #0300006b;
    border-radius: 4px;
    padding: 5px 20px;
    width: 300px;
    color: black;
  }

  > .create {
    max-width: 200px;
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
