<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const props = defineProps<{
  message: string
}>()

const message = computed(() => props.message)

const dialogConfirmStore = useDialogConfirmStore()
const { isShowMessageGame } = storeToRefs(dialogConfirmStore)

</script>

<template>
  <div class="text-center">
    <v-dialog v-model="isShowMessageGame" activator="parent" width="auto">
      <v-card>
        <div class="container">
          <div class="modal-header">
            <h5 class="header modal-title">MESSAGE</h5>
            <button class="close" @click="() => isShowMessageGame = false">×</button>
          </div>
          <div class="modal-body">
            <div class="alert alert-warning">{{ message }}</div>
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

  >.header {
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1;
  }

  >.close {
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
}

.footer {
  padding: 10px 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-top: 1px solid #dee2e6;
  cursor: pointer;

  >.alert {
    padding: 10px 20px;
    font-size: 0.9rem;
    font-weight: 700;
    line-height: 1;
    cursor: pointer;
    border-radius: 5px;
    background-color: #f8d7da;
    color: #721c24;
    border: 1px solid #f5c6cb;
  }
}
</style>
