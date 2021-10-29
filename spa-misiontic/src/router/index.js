import Vue from 'vue'
import VueRouter from 'vue-router'
// import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [

  {
    path: "/",
    name: "Inicio",
    component: () => import("../views/Inicio.vue")
  },
  {
    path: '/nosotros',
    name: 'Nosotros',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Nosotros.vue')
  },
  {
    path:'/examen',
    name:'Examen',
    component: () => import(/* webpackChunkName: "about" */ '../views/Examen.vue')
  },
  {
    path:'/paciente',
    name:'Paciente',
    component: () => import(/* webpackChunkName: "about" */ '../views/Paciente.vue')
  },
  {
    path:'/usuario',
    name:'Usuario',
    component: () => import(/* webpackChunkName: "about" */ '../views/Usuario.vue')
  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
