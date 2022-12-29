<template>
  <header class="header">
    
    <div class="header-top">

      <div class="header-left">

        <div class="header-left__burger">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div class="header-left__search">
          <img src="img/icon-search.svg" alt="search">
        </div>
      </div>

      <router-link to="/" class="header-logo">
        <img src="img/Logo.svg" alt="logo">
      </router-link>

      <div class="header-right">
        <a href="tel:0999999999" class="header-right__phone">
          <img src="img/icon-tel.svg" alt="phone">
        </a>

        <div class="header-right__cart">
          <router-link to="/cart">
            <img src="img/icon-cart.svg" alt="cart">
            <span class="cart-count">
              {{ cartStore.cart.length }}
            </span>
          </router-link>
        </div>
      </div>
    </div>

    <div class="header-menu">
      <router-link
        v-for="(item, i) of menu" 
        :key="i"
        :to="item.path"
        class="header-menu-link"
      >
      {{ item.name }}
      </router-link>
    </div>
  </header>
</template>

<script setup>
import { useCartStore } from "../stores/cart"

const cartStore = useCartStore()

const menu = [
  {
    name: 'Омега-3',
    path: '/omega-3'
  },
  {
    name: 'Вітаміни',
    path: '/вітаміни'
  },
  {
    name: 'Добавки',
    path: '/добавки'
  },
  {
    name: 'Доставка',
    path: '/доставка'
  },
  {
    name: 'Про нас',
    path: '/про-нас'
  }
]

</script>

<style lang="scss" scoped>
.header {
  padding: 0 15px;

  @media (min-width: 767px) {
    padding: 0 36px;
  }

  @media (min-width: 1365px) {
    padding: 0 72px;
  }

  .header-top {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    align-items: center;
    padding: 30px 0 16px;
  }

  &-left {
    display: flex;
    align-items: center;

    &__burger {
      position: relative;
      display: flex;
      justify-content: space-between;
      flex-direction: column;
      width: 16px;
      height: 11px;
      cursor: pointer;

      @media (min-width: 767px) {
        width: 26px;
        height: 20px;
      }

      span {
        width: 16px;
        height: 2px;
        background: var(--primary);
        transition: all .3s linear;
        border-radius: 4px;

        @media (min-width: 767px) {
          width: 26px;
        }
      }
    }

    &__search {
      width: 15px;
      height: 15px;
      margin-left: 14px;
      cursor: pointer;

      @media (min-width: 767px) {
        width: 24px;
        height: 24px;
        margin-left: 33px;
      }

      @media (min-width: 1365px) {
        margin-left: 40px;
      }
    }
  }

  &-logo {
    width: 120px;
    height: 20px;
    margin: 0 auto;

    @media (min-width: 767px) {
      width: 150px;
      height: 24px;
    }

    @media (min-width: 1365px) {
      width: 196px;
      height: 32px;
    }
  }

  &-right {
    display: flex;
    align-items: center;
    justify-content: flex-end;

    &__phone {
      display: block;
      width: 16px;
      height: 16px;
      margin-right: 14px;
      cursor: pointer;

      @media (min-width: 767px) {
        width: 24px;
        height: 24px;
        margin-right: 33px;
      }

      @media (min-width: 1365px) {
        margin-right: 37px;
      }
    }

    &__cart {
      position: relative;
      width: 17px;
      height: 16px;
      z-index: 10;

      @media (min-width: 767px) {
        width: 27px;
        height: 25px;
      }

      .cart-count {
        position: absolute;
        top: -10px;
        right: -5px;
        background: #F5F352;
        width: 14px;
        height: 14px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: 'Onest';
        font-style: normal;
        font-weight: 400;
        font-size: 8px;
        line-height: 10px;
        color: #000000;

        @media (min-width: 767px) {
          font-weight: 500;
          width: 26px;
          height: 26px;
          font-size: 14px;
          line-height: 14px;
          top: -16px;
          right: -12px;
        }
      }
    }
  }

  .header-menu {
    display: none;
    align-items: center;
    justify-content: center;
    padding: 30px 0 16px;
    column-gap: 55px;

    @media (min-width: 767px) {
      display: flex;
    }

    @media (min-width: 1365px) {
      column-gap: 40px;
    }

    &-link {
      position: relative;
      font-style: normal;
      font-weight: 400;
      font-size: 23px;
      line-height: 29px;
      color: #000000;

      &:hover::after {
        width: 100%;
      }

      &::after {
        transition: all .3s linear;
        position: absolute;
        bottom: -1px;
        left: 0;
        content: '';
        width: 0;
        height: 1.5px;
        background: #000000;
      }
    }
  }
}
</style>