<template>
  <div class="vp-series-list">
    <div class="grid grid-cols-6 gap-2">
      <div class="col-span-6">
        <h2 class="flex justify-between">
          <span>Serien</span>
          <div class="buttons">
            <button @click="$router.push('/serie/add')">
              <fa icon="plus" class="px-2 py-2 bg-white border border-black" />
            </button>
          </div>
        </h2>
        <div class="tw-table block border border-black">
          <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
            <div class="col col-span-12 md:col-span-4">Name</div>
            <div class="col col-span-12 md:col-span-2">TMDB Rating</div>
            <div class="col col-span-12 md:col-span-2">User Rating</div>
            <div class="col col-span-12 md:col-span-2">Kommentar</div>
            <div class="col col-span-12 md:col-span-2">Action</div>
          </div>
          <div
            v-for="(serie, index) in series"
            class="row grid grid-cols-12 px-2 py-2 bg-white"
          >
            <div class="col col-span-12 md:col-span-4">
              <span class="font-bold">{{ serie.name }}</span>
            </div>
            <div class="col col-span-12 md:col-span-2">
              {{ serie.tmdb_rating }}
            </div>
            <div class="col col-span-12 md:col-span-2">{{ serie.rating }}</div>
            <div class="col col-span-12 md:col-span-2 space-x-2">
              <button
                @click="remove(serie.id)"
                class="px-2 py-2 bg-white border border-black w-8 text-center"
              >
                <fa icon="times" />
              </button>
              <button
                @click="$router.push('/serie/' + serie.id)"
                class="px-2 py-2 bg-white border border-black w-8 text-center"
              >
                <fa icon="edit" />
              </button>
            </div>
            <div class="col col-span-12">{{ serie.comment }}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SerienList",
  data() {
    return {
      series: [],
      search: "",
    };
  },
  mounted() {
    this.load();
    this.$store.commit('breadcrumb-add', {
      link: '/dashboard',
      label: 'Dashboard'
    });
     this.$store.commit('breadcrumb-add', {
      link: '/series',
      label: 'Serien'
    });
  },
  methods: {
    remove: function (id) {
      const that = this;
      fetch("https://auth.my-media.world/api/serie/remove", {
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
            that.series = json.series;
          }
        });
    },
  },
};
</script>
