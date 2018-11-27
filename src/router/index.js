import Vue from 'vue'
import Router from 'vue-router'

//导入组件
import homeConponent from '../pages/home'
import memberConponent from '../pages/member'
import shopcarConponent from '../pages/shopcar'
import searchConponent from '../pages/search'
import newListConponent from '../pages/newList'
import newsInfoComponent from '../pages/newsInfo'
import photoShareComponent from '../pages/photoShare/photoList.vue'
import photoInfoComponent from '../pages/photoShare/photoInfo.vue'
import goodsListComponent from '../pages/goodsList'
import goodsInfoComponent from '../pages/goodsInfo'
import goodsDescriptComponent from '../pages/description'
import goodsCommonConponent from '../pages/goodsCommon'
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
        { path: '/home/newsInfo/:id', component: newsInfoComponent },
        { path: '/home/photoShare', component: photoShareComponent },
        { path: '/home/photoInfo/:id', component: photoInfoComponent },
        { path: '/home/goodsList/', component: goodsListComponent },
        { path: '/home/goodsInfo/:id', component: goodsInfoComponent, name: 'goodsInfo' },
        { path: '/home/description/:id', component: goodsDescriptComponent, name: 'descript' },
        { path: '/home/goodsCommon/:id', component: goodsCommonConponent, name: 'goodsCommon' },
    ],
    //替换当前自动生成的类
    linkActiveClass: 'mui-active'

})