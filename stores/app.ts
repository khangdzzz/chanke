export const useDialogConfirmStore = defineStore('dialog-confirm', () => {
  const isVisible = ref(true)
  const isVisibleGift = ref(false)
  const isVisibleCheckIn = ref(false)

  const showDialog = () => {
    isVisible.value = true
  }

  const hideDialog = () => {
    isVisible.value = false
  }

  const showDialogGift = () => {
    isVisibleGift.value = true
  }

  const hideDialogGift = () => {
    isVisibleGift.value = false
  }

  const showDialogCheckIn = () => {
    isVisibleCheckIn.value = true
  }

  const hideDialogCheckIn = () => {
    isVisibleCheckIn.value = false
  }

  return {
    isVisible,
    isVisibleGift,
    isVisibleCheckIn,
    showDialog,
    hideDialog,
    showDialogGift,
    hideDialogGift,
    showDialogCheckIn,
    hideDialogCheckIn,
  }
})
