<template>
    <div id="homeContent">
        <!-- 轮播图 -->
        <div class="banner">
            <mt-swipe :auto="2000">
            <mt-swipe-item v-for="(value ,i) in bannerList" :key='i'>
                <a :href="value.url">
                    <img :src="value.img" alt="">
                </a>
            </mt-swipe-item>
            </mt-swipe>
        </div>
        <!-- 网格导航 -->
        <div class="mui-content">
		        <ul class="mui-table-view mui-grid-view mui-grid-9">
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
                        <router-link to="/home/newList">
                             <img src="../../assets/images/menu1.png" alt="">
                            <div class="mui-media-body">新闻资讯</div>
                        </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3">
		               <router-link to="/home/photoShare">
                            <img src="../../assets/images/menu2.png" alt="">
                            <div class="mui-media-body">图片分享</div>
		               </router-link>
                    </li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                 <img src="../../assets/images/menu3.png" alt="">
		                <div class="mui-media-body">商品购买</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
                        <img src="../../assets/images/menu4.png" alt="">
		                <div class="mui-media-body">留言反馈</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                 <img src="../../assets/images/menu5.png" alt="">
		                 <div class="mui-media-body">视频专区</div></a></li>
		            <li class="mui-table-view-cell mui-media mui-col-xs-4 mui-col-sm-3"><a href="#">
		                 <img src="../../assets/images/menu6.png" alt="">
		                 <div class="mui-media-body">联系我们</div></a></li>
		        </ul> 
		</div>
    </div>
</template>

<script>
import { Toast } from "mint-ui";
    export default {
        data(){
            return {
                bannerList:[]
            }
        },
        created() {
            this.getBannerData()
        },
        methods:{
            //获取轮播图块的数据
            getBannerData(){
                this.$http.get("api/getlunbo").then(result=>{
                    if(result.body.status===0){
                        this.bannerList = result.body.message
                        console.log(result.body.message)
                    }else{
                         Toast("获取轮播图数据失败!请重试!");
                    }
                })
            }
        }
    }
</script>

<style lang = 'less'>
    #homeContent {
        .banner{
            height: 180px;
            img{
                width: 100%;
            }  
        }       
       .mui-grid-view {
           margin-top: 0;
            background-color: #fff;
            border: none;
            .mui-table-view-cell {
            border: none;
            img {
                width: 60px;
                height: 60px;
            }
            .mui-media-body {
                font-size: 13px;
            }
         }
  }
    }
</style>


