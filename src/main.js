// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import app from './App'

// 导入vue-resource
import VueResource from 'vue-resource'
// 注册vue-resource
Vue.use(VueResource)

//导入路由模块
import router from './router'
// import VueRouter from 'vue-router'
// Vue.use(VueRouter)

//导入vuex
import store from './vuex'
// import Vue from 'vue'
// import Vuex from 'vuex'
// Vue.use(Vuex)

// var store = new Vuex.Store({
//     state: {
//         car: []
//     },
//     mutations: {
//         addToCar(state, goodsinfo) {
//             //假设在car中没有找到相应的数据
//             var flag = false
//             state.car.some(item => {
//                 //在car中找到同样的商品
//                 if (item.id == goodsinfo.id) {
//                     item.num += parseInt(goodsinfo.num)
//                     flag = true
//                     return true
//                 }
//             })
//             if (!flag) {
//                 state.car.push(goodsinfo)
//             }
//         }
//     },
//     getters: {}
// })

// 设置请求的根路径
Vue.http.options.root = 'http://www.lovegf.cn:8899/';
//配置传统的表单格式
Vue.http.options.emulateJSON = true


Vue.config.productionTip = false

//按需引入
//头部，轮播图
// import { Header, Swipe, SwipeItem, Button } from 'mint-ui';

// Vue.component(Header.name, Header);
// Vue.component(Swipe.name, Swipe);
// Vue.component(SwipeItem.name, SwipeItem);
// Vue.component(Button.name, Button);
//全部引入
import MintUI from 'mint-ui'
Vue.use(MintUI)
import 'mint-ui/lib/style.css'

//导入mui的样式
import '../lib/mui/css/mui.css'
import '../lib/mui/css/icons-extra.css'

//引入公共样式
import './css/common.less'

//引入格式化时间的插件
import moment from 'moment'
//过滤器
//dataFormat过滤器名称   datastr需要过滤的时间   pattern指定要过滤成的时间格式
//pattern = pattern || 'YYYY-MM-DD'用的es6的简写
Vue.filter('dataFormate', function(dataStr, pattern = 'YYYY-MM-DD HH:mm:ss') {
    return moment(dataStr).format(pattern)

})


//做缩略图的插件
import VuePreview from 'vue2-preview'
Vue.use(VuePreview)

new Vue({
    el: '#app',
    render: c => c(app),
    router,
    store
})