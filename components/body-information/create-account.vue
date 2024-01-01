<script lang="ts" setup>
import { storeToRefs } from 'pinia'

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

const banks = [
  { value: '970415', label: '(970415) VietinBank' },
  { value: '970436', label: '(970436) Vietcombank' },
  { value: '970418', label: '(970418) BIDV' },
  { value: '970405', label: '(970405) Agribank' },
  { value: '970448', label: '(970448) OCB' },
  { value: '970422', label: '(970422) MBBank' },
  { value: '970407', label: '(970407) Techcombank' },
  { value: '970416', label: '(970416) ACB' },
  { value: '970432', label: '(970432) VPBank' },
  { value: '970423', label: '(970423) TPBank' },
  { value: '970403', label: '(970403) Sacombank' },
  { value: '970437', label: '(970437) HDBank' },
  { value: '970454', label: '(970454) VietCapitalBank' },
  { value: '970429', label: '(970429) SCB' },
  { value: '970441', label: '(970441) VIB' },
  { value: '970443', label: '(970443) SHB' },
  { value: '970431', label: '(970431) Eximbank' },
  { value: '970426', label: '(970426) MSB' },
  { value: '546034', label: '(546034) CAKE' },
  { value: '963388', label: '(963388) Timo' },
  { value: '971005', label: '(971005) ViettelMoney' },
  { value: '971011', label: '(971011) VNPTMoney' },
  { value: '970400', label: '(970400) SaigonBank' },
  { value: '970409', label: '(970409) BacABank' },
  { value: '970412', label: '(970412) PVcomBank' },
  { value: '970414', label: '(970414) Oceanbank' },
  { value: '970419', label: '(970419) NCB' },
  { value: '970424', label: '(970424) ShinhanBank' },
  { value: '970425', label: '(970425) ABBANK' },
  { value: '970427', label: '(970427) VietABank' },
  { value: '970428', label: '(970428) NamABank' },
  { value: '970430', label: '(970430) PGBank' },
  { value: '970433', label: '(970433) VietBank' },
  { value: '970438', label: '(970438) BaoVietBank' },
  { value: '970440', label: '(970440) SeABank' },
  { value: '970446', label: '(970446) COOPBANK' },
  { value: '970449', label: '(970449) LienVietPostBank' },
  { value: '970452', label: '(970452) KienLongBank' },
]
const selectedBank = ref({ value: '970415', label: '(970415) VietinBank' })
const accountNumber = ref('')
const accountName = ref('')

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
    phone: accountNumber.value,
    userid: accountName.value,
  }
  await playerStore.create(body)
}

const isCreateSuccess = computed(() => playerStore.isCreateSuccess)
const isCreateFail = computed(() => playerStore.isCreateFail)
</script>
<template>
  <div class="container-create-account">
    <v-btn
      v-if="!isShowCreateNickName"
      class="btn-create-nick"
      @click="openCreateNickName"
    >
      Tạo Nickname
    </v-btn>
    <form v-if="isShowCreateNickName" class="register-account">
      <span v-if="isCreateSuccess" class="success">Tạo Thành Công</span>
      <span v-if="isCreateFail" class="fail">Tạo Thất Bại</span>
      <div class="bank">
        <span class="label">Ngân hàng nhận thưởng</span>
        <v-combobox
          v-model="selectedBank"
          :items="banks"
          item-value="value"
          item-title="label"
          variant="outlined"
          class="combobox"
          dense
        ></v-combobox>
      </div>

      <div class="accountNumber">
        <span class="label">Số tài khoản</span>
        <v-text-field
          v-model="accountNumber"
          class="text"
          variant="outlined"
          type="number"
          dense
        ></v-text-field>
      </div>

      <div class="nick">
        <span class="label">Tên tài khoản</span>
        <v-text-field
          v-model="accountName"
          class="text"
          variant="outlined"
          dense
        ></v-text-field>
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

  > .success {
    color: #316100;
    background-color: #dff1cc;
    border-color: #d2ecb8;
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  > .fail {
    color: #6b1110;
    background-color: #f5d2d2;
    border-color: #f1c1c0;
    padding: 0.75rem 1.25rem;
    border: 1px solid transparent;
    border-radius: 3px;
  }

  > .bank > .label,
  > .accountNumber > .label,
  > .nick > .label {
    margin-bottom: 6px;
    display: block;
    font-weight: 600;
    font-size: 14px;
  }

  > .bank > .v-input--density-default {
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

  > .confirm {
    display: flex;
    gap: 2px;
    margin: 4px 0;
    font-size: 14px;
    font-weight: 400;
  }
  > .confirm > .joined {
    cursor: text;
  }

  > .confirm > .joinAgain {
    cursor: pointer;
    color: $primary-color;
  }

  > .submit {
    color: #fff;
    background: linear-gradient(to bottom right, #f1d313 0%, #fbb034 100%);
    border-color: #fbb034;
  }
}
</style>
