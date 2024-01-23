<script setup lang="ts">
import { Game } from '@/utils'
definePageMeta({
  middleware: 'auth',
  layout: 'dashboad',
})

const performanceCbTableColumns = ref([
  {
    id: 2,
    text: 'Nội Dung',
    width: '10%',
  },
  {
    id: 3,
    text: 'Dãy Số Kết Quả',
    width: '50%',
  },
  {
    id: 4,
    text: 'Hệ Số',
    width: '10%',
  },
  {
    id: 5,
    text: 'Cách Tính',
    width: '10%',
  },
  {
    id: 6,
    text: 'Thao Tác',
    width: '20%',
  },
])

const gameStore = useGameStore()

onMounted(async () => {
  await gameStore.getAllGames()
  await gameStore.getAllResultType()
})

const resultTypesList = computed(() => gameStore.resultTypeList.map(item => item._id))


const listGames = computed(() => gameStore.listGames)

const games = computed(() => {
  return listGames.value.find((game) => game._id === defaultGame.value)?.games
})

const defaultGame = ref('TX_Game')

const nameGames = computed(() => {
  return listGames.value.map((game) => game._id)
})

const isEditGame = ref(false)
const idEdit = ref('')

const content = ref('')
const numberTLS = ref('')
const amount = ref('')
const resultType = ref('')

const idUpdate = ref('')
const idDelete = ref('')

const isActiveEditGame = (id: string) => {
  return isEditGame.value && idEdit.value == id
}

const isActiveLoadingUpdate = (id: string) => {
  return isEditGame.value && idUpdate.value == id
}

const isActiveDeleteGAme = (id: string) => {
  return idDelete.value == id
}

const handleEditGame = (id: string, game: Game) => {
  content.value = game.content
  numberTLS.value = game.numberTLS.join(', ')
  amount.value = game.amount.toString()
  resultType.value = game.resultType

  isEditGame.value = true
  idEdit.value = id
}

const updateGameRating = async (game: Game) => {
  idUpdate.value = game._id as string
  const body = {
    gameType: game.gameType,
    content: content.value,
    betName: content.value,
    numberTLS: numberTLS.value.split(',').map((item) => Number(item)),
    amount: Number(amount.value),
    resultType: resultType.value,
  }

  await gameStore.updateGame(game._id as string, body)
  setTimeout(() => {
    isEditGame.value = false
    idEdit.value = ''
    idUpdate.value = ''
  }, 1000)
}

const deleteGame = async (id: string) => {
  idDelete.value = id
  await gameStore.deleteGame(id)
  isEditGame.value = false
  setTimeout(() => {
    idDelete.value = ''
  }, 1000)
}

const newContent = ref('')
const newNumberTLS = ref('')
const newAmount = ref('')
const newResultType = ref('end')
const isAddGame = ref(false)
const isLoadingCreateGame = ref(false)

const isExitContentInDB = computed(() => gameStore.isExitContentInDB)

watch(newContent, async (value) => {
  await gameStore.checkContentExit(value)
})

const createNewGameRating = async () => {
  isLoadingCreateGame.value = true
  const body = {
    gameType: defaultGame.value,
    content: newContent.value,
    betName: newContent.value,
    numberTLS: newNumberTLS.value.split(',').map((item) => Number(item)),
    amount: Number(newAmount.value),
    resultType: newResultType.value,
  }

  await gameStore.createNewGame([body])
  isAddGame.value = false
  isLoadingCreateGame.value = false
}

