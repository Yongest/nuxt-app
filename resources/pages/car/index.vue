<template>
  <div class="container8">
   <ul>
     <li v-for="item in carlist" :key="item.id"><nuxt-link :to="`/car/${item.id}`">{{item.name}}</nuxt-link> </li>
     
   </ul>
  </div>
</template>

<script>
export default {
  data(){
    return {
      carlist:[
        {name:'宝马',id:1},
        {name:'奔驰',id:2},
        {name:'劳斯莱斯',id:3},
      ]
    }
  }
}
</script>


