import { createWebHistory, createRouter } from "vue-router";

import Home from "../pages/home.vue";
import Impressum from "../pages/impressum.vue";
import Dashboard from "../pages/dashboard.vue";
import MovieList from "../pages/movie/list.vue";
import SerieList from "../pages/serie/list.vue";
import MovieAdd from "../pages/movie/add.vue";
import SerieSeasonAdd from "../pages/serie/season/add.vue";
import SerieAdd from "../pages/serie/add.vue";
import SerieEdit from "../pages/serie/edit.vue";
import SerieSeasons from "../pages/serie/seasons.vue";
import MovieEdit from "../pages/movie/edit.vue";
import UserInfo from "../pages/user/info.vue";
import UserLogout from "../pages/user/logout.vue";
import UserEmailVerify from "../pages/user/email/verify.vue";

const routes = [
  { path: "/", component: Home },
  { path: "/verify/token/:token", component: UserEmailVerify },
  { path: "/dashboard", component: Dashboard },
  { path: "/movies", component: MovieList },
  { path: "/series", component: SerieList },
  { path: "/movie/add", component: MovieAdd },
  { path: "/serie/:id/seasons", component: SerieSeasons },
  { path: "/series/:id/season/add", component: SerieSeasonAdd },
  { path: "/serie/add", component: SerieAdd },
  { path: "/movie/:id", component: MovieEdit },
  { path: "/serie/:id", component: SerieEdit },
  { path: "/user/info", component: UserInfo },
  { path: "/user/logout", component: UserLogout },
  { path: "/impressum", component: Impressum },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});
