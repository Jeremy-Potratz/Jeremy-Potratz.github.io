<template>
  <div id="app">
  <b-nav role="navigation" pills>
    <b-nav-item v-on:click="showHome">Home</b-nav-item>
    <b-nav-item v-on:click="showSecond">Second</b-nav-item>
  </b-nav>
    <home v-show="Bhome"></home>
    <second v-show="Bsecond"></second>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Second from './components/Second.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    Home,
    Second
  },
  data : function (){
    return{
      Bhome: true,
      Bsecond: false,
    }
  },
  methods: {
    showHome: function () {
      //change the various showings to an array
      this.Bhome = true;
      this.Bsecond = false;
    },
    showSecond: function () {
      this.Bhome = false;
      this.Bsecond = true;
    }
  },
}
</script>

<style>
/* #app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
