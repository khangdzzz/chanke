<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const dialogConfirmStore = useDialogConfirmStore()
const { isVisibleCheckIn } = storeToRefs(dialogConfirmStore)
const { hideDialogCheckIn } = dialogConfirmStore

const isMounted = ref(false)

onMounted(() => {
  isMounted.value = true
})
</script>

<template>
  <div class="text-center">
    <v-dialog
      v-if="isMounted"
      v-model="isVisibleCheckIn"
      activator="parent"
      width="auto"
    >
      <v-card>
        <div class="container">
          <div class="modal-header">
            <h5 class="header modal-title">Điểm Danh Nhận Quà Miễn Phí</h5>
            <button class="close" @click="hideDialogCheckIn">×</button>
          </div>
          <div class="modal-body">
            <div class="form-group">
              <input
                type="text"
                class="username"
                placeholder="Nhập Username cần điểm danh.."
              />
              <v-icon class="icon" icon="mdi-account-plus"></v-icon>
            </div>
            <div class="checkin">
              <table class="table">
                <thead class="head">
                  <tr class="row">
                    <th class="cell" colspan="2">ĐIỂM DANH</th>
                  </tr>
                </thead>
                <tbody class="body">
                  <tr class="row">
                    <td id="cell">Mã phiên</td>
                    <td id="cell" class="id">#133318</td>
                  </tr>
                  <tr class="row">
                    <td id="cell">Thưởng</td>
                    <td id="cell" class="gift">5,000đ - 10,000đ</td>
                  </tr>
                  <tr class="row">
                    <td id="cell">Tổng</td>
                    <td id="cell" class="total">2 người</td>
                  </tr>
                  <tr class="row">
                    <td id="cell">Thắng phiên trước</td>
                    <td id="cell" class="win"></td>
                  </tr>
                  <tr class="row">
                    <td id="cell">Tổng thưởng</td>
                    <td id="cell" class="totalGift">7,147,304</td>
                  </tr>
                  <tr class="row">
                    <td id="cell">Thời gian</td>
                    <td id="cell" class="time">0 giây0</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="list-checkin">
              <table class="table">
                <thead class="head">
                  <tr class="row">
                    <th class="cell">MÃ PHIÊN</th>
                    <th class="cell">TỔNG</th>
                    <th class="cell">SỐ TÀI KHOẢN</th>
                    <th class="cell">SỐ TIỀN NHẬN</th>
                  </tr>
                </thead>
                <tbody class="body">
                  <tr class="row">
                    <td id="cell">#198877</td>
                    <td id="cell">24</td>
                    <td id="cell">diavie****</td>
                    <td id="cell">9,065đ</td>
                  </tr>
                  <tr class="row">
                    <td id="cell">#198877</td>
                    <td id="cell">24</td>
                    <td id="cell">diavie****</td>
                    <td id="cell">9,065đ</td>
                  </tr>
                  <tr class="row">
                    <td id="cell">#198877</td>
                    <td id="cell">24</td>
                    <td id="cell">diavie****</td>
                    <td id="cell">9,065đ</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div class="warning">
              <p>
                chẵn lẻ bank - clmm.cam
                <br />
                <br />
                - Mỗi phiên quà các bạn có 15 phút để điểm danh.
              </p>
              <p>
                - nickname điểm danh phải chơi mini game trên hệ thống ít nhất 1
                lần trong ngày. Không giới hạn số lần điểm danh trong ngày.
              </p>
              <p>
                - Khi hết thời gian, người may mắn sẽ nhận được số tiền của
                phiên đó.
              </p>
              <p>
                - Game
                <strong>Điểm danh miễn phí</strong>
                chỉ hoạt động từ 7
                <strong>
                  h - 22h
                  <br />
                </strong>
              </p>
            </div>
          </div>
          <div class="modal-footer">
            <button class="close" @click="hideDialogCheckIn">Đóng</button>
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
    width: 100%;
    gap: 10px;
  }

  > .form-group > .username {
    width: 100%;

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

  > .form-group > .icon {
    color: $primary-color;
    padding: 20px 26px;
    border-radius: 4px;
    border: 1px solid $primary-color;
    cursor: pointer;
  }

  > .checkin {
    display: block;
    overflow-x: auto;
    margin-bottom: 1rem;
  }

  > .checkin > .table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #e0e0e0;
  }

  > .checkin > .table > .head {
    background-color: $primary-color;
    color: white;
  }

  > .checkin > .table > .head > .row > .cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 900;
    line-height: 1.5;
    text-align: center;
    border: 1px solid #e0e0e0;
  }

  > .checkin > .table tbody tr td {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
    border: 1px solid #e0e0e0;
  }

  > .checkin > .table tbody tr > .id {
    color: #45aaf2 !important;
  }
  > .checkin > .table tbody tr > .gift {
    color: #c21a1a !important;
  }
  > .checkin > .table tbody tr > .total {
    color: #ecb403 !important;
  }
  > .checkin > .table tbody tr > .win {
    color: #00c521 !important;
  }

  > .checkin > .table tbody tr > .totalGift {
    color: #45aaf2 !important;
  }
  > .checkin > .table tbody tr > .time {
    color: #3fb7d5;
  }

  > .list-checkin {
    display: block;
    overflow-x: auto;
    margin-bottom: 1rem;
  }

  > .list-checkin > .table {
    width: 100%;
    border-collapse: collapse;
    border-spacing: 0;
    border: 1px solid #e0e0e0;
  }

  > .list-checkin > .table > .head {
    background-color: $primary-color;
    color: white;
  }

  > .list-checkin > .table > .head > .row > .cell {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 900;
    line-height: 1.5;
    text-align: center;
    border: 1px solid #e0e0e0;
  }

  > .list-checkin > .table tbody tr td {
    padding: 8px 16px;
    font-size: 0.9rem;
    line-height: 1.5;
    text-align: center;
    border: 1px solid #e0e0e0;
  }

  > .list-checkin > .table tbody tr td:nth-child(1) {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
    border: 1px solid #e0e0e0;
    color: $primary-color;
  }

  > .warning {
    color: #7d6608;
    background-color: #fcf3cf;
    border-color: #fbeebc;
    font-size: 0.9375rem;
    padding: 12px 20px;
    border-radius: 4px;
  }
}

.modal-footer {
  padding: 0.8rem;
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  > .close {
    color: #fff;
    background: $primary-color;
    border: none;
    border-radius: 4px;
    padding: 0.5rem 0.8rem;
    cursor: pointer;
  }
}
</style>
