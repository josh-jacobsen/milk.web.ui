import Vue from 'vue'

const app = new Vue({
  data: {
    hello: 'well, hello there, friend of mine'
  },
  template: '<div id="app">{{hello}}</div>'
})

export { app }
