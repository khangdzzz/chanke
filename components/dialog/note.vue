<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const dialogConfirmStore = useDialogConfirmStore()
const { isVisible } = storeToRefs(dialogConfirmStore)
const { hideDialog } = dialogConfirmStore

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <div class="text-center">
    <v-dialog
      v-if="isMounted"
      v-model="isVisible"
      activator="parent"
      width="auto"
    >
      <v-card>
        <div class="modal-content text-center container">
          <div class="modal-header">
            <h5 class="header modal-title">Thông báo</h5>
            <button class="close" @click="hideDialog">×</button>
          </div>
          <div class="modal-body">
            <ul class="">
              <li data-slate-node="element">
                <p data-slate-node="element" style="text-align: center">
                  <span data-slate-node="text">
                    BƯỚC 1 : TẠO NICKNAME ( ô màu vàng ) ( ai quên hay muốn đổi
                    nickname vui lòng liên hệ cskh )
                    <br />
                  </span>
                </p>
              </li>
              <li data-slate-node="element">
                <p data-slate-node="element" style="text-align: center">
                  <span data-slate-node="text">
                    BƯỚC 2 : chuyển khoản đến stk của web với nội dung :
                    NICKNAME + CỬA ĐẶT ( L2, L, C2 .... )
                  </span>
                </p>
              </li>
              <li data-slate-node="element">
                <p data-slate-node="element" style="text-align: center">
                  <span data-slate-node="text">
                    <a
                      class="group-chat"
                      href="https://t.me/chanlebankczthongbao"
                      title="ok"
                    >
                      Xem cách tính mã ngân hàng tại đây
                    </a>
                    <br />
                    &nbsp;( chơi cùng bank để có cùng kết quả . chơi khác bank
                    sẽ tính mã bên nhận )
                    <br />
                    <br />
                    CHÚ Ý : KẾT QUẢ TÍNH TỔNG 2 SỐ CUỐI
                    <br />
                    <br />
                    chẵn lẻ bank - chanlebank.page
                  </span>
                </p>
              </li>
            </ul>
          </div>
          <div class="modal-footer" @click="hideDialog">
            <button
              id="closeNoti"
              type="button"
              class="btn btn-primary btn-block"
              data-dismiss="modal"
            >
              Đã đọc
            </button>
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
  padding: 10px 40px;
  align-items: center;

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
  padding: 10px 40px;
  font-size: 0.9rem;
  font-weight: 300;
}

.group-chat {
  color: $primary-color;
  text-decoration: none;
  background-color: transparent;
  font-size: 0.8rem;
  font-weight: 500;
}

.modal-footer {
  margin: 10px 40px;
  background-color: $primary-color;
  padding: 10px 0;
  border-radius: 3px;
  color: #fff;
  cursor: pointer;
}
</style>
