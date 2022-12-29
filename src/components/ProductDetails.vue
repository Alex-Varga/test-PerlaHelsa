<template>
  <div class="product-details">
    <div class="product-details-top">
      <div class="product-details-top__descr">
        <div class="descr-image">
          <img src="/img/icon.png" alt="icon">
        </div>

        <div class="descr-info">
          <span class="descr-info-title">В упаковці:</span>
          <span class="descr-info-count">{{ product.count_in_pack }}</span>
          <span class="descr-info-duration">{{ product.duration }}</span>
        </div>
      </div>

      <div class="product-details-top__price">
        <span class="compared-price">{{ product.compared_price }} ₴</span>
        <span class="price">{{quantity * product.price }}₴</span>
      </div>
    </div>

    <div class="product-details-bottom">
      <div class="product-details-bottom__quantity">
        <span class="quantity-sybmol" @click="changeQuantity('minus')">
          <svg width="12" height="3" viewBox="0 0 12 3" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 0H12V2.5H0V0Z" fill="#00284F" fill-opacity="0.4"/>
          </svg>
        </span>
        <span class="quantity-value">
          {{ quantity }}
        </span>
        <span class="quantity-sybmol" @click="changeQuantity('plus')">
          <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M0 4.8062H4.72922V0H7.23861V4.8062H12V7.1938H7.23861V12H4.72922V7.1938H0V4.8062Z" fill="#00284F" fill-opacity="0.4"/>
          </svg>
        </span>
      </div>

      <button class="product-details-bottom__btn" @click="cartStore.addToCart(product, quantity)">
        <span class="btn-name">До кошика</span>
        <span class="btn-price">&nbsp;— {{ quantity * product.price }} ₴</span>
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref } from "@vue/reactivity";
import { useCartStore } from "../stores/cart";

const props = defineProps({
  product: {
    type: Object,
    required: true
  }
})

const cartStore = useCartStore()

const quantity = ref(1)

const changeQuantity = (type) => {
  if (type == 'minus') {
    quantity.value == 1 ? quantity.value = 1 : quantity.value--
  }

  if (type == 'plus') {
    quantity.value >= 10 ? quantity.value = 10 : quantity.value++
  }
}
</script>

<style lang="scss" scoped>
.product-details {
  padding-top: 28px;
  display: flex;
  flex-direction: column-reverse;

  @media (min-width: 767px) {
    padding-top: 44px;
    flex-direction: column;
  }

  @media (min-width: 1365px) {
    padding-top: 56px;
  }

  .product-details-top {
    display: flex;
    align-items: center;
    justify-content: center;

    @media (min-width: 767px) {
      justify-content: space-between;
    }

    .product-details-top__descr {
      display: flex;
      align-items: center;

      .descr-image {
        width: 40px;
        height: 40px;
        margin-right: 26px;

        @media (min-width: 767px) {
          width: 44px;
          height: 44px;
          margin-right: 32px;
        }
      }      

      .descr-info {
        display: flex;
        flex-direction: column;

        &-title {
          font-weight: 500;
          font-size: 16px;
          line-height: 18px;
          color: var(--primary);
        }

        &-count {
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          color: var(--primary);
        }

        &-duration {
          font-weight: 400;
          font-size: 16px;
          line-height: 18px;
          color: var(--primary);
          opacity: .5;
        }
      }
    }

    .product-details-top__price {
      display: none;

      @media (min-width: 767px) {
        display: flex;
      }

      align-items: center;

      .compared-price {
        position: relative;
        font-weight: 900;
        font-size: 28px;
        line-height: 36px;
        letter-spacing: -0.03em;
        color: rgba(0, 40, 79, 0.3);
        margin-right: 18px;

        @media (min-width: 1365px) {
          margin-right: 24px;
        }

        &::after {
          position: absolute;
          content: '';
          left: 0;
          top: 42%;
          transform: rotate(14deg);
          width: 100%;
          height: 2px;
          background: var(--primary);
        }
      }

      .price {
        font-weight: 700;
        font-size: 40px;
        line-height: 48px;
        color: #00284F;
      }
    }
  }

  .product-details-bottom {
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (min-width: 767px) {
      margin-top: 40px;
    }

    @media (min-width: 1023px) {
      margin-top: 64px;
    }

    &__quantity {
      display: none;
      align-items: center;
      justify-content: center;

      @media (min-width: 767px) {
        display: flex;
      }

      .quantity-sybmol {
        width: 46px;
        height: 46px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
      }

      .quantity-value {
        width: fit-content;
        height: 46px;
        padding: 0 18px;
        display: flex;
        align-items: center;
        justify-content: center;
        background: rgba(255, 255, 255, 0.7);
        border-radius: 7px;
        font-weight: 400;
        font-size: 28px;
        line-height: 36px;
        text-align: center;
        color: var(--primary);
      }
    }

    &__btn {
      width: 100%;
      height: 56px;
      background: #69C522;
      border-radius: 40px;
      display: flex;
      align-items: center;
      justify-content: center;

      font-weight: 500;
      font-size: 18px;
      line-height: 23px;
      text-align: center;
      color: #FFFFFF;
      margin-bottom: 32px;
      cursor: pointer;
      transition: all .3s linear;

      &:hover {
        opacity: .5;
      }

      @media (min-width: 767px) {
        max-width: 396px;
        margin-bottom: 0;
      }

      @media (min-width: 1365px) {
        max-width: 416px;
      }

      .btn-price {

        @media (min-width: 767px) {
          display: none;
        }
      }
    }
  }  
}
</style>