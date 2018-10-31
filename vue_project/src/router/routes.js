import Example from '../pages/example/index.vue'
import ExampleView from '../pages/example/view.vue'
import Other from '../pages/other/index.vue'

const routes = [

  {
    path: '/example',
    component: Example,
    children: [
      {
        path: 'view',
        component: ExampleView
      }
    ]
  },
   {
    path: '/other',
    component: Other
  }
]

export default routes
