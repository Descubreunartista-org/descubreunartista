import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "kBG5Rp3EfH2KVQY4h8xRksjv4UKuhxRmSXZh4iAI",
  authDomain: "ayudaaunar.firebaseapp.com",
  databaseURL: "https://ayudaaunar.firebaseio.com",
  projectId: "ayudaaunar",
  storageBucket: "ayudaaunar.appspot.com",
};
firebase.initializeApp(firebaseConfig);
Vue.prototype.$firebase = firebase;

Vue.config.productionTip = false;

new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
