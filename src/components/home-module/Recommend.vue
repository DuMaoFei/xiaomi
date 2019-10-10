
<template>
    <div class="recommend" >
        <swiper :send="src" class="swiper"></swiper>
        <navImg></navImg>
        <div class="interval"></div>
        <imageSurround class="imageSurround"></imageSurround>
        <div class="interval1"></div>
        <shop class="shop"></shop>
        <div class="newbie ">
            <div class="top">
                  <img src="../../assets/home-image/newbie.gif" alt="">
            </div>
            <div class="btn-top">
                <img src="../../assets/home-image/top.451d650ecd.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
import swiper from '../module/Swiper.vue'
import navImg from '../module/Nav-img.vue'
import imageSurround from '../module/Image-surround.vue'
import shop from '../module/Shop.vue'
import $ from 'jquery'  
    export default {
        name:"recommend",
         data(){
            return{
                src:[]
            }
        },
        components:{
            swiper,
            navImg,
            imageSurround,
            shop
        },
        mounted(){
            this.$http.get("./data/index.json",{})
            .then(res=>{
                this.src=res.data.src
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });

            $(function(){
                $(window).scroll(function(){
                    // var shop=$(".shop").offset().top;
                    if($(this).scrollTop()>=850){
                        $(".newbie").css('display','block');
                    }else{
                        $(".newbie").css('display','none');
                    }
                })
                $(".btn-top").click(function(){
                    $("html,body").animate({
                        "scrollTop":0
                    },1000);
                })
                
            })
             
        }
    }
</script>

<style lang="scss" scoped>

.interval{
    width: 100%;
    height: 8px;
    background:#f5f5f5;
}
.interval1{
    width: 100%;
    height: 8px;
    background-color: rgb(245, 245, 245);
}
.swiper{
    margin-top: 80px;
}
.newbie{
    display: none;
    .top{
        position: fixed;
        right: 15px;
        bottom: 110px;
        z-index: 2;
        img{
            width: 36px;
            height: 36px;
        }
    }
    .btn-top{
        position: fixed;
        right: 15px;
        bottom: 64px;
        z-index: 2;
        img{
            width: 36px;
            height: 36px;
        }

    }
    
}
</style>