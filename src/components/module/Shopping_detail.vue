<template>
    <div id="shopping_detail">
        
        <div class="box" v-for="(item, index) in detail" :key="index">
           <span class="iconfont icon-error my-error" @click="plus()"></span>
            <div class="box-top" v-for="(item, index) in item.types" :key="index" v-if="msg==index">
                <div class="box-left">
                    <img :src="item.src" alt="">
                </div>
                <div class="box-right">
                    <p class="one">￥{{item.price}}</p>
                    <p class="twos">{{item.name}}</p>
                    {{$store.state.html}}
                </div>
            </div>  
            <div class="top-middle">
                <div class="box1">
                    <p>颜色</p>
                    <ul>
                        <li :class="{active:index==msg}" v-for="(item, index) in item.color" :key="index" @click="indexs(index)">{{item}}</li>
                    </ul>
                </div>
                <div class="box1">
                    <p>容量</p>
                    <ul>
                        <li class="active">{{item.capacity}}</li>
                    </ul>
                </div>
                <div class="box1">
                    <span class="left">购买数量</span>
                    <div class="mui-numbox right" data-numbox-min='1' data-numbox-max='2' >
                    <button class="mui-btn mui-btn-numbox-minus" type="button" @click="sub()">-</button>
                    <input id="test" class="mui-input-numbox my-input" type="number" :value="val" />
                    <button class="mui-btn mui-btn-numbox-plus" type="button" @click="add()">+</button>
                    </div>
                </div>
                 <div class="box1">
                        <p>延长保修<img src="../../assets/des-img/wh.png" alt=""></p>
                        <div class="bx">
                            <span class="bao actives">{{item.Warranty}}</span>
                        </div>
                      
                 </div>
                 <div class="box2">
                    <p>意外保护<img src="../../assets/des-img/wh.png" alt=""></p>
                    <div class="bx">
                    <span class="bao actives">{{item.accident}}</span>
                    </div>
            </div>
        </div>
         <div class="btn" @click="add_shopping()">
                加入购物车
            </div>
    </div>
</div>

</template>

<script>
   import mui from "../../assets/mui/js/mui.js"
   import { Toast } from 'mint-ui';
    export default {
        name:"shopping_detail",
        data(){
            return{
                detail:[

                ],
                msg:"",
                html:"",
                iconClass:"iconfont icon-iconcheck01",
                val:1

            }
        },
        methods: {
            add_shopping(){
                $("#shopping_detail").css("display","none");
               Toast({
                    message: "成功加入购物车",
                    iconClass: this.iconClass,
                    duration: 1000,
                    className:"my-icon"
                    });
                 var vals=parseInt($(".my-input").val());
                this.$store.commit("add",vals);

                var name=$('.twos').html();
                var price=$('.price').html();
                var src=$(".box-left img").attr('src');

                var obj={
                    price:price,
                    src:src,
                    name:name,
                    val:vals
                }
                this.$store.state.des.push(obj);
            },
            indexs(a){
                this.msg=a;
            },
            add(){
                if((this.val)<2){
                   this.val++;
                }
            },
            sub(){
               if((this.val)>1){
                   this.val--;
                } 
            },
            plus(){
                var _this=this;
                $(function(){
                    $("#shopping_detail").css("display","none");
                    var as=$(".twos").html()+' x '+$(".my-input").val();
                    _this.$store.commit("a",as);
                })
                
            }
        },
        mounted(){
            mui('.mui-numbox').numbox();
            this.$http.get("./data/index.json")
            .then((res)=>{
                this.detail=res.data.shopping_list[1].des_info[0].type;
            });
           
        }
    }
</script>

<style lang="scss" scoped>
    
    #shopping_detail{
        width: 100%;
        height: 100%;
        position: fixed;
        background: rgba($color: #000000, $alpha:0.5);
        top: 0;
        left: 0;
        z-index:1000;
        
        .box{
            width: 100%;
            height: 80%;
            background: #fff;
            position: absolute;
            bottom: 0;
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            padding:30px 20px;
            .btn{
                height: 35px;
                width: 95%;
                background: #ff6700;
                color: #fff;
                text-align: center;
                line-height: 35px;
                // margin: 20px 0;
                border-radius: 20px;
                position: fixed;
                bottom: 10px;
                left: 50%;
                transform: translateX(-50%);
                font-size: 15px;
            }
            .top-middle{
                height: 70%;
                overflow: auto;
                .box2{
                    margin-bottom: 35px;
                }
                .box1,.box2{
                    overflow: hidden;
                    height: 100px;
                    width: 100%;
                    color: rgb(0,0,0);
                    padding: 20px 0;
                    box-sizing: border-box;
                    .bx{
                        width: 80%;
                        padding: 0 10px;
                        box-sizing: border-box;
                        .bao{
                            width: 50%;
                            border: 1px solid #f1f1f1;
                            padding: 8px 0;
                            text-align: center;
                            display: inline-block;
                            color: #000;  
                            margin-top: 10px;  
                        }
                         .bao.actives{
                            color: #ff6700;
                            border: 1px solid #ff6700;
                        }
                    }   
                    
                    .left{
                        float: left;
                        color: rgba(0,0,0,.87);
                        line-height: 60px;
                    }
                    .right{
                        float: right;
                        position: relative;
                        top: 50%;
                        margin-top:-16.5px; 
                    }
                    p{
                    color: rgba(0,0,0,.87);
                        img{
                            width: 14px;
                            height: 14px;
                            margin-left: 5px;
                        }
                    }
                    ul{
                        overflow: hidden;
                        display: flex;
                        margin-top: 10px;
                        li{
                            width: 20%;
                            border: 1px solid #f1f1f1;
                            padding: 8px 0;
                            margin: 0 10px;
                            text-align: center;
                        }
                        li.active{
                            color: #ff6700;
                            border: 1px solid #ff6700;
                        }
                    }
                    
                }
            }
            .my-error{
            position: absolute;
            font-size: 25px;
            right: 15px;
            top: 15px;
            }
            .box-top{
                overflow: hidden;
                .box-left{
                    width: 35%;
                    float: left;
                    img{
                        width: 100%;
                        border: 1px solid #f2f2f2;
                    }
                }
                .box-right{
                    float: right;
                    width: 65%;
                    padding: 20px 10px;
                    box-sizing: border-box;
                    display: block;
                    .one{
                        color:#ff6700;
                        font-size: 25px;
                    }
                    .twos{
                        color: rgba(0,0,0,.87);
                         margin-top: 10px;
                    }
                }
            }
            
        }
    }
    
</style>

