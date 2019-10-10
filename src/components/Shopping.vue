<template>
    <div id="shopping">
       <mt-header title="购物车" class="my-header" fixed>
        <router-link to="/classify" slot="left">
            <span class="iconfont icon-xiangzuo2"></span>  
        </router-link>
        <router-link to="/search" slot="right" >
                <span class="iconfont icon-icon--"></span>
         </router-link>
        </mt-header>
        <div class="shopping-middle">
            <div class="shopping-box">
                <div class="box-top">
                    <span class="box-left">登录后享受更多优惠</span>
                    <router-link to="/login"><div class="box-right"><em>去登陆</em>&nbsp;<span class="iconfont icon-jiantou1"></span></div></router-link>
                </div>
            </div>
            <div class="shopping-content" v-if="$store.state.individual===0">
                <p class="icon"></p>
                <span class="one">
                    购物车还是空的
                </span>
                <router-link to="/home">
                     <span class="two">去逛逛</span>
                </router-link>
            </div>
            
            <div class="shopping-content-show" v-else v-for="(item, index) in $store.state.des" :key="index" >
                <div class="box">
                    <div class="show-left" @click="add_img()">
                    </div>
                </div>
                <div class="box2">
                    <div class="show-middle" >
                        <img :src="item.src" alt="">
                    </div>
                </div>
                <div class="box3">
                    <div class="show-right" >
                        <div class="left">
                            <p class="title">{{item.name}}</p>
                            <p class="price">售价：<span>{{item.price}}元</span></p>
                            <div class="add">
                               <div class="mui-numbox" data-numbox-min='1' data-numbox-max='2' >
                                    <button class="mui-btn mui-btn-numbox-minus "  type="button" >-</button>
                                    <input id="test" class="mui-input-numbox my-input" type="number" :value=item.val />
                                    <button class="mui-btn mui-btn-numbox-plus"  type="button">+</button>
                                </div>
                                <span class="delete" @click=del(index)></span>
                                {{num(index)}}
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
            <div class="like">
                <img src="../assets/shopping-img/like.jpg" alt="">
            </div>
            <nav>
                <ul class="pro_list">
                 
                    <li v-for="(item, index) in shopping_list" :key="index">
                        <router-link :to="'/des/'+item.id"> 
                        <img :src="item.url" alt="">
                        <div class="info">
                            <p class="title ellipsis">{{item.title}}</p>
                            <p class="price">￥{{item.price}}</p><span class="before" v-if="item.before!=''">{{item.before}}</span>
                        </div>
                        </router-link>
                    </li>
                  
                </ul>
            </nav>
        </div>
        <tabber v-if="$store.state.individual===0"></tabber>
        <div class="settlement" v-else>
            <div class="box">
                <p>共 <span>{{individual}}</span> 件 金额：<strong>{{nums}}</strong> 元</p>
            </div>
            <router-link to="/classify" class="box1">
                继续购物
            </router-link>
            <div class="box2">
                去结算
            </div>
        </div>
    </div>
</template>

<script>
 import tabber from '../components/module/Tabber.vue'
 import mui from "../assets/mui/js/mui.min.js"
 
    export default {
        name:"shopping",
        data(){
            return{
               shopping_list:[],
               value:1,
               nums:"",
               show:"",
               individual:""
            }
        },
        components:{
            tabber
        },
        mounted(){
            //  mui('.mui-numbox').numbox();
            this.$http.get("./data/index.json",{})
            .then((res)=>{
                this.shopping_list=res.data.shopping_list
            });
        },
        methods:{
            add_img(){
                this.$store.state.count++;
                if(( this.$store.state.count)%2==1){
                    this.show=false;
                     $(".show-left").addClass('active');
                }else{
                    this.show=true;
                   $(".show-left").removeClass('active');  
                }
                if(this.show==false){
                   this.$store.state.individual="0";
                }else{
                    var length=this.$store.state.des.length;
                    var result=0;
                    for(var i=0;i<length;i++){
                       result+=this.$store.state.des[i].val;
                    }
                     this.$store.state.individual=result;
                }
            },
            del(i){
            var individual=this.$store.state.des[i].val;
            this.$store.state.individual-=individual;
            this.$store.state.des.splice(i,1); 
            },
            num(i){
                var ind=parseInt(this.$store.state.individual);
                this.individual=parseInt(this.$store.state.individual);
                this.nums=ind*parseInt(this.$store.state.des[i].price.slice(1));
            },
        }
    }
