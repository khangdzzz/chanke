<script setup lang="ts">
import { IPlayer } from '@/utils'
import { BANKS } from '~/utils/constants'
import { isNumber, formatDate } from '~/utils/formatters'
definePageMeta({
  middleware: 'auth',
  layout: 'dashboad',
})

const playerTableColumns = ref([
  {
    id: 1,
    text: 'Thời gian',
    width: '15%',
  },
  {
    id: 2,
    text: 'Nick Name',
    width: '15%',
  },
  {
    id: 3,
    text: 'Tên Tài Khoản',
    width: '20%',
  },
  {
    id: 4,
    text: 'Số Tài Khoản',
    width: '15%',
  },
  {
    id: 5,
    text: 'Ngân Hàng',
    width: '18%',
  },
  {
    id: 6,
    text: 'Thao Tác',
    width: '17%',
  },
])

const playerStore = usePlayerStore()

onMounted(async () => {
  await playerStore.getPlayerData()
})

const players = computed(() => playerStore.player)

const userIdPlayerEdit = ref('')
const isEditPlayer = ref(false)

const isActiveEditPlayer = (userId: string) => {
  return userIdPlayerEdit.value === userId && isEditPlayer.value
}

const getBankInformation = (bankcode: string) => {
  return BANKS.find((bank) => bank.value === bankcode) ?? { value: '', label: '' }
}

const userid = ref('')
const accountName = ref('')
const accountNumber = ref('')
const selectedBank = ref({ value: '', label: '' })

const editPlayer = (player: IPlayer) => {
  isEditPlayer.value = true
  userIdPlayerEdit.value = player.userid
  userid.value = player.userid
  accountName.value = player.accountName
  accountNumber.value = player.accountNumber
  selectedBank.value = getBankInformation(player.bankcode)
}

const isLoadingUpdatePlayer = ref(false)
const userIdUpdated = ref('')

const isActiveLoadingUpdatePlayer = (userid: string) => {
  return userIdUpdated.value === userid && isLoadingUpdatePlayer.value
}

const statusUpdate = ref(false)
const snackbar = ref(false)
const notification = ref('')

const updateEditPlayer = async (player: IPlayer) => {
  userIdUpdated.value = player.userid
  isLoadingUpdatePlayer.value = true
  const dataUpdate = {
    userid: userid.value,
    accountName: accountName.value,
    accountNumber: accountNumber.value,
    bankcode: selectedBank.value.value,
  }

  await playerStore.updatePlayer(dataUpdate, player._id as string)
  if (playerStore.statusUpdate) {
    statusUpdate.value = true
    notification.value = 'Cập nhật thành công'
    snackbar.value = true
  } else {
    statusUpdate.value = false
    notification.value = 'Cập nhật thất bại, check lại internet or nickname đã tồn tại'
    snackbar.value = true
    isLoadingUpdatePlayer.value = false
    return
  }

  setTimeout(() => {
    isEditPlayer.value = false
    isLoadingUpdatePlayer.value = false
    userIdUpdated.value = ''
  }, 1000);
}

const userIdDelete = ref('')
const isLoadingDeletePlayer = ref(false)
const isActiveDeletePlayer = (userid: string) => {
  return userIdDelete.value === userid && isLoadingDeletePlayer.value
}

const deletePlayer = async (player: IPlayer) => {
  userIdDelete.value = player.userid
  isLoadingDeletePlayer.value = true
  await playerStore.deletePlayer(player._id as string)

  setTimeout(() => {
    isLoadingDeletePlayer.value = false
    userIdDelete.value = ''
  }, 100);
}

const toUpper = (e: { target: { value: string } }) => {
  accountName.value = e.target.value.toUpperCase()
}

const toLower = (e: { target: { value: string } }) => {
  userid.value = e.target.value.toLowerCase()
}

const nickname = ref('')

const searchPlayerByNickName = async () => {
  await playerStore.getPlayererDataByUserId(nickname.value)
}
</script>
<template>
  <div class="container-player">
    <div class="search-user">
      <input v-model="nickname" class="input" type="text" placeholder="Nhập nick name để tìm kiếm" />
      <v-icon class="icon" icon="mdi-magnify" @click="searchPlayerByNickName()"></v-icon>
    </div>
    <div class="table-manager">
      <table class="table">
        <thead class="header">
          <tr class="row">
            <th v-for="column in playerTableColumns" :width="column.width" :key="column.id" class="head">
              {{ column.text }}
            </th>
          </tr>
        </thead>
        <tbody class="body">
          <tr v-for="(player, index) in players" :key="index" class="row">
            <template v-if="!isActiveEditPlayer(player.userid as string)">
              <td class="cell -text">
                <span class="field -text">
                  {{ formatDate(player.createdAt as string) }}
                </span>
              </td>
              <td class="cell -text">
                <span class="field -text">
                  {{ player.userid }}
                </span>
              </td>
              <td class="cell -text">
                <span class="field -text">
                  {{ player.accountName }}
                </span>
              </td>
              <td class="cell -text">
                <span class="field -text">
                  {{ player.accountNumber }}
                </span>
              </td>

              <td class="cell -text">
                <span class="field -text">
                  {{ getBankInformation(player.bankcode).label }}
                </span>
              </td>

              <td class="cell -text">
                <v-btn class="button -edit" variant="text" @click="editPlayer(player)">
                  Edit
                </v-btn>
                <span>|</span>
                <v-btn class="button -delete" variant="text" :loading="isActiveDeletePlayer(player.userid)"
                  @click="deletePlayer(player)">
                  Delete
                </v-btn>
              </td>
            </template>
            <template v-else>
              <td class="cell -text">
                <span class="field -text">
                  {{ player.createdAt }}
                </span>
              </td>
              <td class="cell -text">
                <v-text-field v-model="userid" class="field -text" @input="toLower"></v-text-field>
              </td>
              <td class="cell -text">
                <v-text-field v-model="accountName" class="field -text" @input="toUpper"></v-text-field>
              </td>
              <td class="cell -text">
                <v-text-field v-model="accountNumber" class="field -text" @keypress="isNumber($event)"></v-text-field>
              </td>
              <td>
                <v-select v-model="selectedBank" :items="BANKS" item-value="value" item-title="label" variant="outlined"
                  class="row" dense :clearable="false" return-object></v-select>
              </td>

              <td class="cell -text">
                <v-btn class="button -update" variant="text" @click="updateEditPlayer(player)"
                  :loading="isActiveLoadingUpdatePlayer(player.userid)">
                  Update
                </v-btn>
                <span>|</span>
                <v-btn class="button -cancel" variant="text" @click="() => (isEditPlayer = false)">
                  Cancel
                </v-btn>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
    <v-snackbar v-model="snackbar" :timeout="1000" rounded="pill" location="top" :color="statusUpdate ? 'success' : 'red'"
      elevation="24" transition="fade-transition">
      {{ notification }}
    </v-snackbar>
  </div>
</template>
<style scoped lang="scss">
.container-player {
  padding-top: 10px;
  display: block;
  width: 100%;
}

.search-user {
  display: flex;
  justify-content: center;
  margin-bottom: 12px;
  gap: 10px;

  >.input {
    display: block;
    width: 50%;
    padding: 0.375rem 0.75rem;
    font-size: 0.9375rem;
    line-height: 1.6;
    color: #898989;
    background-color: #fff;
    background-clip: padding-box;
    border: 1px solid #eaeaea;
    border-radius: 3px;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
  }

  >.icon {
    background-color: $primary-color;
    color: #fff;
    padding: 20px 26px;
    border-radius: 4px;
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
</style>
