<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const dialogConfirmStore = useDialogConfirmStore()
const { isVisibleGift } = storeToRefs(dialogConfirmStore)
const { hideDialogGift } = dialogConfirmStore

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <div class="text-center">
    <v-dialog
      v-if="isMounted"
      v-model="isVisibleGift"
      activator="parent"
      width="auto"
    >
      <v-card>
        <div class="container">
          <div class="modal-header">
            <h5 class="header modal-title">Mã Quà Tặng</h5>
            <button class="close" @click="hideDialogGift">×</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <label for="" class="form-label">Nickname của bạn</label>
              <input
                type="text"
                name="phone"
                class="form-control"
                placeholder="Nhập nickname của bạn"
              />
            </div>
            <div class="form-group">
              <label for="" class="form-label">Mã quà tặng</label>
              <input
                type="text"
                name="code"
                class="form-control"
                placeholder="ABCXYZ"
              />
            </div>
            <div class="alert alert-warning"></div>
          </div>
          <div class="modal-footer">
            <button class="close" @click="hideDialogGift">Đóng</button>
            <button class="check" @click="hideDialogGift">Kiểm Tra</button>
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
  width: 650px;

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
  > .form-group {
    display: flex;
    flex-direction: column;
  }

  > .form-group > .form-control {
    border: 1px solid #dee2e6;
    border-radius: 4px;
    padding: 0.5rem 1rem;
    font-size: 0.9rem;
    font-weight: 300;
    line-height: 1.5;
    color: #495057;
    background-clip: padding-box;
    transition: border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    margin-bottom: 1rem;
  }
}

.modal-footer {
  padding: 0.8rem;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  > .close {
    color: #fff;
    background: #6c757d;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 0.8rem;
    margin-right: 1rem;
    cursor: pointer;
  }

  > .check {
    color: #fff;
    background: $primary-color;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 0.8rem;
    cursor: pointer;
  }
}
</style>
