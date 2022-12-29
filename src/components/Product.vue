<template>
  <div class="product" v-for="product of products" :key="product.id">
    <div class="product-media">
      <swiper
        :slides-per-view="1"
        :space-between="150"
        class="mySwiper"
        @swiper="onSwiper"
      >
        <swiper-slide v-for="(item, i) of product.images" :key="i">
          <img :src="item" :alt="product.title">
        </swiper-slide>
      </swiper>

      <div class="arrows-wrapper">
        <div class="swiper-button-prev" @click="onPrevClick">
          <span class="mob">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.3346 25.478C13.8991 25.9045 13.8991 26.5988 14.3346 27.0252L15.0039 27.6805C15.2144 27.8866 15.4946 28 15.7939 28C16.0933 28 16.3739 27.8866 16.584 27.6805L25.6741 18.7805C25.8854 18.574 26.0008 18.2984 26 18.0037C26.0008 17.7102 25.8854 17.4346 25.6741 17.228L16.5757 8.31951C16.3656 8.11341 16.085 8 15.786 8C15.4867 8 15.2061 8.11341 14.996 8.31951L14.3263 8.9748C14.1158 9.18089 14 9.45528 14 9.74878C14 10.0419 14.1158 10.3167 14.3263 10.522L21.9675 18.0041L14.3346 25.478Z" fill="var(--primary)" fill-opacity="0.5"/>
            </svg>
          </span>

          <span class="desk">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.8145 15.7594C14.5148 16.0802 14.016 16.0802 13.7058 15.7594C13.4061 15.4494 13.4061 14.9334 13.7058 14.6242L19.3277 8.80931L0.7762 8.80931C0.343699 8.80859 6.59772e-07 8.45309 6.98879e-07 8.00575C7.37978e-07 7.55851 0.343699 7.19143 0.7762 7.19143L19.3277 7.19144L13.7058 1.38738C13.4061 1.06653 13.4061 0.549893 13.7058 0.240633C14.016 -0.0802104 14.5155 -0.0802104 14.8145 0.240633L21.7674 7.43202C22.0775 7.742 22.0775 8.25802 21.7674 8.56728L14.8145 15.7594Z" fill="var(--primary)" fill-opacity="0.5"/>
            </svg>
          </span>
        </div>
        <div class="swiper-button-next" @click="onNextClick">
          <span class="mob">
            <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M14.3346 25.478C13.8991 25.9045 13.8991 26.5988 14.3346 27.0252L15.0039 27.6805C15.2144 27.8866 15.4946 28 15.7939 28C16.0933 28 16.3739 27.8866 16.584 27.6805L25.6741 18.7805C25.8854 18.574 26.0008 18.2984 26 18.0037C26.0008 17.7102 25.8854 17.4346 25.6741 17.228L16.5757 8.31951C16.3656 8.11341 16.085 8 15.786 8C15.4867 8 15.2061 8.11341 14.996 8.31951L14.3263 8.9748C14.1158 9.18089 14 9.45528 14 9.74878C14 10.0419 14.1158 10.3167 14.3263 10.522L21.9675 18.0041L14.3346 25.478Z" fill="var(--primary)" fill-opacity="0.5"/>
            </svg>
          </span>

          <span class="desk">
            <svg width="22" height="16" viewBox="0 0 22 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M14.8145 15.7594C14.5148 16.0802 14.016 16.0802 13.7058 15.7594C13.4061 15.4494 13.4061 14.9334 13.7058 14.6242L19.3277 8.80931L0.7762 8.80931C0.343699 8.80859 6.59772e-07 8.45309 6.98879e-07 8.00575C7.37978e-07 7.55851 0.343699 7.19143 0.7762 7.19143L19.3277 7.19144L13.7058 1.38738C13.4061 1.06653 13.4061 0.549893 13.7058 0.240633C14.016 -0.0802104 14.5155 -0.0802104 14.8145 0.240633L21.7674 7.43202C22.0775 7.742 22.0775 8.25802 21.7674 8.56728L14.8145 15.7594Z" fill="var(--primary)" fill-opacity="0.5"/>
            </svg>
          </span>
        </div>
      </div>
    </div>

    <div class="product-information">
      <div class="product-information-title-wrapper">
        <h3 class="product-information-title" v-html="product.title"></h3>
        <span class="product-information-descr">{{ product.description }}</span>
      </div>

      <ProductTabs :tabTitles="tabTitles" />

      <ProductDetails :product="product" />
    </div>
  </div>
