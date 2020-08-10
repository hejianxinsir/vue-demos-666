<template>
  <div class="hello">
    <h2>HelloWorld</h2>
    <button @click="send">send</button><br>
    <router-link :to="{name: 'list'}">List</router-link>
    <hr>

    <p>获取 num : {{getNum}}</p>
    <button @click="inc1">inc1</button>
    <button @click="incAction1">incAction1</button>
    <br>

    <p>map 系列</p>
    <p>mpaState 获取的 state: {{num}}</p>
    <h2>map 获取 state: {{getNum}}</h2>
    <button @click="inc">mapInc1</button>
    <button @click="dec">mapDec1</button>
    <button @click="incAction">incAction1</button>

    <p>module 系列</p>
    <p>moduleA 的 age: {{this.$store.state.moduleA.age}}</p>
    <button @click="age1">age1</button>
  </div>
</template>

<script>
import {EventBus} from '../EventBus/EventBus.js';
import {mapGetters, mapMutations, mapActions, mapState} from 'vuex';

export default {
  name: 'HelloWorld',
  props: {
    msg: String
  },
  methods: {
    age1(){
      this.$store.commit('moduleA/inc')
    },
    inc1(){
      this.$store.commit('inc')
    },
    incAction1(){
      this.$store.dispatch('incAction')
    },
    ...mapMutations(['inc', 'dec']),
    ...mapActions(['incAction', 'decAction']),
    send(){
      this.$emit('handle', '来自子组件的信息')
      EventBus.$emit('ev1', 'eventBus111')
    }
  },
  computed: {
    ...mapGetters(['getNum']),
    ...mapState(['num']),
    getNum(){
      return this.$store.state.num
    }
    
  }
}
</script>

<style scoped>

</style>
