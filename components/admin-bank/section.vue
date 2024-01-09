<script lang="ts" setup>
import { isNumber } from '~/utils/formatters'
import { BANKS } from '~/utils/constants'
import { IBankAdmin } from '@/utils'
const status = [
  { label: 'Bật', value: '1' },
  { label: 'Tắt', value: '0' },
]

const active = [
  { label: 'Hoạt động', value: '1' },
  { label: 'Bảo trì', value: '0' },
]

const defaultStatus = ref({ label: 'Bật', value: '1' })
const defaultActive = ref({ label: 'Hoạt động', value: '1' })
const selectedBank = ref({ value: '970415', label: '(970415) VietinBank' })
const nameAdmin = ref('')
const accountNumber = ref('')

const isActiveForm = ref(false)

const adminStore = useAdminStore()
const isCreateSuccess = computed(() => adminStore.isCreateSuccess)
const isCreateFail = computed(() => adminStore.isCreateFail)
const isLoading = ref(false)
const addBankAdmin = async () => {
  isLoading.value = true
  const body = {
    accountNumber: accountNumber.value,
    binBank: selectedBank.value.value,
    name: nameAdmin.value,
    status: defaultStatus.value.value == '1' ? true : false,
    active: defaultActive.value.value == '1' ? true : false,
  }

  await adminStore.createBankAdmin(body)
  setTimeout(() => {
    isLoading.value = false
    isActiveForm.value = false
  }, 1000);
}

const bankAdmin = computed(() => adminStore.bankAdmin)

onMounted(async () => {
  await adminStore.getBankAdmin()
})

const updateStatus = async (infor: IBankAdmin) => {
  infor.status = !infor.status
  await adminStore.updateBankAdmin(infor)
  await adminStore.getBankAdmin()
}

const updateActive  = async (infor: IBankAdmin) => {
  infor.active = !infor.active
  await adminStore.updateBankAdmin(infor)
  await adminStore.getBankAdmin()
}
</script>
<template>
  <div class="container-admin-bank">
    <v-btn class="add" append-icon="mdi-plus" @click="() => isActiveForm = !isActiveForm">Tạo mới ngân hàng</v-btn>
    <div class="form" v-if="isActiveForm">
      <v-text-field 
        v-model="accountNumber" 
        class="row -account-number" 
        label="Số Tài khoản" outlined 
        @keypress="isNumber($event)"
      ></v-text-field>
      <v-select
          v-model="selectedBank"
          :items="BANKS"
          item-value="value"
          item-title="label"
          variant="outlined"
          class="row"
          dense
          :clearable="false"
          return-object
      ></v-select>
      <v-text-field v-model="nameAdmin" class="row -name-admin" label="Tên Admin" outlined></v-text-field>
      <v-select 
        v-model="defaultStatus"
        class="row -status"  
        variant="outlined"  
        chips  
        item-value="value"
        item-title="label"
        :items="status"
        :clearable="false"
        return-object
      ></v-select>
      <v-select 
        v-model="defaultActive"
        class="row -active"  
        variant="outlined"  
        chips  
        item-value="value"
        item-title="label"
        :items="active"
        :clearable="false"
        return-object
      ></v-select>
      <v-btn class="add" @click="addBankAdmin">Thêm</v-btn>
      <span class="success" v-if="isCreateSuccess">Thêm Thành Công</span>
      <span class="fail" v-if="isCreateFail">Thêm Thất Bại</span>
    </div>
    <table class="table">
      <thead class="head">
        <tr class="row">
          <th class="cell">Số Tài khoản</th>
          <th class="cell">Ngân Hàng</th>
          <th class="cell">Tên Admin</th>
          <th class="cell">Status (bật / tắt)</th>
          <th class="cell">Active (hoạt động / không)</th>
        </tr>
      </thead>
      <tbody class="body">
        <tr class="row" v-for="infor in bankAdmin">
          <td class="cell">{{ infor.accountNumber }}</td>
          <td class="cell">
            <img src="https://api.vietqr.io/img/MB.png" width="100" />
          </td>
          <td class="cell">{{ infor.name }}</td>
          <td class="cell status" @click="updateStatus(infor)">
            <v-chip class="status" variant="flat" :color="infor.status ? 'primary' : 'red'">
              {{ infor.status  ? "Bật" : "Tắt"}}
            </v-chip>
          </td>
          <td class="cell">
            <v-chip class="active" @click="updateActive(infor)" variant="flat" :color="infor.active ? 'green' : ' '">
              {{ infor.active  ? "Hoạt động" : "Bảo trì"}}
            </v-chip>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<style lang="scss" scoped>
.container-admin-bank {
  display: block;
  overflow-x: auto;
  margin-bottom: 12px;

  >.add {
    margin-bottom: 12px;
  }

  >.form {
    display: flex;
    flex-direction: column;
    align-items: left;
    margin-bottom: 12px;
    width: 30%;

    >.row {
      width: 100%;
      margin-bottom: 12px;
      border-radius: 4px;
    }

    >.add {
      width: 100px;
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

  >.table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #e0e0e0;
  }

  >.table>.head {
    background-color: $primary-color;
    color: white;
  }

  >.table>.head>.row>.cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 900;
    line-height: 1.5;
    text-align: center;
    border: 1px solid #e0e0e0;
    white-space: nowrap;
  }

  >.table tbody>.row:nth-child(odd) {
    background-color: #fff;
  }

  >.table tbody>.row:nth-child(even) {
    background-color: #f6f6f6;
  }

  >.table tbody>.row>.cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 400;
    line-height: 1.5;
    text-align: center;
    border: 1px solid #e0e0e0;
    white-space: nowrap;
  }

  >.table tbody>.row>.cell >.status {
    cursor: pointer;
  }

  >.table tbody>.row>.cell >.active {
    cursor: pointer;
  }
}
</style>
