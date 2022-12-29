<template>
  <div class="benefits">
    <div class="benefits-items">
      <div class="benefits-item" v-for="(item, i) of benefitsItems" :key="i">
        <div class="benefits-item-icon">
          <img :src="item.img" alt="benefits">
        </div>

        <div class="benefits-item-text">{{ item.text }}</div>
      </div>
    </div>
  </div>
</template>

<script setup>

const benefits1 = new URL('/img/benefits1.png', import.meta.url).href
const benefits2 = new URL('/img/benefits2.png', import.meta.url).href
const benefits3 = new URL('/img/benefits3.png', import.meta.url).href

const benefitsItems = [
  {
    img: benefits1,
    text: 'Безкоштовна доставка від 1800 грн'
  },
  {
    img: benefits2,
    text: 'Відправки в день оформлення замовлення до 16:00'
  },
  {
    img: benefits3,
    text: 'Гарантія повернення грошових коштів'
  }
]
</script>

<style lang="scss" scoped>
.benefits {
  padding: 16px 15px 40px;

  @media (min-width: 767px) {
    padding: 28px 36px 56px;
  }

  @media (min-width: 1365px) {
    padding: 40px 72px 64px;
  }

  &-items {
    padding: 33px;
    background: #FFFFFF;
    border-radius: 15px;
    display: flex;
    flex-direction: column;

    @media (min-width: 767px) {
      padding: 38px 60px;
      flex-direction: row;
    }

    @media (min-width: 1365px) {
      padding: 20px 56px;
    }
  }

  &-item {
    display: flex;
    margin-bottom: 25px;

    @media (min-width: 767px) {
      flex-direction: column;
      margin-right: 24px;
      margin-bottom: 0;
    }

    @media (min-width: 1365px) {
      flex-direction: row;
      align-items: center;
      margin-right: 120px;
    }

    &:last-child {
      margin: 0;
    }

    &-icon {
      min-width: 54px;
      height: 54px;
      margin-right: 45px;

      @media (min-width: 767px) {
        width: 56px;
        height: 36px;
        margin: 0 auto 24px;
      }

      @media (min-width: 1365px) {
        margin-bottom: 0;
        margin-right: 24px;
      }
    }

    &-text {
      font-weight: 400;
      font-size: 16px;
      line-height: 21px;
      color: var(--primary);

      @media (min-width: 767px) {
        text-align: center;
        font-size: 18px;
        line-height: 24px;
      }

      @media (min-width: 1365px) {
        text-align: left;
      }
    }
  }
}
</style>