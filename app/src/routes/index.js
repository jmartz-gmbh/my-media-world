import {createWebHistory, createRouter} from 'vue-router'

import Home from '../pages/home.vue';
import Impressum from '../pages/impressum.vue';
import MovieList from '../pages/movie/list.vue';
import MovieAdd from '../pages/movie/add.vue';
import UserInfo from '../pages/user/info.vue';
import UserEmailVerify from '../pages/user/email/verify.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/verify/token/:token', component: UserEmailVerify },
  { path: '/movies', component: MovieList },
  { path: '/movie/add', component: MovieAdd },
  { path: '/user/info', component: UserInfo },
  { path: '/impressum', component: Impressum },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})