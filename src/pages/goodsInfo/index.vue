<template>
    <div class="goodsInfoContent">
        <div class="mui-card">
				<div class="mui-card-content">
					<!-- <div class="mui-card-content-inner"> -->
						<swiper :bannerList='bannerList' :isfull="false"></swiper>
					<!-- </div> -->
				</div>
		</div>
        <div class="mui-card">
				<div class="mui-card-header mui-card-media">
					<span class="productName">商品名称</span>
				</div>
				<div class="mui-card-content">
				市场价&nbsp;&nbsp;<del>¥2499</del>&nbsp;&nbsp;销售价：<span class="newPrice">¥2195</span>
                	<div class="num">购买数量：
                        <div class="mui-numbox" data-numbox-min="1" data-numbox-max="9">
                            <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                            <input id="test" class="mui-input-numbox" type="number" value="5">
                            <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                        </div> 
                    </div> 
                <div class="btn">
                    <mt-button type="primary" size='small'>立即购买</mt-button>
                    <mt-button type="danger" size='small'>加入购物车</mt-button>
                </div>
				</div>
				<div class="mui-card-footer">
                    <div class="productNum">
                        商品参数
                    </div>
                    <p>商品货号:{{productNumList.goods_no}}</p>
                    <div>库存情况:{{productNumList.stock_quantity}}</div>
                    <div>上架时间:{{productNumList.add_time|dataFormate}}</div> 
				</div>
			</div>
    </div>
</template>

<script>
import swiper from '../../components/swipe.vue'
export default {
    data(){
        return {
            bannerList:[
                {id:1,img:'https://img10.360buyimg.com/n7/jfs/t20569/241/521943946/338336/409b289f/5b0fcb56N90ae22f0.jpg',url:'eeee'},
                 {id:2,img:'https://img14.360buyimg.com/n7/jfs/t13441/73/1250191369/239632/8b94bbc6/5a1d1e2dN6ba9aac4.jpg',url:'eeee'}
                ],
            id:this.$route.params.id,
            productNumList:{}
        }
    },
    created(){
        this.getBanner()
        this.getProductNum()
    },
    methods:{
        getBanner(){
            this.$http.get('api/getthumimages/'+this.id).then(res=>{
                if(res.body.status==0){
                    // this.bannerList = res.body.message[0]
                    // console.log(res.body.message)
                }
            })
        },
        //获取商品参数
        getProductNum(){
            this.$http.get('api/goods/getinfo/'+this.id).then(result=>{
                if(result.body.status==0){
                    this.productNumList = result.body.message[0]
                    console.log(this.productNumList)
                }
            })
        }

    },
    components:{
        swiper
    }
}
</script>


<style lang='less'>
    .goodsInfoContent{
        .productName {
            font-size: 17px;
            color: black
        }
        .mui-card-content{
            padding:10px;
            font-size: 14px;
            color:gray;
            .newPrice {
                font-size: 14px;
                color:red;
                font-weight: 700;
            }
            .num {
                 margin: 10px 0px;
                display: flex
            }
            .button{
                display: flex;
                margin: 0 15px;
            }
        }
        .mui-card-footer{
            height:200px ;
            .productNum {
                 font-size: 17px;
                 color: black
            }
        }
    }
</style>
