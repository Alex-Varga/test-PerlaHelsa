<template>
  <div class="announcement-bar">
    <span class="announcement-bar-text">Безкоштовна доставка від 1800 грн</span>
  </div>
</template>

<style scoped lang="scss">
.announcement-bar {
  padding: 6px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #99AFFF;

  @media (min-width: 1365px) {
    padding: 10px 0;
  }

  &-text {
    position: relative;
    font-weight: 500;
    font-size: 14px;
    line-height: 22px;
    text-align: center;
    color: #FFFFFF;
    padding: 0 12px;

    @media (min-width: 1365px) {
      font-size: 20px;
      line-height: 24px;
    }

    &::before, &::after {
      position: absolute;
      content: '';
      top: 50%;
      transform: translateY(-50%);
      width: 14px;
      height: 14px;
      background-image: url('/img/icon-bar.svg');

      @media (min-width: 1365px) {
        width: 20px;
        height: 20px;
      }
    }

    &::before {
      left: -12px;

      @media (min-width: 1365px) {
        left: -20px;
      }
    }

    &::after {
      right: -12px;

      @media (min-width: 1365px) {
        right: -20px;
      }
    }
  }
}
</style>