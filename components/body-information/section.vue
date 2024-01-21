<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const scrollStore = useScrollStore()
const { nickNameSection } = storeToRefs(scrollStore)

onMounted(() => {
  const instance = getCurrentInstance()
  if (instance && instance.refs.nickNameSection) {
    nickNameSection.value = instance.refs.nickNameSection
  }
})

</script>
<template>
  <div class="body-information">
    <div class="how-play">
      <h3 class="title">Cách Chơi</h3>
      <b class="subTitle">
        Chẵn lẻ Bank - Uy tín, xanh chín chỉ có ở chanlebank.page
        <br />
      </b>

      <table class="table">
        <thead class="head">
          <tr class="row">
            <th class="cell">TỐI THIỂU</th>
            <th class="cell">TỐI ĐA</th>
          </tr>
        </thead>
        <tbody class="body">
          <tr class="row">
            <td id="cell">10,000</td>
            <td id="cell">3,000,000</td>
          </tr>
        </tbody>
      </table>

      <span class="gameNoti">GAME HAY NHANH TAY TRÚNG THƯỞNG</span>

      <BodyInformationTableGift class="gift" />

      <BodyInformationCreateAccount ref="nickNameSection" class="account" />

      <BodyInformationRatio class="ratio" />

      <BodyInformationWarning class="warning" />
    </div>
    <div class="history-join">
      <h3 class="title">LỊCH SỬ THAM GIA</h3>
      <BodyInformationTableHistory class="history" />

      <h3 class="title">LỊCH SỬ GIAO DỊCH</h3>
      <BodyInformationSearch class="search" />

      <div class="groups">
        <v-btn class="talk" prepend-icon="mdi-account-group" variant="outlined">
          Group CHÉM GIÓ
        </v-btn>
        <v-btn
          class="notification"
          prepend-icon="mdi-account-group"
          variant="outlined"
        >
          Group thông báo
        </v-btn>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.body-information {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
  gap: 20px;
  > .how-play,
  > .history-join {
    box-sizing: border-box;
    width: calc(40% - 12px);
    padding: 10px 25px 40px 25px;
    background-color: #fff;
    border-radius: 4px;
  }

  > .history-join {
    width: calc(60% - 12px);
  }

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 12px;
    > .how-play {
      width: 100%;
    }
    > .history-join {
      width: 100%;
    }
  }
}

.how-play {
  > .title {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 16px;
    line-height: 1;
  }
  > .subTitle {
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.5;
  }

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
  }

  > .table tbody tr td {
    padding: 8px 16px;
    font-size: 0.9rem;
    font-weight: 600;
    line-height: 1.5;
    text-align: center;
    border: 1px solid #e0e0e0;
  }

  > .gameNoti {
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1.5;
  }
  > .gift,
  > .account,
  > .ratio,
  > .warning {
    margin-bottom: 12px;
  }
}

.history-join {
  > .title {
    font-size: 0.9rem;
    font-weight: 500;
    line-height: 1;
    text-align: center;
    padding: 16px 0;
  }

  > .history,
  > .search {
    margin-bottom: 12px;
  }

  > .groups {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 12px;
    align-items: center;
  }

  > .groups > .talk,
  > .groups > .notification {
    color: #fff !important;
    background: linear-gradient(
      to bottom right,
      #00f2fe 0%,
      #1e63c3 100%
    ) !important;
    border-color: #07cedc;
  }
}
</style>
