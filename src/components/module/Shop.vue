<template>
    <div id="shop">
        <div class="shop-top" v-for="(item, index) in list_shop" :key="index">
            <div class="AD-img">
                <img :src="item.AD_img" alt="">
            </div>
            <div class="interval1"></div>
            <div class="title-img">
                <img :src="item.title_img" alt="">
            </div>
            <nav>
                <ul class="shop-list clearfix" :class="{class:item.class!='true'}">
    
                    <li :class="{info:true,infos:item.infos=='true'}" v-for="(item, index) in item.list_info" :key="index">
                        <div class="top-img">
                                <img :src="item.src" alt="">
                                <img :src="item.circle" alt="" class="circle">
                        </div>
                        <div class="bottom-info clearfix" >
                            <p class="one ellipsis">{{item.name}}</p>
                            <p class="introduce ellipsis">{{item.des}}</p>
                            <div class="price">
                                <span class="red"><i>￥</i>{{item.now+' '+ item.rise}}</span>
                                <span class="del" v-if="item.before!=''"><i>￥</i>{{item.before}}</span>
                            </div>
                            <div class="btn">立即购买</div>
                        </div>
                    </li>

                </ul>
            </nav>
            <div class="more">
                <p>更多{{item.list_name}}产品></p>
            </div>
            <div class="interval1"></div>
        </div>
        <div class="Other-mores">
            <ul class="mores-list">
                <li class="list-img" v-for="(item, index) in list1_shop" :key="index">
                    <img :src="item.url" alt="">
                </li>
               
            </ul>
        </div>
        <div class="interval1"></div>
        <div class="understand">
            <div class="top">
                <img src="../../assets/home-image/understand-top.jpg" alt="">
            </div>
            <div class="buttom">
                <img src="../../assets/home-image/understand-buttom.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"shop",
        data(){
            return{
                list_shop:[],
                list1_shop:[]
            }
            
        },
        mounted(){
            this.$http.get('./data/index.json',{})
            .then(res=>{
                this.list_shop=res.data.list_shop
                this.list1_shop=res.data.list1_shop
            })
             .catch(function (error) {
                console.log(error);
            })
            .then(function () {
                // always executed
            });  
        }
    }
</script>

<style lang="scss" scoped>
    .shop-top{
       .AD-img img{
           width: 100%;
       }
       .interval1{
        width: 100%;
        height: 8px;
        background-color: rgb(245, 245, 245);
        }
       .title-img img{
           width: 100%;
       }
       .shop-list{
           box-sizing: border-box;
           padding-top: 5px;
        &.class{
            padding-left:10px;
            padding-right:10px;
        }

        .info{
               float: left;
               width: 49.5%;
               text-align: center;
               font-size: 14px;
               margin-right: 1%;
              
               .top-img{
                    position: relative;
                    .circle{
                    position: absolute;
                    z-index: 1;
                    width: 35%;
                    bottom: 0;
                    right: 0;
                }
                    img{
                        width: 100%;
                    }
               }
               
               .bottom-info{
                   padding: 10px 20px;
                   box-sizing: border-box;
                   .one{
                       color: #212121;
                       font-size:15px;
                   }
                   .introduce{
                       color: #757575;
                       width: 100%;
                       font-size: 12.5px;
                   }
                   .del{
                       text-decoration:line-through;
                       font-size: 12px;
                   }
                   i{
                       font-style: normal;
                       font-size:12px;
                   }
                   .red{
                       color: #ea6862;
                   }
                   .del{
                        color: #757575;
                   }
                   .btn{
                        background: #ea625b;
                        width: 70%;
                        color: #FFf;
                        font-weight: 700;
                        padding: 6px 0;
                        border-radius: 2px;
                        margin-left: 50%;
                        transform: translateX(-50%);
                   }
               }

           }
        li:nth-child(even){
               margin-right: 0;
            }
        .infos{
           width: 100%;
           .top-img{
               width: 50%;
               float: left;
           }
           .bottom-info{
               width: 50%;
               float: right;
               padding: 30px 5px 0 15px;
               text-align: left;
               .btn{
                   display: none;
               }
           }   
       }
         .infos:nth-child(2){
             .top-img{
                 float: right;
             }
             .bottom-info{
                 float: left;
             }
         }
       }
       
        .more{
            width: 100%;
            height: 57px;
            font-size: 18px;
            border-top: 1px solid #ccc;
            text-align: center;
            p{
                display: inline-block;
                line-height: 57px;
            }
        }
    }
    .mores-list{
        li{
            width: 49.5%;
            float: left;
            margin-right: 1%;
            margin-top:1%;
            img{
                width: 100%;
            }
        }
        .list-img:nth-child(even){
               margin-right: 0;
            }
        .list-img:nth-child(1),.list-img:nth-child(2){
               margin-top: 0;
        }    
    }
    .understand{
        margin-bottom:55px;
        width:100%;
        .top{
            img{
                width: 100%;
            }
        }
        .buttom{
            img{
                width: 100%;
            }
        }
    }
</style>