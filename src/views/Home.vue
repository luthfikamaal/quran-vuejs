<template>
  <div v-show="surahs.length == 0" id="load" class="h-screen flex items-center justify-center">Loading...</div>
  <div class="grid lg:grid-cols-2 grid-cols-1 gap-4">
    <div class="card" v-for="(surah, index) in surahs" :key="index">
      <div class="card-body">
        <h2 class="text-3xl text-arab-title text-center">
          <router-link :to="{ name: 'surah', params: { surah: surah.number } }">
            {{ surah.name }}
            <div class="pt-3 text-2xl font-ss">{{ surah.englishName }}</div>
          </router-link>
        </h2>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
export default {
  setup() {
    let surahs = ref([]);
    onMounted(() => {
      window.scrollTo(0, 0);
      axios
        .get('https://api.alquran.cloud/v1/surah')
        .then((result) => {
          surahs.value = result.data.data;
          document.getElementById('titleNav').innerHTML = 'Quran';
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
    return {
      surahs,
    };
  },
};
</script>

<style lang="scss" scoped></style>
