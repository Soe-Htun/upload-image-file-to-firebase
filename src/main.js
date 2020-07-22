import Vue from 'vue'
import App from './App.vue'
import router from './router'
import firebase from 'firebase'
Vue.config.productionTip = false
var firebaseConfig = {
  apiKey: "AIzaSyB23R4IyQ-J6n4dOQnksXhAnoZemyzBscY",
  authDomain: "uploadfile-ed5d9.firebaseapp.com",
  databaseURL: "https://uploadfile-ed5d9.firebaseio.com",
  projectId: "uploadfile-ed5d9",
  storageBucket: "uploadfile-ed5d9.appspot.com",
  messagingSenderId: "620753087014",
  appId: "1:620753087014:web:ea7d828157f41117c154e7",
  measurementId: "G-YBJNFENS2K"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
window.firebase=firebase;

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
