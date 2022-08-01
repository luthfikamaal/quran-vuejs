<script setup>
import HelloWorld from './components/HelloWorld.vue';
import TheWelcome from './components/TheWelcome.vue';
import Footer from './components/Footer.vue';
</script>

<template>
  <div class="bg-indigo-900 text-white p-3">
    <router-view></router-view>
    <Footer />
  </div>
</template>
