import Vue from 'vue'
import Router from 'vue-router'

//导入组件
import homeConponent from '../pages/home'
import memberConponent from '../pages/member'
import shopcarConponent from '../pages/shopcar'
import searchConponent from '../pages/search'
import newListConponent from '../pages/newList'
import newsInfoComponent from '../pages/newsInfo'
//注册路由
Vue.use(Router)

export default new Router({
    routes: [
        { path: '/', redirect: '/home' },
        { path: '/home', component: homeConponent },
        { path: '/member', component: memberConponent },
        { path: '/shopcar', component: shopcarConponent },
        { path: '/search', component: searchConponent },
        { path: '/home/newList', component: newListConponent },
        { path: '/home/newsInfo/:id', component: newsInfoComponent }
    ],
    //替换当前自动生成的类
    linkActiveClass: 'mui-active'

})