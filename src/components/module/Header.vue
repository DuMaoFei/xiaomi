<template>
    <main id="vheader">
      <div class="top">
          <div class="tops">
            <div class="top-logo">
               <img src="../../assets/home-image/xm-logo.png" alt="">
            </div>
            <router-link to="/search" class="top-search" tag="div">
                <img src="../../assets/home-image/top-search.png" alt="" class="icons" />
                <span>搜索商品名称</span>
            </router-link>
            <div class="top-user-logo" @click="my()">
                 <img src="../../assets/home-image/user-logo.png" alt="">
            </div>
        </div>
        <div class="top-button clearfix">
            <div id="slider" class="mui-slider my-slider" >
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a class="mui-control-item mui-active" @click="msg='recommend'">{{send()}}
							推荐
						</a>
						<a class="mui-control-item"  @click="msg='telephone'">
							手机
						</a> 
						<a class="mui-control-item" >
							智能
						</a>
						<a class="mui-control-item" >
							电视
						</a>
						<a class="mui-control-item"  >
							笔记本
						</a>
                        <a class="mui-control-item"  >
                            家电
						</a>
                         <a class="mui-control-item"  >
                           生活周边
						</a>
					</div>
				</div>
			</div>
        
            <div class="nav-list" style="display:none">
                <span class="nav-title">全部</span>
            </div>
            <div class="top-right">
                <img src="../../assets/home-image/down.png" alt="">
            </div>
        </div>
      </div>
      <div class="nav" style="display:none">
        <ul class="clearfix">
            <li class="nav-list">推荐</li>
            <li class="nav-list">手机</li>
            <li class="nav-list">智能</li>
            <li class="nav-list">电视</li>
            <li class="nav-list">笔记本</li>
            <li class="nav-list">家电</li>
            <li class="nav-list">生活周边</li>
        </ul>
    </div>
    </main>
</template>

<script>
    import mui from '../../assets/mui/js/mui.js';
    import $ from 'jquery';
    export default {
        name:"vheader",
        data(){
            return{
                 msg:"recommend"
            }
        },
        methods: {
            my(){
                this.$router.push('/my');
            },
            send(){
                this.$emit('sends',this.msg)
            }

        },
        mounted(){
            mui(".mui-scroll-wrapper").scroll({
            deceleration: 0.0005
            });
            var a=0;
            $(function(){
                $('.top-right').click(function(){
                    a++;
                    if(a%2==1){
                        $(this).css({
                            transform:"rotate(180deg)",
                        })
                        $('#slider').css({
                            display:"none"
                        })
                        $(".nav-list").css({
                            display:"block"
                        })
                        $(".nav").css({
                            display:"block"
                        })
                    }else{
                        $(this).css({
                        transform:"rotate(0deg)",
                        }),
                        $('#slider').css({
                            display:"block"
                        })
                        $(".nav-list").css({
                            display:"none"
                        })
                        $(".nav").css({
                            display:"none"
                        })
                    }
                   
                 
                 
                })
            })
            
        }
    }
</script>

<style lang="scss" scoped>
*{ touch-action: pan-y; }
    #vheader{
          position: fixed;
          top: 0;
          left: 0;
          z-index: 999;
          width: 100%;
    }
    a:focus{
        text-decoration: none;
      
    }
    a:hover{
        text-decoration: none;
    }
     .nav{
            background: #f2f2f2;
            padding: 0 10px;
            overflow: hidden;
             box-sizing: border-box;
            li{
                float: left;
                padding: 3px 25px;
                background: #fff;
                margin:5px 5px ;
                border-radius: 3px;
                color: #3c3c3c;
            }
            .nav-list:nth-child(1){
                border: #ff6b00 1px solid;
                background: #fde0d5;
                color: #ff6b00;
                padding: 2px 25px;
            }
             .nav-list:nth-child(5),.nav-list:nth-child(6),.nav-list:nth-child(7){
                margin-bottom: 15px;
            }
        }
    .top{
        width: 100%;
        height: 80px;
        background: #f2f2f2;
        padding: 5px 10px;
        box-sizing: border-box;
        .tops{
            width: 100%;
            background: #f2f2f2;
            display: flex;
            align-items: center;

            .top-logo{
                width: 10%;
            
            img{
                height: 16px;
                margin-left: 50%;
                transform: translateX(-50%);
                
            }
            
            }
            .top-search{
                width: 80%;
                height: 32px;
                background: white;
                margin:0 10px;
                border: 1px solid #ddd;
                img{
                    height: 90%;
                    padding-top:5px;
                    float: left;
                }
            span{
                float: left;
                line-height: 32px;
                font-size: 0.8rem;
                color: #ccc;
                width: 80%;
            }
            }
            .top-user-logo{
                width: 10%;
            
                img{
                    height: 21px;
                    margin-left: 50%;
                transform: translateX(-50%);

                }
            }
        
            
        }
        .top-button{
            margin-top: 5px;
            .nav-list{
                float: left;
                height: 38px;
                line-height: 38px;
                margin-left: 5px;
               font-size: 15px;
            }
            .my-slider{
            width: 90%;
            
        .mui-segmented-control.mui-scroll-wrapper .mui-scroll{
                height: 30px; 
        }
            .mui-segmented-control.mui-scroll-wrapper .mui-control-item{
            position: relative;
            padding: 0 10px;
            font-size: 0.5rem;
            height: 30px;
            color: #767676;
            }
            .mui-segmented-control.mui-scroll-wrapper .mui-control-item:nth-of-type(1){
                padding-left: 2px;
            }
            float: left;
            .mui-segmented-control.mui-scroll-wrapper .mui-control-item.mui-active{
                color:#ff6b00;
                text-decoration: none;

            
            }
            
        }
}   
    .top-right{
        width: 10%;
        float: right;
        height: 38px;
            transition: all .25s;

        img{
            width: 20px;
            height: 20px;
            margin-left: 25%;
            margin-top: 50%;
             transform: translateY(-50%);
        }

    }
    
}    
</style>