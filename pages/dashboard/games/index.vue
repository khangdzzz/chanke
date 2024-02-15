<script lang="ts" setup>
import { IListGameDetail } from '~~/utils'

definePageMeta({
  middleware: 'auth',
  layout: 'dashboad',
})
const gameType = ref('')
const content = ref('')
const name = ref('')
const numberTLS = ref('')
const amount = ref('')
const resultTypeDefautl = ref('count_2')

const gameStore = useGameStore()

const resultTypesList = computed(() => gameStore.resultTypeList.map(item => item._id))
const listGamesDetail = computed(() => gameStore.listGamesDetail)

onMounted(async () => {
  await gameStore.getAllResultType()
  await gameStore.getListGameDetail()
})

const isExitContentInDB = computed(() => gameStore.isExitContentInDB)

watch(content, async (value) => {
  await gameStore.checkContentExit(value)
})

const isLoadingCreate = ref(false)
const statusCreateNewGame = computed(() => gameStore.statusCreateNewGame)
const openFormCreateGame = ref(false)

const AddNewGame = async () => {
  isLoadingCreate.value = true
  const body = {
    gameType: gameType.value,
    content: content.value,
    betName: content.value,
    name: name.value,
    numberTLS: numberTLS.value.split(',').map(item => Number(item.trim())),
    amount: Number(amount.value),
    resultType: resultTypeDefautl.value,
  }

  await gameStore.createNewGameDetail(body)
  await gameStore.getListGameDetail()
  isLoadingCreate.value = false
  openFormCreateGame.value = false
}

const updateStatusGame = async (game: IListGameDetail) => {
  const body = {
    status: !game.status,
  }
  await gameStore.updateStatusGame(game._id as string, body)
  await gameStore.getListGameDetail()
}
</script>
<template>
  <div class="game-container">
    <v-btn class="add"  v-if="!openFormCreateGame" append-icon="mdi-plus" @click="() => openFormCreateGame = true">Tạo Thêm Game</v-btn>
    <div class="form" v-if="openFormCreateGame">
      <v-text-field v-model="gameType" class="row -gametype" label="Nhập Type Game, vi du: TX_Game" outlined ></v-text-field>
      <v-text-field v-model="name" class="row -gametype" label="Nhập Tên Game, vi du: Tài Xỉu" outlined ></v-text-field>
      <v-text-field 
        v-model="content" 
        class="row -content" 
        label="Nhập Nội Dung Game, ví dụ: A1" 
        :error="isExitContentInDB"
        :error-messages="isExitContentInDB ? ['Nội dung đã tồn tại'] : []"
        outlined 
      ></v-text-field>
      <v-text-field v-model="numberTLS" class="row -tls" label="Nhập số kết quả, ví dụ: 1, 2, 3" outlined ></v-text-field>
      <v-text-field v-model="amount" class="row -amount" label="Hệ số nhân khi thắng" outlined ></v-text-field>
      <v-select
          v-model="resultTypeDefautl"
          :items="resultTypesList"
          variant="outlined"
          label="Chọn cách tính kết quả"
          class="row"
          dense
          :clearable="false"
          return-object
      ></v-select>
      <v-btn class="add" @click="AddNewGame" :loading="isLoadingCreate" append-icon="mdi-plus">Create New Game</v-btn>
      <span class="success" v-if="statusCreateNewGame == 'success'">Thành Công</span>
      <span class="fail" v-if="statusCreateNewGame == 'fail'">Thất Bại</span>
    </div>
     <div class="table-game">
    <table class="table">
      <thead class="head">
        <tr class="row">
          <th class="cell">Tên Game</th>
          <th class="cell">Result Type</th>
          <th class="cell">Status</th>
        </tr>
      </thead>
      <tbody class="body">
        <tr class="row" v-for="item in listGamesDetail" :key="item._id">
          <td class="cell">{{ item.name }}</td>
          <td class="cell">{{ item.gameType }}</td>
          <td class="cell">
            <v-chip class="action" variant="flat" :color="item.status ? 'green' : ' '" @click="updateStatusGame(item)">
              {{ item.status ? "Hoạt động" : "Bảo trì" }}
            </v-chip>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
  </div>
</template>
<style lang="scss" scoped>
.game-container {
  display: block;
  overflow-x: auto;
  padding: 12px;
  color: #000;

  > .back {
    margin-bottom: 20px;
  }
  > .back a {
    color: white;
    text-decoration: none;
  }

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
      width: 200px;
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

.table-game {
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

  > .table tbody > .row > .cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    border: 1px solid #e0e0e0;
    white-space: nowrap;
  }

  > .table tbody > .row > .cell >.action {
    cursor: pointer;
  }

  > .table tbody > .row:nth-child(odd) {
    background-color: #fff;
  }

  > .table tbody > .row:nth-child(even) {
    background-color: #f6f6f6;
  }
}
</style>
