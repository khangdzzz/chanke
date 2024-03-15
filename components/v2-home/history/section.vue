<script lang="ts" setup>
import { formatDate } from "~/utils/formatters"

import { storeToRefs } from 'pinia'

const dialogConfirmStore = useDialogConfirmStore()
const { isShowMessageGame } = storeToRefs(dialogConfirmStore)

const { checkTokenValid, getUserName } = useAuth()

const username = computed(() => getUserName())

const isLogin = computed(() => checkTokenValid())

const transactionStore = useTransactionStore()

const page = ref(1)
const limit = 10
const condition = ref("")

onMounted(async () => {
  if (!isLogin.value) return
  condition.value = `&nickname=${username.value}`
  await transactionStore.getHistoryTransactionAuth(condition.value, page.value, limit)
})

const transactions = computed(() => transactionStore.historyTransactionAuth?.transactions)
const message = ref('')

const showMessage = (value: string) => {
  message.value = value

  isShowMessageGame.value = true
}

</script>
<template>
  <div class="container-history" v-if="isLogin">
    <h3 class="title">
      <v-icon class="icon" icon="mdi-clock-time-eight-outline"></v-icon>
      LỊCH SỬ CHƠI GẦN ĐÂY
    </h3>
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
        </tr>
      </thead>
      <tbody class="body">
        <tr class="row" v-for="item in transactions" :key="item._id">
          <td class="cell">{{ formatDate(item.createdAt as string) }}</td>
          <td class="cell">{{ item.nickname }}</td>
          <td class="cell">{{ item.accountNumberClient }}</td>
          <td class="cell">{{ item.transId }}</td>
          <td class="cell">{{ Number(item.amount ?? 0).toLocaleString() }}</td>
          <td class="cell">{{ Number(item.bonus ?? 0).toLocaleString() }}</td>
          <td class="cell">{{ item.detailGameName }}</td>
          <td class="cell">
            <!-- <span class="code">{{ item.code }}</span> -->
            <span class="code"><v-icon class="icon" icon="mdi-eye-circle-outline"
                @click="showMessage(item.code)"></v-icon></span>
          </td>
          <td class="cell">
            <span class="betName">{{ item.betValue }}</span>
          </td>
          <td class="cell">
            <span class="result" :class="{ '-win': item.status === 'win', '-lose': item.status != 'win' }">
              {{
    item.status.toUpperCase()
  }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  <DialogMessage :message="message"/>
</template>

<style lang="scss" scoped>
.container-history {
  display: block;
  overflow-x: auto;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);

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

  >.table {
    display: block;
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  >.table>.head {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  >.table>.head>.row>.cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 900;
    line-height: 1.5;
    text-align: center;
  }

  >.table tbody>.row {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
  }

  >.table tbody>.row>.cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
  }

  >.table tbody>.row>.cell>.code>.icon {
    cursor: pointer;
    color: #fe5b09;
  }

  >.table tbody>.row>.cell>.betName {
    cursor: pointer;
    background-color: $primary-color;
    color: #fff;
    padding: 1px 2px;
    border-radius: 1px;
  }


  >.table tbody>.row>.cell>.-lose {
    background-color: #ff4d4f;
    padding: 3px 6px;
    color: #fff;
    border-radius: 3px;
  }

  >.table tbody>.row>.cell>.-win {
    padding: 3px 6px;
    color: #fff;
    border-radius: 3px;
    background: linear-gradient(to bottom right, #62fb62, #21a544) !important;
  }
}
</style>
