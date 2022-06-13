<template>
  <div class="vp-serie-add">
    <div class="grid grid-cols-6 gap-2">
      <div class="col-span-6 md:col-span-3">
        <h2>Headline</h2>
        <p>Suche</p>
        <div class="form">
          <div class="form-group bg-white px-2 py-2 flex">
            <label class="w-1/3 mt-2">Titel</label>
            <input
              type="text"
              v-model="query"
              class="px-2 py-2 w-2/3"
              placeholder="Serien Title"
            />
          </div>
          <div class="form-group bg-white px-2 py-2 flex">
            <button @click="load()">laden</button>
          </div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-3">
        <div class="tw-table block border border-black">
          <div class="row grid grid-cols-12 bg-gray-300 font-bold px-2 py-2">
            <div class="col col-span-12 md:col-span-2">Id</div>
            <div class="col col-span-12 md:col-span-2">TMDB</div>
            <div class="col col-span-12 md:col-span-2">Name</div>
            <div class="col col-span-12 md:col-span-2">Erstellt</div>
          </div>
          <div
            v-for="(item, index) in items"
            class="row grid grid-cols-12 font-bold px-2 py-2"
          >
            <div class="col col-span-12 md:col-span-2">{{ item.id }}</div>
            <div class="col col-span-12 md:col-span-2">{{ item.title }}</div>
            <div class="col col-span-12 md:col-span-2">
              <img
                :src="'https://image.tmdb.org/t/p/original' + item.poster_path"
                alt=""
              />
            </div>
            <div class="col col-span-12 md:col-span-2">
              {{ item.release_date }}
            </div>
            <div class="col col-span-12 md:col-span-2">
              <button @click="add(item.id)">Add</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SerieAdd",
  data() {
    return {
      query: "",
      items: [],
    };
  },
  mounted() {
    this.$store.commit('breadcrumb-add', {
      link: '/series',
      label: 'Serien'
    });
  },
  methods: {
    add: function (id) {
      const that = this;
      fetch(that.$store.state.url.auth + "/api/serie/add", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization:
            "Bearer "+ that.$store.state.auth.bearer,
        },
        body: JSON.stringify({
          tmdb: id,
          token: that.$store.state.auth.token
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          that.$router.push('/series/'+id+'/season/add');
        });
    },
    load: function () {
      const that = this;
      fetch(
        "https://api.themoviedb.org/3/search/tv?page=1&query=" +
          encodeURI(this.query),
        {
          headers: {
            "Content-Type": "application/json",
            Authorization:
              "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjFjMTljYTNmMGQyNGE1ODI0YmNjMGEzZDlhNmE4NiIsInN1YiI6IjYyYTIzODZjMzVkMWJjMzczMDJiY2ZlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QC5SxODK7818rw86kX-L8y7uRkSOSjQsI14KQFs2IiI",
          },
        }
      )
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          that.items = json.results;
        });
    },
  },
};
</script>
