import Vue from 'vue'
import Router from 'vue-router'
import AdminLogin from '@/components/AdminLogin'
import AdminHome from '@/components/AdminHome'
import AdminDefault from '@/components/AdminDefault'
import AdminArticle from '@/components/article/AdminArticle'
import AdminAddArticle from '@/components/article/AdminAddArticle'
import AdminModifyArticle from '@/components/article/AdminModifyArticle'
import AdminSort from '@/components/sort/AdminSort'
import AdminAddSort from '@/components/sort/AdminAddSort'
import AdminModifySort from '@/components/sort/AdminModifySort'
import AdminWebsite from '@/components/AdminWebsite'

Vue.use(Router)

export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/login',
      name: 'AdminLogin',
      component: AdminLogin
    },
    {
      path: '/adminHome',
      component: AdminHome,
      children: [
        {
          path: '',
          name: 'AdminDefault',
          component: AdminDefault
        },
        {
          path: 'articleAdmin',
          name: 'AdminArticle',
          component: AdminArticle
        },
        {
          path: 'articleAdmin/addArticle',
          name: 'AdminAddArticle',
          component: AdminAddArticle
        },
        {
          path: 'articleAdmin/modifyArticle/:id',
          name: 'AdminModifyArticle',
          component: AdminModifyArticle
        },
        {
          path: 'sortAdmin',
          name: 'AdminSort',
          component: AdminSort
        },
        {
          path: 'sortAdmin/addSort',
          name: 'AdminAddSort',
          component: AdminAddSort
        },
        {
          path: 'sortAdmin/modifySort/:id',
          name: 'AdminModifySort',
          component: AdminModifySort
        },
        {
          path: 'websiteAdmin',
          name: 'AdminWebsite',
          component: AdminWebsite
        }
      ]
    }

  ]
})
