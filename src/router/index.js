import Vue from 'vue'
import Router from 'vue-router'
import HomePage from '@/components/pages/Home'
import SettingsPage from '@/components/pages/Settings'
import TemplatesPage from '@/components/pages/Templates'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'HomePage',
      component: HomePage
    },
    {
      path: '/templates',
      name: 'Templates',
      component: TemplatesPage
    },
    {
      path: '/settings',
      name: 'Settings',
      component: SettingsPage
    }
  ]
})
