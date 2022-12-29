<template>
  <div class="hero">
    <Product/>
  </div>
</template>

<script setup>
import Product from './Product.vue';
</script>

<style lang="scss" scoped>
.hero {
  padding: 40px 15px 16px;

  @media (min-width: 767px) {
    padding: 60px 36px 28px;
  }

  @media (min-width: 1365px) {
    padding: 80px 72px 40px;
  }
}
</style>