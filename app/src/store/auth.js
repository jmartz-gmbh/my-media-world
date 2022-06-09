export default {
  state: () => ({
    token: "",
    username: "",
  }),
  mutations: {
    "auth-token-update": function (state, token) {
      state.token = token;
      localStorage.setItem('token', token);
    },
    "auth-username-update": function (state, username) {
        state.username = username;
        localStorage.setItem('username', username);
      },
    "auth-token-reload": function (state) {
        state.username = localStorage.getItem('username');
        state.token = localStorage.getItem('token');
      },
  },
};
