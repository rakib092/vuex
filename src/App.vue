<template>
  <div class="container">
     <div class="row">
      <div class="col-sm-8">
        <h2>Routing</h2>
        <hr>
        <compHeader/>
        <hr>

        <router-view></router-view>
      </div>
    </div>
  </div>
</template>


<script>
import compHeader from './components/Header_page'
export default {
    components:{
     compHeader
   }
}
</script>