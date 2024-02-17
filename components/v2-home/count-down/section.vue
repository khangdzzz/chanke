<script lang="ts" setup>
import copy from 'clipboard-copy'
let intervalId: any = null
const isStartTask = ref(false)
const countdownTime = 3 * 60 // 3 minutes in seconds
const remainingTime = ref(countdownTime)
const minutes = ref(Math.floor(remainingTime.value / 60))
const seconds = ref<string | number>('00')

const startTask = () => {
  document.addEventListener('visibilitychange', onVisibilityChange)
  isStartTask.value = true
  startTimer()
}

const startTimer = () => {
  intervalId = setInterval(() => {
    remainingTime.value -= 1
    minutes.value = Math.floor(remainingTime.value / 60)
    seconds.value = remainingTime.value % 60 < 10
      ? '0' + (remainingTime.value % 60)
      : remainingTime.value % 60

    if (remainingTime.value <= 0) {
      clearInterval(intervalId)
    }
  }, 1000)
}

const stopTimer = () => {
  if (intervalId) {
    clearInterval(intervalId)
  }
}

// Listener cho sự kiện visibilitychange
const onVisibilityChange = () => {
  if (document.visibilityState === 'hidden') {
    stopTimer()
  } else {
    startTimer()
  }
}

onUnmounted(() => {
  stopTimer()
})

const taskStore = useTaskStore()
const codeTask = ref('')

watch(remainingTime, async (newValue) => {
  if (newValue <= 0) {
    stopTimer()
    await taskStore.getTask()
    codeTask.value = taskStore.task?.code ?? ''
  }
})

const isCopy = ref(false)

const copyCode = () => {
  copy(codeTask.value)
  isCopy.value = true
}

</script>
<template>
  <div class="container-task">
    <h3 class="title">
      <v-icon class="icon" icon="mdi-calendar-check"></v-icon>
      Nhiệm Vụ Bí Mật
    </h3>
    <div class="content" v-if="remainingTime != 0">
      <v-btn class="btn" color="primary" @click="startTask" v-if="!isStartTask">Bắt Đầu Nhiệm Vụ</v-btn>
      <div class="time" v-if="isStartTask">Bạn chờ {{ minutes }}:{{ seconds }} để lấy mật khẩu</div>
    </div>

    <div class="code-task" v-if="remainingTime == 0">
      <input class="code" type="text" placeholder="Vui lòng nhập mã nhiệm vụ" v-model="codeTask"
        :class="{ copied: isCopy }" />
      <v-btn class="btn" color="primary" @click="copyCode">{{ isCopy ? "Đã Sao Chép" : "Sao Chép" }}</v-btn>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.container-task {
  display: block;
  overflow-x: auto;
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  flex: 1;
  max-width: 350px;

  >.title {
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

    >.icon {
      -webkit-text-fill-color: #fe5b09;
    }
  }

  >.content {
    display: flex;
    flex-direction: column;
    padding: 20px 0;
  }

  >.content>.btn {
    margin: auto;
  }

  >.content>.time {
    text-align: center;
  }
}

.code-task {
  display: flex;
  flex-direction: column;
  gap: 10px;

  >.code {
    padding: 5px 20px;
    border: 1px solid #ccc;
    margin: 20px;
    border-radius: 10px;
    min-height: 65px;

    &.copied {
      border-color: #05b9d9;
    }
  }

  >.btn {
    margin: auto;
    margin-bottom: 10px;
  }
}

@include mediaquery-up(lg) {
  .container-history {
    max-width: 100%;
  }
}
</style>

