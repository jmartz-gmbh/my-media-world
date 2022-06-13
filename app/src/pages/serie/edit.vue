<template>
  <div class="vp-serie-edit">
    <div class="form">
      <div class="form-group w-full px-2 py-2">
        <label>Comment</label>
        <textarea v-model="form.comment" cols="30" rows="10"></textarea>
      </div>
      <div class="form-group w-full px-2 py-2">
        <label>Rating</label>
        <input type="number" v-model="form.rating" />
      </div>
      <div class="buttons">
        <button @click="update()">update</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "SerieEdit",
  data() {
    return {
      form: {
        id: this.$route.params.id,
        comment: "",
        rating: "",
      },
    };
  },
  mounted() {
    this.load();
    this.$store.commit('breadcrumb-add', {
      link: '/series',
      label: 'Serien'
    });
  },
  methods: {
    update: function () {
      const that = this;
      fetch("https://auth.my-media.world/api/serie/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: this.$store.state.auth.token,
          id: this.form.id,
          comment: this.form.comment ? this.form.comment : "",
          rating: this.form.rating,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          console.log(json);
          if (json.errors) {
            for (let i = 0; i < json.errors.length; i++) {
              that.$store.commit("messages-add", {
                status: "error",
                message: json.errors[i],
              });
            }
          } else {
            that.$router.push("/series");
          }
        });
    },
    load: function () {
      const that = this;
      fetch("https://auth.my-media.world/api/series/", {
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
