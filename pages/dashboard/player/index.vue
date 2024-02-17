<script setup lang="ts">
import { User } from '@/utils'
import { BANKS } from '~/utils/constants'
import { isNumber, formatDate } from '~/utils/formatters'
import removeAccents from 'remove-accents'
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
    text: 'User Name',
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

const userStore = useUserStore()
const page = ref(1)
const limit = ref(10)

onMounted(async () => {
  await userStore.getAllUsers(page.value, limit.value)
})

const users = computed(() => userStore.containerUsers?.users)

const totalPage = computed(() => userStore.containerUsers?.totalPages)

const isShowPagination = computed(() => {
  return totalPage.value ? totalPage.value > 1 : false
})

const usernameEdit = ref('')
const isEditUser = ref(false)

const isActiveEditUser = (username: string) => {
  return usernameEdit.value === username && isEditUser.value
}

const getBankInformation = (bankcode: string) => {
  return BANKS.find((bank) => bank.value === bankcode) ?? { value: '', label: '' }
}

const username = ref('')
const accountName = ref('')
const accountNumber = ref('')
const selectedBank = ref({ value: '', label: '' })

watch(username, (newValue) => {
  username.value = removeAccents(newValue)
})

const editUser = (user: User) => {
  isEditUser.value = true
  usernameEdit.value = user.username
  username.value = user.username
  accountName.value = user.accountName || ''
  accountNumber.value = user.accountNumber || ''
  selectedBank.value = user.bankcode ? getBankInformation(user.bankcode) : { value: '', label: '' }
}

const isLoadingUpdateUser = ref(false)
const usernameUpdated = ref('')

const isActiveLoadingUpdateUser = (username: string) => {
  return usernameUpdated.value === username && isLoadingUpdateUser.value
}

const statusUpdate = ref(false)
const snackbar = ref(false)
const notification = ref('')

const updateEditUser = async (user: User) => {
  usernameUpdated.value = user.username
  isLoadingUpdateUser.value = true
  const dataUpdate = {
    username: user.username,
    accountName: accountName.value,
    accountNumber: accountNumber.value,
    bankcode: selectedBank.value.value,
  }

  await userStore.updateUser(dataUpdate)
  await userStore.getAllUsers(page.value, limit.value)
  if (userStore.isUpdated) {
    statusUpdate.value = true
    notification.value = 'Cập nhật thành công'
    snackbar.value = true
  } else {
    statusUpdate.value = false
    notification.value = 'Cập nhật thất bại, check lại internet or nickname đã tồn tại'
    snackbar.value = true
    isLoadingUpdateUser.value = false
    return
  }

  setTimeout(() => {
    isEditUser.value = false
    isLoadingUpdateUser.value = false
    usernameUpdated.value = ''
  }, 1000);
}

const usernameDelete = ref('')
const isLoadingDeleteUser = ref(false)
const isActiveDeleteUser = (username: string) => {
  return usernameDelete.value === username && isLoadingDeleteUser.value
}

const deleteUser = async (user: User) => {
  usernameDelete.value = user.username
  isLoadingDeleteUser.value = true
  await userStore.deleteUser(user.username as string)
  await userStore.getAllUsers(page.value, limit.value)

  setTimeout(() => {
    isLoadingDeleteUser.value = false
    usernameDelete.value = ''
  }, 500);
}

const toUpper = (e: { target: { value: string } }) => {
  accountName.value = e.target.value.toUpperCase()
}

const toLower = (e: { target: { value: string } }) => {
  username.value = e.target.value.toLowerCase()
}

const nickname = ref('')

const searchPlayerByNickName = async () => {
  const condition = nickname.value ? `&username=${nickname.value}` : ''
  await userStore.getAllUsers(page.value, limit.value, condition)
}

watch(page,
  async () => {
    await userStore.getAllUsers(page.value, limit.value)
  }
)
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
          <tr v-for="(user, index) in users" :key="index" class="row">
            <template v-if="!isActiveEditUser(user.username as string)">
              <td class="cell -text">
                <span class="field -text">
                  {{ formatDate(user.createdAt as string) }}
                </span>
              </td>
              <td class="cell -text">
                <span class="field -text">
                  {{ user.username }}
                </span>
              </td>
              <td class="cell -text">
                <span class="field -text">
                  {{ user.accountName }}
                </span>
              </td>
              <td class="cell -text">
                <span class="field -text">
                  {{ user.accountNumber }}
                </span>
              </td>

              <td class="cell -text">
                <span class="field -text">
                  {{ user.bankcode ? getBankInformation(user.bankcode).label : '' }}
                </span>
              </td>

              <td class="cell -text">
                <v-btn class="button -edit" variant="text" @click="editUser(user)">
                  Edit
                </v-btn>
                <span>|</span>
                <v-btn class="button -delete" variant="text" :loading="isActiveDeleteUser(user.username)"
                  @click="deleteUser(user)">
                  Delete
                </v-btn>
              </td>
            </template>
            <template v-else>
              <td class="cell -text">
                <span class="field -text">
                  {{ user.createdAt }}
                </span>
              </td>
              <td class="cell -text">
                <v-text-field v-model="username" class="field -text" @input="toLower"></v-text-field>
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
                <v-btn class="button -update" variant="text" @click="updateEditUser(user)"
                  :loading="isActiveLoadingUpdateUser(user.username)">
                  Update
                </v-btn>
                <span>|</span>
                <v-btn class="button -cancel" variant="text" @click="() => (isEditUser = false)">
                  Cancel
                </v-btn>
              </td>
            </template>
          </tr>
        </tbody>
      </table>
    </div>
    <div class="text-center">
      <v-pagination v-if="isShowPagination" v-model="page" :length="totalPage" rounded="circle" prev-icon="mdi-menu-left"
        next-icon="mdi-menu-right"></v-pagination>
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
  color: #000;
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
