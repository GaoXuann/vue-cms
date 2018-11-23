<template>
    <div class="photoShareContent">
      	<div id="slider" class="mui-slider ">
				<div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
					<div class="mui-scroll">
						<a :class="['mui-control-item', value.id == 0 ? 'mui-active' : '']"  @click='getImages(value.id)' v-for ="value in categoryList" :key='value.id' class="mui-control-item " href="#item1mobile" data-wid="tab-top-subpage-1.html">
							{{value.title}}
						</a>
					</div>
				</div>
		</div>
        <ul class="photo-list">
            <li  v-for="item in imageList" :key="item.id">
                <router-link :to="'/home/photoInfo/'+item.id">
                    <img v-lazy="item.img_url">
                    <div class="info">
                        <h1 class="info-title">{{ item.title }}</h1>
                        <div class="info-body">{{ item.zhaiyao }}</div>
                    </div>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
import mui from "../../../lib/mui/js/mui.min.js"
import {Toast} from 'mint-ui' 
  
export default {
    data(){
        return {
            categoryList:[],
            imageList:[]
        }
    },
    methods:{
        getCategroy(){
            this.$http.get('api/getimgcategory').then(res=>{
                if(res.body.status ===0){
                    res.body.message.unshift({id:0,title:'全部分类'})
                    this.categoryList = res.body.message
                    console.log(this.categoryList)
                }
            })
        },
        getImages(catId){
            this.$http.get('api/getimages/'+catId).then(res=>{
                if(res.body.status===0){
                    this.imageList = res.body.message
                    console.log(this.imageList)
                }
            })
        }
    },
    created(){
        this.getCategroy()
        this.getImages(0)
    },
    mounted(){
        // console.log('zhixingle')
        mui('.mui-scroll-wrapper').scroll({
	    deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
});
    }
}
</script>

<style lang="less" scoped>
* {
  touch-action: pan-y;
}
.photoShareContent {
    // padding-bottom: 50px;
    .photo-list {
        list-style: none;
        margin: 0;
        padding: 10px;
        padding-bottom: 0;
        li {
            background-color: #ccc;
            text-align: center;
            margin-bottom: 10px;
            box-shadow: 0 0 9px #999;
            position: relative;
            img {
            width: 100%;
            vertical-align: middle;
            }
            img[lazy="loading"] {
            width: 40px;
            height: 300px;
            margin: auto;
            }

            .info {
            color: white;
            text-align: left;
            position: absolute;
            bottom: 0;
            background-color: rgba(0, 0, 0, 0.4);
            max-height: 80px;
            .info-title {
                font-size: 14px;
            }
            .info-body {
                font-size: 13px;
            }
            }
        }
        }
}


</style>

