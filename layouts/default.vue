<script lang="ts" setup></script>
<template>
  <div class="main-container">
    <HeaderSection />
    <div class="spacer-background">
      <div class="content">
        <slot />
      </div>
      <div class="footer">
        <div class="label">
          <b>chanlebank.cz</b>
          ©
          {{ new Date().getFullYear() }}
          -
          {{ new Date().getFullYear() + 2 }}
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.spacer-background {
  height: 160px;
  background: $primary-color;
  width: 100%;
  position: relative;
  z-index: 1;

  > .content {
    width: 100%;
    max-width: 564px;
    margin: 0 auto;
    margin-top: 50px;
    padding: 0 16px;
    @media (min-width: 769px) {
      max-width: 660px;
      padding: 0;
    }
    @media (min-width: 981px) {
      max-width: 960px;
      padding: 0;
    }
    @media (min-width: 1281px) {
      max-width: 1200px;
      margin-top: 70.4px;
      padding: 0;
    }
  }
}

.footer {
  margin-top: auto;
  display: flex;
  justify-content: center;
  background: #fff;
  border-top: 1px solid #eaeaea;
  font-size: 0.875rem;
  padding: 1.25rem 0;
  color: #898989;
  width: 100% !important;
  position: relative;
  z-index: 1;
}
</style>
