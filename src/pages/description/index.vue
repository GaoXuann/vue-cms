<template>
    <div class="descContent">
        <div class="title">{{descList.title}}</div>
        <!-- <hr> -->
        <div class="content" v-html="descList.content"></div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            descList:{},
            id:this.$route.params.id
        }
    },
    created(){
        this.getDescList()
    },
    methods:{
        getDescList(id){
            this.$http.get('api/goods/getdesc/'+this.id).then(res=>{
                if(res.body.status===0){
                    this.descList = res.body.message[0]
                    console.log(this.descList);
                }
            })
        }
    }
}
</script>

<style lang='less'>
    .descContent {
        .title {
            color: #26a2ff;
            text-align: center;
            height: 50px;
            line-height: 50px;
            border-bottom: 1px solid #ccc;
            font-size: 15px;
            font-weight: 700;
        }
        .content{
            img{
                width: 100%;
            }
        }
    }
</style>
