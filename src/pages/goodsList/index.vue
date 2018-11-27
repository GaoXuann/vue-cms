<template>
    <div id="goodsListContent">
        <li v-for="item in goodsList" :key='item.id' class="goodsItem" @click="detial(item.id)">
           <img src="https://img10.360buyimg.com/n7/jfs/t24934/126/1102620868/432389/ea09eed9/5b8a5c38N64121d0b.png" alt="">
           <h3 class="title">{{item.title}}</h3>
           <div class="price">
               <span class="newPrice">￥{{item.sell_price}}</span>
                <span class="oldProce">￥{{item.market_price}}</span>
                <div class="hot">
                    <pre>热卖中</pre>
                    <pre>剩余:{{item.stock_quantity}}</pre>
                </div>
           </div>
        </li>
    </div>
</template>
<script>
export default {
    data(){
        return { 
            goodsList:[],
            pageindex:1
        }
    },
    created(){
        // console.log(222);
        this.getGoodsList()
    },
    methods:{
        getGoodsList(){
            this.$http.get('api/getgoods/?pageindex='+this.pageindex).then(res=>{
                // console.log(111);
                if(res.body.status===0){
                    this.goodsList = res.body.message
                    // console.log(this.goodsList)
                }
            })
        },
        detial(id){
            // 编程式导航
            // 1.最简单的
            // this.$router.push('/home/goodsInfo/'+id);
            //2.传递对象的
            // this.$router.push({path:'/home/goodsInfo/'+id})

            //传递命名路由
            this.$router.push({name:'goodsInfo',params:{id}})

        }
    }
}
</script>


<style lang='less'>
    #goodsListContent {
        display: flex;
        flex-wrap: wrap;
        justify-content:space-between;
        padding: 10px;
        .goodsItem{
            width: 49%;
            box-shadow: 0 0 8px #ccc;
            margin-bottom: 10px;
            padding: 5px;
            flex-direction: column;
            display: flex;
            justify-content: space-between;
            img{
               width: 100%;
            }
            .title {
                font-size: 14px;
                font-weight: 700;
            }
            .price{
                background-color: #eee;
                padding-top: 10px;
                .newPrice{
                    color: red;
                    font-size: 16px;
                }
                .oldProce{
                    color: gray;
                    text-decoration: line-through;
                    font-size: 13px;
                    margin-left: 12px;
                }
                .hot{
                    color: gray;
                    font-size: 13px;
                    display: flex;
                    justify-content:space-between;
                }

            }
        }
    }
</style>

