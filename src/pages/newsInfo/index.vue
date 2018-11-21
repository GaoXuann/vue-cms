<template>
    <div class="newsInfoContent">
        <div class="title">
            {{infoList.title}}
        </div>
        <div id="subtitle">
            <p>
                <span>发表时间:{{infoList.add_time | dataFormate}}</span>
                <span>点击:{{infoList.click}}次</span>
            </p>
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
            id:this.$route.params.id,
            infoList:[]
           
        }
    },
     created(){
         this.getnewsInfo()
     },
    methods:{
        getnewsInfo(){
            // console.log(this.id)
            this.$http.get('api/getnew/'+this.id).then(result=>{
                if(result.body.status===0){
                    this.infoList = result.body.message[0]
                    console.log(this.infoList);
                }
            })
        }
    },
    components: {
        common
    }
}
</script>



<style lang = 'less'>
    .newsInfoContent {
        padding: 10px 5px;
        padding-bottom: 50px;
        .title {
            color: red;
            font-weight: 700;
            font-size: 16px;
            text-align: center;
        }
        #subtitle {
            p {
                color: #26a2f2;
            display: flex;
            justify-content: space-between;
            font-size: 14px;
            }
        }
    }
</style>
