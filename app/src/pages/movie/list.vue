<template>
  <div class="vp-home">
    <div class="grid grid-cols-6 gap-2">
      <div class="col-span-6">
        <h2 class="flex justify-between">
          <span>Filme</span>
          <input type="text" v-model="search" />
          <div class="buttons">
            <button @click="$router.push('/movie/add')">
              <fa icon="plus" class="px-2 py-2 bg-white border border-black" />
            </button>
          </div>
        </h2>
        <div class="tw-table block border border-black">
          <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
            <div class="col col-span-12 md:col-span-6">Name</div>
            <div class="col col-span-12 md:col-span-6">Action</div>
          </div>
          <div
            v-for="(movie, index) in movies"
            class="row grid grid-cols-12 font-bold px-2 py-2"
          >
            <div class="col col-span-12 md:col-span-4">{{ movie.name }}</div>
            <div class="col col-span-12 md:col-span-2">{{ movie.tmdb_rating }}</div>
            <div class="col col-span-12 md:col-span-2">{{ movie.comment }}</div>
            <div class="col col-span-12 md:col-span-2">{{ movie.rating }}</div>
            <div class="col col-span-12 md:col-span-2 space-x-2">
              <button
                @click="remove(movie.id)"
                class="px-2 py-2 bg-white border border-black w-8 text-center"
              >
                <fa icon="times" />
              </button>
              <button
                @click="$router.push('/movie/' + movie.id)"
                class="px-2 py-2 bg-white border border-black w-8 text-center"
              >
                <fa icon="edit" />
              </button>
            </div>
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
      movies: [],
      search: "",
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    remove: function (id) {
      const that = this;
      fetch("https://auth.my-media.world/api/movie/remove", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: this.$store.state.auth.token,
          id: id,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          that.$router.go();
        });
    },
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
