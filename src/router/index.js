import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import diog from '@/components/diog'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Hello',
      component: Hello
    },
    {
      path: '/diog',
      name: 'diog',
      component: diog
    }
  ]
})
