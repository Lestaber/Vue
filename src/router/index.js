import Vue from 'vue'
import Router from 'vue-router'
import About from '../views/PageAbout.vue'

Vue.use(Router)

const router = new Router ({
  mode: 'history',
  routes: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      component: () => import (
        /*webpackChunkName: "PageDashboard"  */'../views/PageDashboard'
      )
    },
    {
      path: '/dashboard/:page',
      // name: 'Dashboard',
      component: () => import (
        /*webpackChunkName: "PageDashboard"  */'../views/PageDashboard'
      )
    },
    {
      path: '/about',
      name: 'About',
      ccomponent: () => import (
        /*webpackChunkName: "PageAbout"  */'../views/PageAbout'
      ),
      component: About
    },
    {
      path: '/page404',
      name: '404',
      component: () => import (
        /*webpackChunkName: "Page404"  */'../views/Page404'
      )
    },
    {
      path: '*',
      component: () => import (
        /*webpackChunkName: "Page404"  */'../views/Page404'
      )
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
  if(to.name === 'Home' && !isUserAuth) {
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