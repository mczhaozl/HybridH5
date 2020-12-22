import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/Home.vue'
import ResourceCenter from '../components/ResourceCenter.vue'
import Mine from '../components/Mine.vue'
import Search from '../components/Search.vue'
import Register from '../components/Register.vue'
import Myinfo from '../components/MyInfo.vue'
import Setting from '../components/Setting.vue'
import PersonInfo from '../components/PersonInfo.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/home',
      component: Home,
      name: 'Home'
    },
    {
      path: '/resourcecenter',
      component: ResourceCenter,
      name: 'ResourceCenter'
    },
    {
      path: '/setting',
      component: Setting,
      name: 'Setting'
    },
    {
      path: '/mine',
      component: Mine,
      name: 'Mine'
    },
    {
      path: '/personinfo',
      component: PersonInfo,
      name: 'PersonInfo'
    },
    {
      path: '/register',
      component: Register,
      name: 'Register'
    },
    {
      path: '/search',
      component: Search,
      name: 'Search'
    },
    {
      path: '/myinfo',
      component: Myinfo,
      name: 'Myinfo'
    },
    {
      path: '/',
      redirect: '/home'
    }
  ]
})
router.beforeEach((to, from, next) => {
  if (to.name === 'Mine') {
    // 登陆/注册就去用户详情页
    if (localStorage.getItem('userID')) {
      router.replace('/myinfo')
    }
  }
  next()
})
export default router
