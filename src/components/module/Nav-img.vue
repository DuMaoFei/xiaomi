<template>
    <div id="nav-img">
        <ul class="list-img">
            <li v-for="(item, index) in list_nav" :key="index" >
                <router-link :to="'/'+item.url"> <img :src="item.src" alt=""></router-link>
            </li>
        </ul>
    </div>
</template>

<script>
    export default {
        name:"nav-img",
        data(){
            return{
                list_nav:[]
               
            }
        },
        mounted(){
            this.$http.get("./data/index.json",{})
            .then(res=>{
                this.list_nav=res.data.list_nav
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
    .list-img{
        width: 100%;
        overflow: hidden;
        li{
            width: 20%;
            float: left;
            img{
                width: 100%;
            }
        }
    }
</style>