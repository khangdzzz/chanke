<script lang="ts" setup>
import { BANKS } from '~/utils/constants'
import { isNumber } from '~/utils/formatters'

definePageMeta({
  middleware: 'auth',
})

useHead({
  title: 'CHANLEBANK - Cài Đặt Bank',
  meta: [
    {
      hid: 'description',
      name: 'description',
      content: 'Cài Đặt Bank Trả Thưởng - CHANLEBANK-PAGE',
    },
  ],
})

const notification = ref('')
const snackbar = ref(false)

const userStore = useUserStore()

const { getUserName } = useAuth()

const authUser = computed(() => userStore.authUser)

const selectedBank = ref({ value: '970415', label: '(970415) VietinBank' })
const accountNumber = ref(authUser.value?.accountNumber)
const accountName = ref(authUser.value?.accountName)
const isProtectBank = ref(false)

onMounted(async () => {
  await userStore.getDetailUser(getUserName())
  isProtectBank.value = authUser.value
    ? (authUser.value as any).isProtectedBank
    : false
  accountNumber.value = authUser.value?.accountNumber || ''
  accountName.value = authUser.value?.accountName || ''
  selectedBank.value = authUser.value?.bankcode
    ? {
        value: authUser.value?.bankcode,
        label: BANKS.find(bank => bank.value === authUser.value?.bankcode)
          ?.label as string,
      }
    : { value: '970415', label: '(970415) VietinBank' }
})

const updateBank = async () => {
  if (!selectedBank.value.value || !accountName.value || !accountNumber.value) {
    notification.value = 'Vui lòng nhập đầy đủ thông tin tài khoản bank'
    snackbar.value = true
    return
  }

  const body = {
    username: getUserName(),
    bankcode: selectedBank.value.value,
    accountNumber: accountNumber.value,
    accountName: accountName.value,
  }

  await userStore.updateUser(body)

  notification.value = userStore.isUpdated
    ? 'Cập Nhật Tài Khoản Bank Thành Công'
    : 'Cập Nhật Tài Khoản Bank Thất Bại'
  snackbar.value = true
}

const isUpdated = computed(() => userStore.isUpdated)

const toUpper = (e: { target: { value: string } }) => {
  accountName.value = e.target.value.toUpperCase()
  accountName.value = accountName.value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
}
</script>

<template>
  <div class="bank-setting">
    <V2HomeGamesSection />
  </div>
  <div class="setting">
    <h3 class="title">
      <v-icon class="icon" icon="mdi-wrench-cog-outline"></v-icon>
      CÀI ĐẶT BANK TRẢ THƯỞNG
    </h3>

    <form class="register-account">
      <v-snackbar
        v-model="snackbar"
        :timeout="1000"
        rounded="pill"
        location="top"
        :color="isUpdated ? 'success' : 'red'"
        elevation="24"
        transition="fade-transition"
      >
        <div style="width: 100%; text-align: center">
          {{ notification }}
        </div>
      </v-snackbar>
      <div class="bank">
        <span class="label">Ngân hàng nhận thưởng</span>
        <v-combobox
          v-model="selectedBank"
          :items="BANKS"
          item-value="value"
          item-title="label"
          variant="outlined"
          class="combobox"
          dense
          :disabled="isProtectBank"
        ></v-combobox>
      </div>

      <div class="accountNumber">
        <span class="label">Số tài khoản ngân hàng</span>
        <v-text-field
          v-model="accountNumber"
          class="text"
          variant="outlined"
          dense
          :disabled="isProtectBank"
          @keypress="isNumber($event)"
        ></v-text-field>
      </div>

      <div class="accountNumber">
        <span class="label">Tên tài khoản ngân hàng</span>
        <v-text-field
          v-model="accountName"
          class="text"
          variant="outlined"
          dense
          :disabled="isProtectBank"
          @input="toUpper"
        ></v-text-field>
      </div>

      <v-btn class="submit" @click="updateBank">Cập Nhật</v-btn>
    </form>
    <span class="confirm">
      LƯU Ý: TÀI KHOẢN BANK CỦA BẠN TỰ ĐỘNG Ở CHẾ ĐỘ
      <span class="note">&nbsp;BẢO VỆ&nbsp;</span>
      SAU LẦN TRẢ THƯỞNG THÀNH CÔNG ĐẦU TIÊN.
    </span>
  </div>
</template>

<style lang="scss" scoped>
.bank-setting {
  display: flex;
  flex-direction: column;
}

.setting {
  border: 1px solid rgba(255, 255, 255, 0.05);
  border-radius: 8px;
  margin-top: 25px;

  > .title {
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

    > .icon {
      -webkit-text-fill-color: #fe5b09;
    }
  }

  > .confirm {
    display: flex;
    padding: 20px;
    justify-content: center;
    font-size: 16px;
  }
}

.register-account {
  display: flex;
  flex-direction: column;
  gap: 15px;
  margin: auto;
  max-width: 350px;

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

  > .bank {
    margin-top: 20px;
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

@include mediaquery-up(lg) {
  .bank-setting {
    padding: 25px 0 20px;
  }

  .setting {
    margin-top: 0;
  }
}
</style>
