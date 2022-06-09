<template>
  <div class="vp-home">
    <div class="grid grid-cols-6 gap-2">
      <div class="col-span-6">
        <h2 class="flex justify-between">
          <span></span>
          <div class="buttons">
            <button @click="$router.push('/movie/add')">Add</button>
          </div>
        </h2>
        <div class="tw-table block border border-black">
          <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
            <div class="col col-span-12 md:col-span-2">Id</div>
            <div class="col col-span-12 md:col-span-2">TMDB</div>
            <div class="col col-span-12 md:col-span-2">Name</div>
            <div class="col col-span-12 md:col-span-2">Erstellt</div>
          </div>
          <div
            v-for="(movie, index) in movies"
            class="row grid grid-cols-12 font-bold px-2 py-2"
          >
            <div class="col col-span-12 md:col-span-2">{{ movie.id }}</div>
            <div class="col col-span-12 md:col-span-2">{{ movie.tmdb }}</div>
            <div class="col col-span-12 md:col-span-2">{{ movie.name }}</div>
            <div class="col col-span-12 md:col-span-2">{{ movie.created_at }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      movies: {},
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load: function () {
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
            that.movies = json.movies;
          }
        });
    },
  },
};
</script>
