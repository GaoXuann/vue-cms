<template>
    <div class="commonContent">
        <h1>发表评论</h1>
        <hr>
        <textarea placeholder="请输入要bb的内容，最多不超过120字"></textarea>
        <mt-button type="primary" size="large"  >添加评论</mt-button>
        <div class="allCommon">
            <div class="commonItem" v-for="(value,i) in commonList" :key='value.add_time'>
                <span class="floor">第{{i+1}}楼&nbsp;&nbsp;用户：{{value.user_name}}&nbsp;&nbsp;{{value.add_time|dataFormate}}</span>
                <span class='container'>{{value.content}}</span>
            </div>
        </div>
        <mt-button type="danger" size="large" plain>加载更多</mt-button>
    </div>
</template>


<script>
export default {
    data(){
        return {
            commonList :[],
            pageIndex:1
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
                    this.commonList = res.body.message;
                    console.log(this.commonList)
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
