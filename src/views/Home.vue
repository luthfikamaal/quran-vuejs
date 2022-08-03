<template>
  <div v-show="surahs.length == 0" id="load" class="h-screen flex items-center bg-indigo-600 justify-center text-white">Loading...</div>
  <div class="flex justify-center">
    <div class="w-full md:w-3/4">
      <div class="grid gap-y-3">
        <div class="w-full rounded-md overflow-hidden shadow-md bg-indigo-600 p-3" v-for="(surah, index) in surahs" :key="index">
          <h2 class="text-3xl text-arab-title text-center">
            <router-link :to="{ name: 'surah', params: { surah: surah.nomor } }">{{ surah.nama }}</router-link>
          </h2>
        </div>
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
      axios
        .get('https://equran.id/api/surat/')
        .then((result) => {
          surahs.value = result.data;
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
