<template>
  <div class="vp-dashboard">
    <div class="grid grid-cols-6">
      <div class="col-span-6 text-center">
        <h2 class="font-bold">Willkommen</h2>
        <p>Hier findest du alle Informationen zu deinen Filmen und Serien.</p>
      </div>
      <div class="col-span-6 mt-5">
        <h2 class="flex justify-between">
          <span class="font-bold">Filme ({{ movies.length }})</span>
          <router-link to="/movies" class="text-sm text-blue-600"
            >alle Filme</router-link
          >
        </h2>
        <div class="grid grid-cols-6 gap-2">
          <div
            v-for="(movie, index) in movies"
            class="col-span-6 md:col-span-2"
          >
            <div class="card bg-white px-2 py-2">
              <img
                v-if="movie.poster"
                :src="$store.state.url.media + '/' + movie.poster"
                alt=""
              />
              <h2 class="mt-2">{{ movie.name }}</h2>
            </div>
          </div>
        </div>
      </div>
      <div class="col-span-6 mt-5">
        <h2 class="flex justify-between">
          <span class="font-bold">Serien ({{ series.length }})</span>
          <router-link to="/series" class="text-sm text-blue-600"
            >alle Serien</router-link
          >
        </h2>
        <div class="grid grid-cols-6 gap-2">
          <div
            v-for="(serie, index) in series"
            class="col-span-6 md:col-span-2"
          >
            <div class="card bg-white px-2 py-2">
              <img
                v-if="serie.poster"
                :src="$store.state.url.media + '/' + serie.poster"
                alt=""
              />
              <h2 class="mt-2">{{ serie.name }}</h2>
              <h2 class="mt-2">{{ serie }}</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data() {
    return {
      movies: [],
      series: [],
    };
  },
  methods: {
    loadMovies: function () {
      const that = this;
      fetch("https://auth.my-media.world/api/movies", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: this.$store.state.auth.token,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          if (json.movies) {
            that.movies = json.movies.reverse().slice(-3);
          }
        });
    },
    loadSeries: function () {
      const that = this;
      fetch("https://auth.my-media.world/api/series", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: this.$store.state.auth.token,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          if (json.series) {
            that.series = json.series.reverse().slice(-3);
          }
        });
    },
  },
  mounted() {
    if (
      this.$store.state.auth.token == null ||
      this.$store.state.auth.token == ""
    ) {
      this.$router.push("/");
    }
    this.loadMovies();
    this.loadSeries();
  },
};
</script>
