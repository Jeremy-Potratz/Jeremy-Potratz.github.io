import Vue from 'vue';
import App from './App.vue';
import Home from './components/Home.vue';
import BootstrapVue from 'bootstrap-vue';
import PDF from 'vue-pdf';
import VueRouter from 'vue-router';

const routes = {
  '/': App,
  '/resume': Home
};

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.use(PDF);

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      return routes[this.currentRoute]
    }
  },
  render (h) { return h(this.ViewComponent) }
})

// new Vue({
//   render: h => h(App),
// }).$mount('#app');
