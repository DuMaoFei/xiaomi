<template>
    <div id="tabber">
        <nav class="my-bar"> 
			<router-link class="mui-tab" to="/home">
                <span class="mui-icon my-icon1"></span>
                <span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab" to="/classify" >
                <span class="mui-icon my-icon2"></span>
				<span class="mui-tab-label">分类</span>
			</router-link>
			<router-link class="mui-tab" to="/shopping" >
                    <span class="mui-icon my-icon3">
                        <span class="mui-badge mui-badge-danger my-badge" v-if="$store.state.individual!=0">{{$store.state.individual}}</span>
                    </span>
                    <span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab" to="/my" >
                <span class="mui-icon my-icon4"></span>
				<span class="mui-tab-label">我的</span>
			</router-link>
		</nav>
    </div>
</template>

<script>
    import "../../assets/mui/css/mui.css"
    export default {
        name:"tabber",
        data(){
            return{
            }
        },
        methods:{
            
        }
        
    }
</script>

<style lang="scss" scoped>
.my-icon3{
    position: relative;
    .my-badge{
        position: absolute;
        left: 25px;
        top: -5px;
        background: #ed4d41;
        color: #fff;
        z-index: 1;
    }
}

 * { touch-action: pan-y; } 
    .my-bar{
        overflow: hidden;
        width: 100%;
        position: fixed;
        bottom: 0;
        z-index: 1;
        background: #fff;
        box-shadow: 0px -2px 10px rgba($color: #000000, $alpha: 0.15);
       .mui-tab{
           float: left;
           width: 25%;
           height: 50px;
           text-align: center;
            padding-top: 5px;
            padding-bottom:5px ;
            box-sizing: border-box;
            color: #999;
           .mui-icon{
            width: 20px;
            height: 20px;
            display:block;
            margin-left: 50%;
            transform: translateX(-50%);
        }
        .my-icon1{
            background: url('../../assets/home-image/home.png') no-repeat;
            background-size: cover;
        }
         .my-icon2{
            background: url('../../assets/home-image/classify.png') no-repeat;
            background-size: cover;
          
        }
        .my-icon3{
            background: url('../../assets/home-image/shopping.png') no-repeat;
            background-size: contain;
        }
        .my-icon4{
            background: url('../../assets/home-image/my.png') no-repeat;
            background-size: cover;
        }
       }
        
        a:hover{
            text-decoration: none;
        }
       .router-link-active{
            color:#ff6b00;
        }
        .router-link-active .my-icon1{
            background: url('../../assets/home-image/home1.png') no-repeat;
            background-size: cover;
        }
        .router-link-active .my-icon2{
            background: url('../../assets/home-image/classify1.png') no-repeat;
              background-size: cover;
        }
        .router-link-active .my-icon3{
            background: url('../../assets/home-image/shopping1.png') no-repeat;
            background-size: contain;
        }
        .router-link-active .my-icon4{
            background: url('../../assets/home-image/my1.png') no-repeat;
            background-size: cover;
        }
    }
    
</style>








