<template>
    <div id="login">
        <div class="top">
            <div class="logo"></div>
            <p>小米账号登陆</p>
        </div>
        <div class="middle">
            <div class="input1">
                <input type="text" placeholder="邮箱/手机号码/小米ID" @keydown="registers()">
            </div>
             <div class="input2">
                <input type="password" placeholder="密码"  ><span class="icon-see" @click="switched()"></span>
            </div>
            <div class="error">
                <p class="error-font"> <span class="error-icon"></span> <span class="text"></span></p>
            </div>
            <div class="btn" @click="register()" >登陆</div>
            <router-link to="/register"><div class="btn1">手机短信注册</div></router-link>
            <div class="forget">
               <ul>
                   <li><router-link to="/register">立即注册</router-link></li>
                   <li>忘记密码 ?</li>
               </ul>
            </div> 
            <div class="other">
                <hr>
                <div class="other-font">其他登陆方式</div>
                <nav>
                    <ul class="other-icon">
                        <li><span></span></li>
                        <li><span></span></li>
                        <li><span></span></li>
                    </ul>
                </nav>
            </div>
        </div>
        <footer>
            <ul class="set">
                <li class="one">简体</li>
                <li>繁体</li>
                <li>English</li>
                <li>常见问题</li>
                <li>隐私政策</li>
            </ul>
        </footer>
    </div>
</template>

<script>
    export default {
        name:"login",
        data(){
            return{
                count:0
            }
        },
        methods:{
            register(){
                if($(".input1 input").val()===""){
                    $(".input1").css({
                        "border-bottom": "1px solid #F66"
                    })
                    $(".error").css({
                        "display":"block"
                    })
                     $(".error .text").html("请输入账户");
                }else{
                   $(".input1").css({
                        "border-bottom": "1px solid #ccc"
                    })
                     $(".error").css({
                        "display":"none"
                    })
                    if($(".input2 input").val()===""){
                    $(".input2").css({
                        "border-bottom": "1px solid #F66"
                    })
                    $(".error").css({
                        "display":"block"
                    })
                     $(".error .text").html("请输入密码");
                    }else{
                    $(".input2").css({
                            "border-bottom": "1px solid #ccc"
                        })
                        $(".error").css({
                            "display":"none"
                        })
                    }
                }

                
            },
            registers(){
                    $(".input1").css({
                        "border-bottom": "1px solid #ccc"
                    })
                     $(".error").css({
                        "display":"none"
                    })
            },
            switched(){
                this.count++;
                if( this.count%2==1){
                    $(".icon-see").css({
                    "background": 'url("src/assets/my-img/see1.png") no-repeat',
                    "background-size":"contain" 
                    })
                    $(".input2 input").attr("type","text");
                }else{
                    $(".icon-see").css({
                    "background": 'url("src/assets/my-img/see.png") no-repeat',
                    "background-size":"contain" 
                    })
                    $(".input2 input").attr("type","password");
                }
                
            }
        }
    }
</script>

<style lang="scss" scoped>
    .top{
        width: 100%;
        margin-top: 30px;
        text-align: center;
        .logo{
            width: 48px;
            height: 48px;
            background: url("../../assets/my-img/logo.png") no-repeat;
            margin-left: 50%;
            transform: translateX(-50%);
        }
        p{
            color: #000;
            font-weight: normal;
            font-size: 18px;
            margin-top: 15px;
        }
    }
    
    .middle{
        padding:  15px 20px;
        box-sizing: border-box;
        font-size: 18px;
        color: #9b9b9b;
        .forget{
            margin-top: 20px;
            ul{
                 overflow: hidden;
                 width: 162px;
                 margin-left: 50%;
                 transform: translateX(-50%);
                li{
                float: left;
                font-size: 16px;
                a{
                    color: #9b9b9b;
                }
                }
                li::after{
                    width: 1px;
                    height: 15px;
                    background: #9b9b9b;
                    content: "";
                    display: inline-block;
                    position: relative;
                    top: 2px;
                    margin: 0 10px;
                }
                li:last-child::after{
                    height: 0px;
                    width: 0px;
                    margin: 0px;
                }
                
            }
            
        }
        .error{
            margin-top: 10px;
            display: none;
            .error-icon{
                display: inline-block;
                background: url("../../assets/my-img/error.png") no-repeat;
                width: 14px;
                height: 14px;
                background-size: cover;
                position: relative;
                top: 2.5px;
            }
            .error-font{
                 color: #F66;
            }
           
        }
        .other{
            margin-top: 35px;
            text-align: center;
            .other-icon{
                overflow: hidden;
                margin-left: 50%;
                transform: translateX(-50%);
                margin-top: 20px;
                li{
                    height: 30px;
                    width: 30px;
                    border-radius: 50%;
                    background-color: #ED9090;
                    float: left;
                    margin-left: 20px;
                  
                    span{
                        height: 18px;
                        width: 18px;
                        background: url("../../assets/my-img/icons_type.png") no-repeat;
                        background-position: -38px -1px;
                        display: inline-block;
                        position: relative;
                        top: 50%;
                        transform: translateY(-50%);
                    }
                }
                
                li:nth-child(2){
                     background-color: #6BB6EA;
                     span{
                        background-position: -57px 0px;
                        width: 26px;
                     }
                }
                 li:nth-child(3){
                     background-color: #00BE00;
                     span{
                        background-position: -84px 0px;
                        width: 23px;
                     }
                }
            }
            hr{
                background: #eee;
                position: relative;
                top: 11px;
            }
            .other-font{
                font-size: 12px;
                background: #fff;
                padding: 0 2px;
                width: 80px;
                margin-left: 50%;
                transform: translateX(-50%);
            }
              
        }
        .btn{
            background:#ff6700;
            text-align:center;
            width: 100%;
            border-radius: 5px;
            margin-top: 25px;
            padding: 10px 0;
            color: #fff;
        }
        .btn1{
            border: 1px solid #ccc;
            text-align:center;
            width: 100%;
            border-radius: 5px;
            margin-top: 25px;
            padding: 10px 0;
            color: #000;
        }
        .input1{
            border-bottom: 1px solid #ccc;
            margin-bottom: 5px;
            input[type='text']{
            width: 100%;
            display: inline-block;
            border: none;
            margin-bottom: 5px;
            margin-bottom: 5px; 
            }
        }
        .input2{
            width: 100%;
            border-bottom: #ccc 1px solid;
           
                .icon-see{
                width: 20px;
                height: 20px;
                background: url("../../assets/my-img/see.png") no-repeat;
                background-size:contain;
                display: inline-block;
                position: relative;
                top:5px;
                }
            input[type='password']{
            width: 90%;
            display: inline-block;
            border: none;
            margin-bottom: 5px; 
            }
            input[type='text']{
            width: 90%;
            display: inline-block;
            border: none;
            margin-bottom: 5px; 
            }
        }
        
    }
    footer{
        margin-top: 50px;
        font-size: 14px;
        color: #9b9b9b;
        .set{
            overflow: hidden;
            width:296px;
            margin-left: 50%;
            transform: translateX(-50%);
            li{
                float: left;
               
            }
            li::after{
                width: 1px;
                height: 14px;
                background: #9b9b9b;
                content: "";
                display: inline-block;
                margin: 0 10px;
                position: relative;
                top: 3px;
            }
            li:last-child::after {
               width: 0px;
               margin: 0px;

            }
            li.one{
                color: #4a4a4a;
            }
        }
    }

      
</style>