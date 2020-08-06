import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import Vuetify from 'vuetify';
import BuyModal from "@/components/Shared/BuyModal";
import * as fb from 'firebase';
import vuetify from './plugins/vuetify';

Vue.use(Vuetify);
Vue.component('app-buy-modal', BuyModal)
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  created () {
    fb.initializeApp({
    // config firebase
    });

    fb.auth().onAuthStateChanged(user => {
      if (user) {
        this.$store.dispatch('autoLoginUser', user)
      }
    });

    this.$store.dispatch('fetchAds')
  },
  render: h => h(App)
}).$mount('#app');
