<template>
  <div class="container7">
    <ul>
      <li v-for="item in carlist" :key="item.id">
        <nuxt-link :to="`/fruits/${item.id}`">{{item.name}}</nuxt-link>
      </li>
    </ul>
    <el-button>默认按钮</el-button>
    <!-- 嵌套路由 -->
    <div class="qiantao">嵌套路由
      <nuxt-child/>
    </div>
  </div>
</template>

<script>
import axios from "@/plugins/axios";
export default {
  // asyncData ({ params },callback) {
  //   setTimeout(()=>{
  //     callback(null,{
  //       carlist :[{name:'提子',id:1},{name:'车厘子',id:2},{name:'夏橙',id:3}]
  //     })

  //   },1000)
  // },
  asyncData({ params }, callback) {
    // Send a POST request
    axios({
      method: "get",
      url: "/data"
    }).then(function(response) {
      console.log('');
      
     callback(null,{
       carlist:response.data
     })
    });
  },
  data() {
    return {
      carlist: [
        //
      ]
    };
  }
};
</script>


