### 用mint ui编写header
    1.下载npm install babel-plugin-component -D包，配置环境

### 用mui编写底部footer
    1. 找到mui的扩展图标库
    2. 将扩展图标库拷贝到项目中(连带字体文件一起拷贝)
    3. 在main.js中引入字体图标的样式文件
    4. 使用字体图标

### 通过路由实现页面跳转
    1.下载vue-router包
    2.编写路由规则
    3.组件切换动画


## 编写home页面
### 轮播图
    1.使用mint ui里面的轮播图块
    2. 使用vue-resource获取接口中的数据, 用v-for进行渲染
###网格导航
    1.使用mui中的九宫格模块，修改样式
    2.抽取公共的common.less样式，由main.js引入
 
## newsList页面编写
    1.给新闻资源添加路由连接，实现跳转到新闻资讯页面
    2.借助mui中的图文列表块完成页面布局
    3.使用vue-resource获取接口中的数据, 用v-for进行渲染
    4.编写过滤器过滤时间（YYYY-MM-DD HH:mm:ss）
    借助moment框架格式化时间
    Vue.filter(dataFormat,function(dataStr,pattern='YYYY-MM-DD hh:mm:ss'){
        return moment(dataStr).format(pattern)
    })
    5.调整页面样式

