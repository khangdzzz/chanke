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
  <div class="jackpot">
    <div class="jackpot-content">
      <a
        class="content"
        href="#"
        data-toggle="modal"
        data-target="#modalJackpot"
      >
        <img src="~/assets/images/jackpot.png" alt="" />
        <div class="jackpot-value">
          <span>47,939</span>
          đ
        </div>
      </a>
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

.jackpot {
  position: fixed;
  z-index: 100;
  bottom: 80px;
  width: 120px;
  left: 20px;
  @media (max-width: 769px) {
    width: 90px;
  }
}

.jackpot-content {
  > .content {
    text-decoration: none;
  }
  > .content img {
    animation: wiggle 1.3s linear infinite;
  }
  > .content > .jackpot-value {
    font-size: 18px;
    color: #28a745;
    font-weight: 700;
  }
}

@keyframes wiggle {
  0%,
  7% {
    transform: rotateZ(0);
  }
  15% {
    transform: rotateZ(-15deg);
  }
  20% {
    transform: rotateZ(10deg);
  }
  25% {
    transform: rotateZ(-10deg);
  }

  30% {
    transform: rotateZ(6deg);
  }
  35% {
    transform: rotateZ(-4deg);
  }
  40%,
  100% {
    transform: rotateZ(0);
  }
}
</style>
