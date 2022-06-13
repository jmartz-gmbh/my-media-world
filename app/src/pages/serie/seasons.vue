<template>
  <div class="vp-serie-seasons">
    <div class="grid grid-cols-8 gap-2">
      <div v-for="(season, index) in seasons" class="col-span-8 md:col-span-2">
        <img :src="$store.state.url.media + season.poster" alt="" />
        <h2>{{ season.serie_name }}</h2>
        <h2>{{ season.name }} [{{ season.number }}]</h2>
        <h2>{{ season.episodes }}</h2>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SerieSeasons",
  data() {
    return {
      seasons: [],
    };
  },
  mounted() {
    this.load();
    this.missing();
  },
  methods: {
    load: function () {
      const that = this;
      fetch("https://auth.my-media.world/api/serie/seasons", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: this.$store.state.auth.token,
          id: this.$route.params.id,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          that.seasons = json.seasons;
        });
    },
    missing: function () {
      const that = this;
      fetch("https://auth.my-media.world/api/series/season/missing", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: this.$store.state.auth.token,
          id: this.$route.params.id,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          console.log(json);
        });
    },
  },
};
</script>
