<template>

    <div class="newListContent">
        <ul class="mui-table-view">
                <li v-for="item in newList" :key='item.id' class="mui-table-view-cell mui-media">
                      <router-link :to="'/home/newsInfo/'+item.id">
                        <a href="javascript:;">
                            <img class="mui-media-object mui-pull-left" :src="item.img_url">
                            <div class="mui-media-body">
                                <p class="mui-ellipsis title">{{item.title}}</p>
                                <p id="subtitle">
                                    <span>发表时间：{{item.add_time | dataFormate}}</span>
                                    <span>点击：{{item.click}}次</span>
                                </p>
                            </div>
                        </a>
                    </router-link>
				</li>
		</ul>
    </div>
</template>


<script>
import {Toast} from 'mint-ui'
export default {
    data(){
        return {
            newList:[]
        }
    },
    created(){
         this.getnewList()
    },
    methods:{
      getnewList(){
          this.$http.get("api/getnewslist").then(result=>{
              if(result.body.status===0) {
                  this.newList = result.body.message
                  console.log (result.body.message)
              }else{
                  Toast('获取新闻列表数据失败')
              }
          })
        }
    }
}
</script>

<style lang='less'>
    .newListContent {
        padding-bottom: 50px;
        .mui-table-view {
            .mui-media-body {
                .title{
                    font-weight: 600;
                    color:black;
                    font-size: 14px;
                }
                #subtitle{
                    color:#26a2ff;
                    display: flex;
                    font-size: 12px;
                    justify-content: space-between
                }
            }
        }
    }
</style>

