import Vue from 'vue'
import App from './App.vue'
import router from './router'
import infiniteScroll from 'vue-infinite-scroll'
Vue.use(infiniteScroll)

new Vue({
    el: '#app',
    router,
    render: h => h(App)
})