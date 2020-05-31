import Vue from 'vue'
import Router from 'vue-router'
import Echarts1 from '@/components/Echarts1'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Echarts1',
      component: Echarts1
    }
  ]
})
