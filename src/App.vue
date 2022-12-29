<template>
  <div class="app">
    <AnnouncementBar/>
    <div class="container">
      <Header/>
      <RouterView/>
    </div>
  </div>
</template>

<script setup>
import AnnouncementBar from '@/components/AnnouncementBar.vue'
import Header from './components/Header.vue';

</script>

<style scoped lang="scss">
.app {
  background: linear-gradient(180deg, rgba(200, 224, 149, 0.8) 0%, rgba(221, 238, 239, 0.8) 90%, rgba(255, 255, 255, 0.8) 100%);
}

.container {
  max-width: 1440px;
  margin: 0 auto;
}
</style>
