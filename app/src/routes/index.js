import {createWebHistory, createRouter} from 'vue-router'

import Home from '../pages/home.vue';
import Impressum from '../pages/impressum.vue';
import UserInfo from '../pages/user/info.vue';
import UserEmailVerify from '../pages/user/email/verify.vue';

const routes = [
  { path: '/', component: Home },
  { path: '/verify/token/:token', component: UserEmailVerify },
  { path: '/user/info', component: UserInfo },
  { path: '/impressum', component: Impressum },
]

export default createRouter({
  history: createWebHistory(),
  routes,
})