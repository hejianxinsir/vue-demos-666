import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

import HelloWorld from '../components/HelloWorld.vue'
import List from '../components/list.vue'

export default new Router({
  routes: [
    {
      name: 'list',
      path: '/',
      components: {
        main: List
      }
    },
    {
      name: 'HelloWorld',
      path: '/HelloWorld',
      components: {
        main: HelloWorld
      }
    }
  ]
})