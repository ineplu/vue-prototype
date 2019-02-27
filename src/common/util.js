import Vue from 'vue'
Vue.prototype.$eventBus = new Vue()
Vue.prototype.$myMethod = {
  getTxt: function(txt) {
    return txt
  }
}