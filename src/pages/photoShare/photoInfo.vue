<template>
    <div class="photoInfoContent">
        <div class="title">
            {{infoList.title}}
        </div>
        <div class="subtitle">
            <span>发表时间：{{infoList.add_time|dataFormate}}</span>
            <span>点击:{{infoList.click}}</span>
        </div>
         <div class="thumbs">
              <img class="preview-img" v-for="(item, index) in imgList" :key='item.src' :src="item.src" height="100" @click="$preview.open(index, imgList)">
         </div>
        <hr>
        <div class="content" v-html="infoList.content">  
        </div>
        <common :id="this.id"></common>


    </div>
</template>

<script>

import common from '../../components/common.vue'
export default {
    data(){
        return {
            infoList:[],
            id:this.$route.params.id,
            imgList:[
                {src:'https://ss0.bdstatic.com/94oJfD_bAAcT8t7mm9GUKT-xh_/timg?image&quality=100&size=b4000_4000&sec=1542959622&di=fe9b919db8b3c63e2c6796446759a65f&src=http://03imgmini.eastday.com/mobile/20181021/20181021065710_1e4cf27fec07f88696aa925975a115df_1.jpeg',
                 w:600,
                 h:400
                },
                {
                    src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542969709022&di=b328bc7255394d48beae8f2fd151aca5&imgtype=0&src=http%3A%2F%2Fstatic.jstv.com%2Fgather%2Fhl%2F20170829%2F36%2F13403808876398672744.png',
                    w:600,
                    h:400
                },
                  {
                    src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542970306118&di=3e8758faddb37327a16b2b0b528dfc06&imgtype=0&src=http%3A%2F%2Fb-ssl.duitang.com%2Fuploads%2Fitem%2F201708%2F22%2F20170822115905_5YSWr.png',
                    w:600,
                    h:400
                },
                  {
                    src:'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1542970367491&di=0c6e2120a7cff00f7b9024442fd0b260&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20180316%2F35f56310b0264ebbaa34609b2c55e179.jpeg',
                    w:600,
                    h:400
                }
            ]
        }
    },
    created(){
        this.getInfoList()
        // this.getDetailImg()
    },
    methods:{
        //获取缩略图
        getDetailImg(){
            // this.$http.get('api/getthumimages/'+this.id).then(result=>{
            //     if(result.body.status==0){
            //         this.imgList = result.body.message
            //         console.log(this.imgList);
            //     }
            // })

        },
        
        //获取图片详情
        getInfoList(){
            console.log(this.$route.params.id);
            this.$http.get('api/getimageInfo/'+this.id).then(res=>{
                console.log(res);
                if(res.body.status==0){
                    this.infoList = res.body.message[0]
                    console.log(this.infoList);
                }
            })
        },
        // $preview.open(index, list, options)
    },
    components:{
        common
    }

}
</script>

<style lang='less'>
    .photoInfoContent {
         padding: 0 15px;
        .title{
            color:#26a2ff;
            font-weight: 700;
            text-align: center;
            font-size: 15px;
            padding: 15px 0;
        }
        .subtitle{
            color:#999;
            justify-content: space-between;
            display: flex;
            font-size: 14px;
            padding-bottom: 15px;
        }
        .thumbs{
            img{
            // margin: 10px;
            box-shadow: 0 0 8px #999;
            background-color: red;
            width: 25%;
            }
        }
        .content{
            font-size: 14px;
            line-height: 25px;
            padding-bottom: 15px;
        }
    }
</style>
