
import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router'
import InicioView from '@/pages/Home.vue'


const routes: RouteRecordRaw[] = [
  { path: '/', name: 'inicio', component: InicioView },
  {
    path: '/statement',
    name: 'statement',
    component: () => import('@/pages/DeclaracionView.vue'),
  },
  {
    path: '/obras',
    component: () => import('@/pages/Obras.vue'),
    children: [
      { path: '', redirect: '/obras/libro-de-artista' },
      {
        path: ':categoria(libro-de-artista|videoarte|videoensayo)',
        name: 'categoria',
        component: () => import('@/pages/Categoria.vue'),
      },
      {
        path: ':categoria(libro-de-artista|videoarte|videoensayo)/:id',
        name: 'obra',
        component: () => import('@/pages/ObraDetalle.vue'),
        props: true,
      },
    ],
  },
  { path: '/cv', name: 'cv', component: () => import('@/pages/CvView.vue') },
  {
    path: '/:pathMatch(.*)*',
    name: 'no-encontrada',
    component: () => import('@/pages/NoEncontrada.vue'),
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior: () => ({ top: 0 }),
})

export default router