<template>
    <div id="my">
            <div class="top">
            <div class="user"></div>
            <router-link to="/register"><p class="login">登录/注册</p></router-link>
            </div>
            <div class="order">
                <span class="one-order">我的订单</span>
                <span class="two-order">全部订单</span>
            </div>
            <ul class="payment">
                <li class="payment-middle">
                    <div class="icon"></div>
                    <span>待付款</span>
                </li>
                <li class="payment-middle">
                      <div class="icon1"></div>
                    <span>待收货</span>
                </li>
                <li class="payment-middle">
                    <div class="icon2"></div>
                    <span>退换修</span>
                </li>
            </ul>
            <nav>
                <div class="ui-line"></div>
                <ul class="list">
                    <li class="list-one border">
                        <div class="icon0 icon"></div>
                         <span class="text">会员中心</span>
                         <div class="deg"></div>
                    </li>
                     <li class="list-one">
                        <div class="icon1 icon"></div>
                         <span class="text">我的优惠</span>
                         <div class="deg"></div>
                    </li>
                </ul>
                 <div class="ui-line"></div>
            </nav>
            <nav>
                <ul class="list">
                    <li class="list-one border">
                        <div class="icon2 icon"></div>
                         <span class="text">服务中心</span>
                         <div class="deg"></div>
                    </li>
                     <li class="list-one">
                        <div class="icon3 icon"></div>
                         <span class="text">小米之家</span>
                         <div class="deg"></div>
                    </li>
                </ul>
                 <div class="ui-line"></div>
            </nav>
            <nav>
                <ul class="list">
                    <li class="list-one border">
                        <div class="icon4 icon"></div>
                         <span class="text">我的F码</span>
                         <div class="deg"></div>
                    </li>
                     <li class="list-one">
                        <div class="icon5 icon"></div>
                         <span class="text">礼物码兑换</span>
                         <div class="deg"></div>
                    </li>
                </ul>
                 <div class="ui-line"></div>
            </nav>
            <nav >
                <ul class="list">
                    <li class="list-one">
                        <div class="icon6 icon"></div>
                         <span class="text">设置</span>
                         <div class="deg"></div>
                    </li>
                </ul>
            </nav>
            <div class="last"></div>
        <tabber></tabber>
    </div>
</template>

<script>
 import tabber from '../components/module/Tabber.vue'
    export default {
        name:"my",
        components:{
            tabber
        }
    }
</script>
<style lang="scss" scoped>
#my{
    color: #3c3c3c;
}
.top{
    width: 100%;
    height: 80px;
    background:url("../assets/my-img/bg.png") no-repeat #f37d0f;
    background-size: cover;
    padding: 15px 20px;
    box-sizing: border-box;
    .user{
    background: url('../assets//my-img/user.png') no-repeat;
    width: 44px;
    height: 44px;
    background-size: contain;
    float: left;
    }
    .login{
        float: left;
        color: #fff;
        font-size: 12px;
        line-height: 44px;
        margin-left: 10px;
    }
}
.order{
    width: 100%;
    height: 40px;
    border-bottom: 1px solid #ccc;
    padding: 0px 20px;
    box-sizing: border-box;
    .one-order{
        float: left;
        line-height: 40px;
        font-size: 14px;
    }
    .two-order{
        float: right;
        line-height: 40px;
    }
    .two-order::after{
        width: 10px;
        height: 10px;
        content: "";
        border-top: 2px solid #aaa;
        border-right: 2px solid #aaa;
        display: inline-block;
        transform: rotate(45deg);
    }
}
.payment{
    width: 100%;
    padding: 20px 0;
    overflow: hidden;
    .payment-middle{
        width: 33.3%;
        float: left;
        text-align: center;
        .icon{
            width: 25px;
            height: 25px;
            background: url('../assets/my-img/dfk.png') no-repeat ;
            background-size: cover;
            margin-left: 50%;
            transform: translateX(-50%);
        }
        .icon1{
            width: 25px;
            height: 25px;
            background: url('../assets/my-img/dsh.png') no-repeat ;
            background-size: cover;
            margin-left: 50%;
            transform: translateX(-50%);
        }
        .icon2{
            width: 25px;
            height: 25px;
            background: url('../assets/my-img/nav-th.png') no-repeat ;
            background-size: cover;
             margin-left: 50%;
            transform: translateX(-50%);
        }
    }
}
.ui-line{
    width: 100%;
    height: 10px;
    background: #f5f5f5;
}
.list{
    .border{
        border-bottom: 1px solid #ccc;
    }
    .list-one{
        width: 100%;
        height: 55px;
        padding: 15px 20px;
        box-sizing: border-box;
       
        .icon{
            width: 25px;
            height: 25px;
            background: url("../assets/my-img/hy.png") no-repeat;
            background-size: cover;
            float:left;
        }
        .icon1{
            background: url("../assets/my-img/yh.png") no-repeat;
            background-size: cover;
        }
        .icon2{
            background: url("../assets/my-img/fw.png") no-repeat;
            background-size: cover;
        }
         .icon3{
            background: url("../assets/my-img/xm.png") no-repeat;
            background-size: cover;
        }
         .icon4{
            background: url("../assets/my-img/fm.png") no-repeat;
            background-size: cover;
        }
         .icon5{
            background: url("../assets/my-img/lwm.png") no-repeat;
            background-size: cover;
        }
         .icon6{
            background: url("../assets/my-img/setting.png") no-repeat;
            background-size: cover;
        }
        .text{
            float:left;
            font-size: 15px;
            position: relative;
            top: 2.5px;
            left: 20px;
        }
        .deg{
        width: 13px;
        height: 13px;
        border-top: 2px solid #aaa;
        border-right: 2px solid #aaa;
        display: inline-block;
        transform: rotate(45deg);
        float: right;
        position: relative;
        top: 5.5px;
        }
        

    }
    
}
.last{
    height: 50px;
}


</style>