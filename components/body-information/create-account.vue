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
const selectedBank = ref('California')
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
      <div class="bank">
        <span class="label">Ngân hàng nhận thưởng</span>
        <v-combobox
          v-model="selectedBank"
          :items="[
            'California',
            'Colorado',
            'Florida',
            'Georgia',
            'Texas',
            'Wyoming',
          ]"
          variant="outlined"
          class="combobox"
          dense
        ></v-combobox>
      </div>

      <div class="accountNumber">
        <span class="label">Số tài khoản</span>
        <v-text-field class="text" variant="outlined" dense></v-text-field>
      </div>

      <div class="nick">
        <span class="label">Tên tài khoản</span>
        <v-text-field class="text" variant="outlined" dense></v-text-field>
      </div>

      <div class="confirm">
        <span class="joined">Bạn đã tham gia?</span>
        <span class="joinAgain">Tham gia lại</span>
      </div>

      <v-btn class="submit">Tham Gia</v-btn>
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
