<template>
  <div class="vp-series-season-add">
    <div class="tw-table block border border-black">
      <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
        <div class="col col-span-12 md:col-span-4">Name</div>
        <div class="col col-span-12 md:col-span-2">TMDB Rating</div>
        <div class="col col-span-12 md:col-span-2">User Rating</div>
        <div class="col col-span-12 md:col-span-2">Kommentar</div>
        <div class="col col-span-12 md:col-span-2">Action</div>
      </div>
      <div
        v-for="(season, index) in seasons"
        class="row grid grid-cols-12 px-2 py-2 bg-white"
      >
        <div class="col col-span-12">
          <img
            :src="'https://image.tmdb.org/t/p/original' + season.poster_path"
            alt=""
            class="w-40"
          />
        </div>
        <div class="col col-span-12">
          <button @click="add(season.id, season.season_number)">add</button>
        </div>
        <div class="col col-span-12">{{ season }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SeriesSeasonAdd",
  data() {
    return {
      seasons: [],
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load: function () {
      const that = this;
      fetch("https://api.themoviedb.org/3/tv/" + this.$route.params.id, {
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + that.$store.state.auth.bearer,
        },
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          that.seasons = json.seasons;
        });
    },
    add: function (id, number) {
      const that = this;
      fetch(that.$store.state.url.auth + "/api/series/season/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: "Bearer " + that.$store.state.auth.bearer,
        },
        body: JSON.stringify({
          tmdb: id,
          number: number,
          serie_tmdb: this.$route.params.id,
          token: that.$store.state.auth.token,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          // that.$router.push("/series/");
        });
    },
  },
};
</script>
