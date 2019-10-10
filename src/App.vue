<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'app',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  mounted(){
    window.onresize = getRem;
    function getRem(){
        document.documentElement.style.fontSize = document.documentElement.offsetWidth / 20+'px';
    }
    getRem();
  },
  components:{
    
  }
 
}
</script>

<style lang="scss">
html,body{
  background: #fff;
  // height: 3000px;
  width: 100%;
  -webkit-overflow-scrolling: touch;
  overflow-scrolling: touch;
  overflow-y: scroll;
  font-family: Helvetica Neue,Tahoma,Arial,PingFangSC-Regular,Hiragino Sans GB,Microsoft Yahei,sans-serif;
}


  
</style>