</script>

<style lang="scss" scoped>
.settlement{
    height: 50px;
    width: 100%;
    background: #fff;
    position: fixed;
    bottom: 0;
    left: 0;
    overflow: hidden;
   
    .box{
        height: 100%;
        width: 33.3%;
        float: left;
        box-sizing: border-box;
        padding: 5px 15px;
        text-align: center;
        strong{
             color: #ff6700;
             font-size: 18px;
        }
    }
    .box1{
        height: 100%;
        width: 33.3%;
        float: left;
        line-height: 50px;
        text-align: center;
         font-size: 16px;
          color:#333;
    }
    .box2{
        height: 100%;
        width: 33.3%;
        float: left;
        line-height: 50px;
        text-align: center;
        background: #ff6700;
        color: #fff;
        font-size: 16px;
    };
    
}
.shopping-content-show{
    display: flex;
    align-items: center;
    width: 100%;
    padding:15px 20px;
    box-sizing: border-box;
    .box{
        width: 10%;
        .show-left{
        width: 20px;
        height: 20px;
        background: url('../assets//des-img/check_press.png') no-repeat;
        background-size: cover;
        border: none;
        }
        .show-left.active{
        border-radius: 50%;
        border: 1px solid #ccc;
        background:none;
        }  
    }
    .box2{
        width: 25%;
        .show-middle{
            width: 100%;
            border: 1px solid #eee;
            img{
                width: 100%;

            }
        }
    }
    .box3{
        width: 62%;
        margin-left: 3%;
        .left{
            width: 100%;
            .title{
                height: 32px;
                color: #666;
                padding-right:20px ;
                box-sizing: border-box;
                line-height: 14px;
            }
            .price{
                font-size: 10px;
            }
            .delete{
                float: right;
                background: url('../assets/des-img/delete.png') no-repeat;
                width: 33px;
                height: 33px;
                background-size:contain;
            }
        }
        
    }

             
                   
}
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
.shopping-middle{
    margin-top: 40px;
    margin-bottom:50px;
    .box-top{
        box-sizing: border-box;
        padding: 0 10px;
        height: 50px;
        line-height: 50px;
        .box-left{
            float: left;
            font-size: 16px;
        }
        .box-right{
            color: #adadad;
            float: right;
            span{
                font-size: 14px;
            }
        }
    }
    .shopping-content{
        height: 60px;
        background: #ebebeb;
        box-sizing: border-box;
        padding: 10px;
        display: flex;
       align-items: center;
       justify-content: center;
       width: 100%;
        .icon{
            background: url('../assets/shopping-img/cartnull.png') no-repeat;
            display: inline-block;
            height: 40px;
            width: 40px;
            background-size: contain;
        }
        .one{
            color: #c5c5c5;
            margin:0 10px;
        }
        .two{
            border: 1px solid #c5c5c5;
            padding: 5px 10px;
            color: #000;
        }
       
    }
     .like{
        img{
            width: 100%;
        }
    }
    
    .pro_list{
        margin-top:3px;
        overflow: hidden;
       li{
           width: 49.5%;
           float: left;
           margin-right: 1%;
           img{
               width: 100%;
           }
           .info{
               box-sizing: border-box;
               padding:5px 20px;
               .title{
                    color: #3c3c3c;
               }
               .price{
                   color: #ff6700;
                   display: inline-block;
               }
               .before{
                   text-decoration: line-through;
                   color: #cecece;
                   font-size: 12px;
                   margin-left: 5px;
               }
           }
        }
        li:nth-child(even){
            margin-right: 0;
        }
    }
}

</style>