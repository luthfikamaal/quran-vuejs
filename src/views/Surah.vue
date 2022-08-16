<template>
  <div v-show="surah.length == 0" id="load" class="h-screen flex items-center justify-center">Loading...</div>
  <div class="justify-center">
    <div class="w-full" id="card">
      <div class="grid">
        <div class="card pb-4 mb-3 text-right" v-for="(ayah, index) in surah.ayahs" :key="index">
          <div class="card-body px-4">
            <div class="mb-3 text-left text-2xl">{{ ayah.numberInSurah }}</div>
            <div class="text-arab-ayah text-2xl leading-arab-ayah">{{ ayah.text }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <audio v-bind:src="'https://download.quranicaudio.com/qdc/abdurrahmaan_as_sudais/murattal/' + surah.number + '.mp3'" id="audio"></audio>
  <div class="fixed bottom-0 inset-x-0 w-lg m-auto flex p-3">
    <button class="btn bg-indigo-500 text-white ml-auto mr-3">
      <i class="bi bi-play-fill" @click="play(surah.number)" id="btn-play"></i>
    </button>
  </div>
</template>

<script>
import { onMounted, ref } from 'vue';
import axios from 'axios';
import { useRoute, useRouter } from 'vue-router';
export default {
  data() {
    return {
      mute: true,
    };
  },
  methods: {
    play(number) {
      var btn = document.getElementById('btn-play');
      var audio = document.getElementById('audio');
      if (this.mute) {
        audio.play();
        this.mute = false;
        // btn.removeClass('bi-play-fill').addClass('bi-pause-fill');
        btn.classList.remove('bi-play-fill');
        btn.classList.add('bi-pause-fill');
      } else {
        audio.pause();
        this.mute = true;
        btn.classList.remove('bi-pause-fill');
        btn.classList.add('bi-play-fill');
      }
    },
  },
  setup() {
    const route = useRoute();
    let surah = ref([]);
    onMounted(() => {
      window.scrollTo(0, 0);
      axios
        .get(`https://api.alquran.cloud/v1/surah/${route.params.surah}`)
        .then((result) => {
          surah.value = result.data.data;
          document.getElementById('titleNav').innerHTML = surah.value.name;
        })
        .catch((err) => {
          console.log(err.message);
        });
    });
    return {
      surah,
    };
  },
};
</script>

<style lang="scss" scoped></style>
