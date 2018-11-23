<template>
    <div class="commonContent">
        <h1>发表评论</h1>
        <hr>
        <textarea placeholder="请输入要bb的内容，最多不超过120字" v-model="content"></textarea>
        <mt-button type="primary" size="large"  @click = 'addCommon'>添加评论</mt-button>
        <div class="allCommon">
            <div class="commonItem" v-for="(value,i) in commonList" :key='i'>
                <span class="floor">第{{i+1}}楼&nbsp;&nbsp;用户：{{value.user_name}}&nbsp;&nbsp;{{value.add_time|dataFormate}}</span>
                <span class='container'>{{value.content =='undefined' ?'此人有点懒':value.content}}</span>
            </div>
        </div>
        <mt-button type="danger" size="large" plain @click = 'loadMore'>加载更多</mt-button>
    </div>
</template>


<script>
import {Toast} from 'mint-ui'

export default {
    data(){
        return {
            commonList :[],
            pageIndex:1,
            content:''
        }
    },
    props:['id'],
    created(){
        this.getCommon()
    },
    methods:{
        getCommon(){
            this.$http.get('api/getcomments/'+this.id+'?pageindex='+this.pageIndex).then(res=>{
                if(res.body.status===0){
                    //concat连接数组，会向老数组中添加并且不会覆盖
                    this.commonList = this.commonList.concat( res.body.message)
                    console.log(this.commonList)
                }
            })
        },
        loadMore(){
            this.pageIndex++;
            this.getCommon()
        },
        addCommon(){
            if(this.content.trim().length ==0){
               return Toast('评论内容不为空')
            }
            this.$http.post('api/postcomment/'+this.id,{content:this.content}).then(res=>{
                if(res.body.status===0){
                     Toast(res.body.message)
                    // 将添加额数据写成对象的形式添加到数组的最上面。防止页面刷新
                    var cmt = {
                        user_name :'匿名用户',
                        add_time: Date.now(),
                        content : this.content
                    }
                    this.commonList.unshift(cmt)

                    //刷新评论内容，注意：如果当前在第三页会造成数据错乱
                    //刷新评论时将当前的pageindex转为1
                    // this.pageIndex = 1
                    // this.commonList = [] 
                    // this.content = ''
                    // this.getCommon()
                   
                }else{
                    Toast('评论失败')
                }
            })
    
        }
    }
}
</script>


<style lang='less'>
    .commonContent {
        h1{
            font-weight: 700;
        }
        textarea {
            height: 70px;
            font-size: 13px;
            padding:15px;
        }
        .allCommon {
            margin-top: 10px;
            .commonItem {
                 color: #000;
                 font-size: 13px;
                 span {
                     display: block;
                     width:100%;
                     line-height: 30px;         
            }     
              .floor {
                     background-color: #ccc;
                 }               
                 .container {
                     background-color: #fff;
                 }
            }
        }
    }
</style>
