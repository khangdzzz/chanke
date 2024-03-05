<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { IListGameDetail } from '~~/utils'

const gameStore = useGameStore()

onMounted(async () => {
  await gameStore.getListGameDetail('true')
})

const LISTGAME = computed(() => {
  return gameStore.listGamesDetail.map((game, index) => {
    if (index === 0) {
      return {
        ...game,
        isActive: true,
      }
    }
    return {
      ...game,
      isActive: false,
    }
  })
})

const listGame = ref(LISTGAME.value)

watch(LISTGAME, () => {
  listGame.value = LISTGAME.value
})

const chooseGame = (game: IListGameDetail) => {
  gameStore.gameName = game.name
  gameStore.gameType = game.gameType
  listGame.value = listGame.value.map(item => {
    if (item._id == game._id) {
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
</script>

<template>
  <div class="profile-content">
    <ul class="tabs" id="profile__tabs" role="tablist">
      <li class="item" v-for="game in listGame" :key="game._id" @click="chooseGame(game)">
        <button type="button" class="btn" :class="{ '-active': game.isActive }">{{ game.name }}</button>
      </li>
    </ul>
  </div>
</template>

<style lang="scss" scoped>
.profile-content {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  background-color: #28282d;
  margin-top: 10px;
  position: relative;
  border-radius: 8px;
  border: 1px solid rgba(255, 255, 255, 0.05);
  padding: 5px 20px;

  >.games {
    color: #fff;
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 20px;
  }

  >.tabs {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    overflow: hidden;
    flex-wrap: wrap;
    border: none;
  }

  >.tabs>.item>.btn {
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    height: 50px;
    position: relative;
    text-transform: uppercase;
    font-size: 14px;
    font-weight: 400;
    margin-right: 25px;

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      right: 0;
      height: 0;
      display: block;
      background: linear-gradient(90deg, #fe5b09 0%, #fef9a6 100%);
      box-shadow: none;
      transition: 0.5s ease;
      border-radius: 2px 2px 0 0;
    }

    &.-active {
      color: #fff;
      background-image: linear-gradient(90deg, #fe5b09 0%, #fef9a6 100%);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;

      &::before {
        height: 2px;
        box-shadow: 0 0 16px 0 rgb(254 155 33 / 50%);
      }
    }
  }
}

@include mediaquery-up(lg) {
  .profile-content {
    margin-top: 0;
  }
}
</style>
