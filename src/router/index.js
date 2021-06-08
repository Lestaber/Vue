import Vue from 'vue'
import Router from 'vue-router'

import PageDashboard from '../views/PageDashboard'
import PageAbout from '../views/PageAbout'
import Page404 from '../views/Page404'

Vue.use(Router)

const router = new Router({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: PageDashboard,
    },
    {
      path: '/dashboard/:page',
      component: PageDashboard,
    },
    {
      path: '/about',
      name: 'About',
      component: PageAbout
    },
    {
      path: '/page404',
      name: '404',
      component: Page404
    },
    {
      path: '*',
      component: Page404
    }
  ]
})

const isUserAuth = true

const getTitleByRouteName = routeName => {
  return {
    '/': 'My personal coasts',
    'Dashboard': 'Dashboard',
    'About': 'About',
    '404': 'Error 404',
  }[routeName]
} 

router.beforeEach((to, from, next) => {
  if(to.name === 'Dashboard' && !isUserAuth) {
    next({
      name: '404',
    })
  } else {
    next()
  }
})

router.afterEach((to/*,from*/)=>{
    document.title = getTitleByRouteName(to.name)
})
export default router