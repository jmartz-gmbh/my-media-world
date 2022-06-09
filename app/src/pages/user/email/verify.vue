<template>
  <div class="vp-email-verify-token">
    <div class="grid grid-cols-6">
      <div class="col-span-6 text-center">
        <div class="form-group w-full block">
          <label>Token</label>
          <input
            type="text"
            v-model="$route.params.token"
            class="mx-auto px-2 py-2 bg-white"
          />
        </div>
        <div class="buttons mt-2">
          <button @click="verify()" class="bg-white text-black px-2 py-2">
            verify
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "VerifyEmailWithToken",
  methods: {
    verify: function () {
      const that = this;
      fetch("https://auth.my-media.world/api/verify/token", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          token: this.$route.params.token,
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
