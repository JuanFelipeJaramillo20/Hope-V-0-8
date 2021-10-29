import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './assets/css/nav.css';
import axios from "axios"
import VueAxios from "vue-axios"


Vue.config.productionTip = false

Vue.use(VueAxios, axios)


//URL de la base de datos
axios.defaults.baseURL = 'http://localhost:3000/api';


new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
