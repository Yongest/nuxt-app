<template>
  <div class="container5">
   <h1> 汽车详情</h1>
   <p>{{$route.params.id}}</p>
 
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


