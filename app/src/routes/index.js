import {createWebHistory, createRouter} from 'vue-router'

import Home from '../pages/home.vue';
import Impressum from '../pages/impressum.vue';
import Dashboard from '../pages/dashboard.vue';
import MovieList from '../pages/movie/list.vue';
import MovieAdd from '../pages/movie/add.vue';
import UserInfo from '../pages/user/info.vue';
import UserLogout from '../pages/user/logout.vue';
import UserEmailVerify from '../pages/user/email/verify.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/verify/token/:token', component: UserEmailVerify },
  { path: '/dashboard', component: Dashboard },
  { path: '/movies', component: MovieList },
  { path: '/movie/add', component: MovieAdd },
  { path: '/user/info', component: UserInfo },
  { path: '/user/logout', component: UserLogout },
  { path: '/impressum', component: Impressum },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})