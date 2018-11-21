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
import VueRouter from 'vue-router'
Vue.use(VueRouter)

// 设置请求的根路径
Vue.http.options.root = 'http://www.lovegf.cn:8899/';


Vue.config.productionTip = false

//按需引入
//头部，轮播图
import { Header, Swipe, SwipeItem, Button } from 'mint-ui';

Vue.component(Header.name, Header);
Vue.component(Swipe.name, Swipe);
Vue.component(SwipeItem.name, SwipeItem);
Vue.component(Button.name, Button);

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

new Vue({
    el: '#app',
    render: c => c(app),
    router
})