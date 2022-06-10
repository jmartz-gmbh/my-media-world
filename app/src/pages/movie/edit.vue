<template>
  <div class="vp-movie-edit">
    <div class="form">
      <div class="form-group w-full px-2 py-2">
        <label>Comment</label>
        <input type="text" v-model="form.comment" />
      </div>
      <div class="buttons">
        <button @click="update()">update</button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MovieEdit",
  data() {
    return {
      form: {
        id: this.$route.params.id,
        comment: "",
      },
    };
  },
  methods: {
    update: function () {
      const that = this;
      fetch("https://auth.my-media.world/api/movie/update", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: this.$store.state.auth.token,
          id: this.form.id,
          comment: this.form.comment,
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
