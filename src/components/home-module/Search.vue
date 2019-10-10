<template>
    <div  class="search">
        <div class="search-top">
            <span class="iconfont icon-xiangzuo2 my-icon" @click="brea()"></span>
            <input type="search" placeholder="搜索商品名称" class="searchs">
            <span class="iconfont icon-icon-- my-icon"></span>
        </div>
        <div class="search-middle">
            <p class="title">热门搜索</p>
            <img src="../../assets/home-image/search-img.jpg" alt="">
            <nav>
                <ul class="search-list ">
                    <li v-for="(item, index) in search_list" :key="index" :class="{blue:item.color=='blue',green:item.color=='green',red:item.color=='red',yellow:item.color=='yellow'}">
                        {{item.title}}
                    </li>
                </ul>
            </nav>
            <p class="title">常用分类</p>
            <nav>
                <ul class="search1-list ">
                    <li v-for="(item, index) in search1_list" :key="index" :class="{blue:item.color=='blue',green:item.color=='green',red:item.color=='red',yellow:item.color=='yellow'}">
                        {{item.title}}
                    </li>
                </ul>
            </nav>
        </div>
    </div>
</template>

<script>
    export default {
        name:"search",
        data(){
            return{
                search_list:[],
                search1_list:[]
            }
        },
        methods: {
           brea(){
               this.$router.replace('/home');
           }
        },
        mounted(){
            this.$http.get("./data/index.json",{})
            .then((res)=>{
                this.search_list=res.data.search_list;
                this.search1_list=res.data.search1_list;
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
    .search-middle{
        .search1-list{
            box-sizing: border-box;
            padding: 5px 6px;
            overflow: hidden;
            li{
                padding: 5px 10px;
                float: left;
                box-sizing: border-box;
                background: #f5f5f5;
                color: #707070;
                margin: 5px;
            }
        }
        .title{
            height: 40px;
            width: 100%;
            line-height: 40px;
            color: #5c5c5c;
            box-sizing: border-box;
            padding: 0px 20px;
        }
        img{
            width: 100%;
        }
        .search-list{
            width: 100%;
            box-sizing: border-box;
            padding: 5px 10px;
            overflow: hidden;
            li{
                float: left;
                text-align: center;
                background: #e4f5e2;
                border: 1px solid #97c28a;
                font-size: 12px;
                padding: 3px 9px;
                margin: 4px;  
            }
            .green{
                background: #e4f5e2;
                border: 1px solid #97c28a;
            }
            .red{
                background: #f9eaea;
                border: 1px solid #fca0a7;
            }
            .blue{
                background: #e8f6f6;
                border: 1px solid #8cdade;
            }
            .yellow{
                background: #f8f2ec;
                border: 1px solid #fac288;
            }

         
        }
    }
    .search-top{
        display: flex;
        width: 100%;
        height: 40px;
        text-align: center;
        align-content: center;
        background: #f2f2f2;
        box-sizing: border-box;
        padding: 10px 0;
        .searchs{
            width: 70%;
            height: 24px;
            line-height: 40px;
            background: #fff;
            margin-bottom: 0px;
        }
        .my-icon{
            width: 15%;
            font-size: 20px;
            color: #979797;
        }
    }

</style>