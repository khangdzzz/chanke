<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
import { formatDate, getStartTime, endTimeDay } from '~/utils/formatters'

definePageMeta({
  middleware: 'auth',
  layout: 'dashboad',
})

const adminStore = useAdminStore()

onMounted(async () => {
  await adminStore.getBankAdmin()
})

const bankAdmin = computed(() => {
  const result = adminStore.bankAdmin.map(item => {
    const bank = BANKS_MAP.find(bank => bank.bin === item.binBank)
    return {
      active: item.active,
      status: item.status,
      timeMaintain: item.timeMaintain ? JSON.parse(item.timeMaintain) : null,
      binBank: item.binBank,
      name: bank?.shortName,
    }
  })

  return [...new Set(result.map(item => JSON.stringify(item)))].map(item =>
    JSON.parse(item)
  )
})

const binBankLoadingUpdate = ref()

const updateMaintainBank = async (binBank: string) => {
  binBankLoadingUpdate.value = binBank

  const time = timeMainTain.value

  const body = {
    binBank,
    timeMaintain: time ? JSON.stringify(timeMainTain.value) : null,
  }

  setTimeout(async () => {
    await adminStore.maintainBank(body)
    await adminStore.getBankAdmin()
    binBankLoadingUpdate.value = ''
    binBankEditBank.value = ''
    isEditBank.value = false
  }, 1000)
}
const isEditBank = ref(false)
const binBankEditBank = ref('')
const timeMainTain = ref()

const isActiveEditBank = (binBank: string) => {
  return isEditBank.value && binBankEditBank.value == binBank
}

const handleEditBank = (item: any) => {
  binBankEditBank.value = item.binBank
  isEditBank.value = true
  timeMainTain.value = item.timeMaintain ?? null
}

const cancelEditBank = () => {
  isEditBank.value = false
  binBankEditBank.value = ''
}

const isActiveLoadingUpdate = (binBank: string) => {
  return binBankLoadingUpdate.value == binBank && isEditBank.value
}

const handleDelteBank = async (item: any) => {
  const body = {
    binBank: item.binBank,
    timeMaintain: null,
  }

  await adminStore.maintainBank(body)
  await adminStore.getBankAdmin()
}
</script>
<template>
  <div class="bank-maintain">
    <table class="table">
      <thead class="head">
        <tr class="row">
          <th class="cell">Bank</th>
          <th class="cell">Thời Gian Bảo Trì Bank</th>
          <th class="cell">Thao Tác</th>
        </tr>
      </thead>
      <tbody class="body">
        <tr v-for="item in bankAdmin" :key="item.binBank" class="row">
          <template v-if="!isActiveEditBank(item.binBank as string)">
            <td class="cell">{{ item.name }}</td>
            <td class="cell">
              <VueDatePicker
                v-model="item.timeMaintain"
                time-picker
                disable-time-range-validation
                range
                placeholder="Select Time"
                :clearable="false"
                :disabled="true"
              />
            </td>
            <td class="cell -text">
              <v-btn
                class="button -edit"
                variant="text"
                @click="handleEditBank(item)"
              >
                Edit
              </v-btn>
              <span>|</span>
              <v-btn
                class="button -delete"
                variant="text"
                @click="handleDelteBank(item)"
              >
                Delete
              </v-btn>
            </td>
          </template>
          <template v-else>
            <td class="cell">{{ item.name }}</td>
            <td class="cell">
              <VueDatePicker
                v-model="timeMainTain"
                time-picker
                disable-time-range-validation
                range
                placeholder="Select Time"
                :clearable="false"
              />
            </td>
            <td class="cell -text">
              <v-btn
                class="button -edit"
                variant="text"
                :loading="isActiveLoadingUpdate(item.binBank as string)"
                @click="updateMaintainBank(item.binBank)"
              >
                Update
              </v-btn>
              <span>|</span>
              <v-btn
                class="button -delete"
                variant="text"
                @click="cancelEditBank()"
              >
                Cancel
              </v-btn>
            </td>
          </template>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style lang="scss" scoped>
.bank-maintain {
  display: block;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  color: #000;

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

  > .table tbody > .row {
    border-bottom: 1px solid rgba(255, 255, 255, 0.05);
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

  > .table > .body > .row > .cell > .button.-edit {
    color: $color-blue !important;
    cursor: pointer;
  }

  > .table > .body > .row > .cell > .button.-delete {
    color: $color-red !important;
    cursor: pointer;
  }

  > .table > .body > .row > .cell > .button.-update {
    color: $color-blue !important;
    cursor: pointer;
  }

  > .table > .body > .row > .cell > .button.-cancel {
    color: $color-black !important;
    cursor: pointer;
  }
}
</style>
