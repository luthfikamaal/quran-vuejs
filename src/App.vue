<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import Footer from './components/Footer.vue';
import Navbar from './components/Navbar.vue';
</script>

<template>
  <div class="overflow-hidden m-auto">
    <Navbar />
    <div class="pt-16 pb-3 px-3">
      <router-view></router-view>
    </div>
    <!-- <Footer v-if="$route.path != '/'" /> -->
  </div>
</template>
