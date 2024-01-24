<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { BANKS } from '~/utils/constants'
import { isNumber } from '~/utils/formatters'

const scrollStore = useScrollStore()
const { scrollOpenCreateNickName } = storeToRefs(scrollStore)

watch(scrollOpenCreateNickName, value => {
  if (value) {
    openCreateNickName()
  }
})

const isShowCreateNickName = ref(false)
const openCreateNickName = () => {
  isShowCreateNickName.value = true
}

const selectedBank = ref({ value: '970415', label: '(970415) VietinBank' })
const accountNumber = ref('')
const accountName = ref('')
const userid = ref('')

const playerStore = usePlayerStore()

const joinToPlay = async () => {
  if (!selectedBank.value || !accountName.value || !accountNumber.value) {
    playerStore.isCreateSuccess = false
    playerStore.isCreateFail = true
    return
  }

  const body = {
    amount: 0,
    bankcode: selectedBank.value.value,
    accountNumber: accountNumber.value,
    accountName: accountName.value,
    userid: userid.value,
  }

  await playerStore.create(body)
}

const isCreateSuccess = computed(() => playerStore.isCreateSuccess)
const isCreateFail = computed(() => playerStore.isCreateFail)

watch(userid, newVal => {
  userid.value = newVal.replace(/\s/g, '')
})

const toUpper = (e: { target: { value: string } }) => {
  accountName.value = e.target.value.toUpperCase()
}

const toLower = (e: { target: { value: string } }) => {
  userid.value = e.target.value.toLowerCase()
}
</script>
<template>
  <div class="container-create-account">
    <v-btn v-if="!isShowCreateNickName" class="btn-create-nick" @click="openCreateNickName">
      Tạo Nickname
    </v-btn>
    <form v-if="isShowCreateNickName" class="register-account">
      <span v-if="isCreateSuccess" class="success">Tạo Thành Công</span>
      <span v-if="isCreateFail" class="fail">Tạo Thất Bại</span>
      <div class="bank">
        <span class="label">Ngân hàng nhận thưởng</span>
        <v-combobox v-model="selectedBank" :items="BANKS" item-value="value" item-title="label" variant="outlined"
          class="combobox" dense></v-combobox>
      </div>

      <div class="accountNumber">
        <span class="label">Số tài khoản ngân hàng</span>
        <v-text-field v-model="accountNumber" class="text" variant="outlined" type="number" dense
          @keypress="isNumber($event)"></v-text-field>
      </div>

      <div class="accountNumber">
        <span class="label">Tên tài khoản ngân hàng</span>
        <v-text-field v-model="accountName" class="text" variant="outlined" dense @input="toUpper"></v-text-field>
      </div>

      <div class="nick">
        <span class="label">Nick name</span>
        <v-text-field v-model="userid" class="text" variant="outlined" dense @input="toLower"></v-text-field>
      </div>

      <div class="confirm">
        <span class="joined">Bạn đã tham gia?</span>
        <span class="joinAgain">Tham gia lại</span>
      </div>

      <v-btn class="submit" @click="joinToPlay">Tham Gia</v-btn>
    </form>
  </div>
</template>

<style lang="scss" scoped>
.btn-create-nick {
  width: 100%;
  color: #fff;
  background: linear-gradient(to bottom right, #f1d313 0%, #fbb034 100%);
  border-color: #fbb034;
}

.register-account {
  display: flex;
  flex-direction: column;
  gap: 8px;
  margin: auto;

  >.success {
    color: #316100;
    background-color: #dff1cc;
    border-color: #d2ecb8;
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  >.fail {
    color: #6b1110;
    background-color: #f5d2d2;
    border-color: #f1c1c0;
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  >.bank>.label,
  >.accountNumber>.label,
  >.nick>.label {
    margin-bottom: 6px;
    display: block;
    font-weight: 600;
    font-size: 14px;
  }

  >.bank>.v-input--density-default {
    --v-input-control-height: 40px;
    --v-input-padding-top: 8px;
  }

  :deep(.v-input__control > .v-field--variant-outlined) {
    --v-field-padding-bottom: 8px;
  }

  :deep(.v-input__details) {
    display: none;
  }

  :deep(.v-input__control) {
    border-radius: 15px !important;
  }

  >.confirm {
    display: flex;
    gap: 2px;
    margin: 4px 0;
    font-size: 14px;
    font-weight: 400;
  }

  >.confirm>.joined {
    cursor: text;
  }

  >.confirm>.joinAgain {
    cursor: pointer;
    color: $primary-color;
  }

  >.submit {
    color: #fff;
    background: linear-gradient(to bottom right, #f1d313 0%, #fbb034 100%);
    border-color: #fbb034;
  }
}
</style>
