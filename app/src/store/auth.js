export default {
  state: () => ({
    token: "",
    username: "",
    bearer:
      "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2YjFjMTljYTNmMGQyNGE1ODI0YmNjMGEzZDlhNmE4NiIsInN1YiI6IjYyYTIzODZjMzVkMWJjMzczMDJiY2ZlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.QC5SxODK7818rw86kX-L8y7uRkSOSjQsI14KQFs2IiI",
  }),
  mutations: {
    "auth-reset": function (state) {
      state.token = '';
      state.username = '';
    },
    "auth-token-update": function (state, token) {
      state.token = token;
      localStorage.setItem("token", token);
    },
    "auth-username-update": function (state, username) {
      state.username = username;
      localStorage.setItem("username", username);
    },
    "auth-token-reload": function (state) {
      state.username = localStorage.getItem("username");
      state.token = localStorage.getItem("token");
    },
  },
};
