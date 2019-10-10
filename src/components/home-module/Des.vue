<template>
    <div id="des">
         <component :is="detail"></component>
        <div class="top" v-for="(item, index) in des_info" :key="index">
            <swiper :options="swiperOption" class="my-swiper">
            <swiper-slide v-for="(item, index) in item.url" :key="index"><img :src="item.src" alt=""></swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
            </swiper>
            <div class="button">
                <router-link to="/shopping">
                     <div class="btn-left btn"> <span class="iconfont icon-xiangzuo2"></span></div>
                </router-link>
                <div class="btn-right btn"> <span class="iconfont icon-fenxiang"></span></div>
            </div>
            <div class="ds">
                <img :src="item.ds" alt="" class="ds-img">
            </div>
            <div class="info-middle">
                <p class="title">{{item.title}}</p>
                <div class="info">
                    <font color="#ff4a00">{{item.info}}</font>
                    <span class="introduce">
                        {{item.info1}}
                    </span>
                </div>
                <p class="price">￥{{item.price}}</p>
                <div class="nav">
                    <ul class="list-info">
                        <li class="box" v-for="(v, index) in item.list_info" :key="index">
                        <div class="img"><img :src="v.img" alt=""></div>
                        <p class="parts-name">{{v.parts_name}}</p>
                        <p class="parts-name ellipsis">{{v.parts_name_xx}}</p>
                        </li>
                    </ul>
                </div>
                <div class="box1">
                    <p class="one" @click="modules()"><em>已选</em>&nbsp;&nbsp;&nbsp;<span class="dynamic-data">{{$store.state.html}}</span></p>
                    <p class="two"><em>送至</em>&nbsp;&nbsp;&nbsp;<span>北京市 东城区</span>&nbsp;&nbsp;<span class="red">有现货</span></p>
                    <div class="commitment"> 
                        <div><img src="../../assets/des-img/right.png" alt=""><span>小米自营</span></div>
                        <div><img src="../../assets/des-img/right.png" alt=""><span>小米发货</span></div>
                        <div><img src="../../assets/des-img/right.png" alt=""><span>7天无理由退货</span></div>
                    </div>
                </div>
                
            </div>
        </div>
        <div class="img-list" v-for="(item,index) in des_info" :key="index+1">
                <div class="img-ingo" v-for="(src,index) in item.img_list" :key="index">
                    <img :src="src" alt="" />
                </div>
        </div>
        <div class="btn-top" @click="to_top()">
                <img src="../../assets/home-image/top.451d650ecd.png" alt="">
        </div>
        <footer class="btn-tap">  
            <ul class="footer-left clearfix">
                <router-link to="/home">
                <li class="home"><img src="../../assets/home-image/home.png" alt="">   <span>首页</span> </li>
                </router-link>
               <router-link to="/shopping">
                <li class="shopping"><span class="mui-badge mui-badge-danger my-badge" v-if="$store.state.individual!=0">{{$store.state.individual}}</span><img src="../../assets//home-image/shopping.png" alt=""> <span>购物车</span> </li>
               </router-link>
            </ul>
            <div class="btn-shopping" @click="modules()">加入购物车</div>
        </footer>
    </div>
</template>

<script>
    import detail from '../../components/module/Shopping_detail.vue'
    export default {
        name:"des",
        data() {
            return {
                swiperOption: {
                    pagination: {
                        el: '.swiper-pagination'
                    }
                },
                detail:"",
                des_info:[],
                plus:""
            }
        
        },
        methods: {
            modules(){
                this.detail='detail';
                $(function(){
                     $("#shopping_detail").css("display","block");
                })
            },
            to_top(){
                $(function(){
                    $("html,body").animate({
                        "scrollTop":0
                    },100);
                })    
            }
        },
        components:{
            detail
        },
        mounted(){
            this.$http.get("./data/index.json")
            .then((res)=>{
                this.des_info=res.data.shopping_list[1].des_info
            })
            $(function(){
                $(window).scroll(function(){
                    if($(this).scrollTop()>500){
                        $(".btn-top").css("display","block")
                    }else{
                        $(".btn-top").css("display","none")
                    }
                })
            })
        }
    }
</script>

<style lang="scss" scoped>


