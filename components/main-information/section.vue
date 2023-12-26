<script lang="ts" setup>
import { storeToRefs } from 'pinia'

const LIST_GAME = [
  {
    id: 1,
    name: 'Chẵn Lẻ',
    isActive: true,
  },
  {
    id: 2,
    name: 'Tài Xỉu',
    isActive: false,
  },
  {
    id: 3,
    name: '1 Phần 3',
    isActive: false,
  },
  {
    id: 4,
    name: 'Xiên',
    isActive: false,
  },
  {
    id: 5,
    name: 'Đoán Số',
    isActive: false,
  },
]

const ACTION = [
  {
    id: 1,
    name: 'Điểm Danh',
    icon: 'mdi-account-plus ',
    method: () => showDialogCheckIn(),
  },
  {
    id: 2,
    name: 'Nhiệm Vụ Hàng Ngày',
    icon: 'mdi-format-list-checkbox ',
    method: () => scrollToTasks(),
  },
  {
    id: 3,
    name: 'Mã Quà Tặng',
    icon: 'mdi-gift ',
    method: () => showDialogGift(),
  },
  {
    id: 4,
    name: 'Tạo Nick Name',
    icon: 'mdi-play ',
    method: () => scrollToCreateNickname(),
  },
]

const listGame = ref(LIST_GAME)

const chooseGame = (game: { id: number }) => {
  listGame.value = listGame.value.map(item => {
    if (item.id === game.id) {
      return {
        ...item,
        isActive: true,
      }
    }
    return {
      ...item,
      isActive: false,
    }
  })
}

const dialogConfirmStore = useDialogConfirmStore()
const { showDialog, showDialogGift, showDialogCheckIn } = dialogConfirmStore

const scrollStore = useScrollStore()
const { tasksSection, nickNameSection, scrollOpenCreateNickName } =
  storeToRefs(scrollStore)

const scrollToTasks = () => {
  tasksSection.value.$el.scrollIntoView({ behavior: 'smooth', block: 'center' })
}

const scrollToCreateNickname = () => {
  scrollOpenCreateNickName.value = true
  nickNameSection.value.$el.scrollIntoView({
    behavior: 'smooth',
    block: 'center',
  })
}
</script>
<template>
  <div class="daily-action">
    <h1 class="title">
      <b class="bold">Chẵn Lẻ Bank</b>
      - Auto Trả Tiền Thắng Trong 3s
    </h1>
    <div class="games">
      <button
        v-for="game in listGame"
        :key="game.id"
        variant="outlined"
        class="button"
        :class="{ '-active': game.isActive }"
        @click="chooseGame(game)"
      >
        {{ game.name }}
      </button>
    </div>
    <button class="note" @click="showDialog">Xem Lưu ý</button>
    <div class="actions">
      <button
        v-for="action in ACTION"
        :key="action.id"
        class="button"
        @click="action.method"
      >
        <v-icon class="icon" :icon="action.icon" />
        {{ action.name }}
      </button>
    </div>
  </div>
  <DialogNote />
  <DialogGift />
  <DialogCheckin />
</template>

<style lang="scss" scoped>
.daily-action {
  background-color: white;
  border-radius: 5px 5px 5px;
  padding: 60px 25px 40px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  > .title {
    font-size: 2rem;
    font-weight: 300;
    margin-bottom: 20px;
    text-align: center;
    > .bold {
      font-weight: 900;
    }
  }

  > .games {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 0.75rem;
  }

  > .games > .button {
    border-radius: 5px;
    border: 1px solid $primary-color;
    font-size: 0.8125rem;
    font-weight: 650;
    padding: 6px 10px;
    height: 38px;
    min-width: 80px;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: $primary-color;
      color: white;
    }
  }

  > .games > .-active {
    background-color: $primary-color;
    color: white;
  }

  > .note {
    color: #fff;
    height: 38px;
    width: 100px;
    border-radius: 5px;
    padding: 6px 10px;
    font-size: 0.8125rem;
    margin-bottom: 0.75rem;
    border: 1px solid $primary-color;
    background-color: $primary-color;
  }

  > .actions {
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    gap: 16px;
    margin-bottom: 0.75rem;
  }

  > .actions > .button {
    border-radius: 5px;
    border: 1px solid $primary-color;
    font-size: 0.8125rem;
    font-weight: 650;
    padding: 6px 10px;
    height: 38px;
    min-width: 80px;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: $primary-color;
      color: white;
    }
  }
}
</style>
