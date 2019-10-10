<template>
    <div id="classify">
        <mt-header title="分类" class="my-header" fixed>
        <router-link to="/" slot="left">
            <span class="iconfont icon-xiangzuo2"></span>  
        </router-link>
        <router-link to="/search" slot="right" >
                <span class="iconfont icon-icon--"></span>
         </router-link>
        </mt-header>
        <div class="class_middle">
            <div class="left-middle">
                <ul class="left-list">
                   <li v-for="(item, index) in  class_list" :key="index" :class="{active:index==indexs}" @click="actives(index)">{{item.title}}</li>
                </ul>
            </div>
            <div class="right-middle">
                <div class="right-list" v-for="(item, index) in  class_list" :key="index">
                    <img :src="item.url" alt="">
                    <div class="block" v-for="(item, index) in item.content_title" :key="index">
                        <p class="right-title">{{item.list_name}}</p>
                        <nav>
                            <ul class="img-list">
                                <li v-for="(item, index) in item.product_list" :key="index">
                                    <img :src="item.url" alt="">
                                    <div class="list-des ellipsis">{{item.name}}</div>
                                </li>
                            </ul>
                             <img  :src="item.sj_enter" alt="" width="100%">
                        </nav>
                       
                    </div>
                </div>
            </div>
        </div>
        <tabber></tabber>
    </div>
</template>

<script>
import tabber from '../components/module/Tabber.vue'

    export default {
        name:"classify",
        data(){
            return{
              class_list:[],
              indexs:"" 
            }
        },
        components:{
        tabber  
        },
        methods: {
            actives(i){
                this.indexs=i;
                var to_top=$('.right-list').eq(i).offset().top;
                 $(window).scrollTop(to_top);
            }
        },
        mounted(){
            this.$http.get("./data/index.json")
            .then((res)=>{
                this.class_list=res.data.class_list;
            })
            .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });
            $(function(){
                $(window).scroll(function(){
                        if($(this).scrollTop()>0){
                        $(".left-list li").eq(0).addClass('active');
                        $(".left-list li").eq(0).siblings("li").removeClass('active');
                        }
                        if($(this).scrollTop()>1100){
                        $(".left-list li").eq(1).addClass('active');
                        $(".left-list li").eq(1).siblings("li").removeClass('active');
                        }
                        if($(this).scrollTop()>1400){
                        $(".left-list li").eq(2).addClass('active');
                        $(".left-list li").eq(2).siblings("li").removeClass('active');
                        }
                       
                })
            })
        }
        
    }
      
</script>

<style lang="scss" scoped>
    
    .my-header{
        background:#f2f2f2;
        color: #919191;
        font-size: 16px;
        .iconfont{
         font-size: 20px;
         button:hover,button:focus{
            background: transparent;
         }
        }
    }
    .class_middle{
        margin-top:40px;
        margin-bottom:60px;
        font-size: 14px;
        
        .left-middle{
            position: fixed;
            width: 20%;
            height: 100%;
            overflow:auto;
            text-align: center;
            border-right: 1px solid #efefef;
            li{
                padding: 20px 0;
                transition:all 0.2s;
            }
            li.active{
                color: #fca16c;
                font-size: 18px;
            }
            li:first-child{
                // color: #fca16c;
                // font-size: 18px;
            }
            li:last-child{
                margin-bottom:80px;
            }
        }
       .left-middle::-webkit-scrollbar{
            display: none;
        }
        .right-middle{
            width: 80%;
            height: 100%;
            // background: greenyellow;
            overflow:auto;
            margin-left: 20%;
            .right-list{
                width: 100%;
                padding: 0 20px;
                box-sizing: border-box;
                text-align: center;
                img{
                    width: 100%;
                }
                .right-title{
                    color: #3c3c3c;
                    font-size: 15px;
                    height: 60px;
                    line-height: 60px;
                   
                   
                 }
               .right-title::after,.right-title::before{
                    content: "";
                    display: inline-block;
                    width: 20px;
                    height: 1px;
                    background: #e8e8e8;
                    position: relative;
                    top: -5px;

                }
                .right-title::after{
                    margin-left: 10px;
                }
                .right-title::before{
                    margin-right: 10px;
                }
                .img-list{
                    width: 100%;
                    overflow: hidden;
                    li{
                        width: 33.3%;
                        float: left;
                        text-align: center;
                        .list-des{
                            font-size: 12px;
                            margin: 10px 0;
                            color: #757575;
                            width: 100%;
                        }
                        img{
                            width: 60%;
                        }
                    }
                }
            }
            
        }
    }
  
</style>