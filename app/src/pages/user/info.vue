<template>
  <div class="vp-user-info">
    {{ user }}
  </div>
</template>

<script>
export default {
  name: "UserInfo",
  data() {
    return {
      user: {},
    };
  },
  mounted() {
    this.load();
  },
  methods: {
    load: function () {
      const that = this;
      fetch("https://auth.my-media.world/api/user/info", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: this.$store.state.auth.token,
          username: this.$store.state.auth.username,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          if (json.user) {
            that.user = json.user;
          }
        });
    },
  },
};
</script>
