<script lang="ts" setup>
import VueDatePicker from '@vuepic/vue-datepicker'
import '@vuepic/vue-datepicker/dist/main.css'
definePageMeta({
  middleware: 'auth',
  layout: 'dashboad',
})

const maintainStore = useMaintainStore()

onMounted(async () => {
  await maintainStore.getCalenderMaintain()
})

const maintain = computed(() => maintainStore.maintain)

const ON_OFF = [
  {
    label: 'Bật',
    value: true,
  },
  {
    label: 'Tắt',
    value: false,
  },
]

const defaultOnOff = ref({
  label: maintain.value?.status ? 'Bật' : 'Tắt',
  value: maintain.value?.status ? true : false,
})

const startDate = ref(maintain.value?.start ?? new Date())
const endDate = ref(maintain.value?.end ?? new Date())
const content = ref(maintain.value?.content ?? '')

watch(maintain, () => {
  startDate.value = maintain.value?.start ?? new Date()
  endDate.value = maintain.value?.end ?? new Date()
  content.value = maintain.value?.content ?? ''
  defaultOnOff.value = {
    label: maintain.value?.status ? 'Bật' : 'Tắt',
    value: maintain.value?.status ? true : false,
  }
})

const isLoading = ref(false)

const isSuccessMainTain = computed(() => maintainStore.isSuccess)

const createOrUpdateCanlenderMaintain = async () => {
  isLoading.value = true
  const data = {
    id: maintain?.value?._id ?? '',
    start: startDate.value.toString(),
    end: endDate.value.toString(),
    content: content.value,
    status: defaultOnOff.value.value,
  }

  await maintainStore.create(data)
  isLoading.value = false
  setTimeout(() => {
    maintainStore.isSuccess = false
  }, 500)
}

</script>
<template>
  <div class="container-maintain">
    <div class="title">Thiết Lập Bảo Trì WebSite</div>
    <div class="content">
      <div class="content__item">
        <div class="content__item__title">Thời Gian Bắt Đầu</div>
        <div class="content__item__input">
          <VueDatePicker v-model="startDate"></VueDatePicker>
        </div>
      </div>
      <div class="content__item">
        <div class="content__item__title">Thời Gian Kết Thúc</div>
        <div class="content__item__input">
          <VueDatePicker v-model="endDate"></VueDatePicker>
        </div>
      </div>
      <div class="content__item">
        <div class="content__item__title">Nội Dung Bảo Trì</div>
        <div class="content__item__input">
          <textarea v-model="content" name="" id="" cols="30" rows="10" placeholder="Nhập nội dung bảo trì"></textarea>
        </div>
      </div>
      <div class="content__item">
        <div class="content__item__title">Trạng Thái</div>
        <div class="content__item__input">
          <v-select v-model="defaultOnOff" class="row -active" variant="outlined" chips item-value="value"
            item-title="label" :items="ON_OFF" :clearable="false" return-object></v-select>
        </div>
      </div>
      <v-btn class="save" color="primary" :loading="isLoading" @click="createOrUpdateCanlenderMaintain">Lưu</v-btn>
      <span class="status" v-if="isSuccessMainTain">Thành Công</span>
    </div>
  </div>
</template>
<style lang="scss" scoped>
.container-maintain {
  color: #000;
  >.title {
    font-size: 24px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  >.content {
    display: flex;
    flex-direction: column;

    .content__item {
      display: flex;
      flex-direction: row;
      margin-bottom: 20px;

      &__title {
        width: 200px;
        font-weight: 600;
        font-size: 16px;
        margin-right: 20px;
      }

      &__input {
        flex: 1;

        input {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: none;
        }

        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: none;
          color: #000;
        }

        select {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 5px;
          outline: none;
        }
      }
    }
  }

  >.content>.save {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100px;
    margin: auto;
  }

  >.content>.status {
    color: green;
    display: flex;
    justify-content: center;
  }
}
</style>