.img-list{
    margin-bottom: 60px;
    
    img{
        width: 100%;
    }
}
.btn-tap{
    height: 60px;
    background: #fff;
    position: fixed;
    bottom: 10px;
    left: 10px;
    right: 10px;
    border-radius: 10px;
    box-sizing: border-box;
    padding: 10px;
    .footer-left{
        float: left;
        // overflow: hidden;
        .home{
            margin-left: 20px;
        }
         .shopping{
            margin-left: 35px;
            position: relative;
            .my-badge{
                position: absolute;
                left: 22px;
                top: -5px;
                background: #ed4d41;
                color: #fff;
                z-index: 1;
            }
        }
        li{
            float: left;
            text-align: center;
            color: rgba(0,0,0,.54);
            img{
                width: 23px;
                height: 23px;
                display: block;
                margin-left: 50%;
                transform: translateX(-50%);
            }
        }
    }
    .btn-shopping{
        float: right;
        background: #ff6700;
        color: #fff;
        padding: 8px 20px ;
        font-size: 18px;
        border-radius: 20px;
        margin-right: 10px;
        position: relative;
        top: 50%;
        transform: translateY(-50%);
    }
}
.my-swiper{
        .swiper-slide{
            width: 100%;
            img{
                width: 100%;
            } 
    }
}
.button{
    .btn{
        background: rgba(0,0,0,0.5);
        height: 30px;
        width: 30px;
        border-radius: 50%;
        text-align: center;
        line-height: 30px;
        position: absolute;
        
        top: 10px;
        z-index: 999;
        span{
           font-size: 16px;
        
           color: #fff;
        }
    }
    .btn-left{
        left:10px;
    }
    .btn-right{
        right:10px;
    }
}
.ds{
    width: 100%;
    .ds-img{
        width: 100%;
    }
}
.info-middle{
    box-sizing: border-box;
    padding: 10px;
    padding-bottom: 0;
    .box1{
        background: #fafafa;
        border: 1px solid #f2f2f2;
        box-sizing: border-box;
        padding: 0px 10px;
        border-radius: 10px;
        margin: 10px 0;
        .one{
            height: 40px;
            border-bottom: 1px solid #f2f2f2;
            line-height: 40px;
            font-size: 13px;
            span{
                color: rgba(0,0,0,.87);
               font-size: 15px;
            }
        }
        .two{
            height: 40px;
            border-bottom: 1px solid #f2f2f2;
            line-height: 40px;
            font-size: 15px;
            span{
                color: rgba(0,0,0,.87);
               font-size: 15px; 
            }
            .red{
                    color: #f56600;
                }
        }
        p{
            position: relative;
        }
        p::after, .commitment::after{
            content: "";
            width: 8px;
            height: 8px;
            border-top: 1px solid #c7c7c7;
            border-right: 1px solid #c7c7c7;
            display: inline-block;
            transform: rotate(45deg);
            position: absolute;
            right: 0;
            top:50%;
            margin-top: -4px; 
        }
        
        .commitment{
            position: relative;
            display: flex;
            height: 40px;
            border-bottom: 1px solid #f2f2f2;
            line-height: 40px;
            color: rgba(0,0,0,.54);
            font-size: 15px;
            img{
                width: 10px;
                height: 10px;
                margin-right: 5px;
            }
            div{
                margin-left:10px;
            }
            div:nth-child(1){
                margin-left:0px;
            }
          
        }
    }
    
    .title{
    font-size: 22px;
    color: #3c3c3c;
    text-align: center;
    }
    .info{
        margin-top: 5px;
        .introduce{
        color: rgba(0,0,0,.54);
        font-size: 15px;
        }
    }
    .price{
       font-size: 25px;
       color: #ff6700;
       padding: 15px 0;  
    }
    .nav{
        width: 100%;
        height: 100%;
        overflow: auto;
    .list-info{
        width: 210%;
        overflow: auto;
        .box{
            text-align: center;
            float: left;
            width: 80px;
            position: relative;
            img{
                width: 20px;
                height: 20px;
            }
            .parts-name{
                color: #676767;
            }
        }
        .box::after{
            width: 1px;
            height: 100%;
            content: "";
            display: inline-block;
            background: #ececec;
            position: absolute;
            top: 0;
            left: 100%;

        }
    }
    }
}
.btn-top{
        position: fixed;
        right: 15px;
        bottom: 80px;
        z-index: 2;
        display:none;
        img{
            width: 40px;
            height: 40px;
        }

    }
</style>