import Vue from 'vue';
import App from './App.vue';
import router from './router';
import './registerServiceWorker';
import firebase from 'firebase';
import vSelect from 'vue-select'

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

vSelect.props.components.default = () => ({
  Deselect: {
    render: createElement => createElement('span', ''),
  },
  OpenIndicator: {
    render: createElement => createElement('span', ''),
  },
});
Vue.component('v-select', vSelect)


new Vue({
  router,
  render: (h) => h(App),
}).$mount('#app');
