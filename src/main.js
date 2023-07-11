import Vue from 'vue'
import App from './App.vue'
import vuetify from './plugins/vuetify';

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

Vue.config.productionTip = false

new Vue({
  vuetify,
  render: h => h(App)
}).$mount('#app')
