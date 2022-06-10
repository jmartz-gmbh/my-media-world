<template>
  <div class="vp-user-logout">Logout</div>
</template>

<script>
export default {
  name: "UserLogout",
  mounted() {
    const that = this;
    this.$store.commit("auth-reset");
    setTimeout(function () {
      that.$router.push("/");
    }, 5000);
  },
};
</script>
