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

## newsInfo页面编写
### 文章详细内容 
    1.从url栏中用this.$route.params获取到当前id,根据id获取到当前的数据
    2.通过小胡子语法来渲染页面
    3.修改页面样式
### 文章评论展示
    1在当前组件中创建字组件common.vue,将父组件的id通过属性绑定传递给子组件,在子组件中通过props数组来获取父组件传过来的id.
    2.在使用接口的时候将接收到id和pageIndex传过去获取到相应的数据。
    3.用concat字符串方法将拿到的结果进行拼接。将新数据添加到老数据中并且不会覆盖。
    4.将拿到的数据通过页面渲染到页面。

### 文章评论加载更多
    1.给加载更多按钮绑定点击事件
    2.让pageIndex++
    3.重新调用评论展示方法getCommon()来刷新页面

### 文章评论添加
    1.将输入框进行数据绑定。判断输入框中的内容是否为空。如果为空弹出提示并且返回
    2.给点击按钮添加点击事件addCommon
    3.在main.js中配置传统的表单格式
      Vue.http.options.emulateJSON = true
    4.调用接口
       this.$http.post('api/postcomment/'+this.id,{content:this.content}).then({})，如果返回的结果res.body.status==0。为了在添加数据后页面不会混乱有一下两种方法
            法一：创建一个对象，将添加的数据放入对象中。通过unshift将对象追加到commonList中
            法二：将pageIndex指定为1，让其显示第一页。清空commonList的内容和msg的内容。重新调用评论展示的方法

## 图片分享
### 图片分类
    1.制作横向滚动导航条，用mui中的tab-top-webview-main部分制作
        注意事项：
            1.1：把其中的全屏类名删除
            2.2：导入mui.js,在挂载页面的时候进行滚动事件的初始化
                mounted(){
                    mui('.mui-scroll-wrapper').scroll({
                    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
                }
            3.3：手动忽略mui中的js文件，生成的脚手架是按严格模式编写的，而mui.js不符合
                "ignore":['./lib/mui/js/*.js']
            3.4:去除所有高亮，将mui-active类名去掉，获取到分类栏的索引，索引为0的添加           mui-active实现高亮

    2.调用接口，获取到数据，渲染到页面上。
    3.制作懒加载。用的mint-ui中的懒加载。使用时需要全局引用mint-ui不能按需引入
    4.调整样式

### 图片详情
    1.点击图片分类页面的获取到当前的id
    2.在导航栏中用this.$route.parmas.id获取到传过来的id