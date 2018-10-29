import Index from '../pages/index/index.vue'
import IndexView from '../pages/index/view.vue'
import AboutIndex from '../pages/about/index.vue'

const routes = [

  {
    path: '/index',
    component: Index,
    children: [
      {
        path: 'view',
        component: IndexView
      }
    ]
  },
  {
    path: '/about',
    component: AboutIndex,
  }
]

export default routes
