<template>
  <div id="app">
    <router-view name="main"></router-view>

    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App" @handle="receive"/>
    <h2>{{fromSon}}</h2>
    <h2>{{ev1}}</h2> -->
  </div>
</template>

<script>

import HelloWorld from './components/HelloWorld.vue';
// import {EventBus} from './EventBus/EventBus.js';

export default {
  name: 'App',
  data(){
    return {
      // fromSon: '',
      // ev1: ''
    }
  },
  components: {
    HelloWorld
  },
  methods: {
    // receive(data){
    //   this.fromSon = data
    //   EventBus.$on('ev1', (value)=>{
    //     this.ev1 = value
    //   })
    // }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
