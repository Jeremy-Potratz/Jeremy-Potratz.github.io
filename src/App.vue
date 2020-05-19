<template>
  <div id="app">
  <b-nav role="navigation" pills>
    <b-nav-item v-on:click="showHome">Home</b-nav-item>
    <b-nav-item v-on:click="showSecond">Github</b-nav-item>
    <b-nav-item v-on:click="showContact">Contact Me</b-nav-item>
    <b-nav-item v-on:click="showPersonal">About Me :)</b-nav-item>
  </b-nav>
    <home v-show="Bhome"></home>
    <github v-show="Bsecond"></github>
    <contact v-show="Bcontact"></contact>
    <personal v-show="Bpersonal"></personal>
  </div>
</template>

<script>
import Home from './components/Home.vue'
import Github from './components/Github.vue'
import Contact from './components/Contact.vue'
import Personal from './components/Personal.vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

export default {
  name: 'App',
  components: {
    Home,
    Github,
    Contact,
    Personal
  },
  data : function (){
    return{
      Bhome: true,
      Bsecond: false,
      Bcontact: false,
      Bpersonal: false
    }
  },
  methods: {
    showHome: function () {
      //change the various showings to an array
      this.Bhome = true;
      this.Bsecond = false;
      this.Bcontact = false;
      this.Bpersonal = false;
    },
    showSecond: function () {
      this.Bhome = false;
      this.Bsecond = true;
      this.Bcontact = false;
      this.Bpersonal = false;
    },
    showContact: function () {
      this.Bhome = false;
      this.Bsecond = false;
      this.Bcontact = true;
      this.Bpersonal = false;
    },
    showPersonal: function () {
      this.Bhome = false;
      this.Bsecond = false;
      this.Bcontact = false;
      this.Bpersonal = true;
    }
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 40px;
}
</style>
