<script lang="ts" setup>
import { on } from 'events'

const codes = [1, 2, 3, 4, 5, 5]
const formatCode = (codes: number[]) => {
  const joinCodes = codes.join('-')
  return joinCodes.split('') || []
}

const gameStore = useGameStore()

const gameMiddleTitle = computed(() => {
  const endTwoNumber = ['CL_Game', 'TX_Game', '1/3_Game', 'X_Game', 'DS_Game']
  const threeEndNumber = ['G3_Game']
  const endNumber = ['T3_Game']

  if(endTwoNumber.includes(gameStore.gameType)) return 'TỔNG 2 SỐ CUỐI'
  else if(threeEndNumber.includes(gameStore.gameType)) return 'TỔNG 3 SỐ CUỐI'
  else if(endNumber.includes(gameStore.gameType)) return 'TỔNG SỐ'
})

const rewards = computed(() => gameStore.reward)

onMounted(async () => {
  gameStore.gameType = 'CL_Game'
  await gameStore.getReward(gameStore.gameType)
})

watch(
  () => gameStore.gameType,
  async () => {
    await gameStore.getReward(gameStore.gameType)
  }
)
</script>
<template>
  <div class="container-table">
    <table class="table">
      <thead class="head">
        <tr class="row">
          <th class="cell">NỘI DUNG</th>
          <th class="cell">{{ gameMiddleTitle }}</th>
          <th class="cell">TỈ LỆ</th>
        </tr>
      </thead>
      <tbody class="body">
        <tr class="row" v-for="reward in rewards" :key="reward?._id">
          <td class="cell">
            <v-chip variant="flat" color="green">fdsfaf2323e32fsaf {{ reward.content }}</v-chip>
          </td>
          <td class="cell">
            <span
              v-for="(code, index) in formatCode(reward.numberTLS)"
              :key="index"
              :class="{ code: Number(code) }"
            >
              {{ code }}
            </span>
          </td>
          <td class="cell">{{ reward.amount }}</td>
        </tr>
      </tbody>
    </table>
    <div class="formula">
      <h5 class="money">
        <span class="">Tiền thưởng</span>
      </h5>
      <b>=</b>
      <h5 class="money-put">
        <span class="">Tiền đặt</span>
      </h5>
      <b>x</b>
      <h5 class="ratio">
        <span class="">Tỉ lệ</span>
      </h5>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-table {
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
  > .table tbody > .row > .cell > .v-chip {
    background: linear-gradient(
      to bottom right,
      #00f2fe 0%,
      #1e63c3 100%
    ) !important;
  }

  > .table tbody > .row > .cell > .code {
    background: rgba(150, 156, 154, 0.1);
    border: 1px solid rgba(178, 185, 183, 0.1);
    border-radius: 3px;
    padding: 3px;
  }

  > .formula {
    display: flex;
    justify-content: center;
    gap: 10px;
    align-items: center;
    margin: 10px 0;
  }

  > .formula > .money {
    background: $primary-color;
    color: #fff;

    padding: 5px 10px;
    border-radius: 5px;
    white-space: nowrap;
  }

  > .formula > .money-put,
  > .formula > .ratio {
    white-space: nowrap;
    background: linear-gradient(
      to bottom right,
      #fbc434 0%,
      #f66b4e 100%
    ) !important;
    color: #fff;

    padding: 5px 10px;
    border-radius: 5px;
  }
}
</style>
