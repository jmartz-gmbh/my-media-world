<template>
  <div class="app">
    <header class="mx-auto max-w-5xl px-2 py-2">
      <header-general></header-general>
    </header>
    <main class="mx-auto max-w-5xl px-2 py-2 mt-2 min-h-screen">
      <breadcrumb></breadcrumb>
      <messages></messages>
      <router-view></router-view>
    </main>
    <footer class="mx-auto max-w-5xl px-2 py-2 mt-2">
      <footer-general></footer-general>
    </footer>
  </div>
</template>
<script>
import header from "./components/header.vue";
import footer from "./components/footer.vue";
import messages from "./components/messages.vue";
import breadcrumb from "./components/breadcrumb.vue";

import "./tailwind.css";
export default {
  name: "App",
  components: {
    "header-general": header,
    "footer-general": footer,
    messages: messages,
    breadcrumb: breadcrumb,
  },
  watch: {
    $route: function () {
      this.$store.commit("breadcrumb-add", {
        link: "/",
        label: "Home",
      });
      window.scrollTo({ top: 0, behavior: "smooth" });
    },
  },
  mounted() {
    this.$store.commit("auth-reload");
  },
};
</script>

<style lang="less">
.app {
  background: linear-gradient(-45deg, #cfd8dc, #546e7a);
  background-size: auto;
}
</style>
