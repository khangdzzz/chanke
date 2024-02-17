<script lang="ts" setup>
const gameStore = useGameStore()

const gameMiddleTitle = computed(() => {
  if (resultType.value == 'count_2') return 'TỔNG 2 SỐ CUỐI'
  else if (resultType.value == 'count_3') return 'TỔNG 3 SỐ CUỐI'
  else if (resultType.value == 'end') return 'SỐ CUỐI'
})

const rewards = computed(() => gameStore.reward)
const resultType = computed(() => gameStore.reward[0]?.resultType)
const gameName = computed(() => gameStore.gameName)

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

const { getUserName } = useAuth()

const username = computed(() => getUserName())

const roleGame = ref('KẾT QUẢ TÍNH BẰNG SỐ CUỐI CỦA MÃ GIAO DỊCH BANK KHI CHUYỂN KHOẢN VÀO BANK NHẬN CỦA WEB TỶ LỆ SẼ LÀ <span class="note">x2.5</span> CHO LỆNH WIN ĐẦU TIỀN(>= 50K VÀ <= 100K)')
</script>
<template>
  <div class="container-table-ratio">
    <h3 class="title">
      <v-icon class="icon" icon="mdi-dice-5-outline"></v-icon>
      {{ gameName }}
    </h3>
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
            {{ username ? username : 'nickname' }} {{ reward.content }}
          </td>
          <td class="cell number">
            <span v-for="(code, index) in reward.numberTLS" :key="index" :class="{ 'code': code || code == 0 }">
              {{ code }}
            </span>
          </td>
          <td class="cell">{{ reward.amount }}</td>
        </tr>
      </tbody>
    </table>
    <!-- <div class="role" v-html="roleGame"></div> -->
  </div>
</template>
<style lang="scss" scoped>
.container-table-ratio {
  display: block;
  overflow-x: auto;
  margin-bottom: 12px;
  border-radius: 8px;
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

  >.role {
    line-height: 30px;
    width: 100%;
    text-align: center;
    padding: 25px 20px 40px 20px;
    font-size: 14px;
    font-style: italic;
  }

  >.table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
  }

  >.table>.head {
    color: white;
    border-bottom: 4px solid rgba(255, 255, 255, 0.05);
  }

  >.table>.head>.row>.cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 500;
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

  >.table tbody>.row>.cell.number {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 5px;
  }

  >.table tbody>.row>.cell>.v-chip {
    background: linear-gradient(to bottom right,
        #00f2fe 0%,
        #1e63c3 100%) !important;
  }

  >.table tbody>.row>.cell>.code {
    background-color: rgba(254, 88, 8, 0.1);
    border: 1px solid rgba(178, 185, 183, 0.1);
    border-radius: 3px;
    padding: 3px 8px;
  }
}
</style>
