<script lang="ts" setup>
const props = defineProps({
  userName: {
    type: String,
    required: true,
  },
  content: {
    type: Number,
    required: true,
  },
})

const { userName, content } = toRefs(props)

const dialogConfirmStore = useDialogConfirmStore()
const isVisibled = computed(() => dialogConfirmStore.isOpenConfirmPaymentIntro)

const closeConfirm = () => {
  dialogConfirmStore.isOpenConfirmPaymentIntro = false
}

const emit = defineEmits(['payment'])

const handleTrasaction = () => {
  emit('payment')
}
</script>

<template>
  <div class="text-center">
    <v-dialog v-model="isVisibled" activator="parent" width="auto">
      <v-card>
        <div class="container">
          <div class="modal-header">
            <h5 class="header modal-title">Thông Báo</h5>
            <button class="close" @click="closeConfirm">×</button>
          </div>
          <div class="modal-body">
            <div class="alert alert-warning">
              Xử lí payment account -{{ userName }}- số tiền: {{ content }}
            </div>
          </div>
          <div class="footer">
            <v-btn class="no" @click="closeConfirm">No</v-btn>

            <v-btn class="yes" @click="handleTrasaction">Yes</v-btn>
          </div>
        </div>
      </v-card>
    </v-dialog>
  </div>
</template>

<style lang="scss" scoped>
.modal-header {
  display: flex;
  justify-content: space-between;
  border-bottom: 1px solid #dee2e6;
  padding: 10px 20px;
  align-items: center;
  min-width: 350px;

  > .header {
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1;
  }

  > .close {
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 1;
    color: #000;
    opacity: 0.5;
    cursor: pointer;
    border: none;
    background: transparent;
  }
}

.modal-body {
  border-bottom: 1px solid #dee2e6;
  padding: 10px 20px;
  font-size: 0.9rem;
  font-weight: 300;

  > .alert {
    font-size: 16px;
    font-weight: 600;
    color: red;
    text-align: center;
  }
}

.footer {
  padding: 10px 20px;
  display: flex;
  justify-content: flex-end;
  gap: 20px;
  align-items: center;
  border-top: 1px solid #dee2e6;
  cursor: pointer;

  > .no {
    background-color: red !important;
    min-width: 60px;
  }

  > .yes {
    background-color: green !important;
    min-width: 60px;
  }
}
</style>
