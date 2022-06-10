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
              v-model="form.login.username"
            />
          </div>
          <div class="form-group px-2 py-2">
            <label>Password</label>
            <input
              type="password"
              class="bg-gray-300 px-2 py-2"
              v-model="form.login.password"
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
      <div class="col-span-6 md:col-span-2">
        <div class="card text-center bg-white px-2 py-2">
          <fa icon="user" class="fa-3x mt-5 mb-3" />
          <div class="form-group px-2 py-2">
            <label>Username</label>
            <input
              type="text"
              class="bg-gray-300 px-2 py-2"
              v-model="form.register.username"
            />
          </div>
          <div class="form-group px-2 py-2">
            <label>Eamil</label>
            <input
              type="text"
              class="bg-gray-300 px-2 py-2"
              v-model="form.register.email"
            />
          </div>
          <div class="form-group px-2 py-2">
            <label>Password</label>
            <input
              type="password"
              class="bg-gray-300 px-2 py-2"
              v-model="form.register.password"
            />
          </div>
          <div class="form-group px-2 py-2 flex justify-between mb-3">
            <button class="ml-5 bg-gray-300 px-2 py-2 text-sm">
              <router-link to="/user/password/forgotten"
                >Passwort vergessen ?</router-link
              >
            </button>
            <button class="mr-5 bg-gray-300 px-2 py-2" @click="register()">
              Register
            </button>
          </div>
        </div>
      </div>
      <div class="col-span-6 md:col-span-2">
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
        login: {
          username: "",
          password: "",
        },
        register: {
          username: "",
          password: "",
          email: "",
        },
      },
    };
  },
  mounted() {
    if (
      this.$store.state.auth.token != null &&
      this.$store.state.auth.token != ""
    ) {
      this.$router.push("/dashboard");
    }
  },
  methods: {
    login: function () {
      const that = this;
      fetch("https://auth.my-media.world/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.form.login.username,
          password: this.form.login.password,
        }),
      })
        .then(function (response) {
          return response.json();
        })
        .then(function (json) {
          if (json.token) {
            that.$router.push("/dashboard");
            that.$store.commit("auth-token-update", json.token);
            that.$store.commit(
              "auth-username-update",
              that.form.login.username
            );
          }
        });
    },
    register: function () {
      fetch("https://auth.my-media.world/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username: this.form.register.username,
          password: this.form.register.password,
          email: this.form.register.email,
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
