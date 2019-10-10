<template>
    <div class="imageSurround">
        <div class="top clearfix">
            <div class="top-left">
                <img src="../../assets/home-image/content-img.jpg" alt="">
            </div>
            <div class="top-right">
                <div class="box">
                    <img src="../../assets/home-image/content-img1.jpg" alt="">
                </div>
                <div class="box1">
                     <img src="../../assets/home-image/content-img2.jpg" alt="">
                </div>
            </div>
        </div>
        <div class="buttom clearfix">
            <div class="buttom-left">
                <img src="../../assets/home-image/content-img3.jpg" alt="">
            </div>
            <div class="buttom-right">
                <img src="../../assets/home-image/content-img4.jpg" alt="">
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name:"imageSurround"
    }
</script>

<style lang="scss" scoped>
    .top{
        overflow: hidden;
        .top-left{
            width: 49.5%;
            float: left;
            img{
                width: 100%;
                vertical-align: middle;
            }
        }
        .top-right{
            width: 49.5%;
            float: right;
            .box{
                width: 100%;
                img{
                    width: 100%;
                    height: 100%;
                    vertical-align: middle;
                }
            }
            .box1{
                width: 100%;
                margin-top: 1.5%;
                img{
                    width: 100%;
                    height: 100%;
                    vertical-align: middle;
                }
            }
            }
        }
    .buttom{
        margin-top: 0.8%;
        .buttom-left{
            width: 49.5%;
            float: left;
            img{
                width: 100%;
                vertical-align: middle;
            }
        }
        .buttom-right{
            width: 49.5%;
            float: right;
            img{
                width: 100%;
                vertical-align: middle;
            }
        }
    } 
</style>