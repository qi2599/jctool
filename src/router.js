import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import confirm from './views/Confirm'
import slide from './views/Slide'
import popup from './views/Popup'
import tabs from './views/Tabs'
import page from './views/Page'
import lazyload from './views/Lazyload'
import howUse from './views/HowUse'
import notice from './views/Notice'
import toast from './views/Toast'
import banner from './views/Banner'

Vue.use(Router)

export default new Router({
  routes: [
    {path:'/', redirect: '/home'},
    { path: '/home', name: 'home', component: Home},
    { path: '/confirm', name: 'confirm', component: confirm},
    { path: '/slide', name: 'slide', component: slide},
    { path: '/popup', name: 'popup', component: popup},
    { path: '/tabs', name: 'tabs', component: tabs},
    { path: '/page', name: 'page', component: page},
    { path: '/lazyload', name: 'lazyload', component: lazyload},
    { path: '/howUse', name: 'howUse', component: howUse},
    { path: '/notice', name: 'notice', component: notice},
    { path: '/toast', name: 'toast', component: toast},
    { path: '/banner', name: 'banner', component: banner},
  ]
})
