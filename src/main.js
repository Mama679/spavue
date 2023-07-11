import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

//Importar VueRouter
import VueRouter from 'vue-router';

//Importar componentes creados
import inicio from './components/Inicio';
import listarArticulo from './components/ListarArticulo';
import crearArticulo from './components/CrearArticulo';
import editarArticulo from './components/EditarArticulo';
import contacto from './components/Contacto';

Vue.component('inicio',inicio);
Vue.component('listarArticulo',listarArticulo);
Vue.component('crearArticulo',crearArticulo);
Vue.component('editarArticulo',editarArticulo);
Vue.component('contacto',contacto);

//Uso del Vue-Router
Vue.use(VueRouter);

//Definición de rutas
const routes = [
  {path:'/', component:inicio},
  {path:'/inicio',component:inicio},
  {path:'/articulos', component:listarArticulo},
  {path:'/crear', component:crearArticulo, name:'crearArticulo'},
  {path:'/editar/:id', component:editarArticulo, name:'editarArticulo'},
  {path:'/contacto',component:contacto},
  {path:'/redes',component:contacto}
]

const router = new VueRouter({
  routes,
  mode:'history'
});

Vue.config.productionTip = false

new Vue({
  vuetify,
  router,
  render: h => h(App)
}).$mount('#app')
