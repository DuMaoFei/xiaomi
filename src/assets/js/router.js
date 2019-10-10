import VueRouter from 'vue-router';
import  home from '../../components/Home.vue';
import  classify from '../../components/Classify.vue';
import  shopping from '../../components/Shopping.vue';
import  my from '../../components/My.vue';
import  search from '../../components/home-module/Search.vue';
import des from '../../components/home-module/Des.vue';
import register from "../../components/home-module/register.vue"
import login from "../../components/home-module/login.vue"

export default new VueRouter({
    routes:[
        {
            path:'/home',component:home
        },
        {
            path:'/classify',component:classify
        },
        {
            path:'/shopping',component:shopping
        },
        {
            path:'/my',component:my
        },
        {
            path:'/search',component:search
        },
        {
            path:'/des/:id',component:des
        },
        {
            path:'/register',component:register
        },
        {
            path:'/login',component:login
        },
        // {
        //     path:'/issue',component:my
        // },
        {
            path:'/*',redirect:'/home'
        }
    ]
});