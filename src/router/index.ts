import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/AppView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/app',
      name: 'home',
      component: HomeView,
      children: [
        {
          path: 'dataSource',
          name: 'dataSource',
          component: () => defineAsyncComponent(() => import('@/views/DataSourceView.vue'))
        },
        {
          path: 'layout',
          name: 'layout',
          component: () => defineAsyncComponent(() => import('@/views/PageLayoutView.vue'))
        },
        {
          path: 'actions',
          name: 'actions',
          component: () => defineAsyncComponent(() => import('@/views/ActionsView.vue'))
        },
      ],
    },
  ]
})

export default router
