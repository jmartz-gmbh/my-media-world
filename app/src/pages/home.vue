<template>
  <div class="vp-home">
    <div class="grid grid-cols-6 gap-2">
      <div class="col-span-6 md:col-span-2">
        <div class="card text-center bg-white px-2 py-2">
          <fa icon="user" class="fa-3x mt-5 mb-3" />
          <div class="form-group px-2 py-2">
            <label>Username</label>
            <input
              type="text"
              class="bg-gray-300 px-2 py-2"
              v-model="form.username"
            />
          </div>
          <div class="form-group px-2 py-2">
            <label>Password</label>
            <input
              type="password"
              class="bg-gray-300 px-2 py-2"
              v-model="form.username"
            />
          </div>
          <div class="form-group px-2 py-2 flex justify-between mb-3">
            <button class="ml-5 bg-gray-300 px-2 py-2 text-sm">
              <router-link to="/user/password/forgotten"
                >Passwort vergessen ?</router-link
              >
            </button>
            <button class="mr-5 bg-gray-300 px-2 py-2" @click="login()">
              Login
            </button>
          </div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-4">
        <h2>Willkommen</h2>
        <p>auf meiner neuen Seite zum managen deiner Filme und Serien.</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Homepage",
  data() {
    return {
      form: {
        username: "",
        password: "",
      },
    };
  },
};
</script>
