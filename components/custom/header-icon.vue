<script lang="ts" setup>
const useApp = useDialogConfirmStore()
</script>
<template>
  <div class="header-icon">
    <input type="checkbox" id="hamburger">
    <label for="hamburger" class="hamburger" @click="() => useApp.isOpenMenuBar = !useApp.isOpenMenuBar">
      <span class="line"></span>
      <span class="line"></span>
      <span class="line"></span>
    </label>
  </div>
</template>
<style lang="scss" scoped>
label.hamburger {
  display: block;
  width: 30px;
  height: 70px;
  position: relative;
  cursor: pointer;
}

input#hamburger {
  display: none
}

.line {
  position: absolute;
  height: 2px;
  width: 100%;
  background: #fff;
  transition: 0.5s;
}

/* steps of 12 are optional, could also be 10, 13 etc */
.line:nth-child(1) {
  top: 20px;
}

.line:nth-child(2) {
  top: 32px;
}

.line:nth-child(3) {
  top: 44px;
}

/* translateY must be same as */
#hamburger:checked+.hamburger .line:nth-child(1) {
  transform: translateY(12px) rotate(-45deg);
}

#hamburger:checked+.hamburger .line:nth-child(2) {
  opacity: 0;
}

#hamburger:checked+.hamburger .line:nth-child(3) {
  transform: translateY(-12px) rotate(45deg);
}
</style>