</template>

<script setup>
import { Navigation } from 'swiper';
import { useSwiper, Swiper, SwiperSlide, useSwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';
import { ref } from '@vue/reactivity';

import ProductTabs from '@/components/ProductTabs.vue'
import ProductDetails from './ProductDetails.vue';

const controlledSwiper = ref(null)

const onSwiper = (swiper) => {
  controlledSwiper.value = swiper;
}

const onPrevClick = () => {
  controlledSwiper.value.slidePrev(350)
}

const onNextClick = () => {
  controlledSwiper.value.slideNext(350)
}

const image = new URL('/img/slide1.png', import.meta.url).href
const slide2 = new URL('/img/slide2.png', import.meta.url).href
const slide3 = new URL('/img/slide3.png', import.meta.url).href
const slide4 = new URL('/img/slide4.png', import.meta.url).href

const products = ref([
  {
    id: 1,
    image: image,
    title: '<strong>Омега-3</strong> Тріска',
    description: 'з вітамінами А і D3',
    price: 489,
    compared_price: 963,
    images: [image, slide2, slide3, slide4],
    count_in_pack: '120 капсул по 500 мг',
    duration: '1 місяць прийому'
  }
])

const tabTitles = ['ОПИС', 'КОРИСТЬ', 'ІНГРЕДІЄНТИ', 'СПОСІБ ЗАСТОСУВАННЯ']

</script>

<style lang="scss" scoped>
.product {

  @media (min-width: 1023px) {
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
  }

  &-media {
    position: relative;

    @media (min-width: 1023px) {
      width: 40%;
    }

    @media (min-width: 1365px) {
      width: 45%;
    }

    .mySwiper {
      text-align: center;
      padding: 0 50px;

      @media (min-width: 767px) {
        padding: 0 150px;
      }

      @media (min-width: 1023px) {
        padding: 0;
      }
    }

    .arrows-wrapper {
      width: 100%;
      height: 16px;
      position: absolute;
      z-index: 2;
      top: 50%;
      transform: translateY(-50%);

      @media (min-width: 1023px) {
        width: 86px;
        top: auto;
        transform: none;
        bottom: 0;
        right: 0;
        display: flex;
        justify-content: space-between;
      }
    
      .swiper-button-prev, .swiper-button-next {
        width: 36px;
        height: 36px;
        display: flex;
        align-items: stretch;

        @media (min-width: 1023px) {
          width: 22px;
          height: 16px;
          position: static;

          svg path {
            transition: all .3s linear;
          }

          &:hover {
            svg path {
              fill: #69C522;
            }
          }
        }

        .mob {

          @media (min-width: 1023px) {
            display: none;
          }
        }

        .desk {
          display: none;

          @media (min-width: 1023px) {
            display: block;
          }
        }

        &:after {
          display: none;
        }
      }

      .swiper-button-prev {
        transform: rotate(180deg);
      }
    }
  }

  &-information {
    margin-top: 24px;

    @media (min-width: 1023px) {
      width: 60%;
      margin-top: 0;
    }

    @media (min-width: 1365px) {
      width: 50%;
    }

    &-title-wrapper {
      @media (min-width: 767px) {
        display: flex;
        align-items: center;
      }
    }

    &-title {
      font-family: 'Onest';
      font-style: italic;
      font-weight: 400;
      font-size: 25px;
      line-height: 32px;
      color: var(--primary);
      margin-bottom: 4px;

      strong {
        font-style: normal;
        font-weight: 700;
      }

      @media (min-width: 767px) {
        font-size: 40px;
        line-height: 48px;
        display: inline-block;
        margin-right: 24px;
        margin-bottom: 0;
      }
    }

    &-descr {
      padding: 2px 19px;
      background: #FFFFFF;
      border-radius: 15px;
      font-style: normal;
      font-weight: 500;
      font-size: 16px;
      line-height: 20px;
      color: var(--primary);

      @media (min-width: 767px) {
        padding: 5px 24px;
        font-size: 22px;
        line-height: 22px;
      }

      @media (min-width: 1365px) {
        padding: 8px 52px;
      }
    }

    &-tabs {
      padding-top: 24px;

      @media (min-width: 767px) {
        padding-top: 32px;
      }
    }
  }
}
</style>