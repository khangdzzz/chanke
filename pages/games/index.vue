<script setup lang="ts">
definePageMeta({
  middleware: 'auth',
  layout: 'dashboad',
})

const performanceCbTableColumns = ref([
  {
    id: 1,
    text: 'Tên Game',
  },
  {
    id: 2,
    text: 'Nội Dung',
  },
  {
    id: 3,
    text: 'Dãy Số Kết Quả',
  },
  {
    id: 4,
    text: 'Hệ Số',
  },
   {
    id: 5,
    text: 'Cách Tính',
  },
])

const gameStore = useGameStore()

onMounted(async () => {
  // await gameStore.getReward()
})

const games = computed(() => gameStore.reward)


</script>
<template>
  <div class="container-games">
    <table class="table-manager">
      <thead class="header">
        <tr class="row">
          <th
            v-for="column in performanceCbTableColumns"
            :key="column.id"
            class="head"
          >
            {{ column.text }}
          </th>
        </tr>
      </thead>
      <tbody class="body">
        <!-- <tr
          v-for="(performanceSL, index) in performanceSLSummary"
          :key="index"
          class="row"
        >
          <template
            v-if="!isActivatedEditPerformanceSL(performanceSL.id as number)"
          >
            <td class="cell -text">
              <span class="field -text">
                {{
                  getNameOfficeLocation(
                    performanceSL.officeLocationId as number
                  )
                }}
              </span>
            </td>
            <td class="cell -text">
              <span class="field -text">
                {{ performanceSL.actualCarCount }}
              </span>
            </td>
            <td class="cell -text">
              <span class="field -text">
                {{ performanceSL.actualGrossProfit }}
              </span>
            </td>

            <td class="cell -text">
              <v-btn
                class="button -edit"
                variant="text"
                @click="handleEditPerformanceSL(performanceSL.id as number)"
              >
                エディット
              </v-btn>
              <span>|</span>
              <v-btn
                class="button -delete"
                variant="text"
                :loading="activeLoadingWhenDeletePerformanceSL(performanceSL.id as number)"
                @click="handleDeletePerformanceSL(performanceSL.id as number)"
              >
                削除
              </v-btn>
            </td>
          </template>
          <template v-else>
            <td class="cell -text">
              <span class="field -text">
                {{
                  getNameOfficeLocation(
                    performanceSL.officeLocationId as number
                  )
                }}
              </span>
            </td>
            <td class="cell -text">
              <v-text-field
                v-model="performanceSL.actualCarCount"
                class="field -text"
                @keypress="isNumber($event)"
              ></v-text-field>
            </td>
            <td class="cell -text">
              <v-text-field
                v-model="performanceSL.actualGrossProfit"
                class="field -text"
                @keypress="isNumber($event)"
              ></v-text-field>
            </td>

            <td class="cell -text">
              <v-btn
                class="button -update"
                variant="text"
                :loading="isLoadingUpdatePerformanceSL"
                :disabled="!validateUpdatePerformanceSL(performanceSL)"
                @click="handleUpdatePerformanceSL(performanceSL)"
              >
                更新
              </v-btn>
              <span>|</span>
              <v-btn
                class="button -cancel"
                variant="text"
                @click="() => (isEditPerformanceSL = false)"
              >
                キャンセル
              </v-btn>
            </td>
          </template>
        </tr> -->
      </tbody>
    </table>
    <!-- <div v-if="isAddPerformanceSL" class="form-add">
      <div class="cell -text">
        <v-select
          v-model="officeLocationDefault"
          class="select"
          :items="officeLocations"
          item-title="name"
          item-value="id"
          variant="outlined"
          :clearable="false"
          :error="isExitOfficeLocation"
          return-object
        ></v-select>
      </div>
      <div class="cell -text">
        <v-text-field
          v-model="actualCarCount"
          class="field -text"
          @keypress="isNumber($event)"
        ></v-text-field>
      </div>
      <div class="cell -text">
        <v-text-field
          v-model="actualGrossProfit"
          class="field -text"
          @keypress="isNumber($event)"
        ></v-text-field>
      </div>

      <div class="cell -text">
        <v-btn
          class="button -add"
          variant="text"
          :disabled="!validateAddPerformanceSL() || isExitOfficeLocation"
          @click="handleAddPerformanceSlSummary()"
        >
          登録
        </v-btn>
        <span>|</span>
        <v-btn
          class="button -cancel"
          variant="text"
          @click="() => (isAddPerformanceSL = false)"
        >
          キャンセル
        </v-btn>
      </div>
    </div>
    <v-btn
      class="btn-add"
      append-icon="mdi-plus"
      @click="() => (isAddPerformanceSL = true)"
    >
      追加
    </v-btn> -->
  </div>
</template>
<style scoped lang="scss">
.container-games {
  padding-bottom: 100px;
}
.table-manager {
  width: 100%;
  min-width: 1300px;
  table-layout: fixed;
  border: 1px solid #f4f3f3;
  > .header > .row {
    background-color: $evaluation-sheet-header-color;
    height: 32px;
    line-height: 1;
    color: $color-black-secondary;
    font-weight: 700;
    font-size: 0.875rem;
    padding: 8px;
    text-align: left;
  }

  > .header > .row > .head {
    font-weight: 700;
    padding: 0 4px;
    width: 25%;
  }

//   > .header > .row > .head:last-child {
//     text-align: right;
//   }

  > .body > .row {
    display: revert;
    color: $color-black;
    margin: 15px;
  }

  > .body > .row > .cell {
    text-align: left;
    height: 48px;
    line-height: 48px;
    font-size: 0.875rem;
    padding: 0 8px;
  }

  > .body > .row > .cell:last-child {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
  }

  > .body > .row > .cell > .button {
    height: 48px;
  }

  > .body > .row > .cell > .button.-edit {
    color: $color-blue !important;
    cursor: pointer;
  }

  > .body > .row > .cell > .button.-delete {
    color: $color-red !important;
    cursor: pointer;
  }

  > .body > .row > .cell > .button.-update {
    color: $color-blue !important;
    cursor: pointer;
  }
  > .body > .row > .cell > .button.-cancel {
    color: $color-black !important;
    cursor: pointer;
  }
}

.form-add {
  margin-top: 20px;
  display: flex;
  justify-content: space-between;

  > .cell {
    width: 22%;
  }

  > .cell:last-child {
    display: flex;
    justify-content: flex-end;
    gap: 10px;
    align-items: center;
    height: 40px;
  }

  > .cell > .button.-cancel {
    color: $color-black !important;
  }
}

.btn-add {
  font-weight: 600;
  margin-top: 20px;
}
</style>
