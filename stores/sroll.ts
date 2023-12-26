export const useScrollStore = defineStore('scroll-section', () => {
  const tasksSection = ref()
  const nickNameSection = ref()
  const scrollOpenCreateNickName = ref(false)

  return {
    tasksSection,
    nickNameSection,
    scrollOpenCreateNickName,
  }
})
