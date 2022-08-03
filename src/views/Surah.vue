<template>
  <div v-show="ayahs.length == 0" id="load" class="h-screen flex items-center bg-indigo-600 justify-center text-white">Loading...</div>
  <div class="lg:flex md:block grid gap-x-6 justify-center">
    <div class="w-full lg:w-3/4" id="cards">
      <div class="flex fixed">
        <router-link class="rounded-md bg-indigo-600 p-3 mb-3 shadow-md" :to="{ name: 'home' }">Back</router-link>
      </div>
      <div class="grid gap-y-6 pt-16">
        <h1 class="text-5xl text-arab-ayah text-right">{{ ayahs.nama }}</h1>
        <div class="w-full rounded-md overflow-hidden shadow-md bg-indigo-600 p-4 text-right" v-for="(ayah, index) in ayahs.ayat" :key="index">
          <div class="mb-3 text-left text-2xl">{{ ayah.nomor }}</div>
          <div class="text-arab-ayah text-2xl leading-arab-ayah">{{ ayah.ar }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
export default {
  setup() {
    const route = useRoute();
    let ayahs = ref([]);
    onMounted(() => {
      window.scrollTo(0, 0);
      axios
        .get(`https://equran.id/api/surat/${route.params.surah}`)
        .then((result) => {
          ayahs.value = result.data;
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
    return { ayahs };
  },
};
</script>

<style lang="scss" scoped></style>
