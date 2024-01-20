<script lang="ts" setup>
import { BANKS_MAP } from '~~/utils/constants'
import { formatDate, maskNumber } from '~~/utils/formatters'

const playerStore = usePlayerStore()
const playerData = computed(() => {
  return playerStore.player.map(item => {
    const bank = BANKS_MAP.find(bank => bank.bin === item.bankcode)
    return {
      ...item,
      logo: bank?.logo,
    }
  })
})

onMounted(async () => {
  await playerStore.getPlayerData()
})
</script>
<template>
  <div class="container-history">
    <table class="table">
      <thead class="head">
        <tr class="row">
          <th class="cell">Thời Gian</th>
          <th class="cell">Ngân Hàng</th>
          <th class="cell">Số Tài Khoản</th>
          <th class="cell">Nick Name</th>
        </tr>
      </thead>
      <tbody class="body">
        <tr class="row" v-for="player in playerData">
          <td class="cell">{{ formatDate(player.createdAt as string) }}</td>
          <td class="cell">
            <img :src="player.logo" width="100" />
          </td>
          <td class="cell">{{ maskNumber(player.accountNumber) }}</td>
          <td class="cell">{{ player.userid }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.container-history {
  display: block;
  overflow-x: auto;
  margin-bottom: 12px;
  > .table {
    width: 100%;
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

  > .table tbody > .row > .cell > .icon-copy,
  > .table tbody > .row > .cell > .icon-qr {
    cursor: pointer;
    background-color: #fff;
    color: $primary-color;
    margin-left: 5px;
  }

  > .table tbody > .row > .cell > .icon-copy:hover,
  > .table tbody > .row > .cell > .icon-qr:hover {
    color: #2bcbf3;
  }
}
</style>
