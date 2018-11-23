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
### 文章详细内容 ###
    1.从url栏中用this.$route.params获取到当前id,根据id获取到当前的数据
    2.通过小胡子语法来渲染页面
    3.修改页面样式
###文章评论展示
    1在当前组件中创建字组件common.vue,将父组件的id通过属性绑定传递给子组件,在子组件中通过props数组来获取父组件传过来的id.
    2.在使用接口的时候将接收到id和pageIndex传过去获取到相应的数据。
    3.用concat字符串方法将拿到的结果进行拼接。将新数据添加到老数据中并且不会覆盖。
    4.将拿到的数据通过页面渲染到页面。

###文章评论加载更多
    1.给加载更多按钮绑定点击事件
    2.让pageIndex++
    3.重新调用评论展示方法getCommon()来刷新页面

###文章评论添加
    1.将输入框进行数据绑定。判断输入框中的内容是否为空。如果为空弹出提示并且返回
    2.给点击按钮添加点击事件addCommon
    3.在main.js中配置传统的表单格式
      Vue.http.options.emulateJSON = true
    4.调用接口
       this.$http.post('api/postcomment/'+this.id,{content:this.content}).then({})，如果返回的结果res.body.status==0。为了在添加数据后页面不会混乱有一下两种方法
            法一：创建一个对象，将添加的数据放入对象中。通过unshift将对象追加到commonList中
            法二：将pageIndex指定为1，让其显示第一页。清空commonList的内容和msg的内容。重新调用评论展示的方法

##图片分享
    