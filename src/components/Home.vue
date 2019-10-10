<template>
    <div id="home">
        <vheader @sends="parent_msg"></vheader>
        <component :is="msg"></component>
         <tabber></tabber>
    </div>
</template>

<script>
    import vheader from './module/Header.vue'
    import recommend from './home-module/Recommend.vue'
    import telephone from './home-module/Telephone.vue'
    import tabber from '../components/module/Tabber.vue'
    export default {
        name:"home",
        data(){
            return{
                msg:""
            }
        },
        methods: {
            parent_msg(n){
                this.msg=n;
            }
        },
       components:{
           vheader,
           recommend,
           telephone,
           tabber
           
       },
    }
</script>

<style lang="scss" scoped>
</style>