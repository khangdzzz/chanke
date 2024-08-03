<script lang="ts" setup>
import '@vuepic/vue-datepicker/dist/main.css'
import { formatDate } from '~/utils/formatters'
import { BANKS } from '../../../utils/constants'

definePageMeta({
  middleware: 'auth',
  layout: 'dashboad',
})

const giftCodeStore = useGiftCode()

onMounted(async () => {
  await giftCodeStore.getAllLogsGiftCode()
})

const listLogGiftCodes = computed(() => giftCodeStore.listLogsGiftCodes)
</script>
<template>
  <div class="gift-container">
    <h1 class="title">Quản Lí Log Gift Code</h1>
    <div class="container-search">
      <table class="table">
        <thead class="head">
          <tr class="row">
            <th class="cell">Người Chơi</th>
            <th class="cell">Gift Code Text</th>
            <th class="cell">IP</th>
            <th class="cell">Thời Gian Sử Dụng</th>
            <th class="cell">Trạng Thái Nhập</th>
          </tr>
        </thead>
        <tbody class="body">
          <tr
            v-for="item in listLogGiftCodes"
            :key="item.giftcodeText"
            class="row"
          >
            <td class="cell">{{ item.giftcodeText }}</td>
            <td class="cell">{{ item.NguoiChoi }}</td>
            <td class="cell">{{ item.Ip }}</td>
            <td class="cell">
              {{ item.NgaySuDung ? formatDate(item.NgaySuDung as string) : '' }}
            </td>
            <td class="cell">
              {{ item.TrangThaiNhap ? 'Thành Công' : 'Thất Bại' }}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
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