</script>
<template>
  <div class="container-games">
    <div class="choose-game">
      <v-select v-model="defaultGame" :items="nameGames" variant="outlined" label="Chọn game" class="game" dense
        :clearable="false" return-object></v-select>
      <v-btn class="newgame" append-icon="mdi-plus">
        <nuxt-link to="/games">Tạo mới game</nuxt-link>
      </v-btn>
    </div>

    <div class="table-manager">
      <table class="table">
        <thead class="header">
          <tr class="row">
            <th v-for="column in performanceCbTableColumns" :width="column.width" :key="column.id" class="head">
              {{ column.text }}
            </th>
          </tr>
        </thead>
        <tbody class="body">
          <tr v-for="(game, index) in games" :key="index" class="row">
            <template v-if="!isActiveEditGame(game._id as string)">
              <td class="cell -text">
                <span class="field -text">
                  {{ game.content }}
                </span>
              </td>
              <td class="cell -text">
                <span class="field -text">
                  {{ game.numberTLS.join(', ') }}
                </span>
              </td>
              <td class="cell -text">
                <span class="field -text">
                  {{ game.amount }}
                </span>
              </td>
              <td class="cell -text">
                <span class="field -text">
                  {{ game.resultType }}
                </span>
              </td>

              <td class="cell -text">
                <v-btn class="button -edit" variant="text" @click="handleEditGame(game._id as string, game)">
                  Edit
                </v-btn>
                <span>|</span>
                <v-btn class="button -delete" variant="text" :loading="isActiveDeleteGAme(game._id as string)"
                  @click="deleteGame(game._id as string)">
                  Delete
                </v-btn>
              </td>
            </template>
            <template v-else>
              <td class="cell -text">
                <v-text-field v-model="content" class="field -text"></v-text-field>
              </td>
              <td class="cell -text">
                <v-text-field v-model="numberTLS" class="field -text"></v-text-field>
              </td>
              <td class="cell -text">
                <v-text-field v-model="amount" class="field -text"></v-text-field>
              </td>
              <td class="cell -text">
                <v-text-field v-model="resultType" class="field -text"></v-text-field>
              </td>

              <td class="cell -text">
                <v-btn class="button -update" variant="text" @click="updateGameRating(game)"
                  :loading="isActiveLoadingUpdate(game._id as string)">
                  Update
                </v-btn>
                <span>|</span>
                <v-btn class="button -cancel" variant="text" @click="() => (isEditGame = false)">
                  Cancel
                </v-btn>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
    <div v-if="isAddGame" class="form-add">
      <div class="cell -content">
        <v-text-field
          v-model="newContent" 
          class="field -text"
          :error="isExitContentInDB"
          :error-messages="isExitContentInDB ? ['Nội dung đã tồn tại'] : []"
        ></v-text-field>
      </div>
      <div class="cell -tls">
        <v-text-field v-model="newNumberTLS" label="Dãy số kết quả, ví dụ: 1, 2, 3" class="field -text"></v-text-field>
      </div>
      <div class="cell -amount">
        <v-text-field v-model="newAmount" class="field -text"></v-text-field>
      </div>

       <v-select
          v-model="newResultType"
          :items="resultTypesList"
          variant="outlined"
          label="Chọn cách tính kết quả"
          class="row"
          dense
          :clearable="false"
          return-object
      ></v-select>

      <div class="cell -btn">
        <v-btn class="button -add" variant="text" :loading="isLoadingCreateGame" @click="createNewGameRating">
          Thêm Mới
        </v-btn>
        <span>|</span>
        <v-btn class="button -cancel" variant="text" @click="() => (isAddGame = false)">
          Huỷ
        </v-btn>
      </div>
    </div>
    <v-btn class="btn-add" append-icon="mdi-plus" @click="() => (isAddGame = true)">
      Tạo mới
    </v-btn>
  </div>
</template>
<style scoped lang="scss">
.container-games {
  padding-top: 10px;
  display: block;
  width: 100%;

  >.choose-game {
    display: flex;
    gap: 20px;
  }

  >.choose-game>.game {
    max-width: 300px;
    margin-bottom: 20px;
  }

  >.choose-game > .newgame a {
    text-decoration: none;
    color: $color-white;
  }
}

.table-manager {
  border: 1px solid #f4f3f3;
  display: block;
  overflow-x: auto;

  >.table {
    width: 100%;
  }

  >.table>.header>.row {
    background-color: $primary-color;
    height: 32px;
    line-height: 1;
    font-weight: 700;
    color: $color-white;
    font-size: 0.875rem;
    padding: 8px;
    text-align: left;
  }

  >.table>.header>.row>.head {
    font-weight: 700;
    padding: 0 4px;
  }

  >.table>.header>.row>.head:last-child {
    text-align: right;
    padding-right: 60px;
  }

  >.table>.body>.row {
    display: revert;
    color: $color-black;
    margin: 15px;
  }

  >.table>.body>.row>.cell {
    text-align: left;
    height: 48px;
    line-height: 48px;
    font-size: 0.875rem;
    padding: 0 8px;
  }

  >.table>.body>.row>.cell:last-child {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  >.table>.body>.row>.cell>.button {
    height: 48px;
  }

  >.table>.body>.row>.cell>.button.-edit {
    color: $color-blue !important;
    cursor: pointer;
  }

  >.table>.body>.row>.cell>.button.-delete {
    color: $color-red !important;
    cursor: pointer;
  }

  >.table>.body>.row>.cell>.button.-update {
    color: $color-blue !important;
    cursor: pointer;
  }

  >.table>.body>.row>.cell>.button.-cancel {
    color: $color-black !important;
    cursor: pointer;
  }
}

.form-add {
  margin-top: 20px;
  display: flex;
  gap: 10px;
  justify-content: space-between;

  >.cell.-content {
    width: 10%;
  }

  >.cell.-tls {
    width: 50%;
  }

  >.cell.-amount {
    width: 10%;
  }

  >.cell.-result {
    width: 10%;
  }

  >.cell.-btn {
    width: 20%;
  }

  >.cell:last-child {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    align-items: center;
    height: 40px;
  }

  >.cell>.button.-cancel {
    color: $color-black !important;
  }
}

.btn-add {
  font-weight: 600;
  margin-top: 20px;
}
</style>
