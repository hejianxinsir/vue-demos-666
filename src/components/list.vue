<template>
  <div class="list">
    <h2>List</h2>
    <router-link :to="{name: 'HelloWorld'}">HelloWorld</router-link><br>
    
  </div>
</template>


<script>
export default {
  name: 'list',
  data(){
    return {
      
    }
  }
}
</script>