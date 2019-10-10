<template>
    <div id="swiper">
        <swiper :options="swiperOption" class="my-swiper">
         <swiper-slide v-for="(item, index) in list" :key="index"><img :src="item.url" alt=""></swiper-slide>
        <div class="swiper-pagination" slot="pagination"></div>
      </swiper>
      {{fn()}}
    </div>
</template>

<script>
    export default {
    data() {
      return {
        swiperOption: {
          pagination: {
            el: '.swiper-pagination'
          }
        },
        list:[]
      }
    },
    props:['send'],
    methods: {
        fn(){
           this.list=this.send;
        }
    },
  }
</script>

<style lang="scss" scoped>
    .my-swiper{
        width: 100%;
        .swiper-container{
            width: 100%; 
        }
        .swiper-slide{
          height: 188px;
           width: 100%;
          img{
            height: 100%;
            width: 100%;
          }
        }
        
    }
    
</style>