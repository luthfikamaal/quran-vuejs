<template>
  <div class="flex bg-indigo-600 items-center text-white fixed p-3 w-lg">
    <div>
      <router-link :to="{ name: 'home' }">
        <i class="text-2xl bi bi-arrow-left" v-if="$route.path != '/'"></i>
        <i class="text-2xl bi bi-house-door-fill" v-if="$route.path == '/'"></i>
      </router-link>
    </div>
    <div class="ml-auto">
      <p class="text-2xl text-center" v-if="$route.path == '/'" id="titleNav">Quran</p>
      <p class="text-2xl text-right text-arab-ayah" v-if="$route.path != '/'" id="titleNav">Quran</p>
    </div>
  </div>
</template>
