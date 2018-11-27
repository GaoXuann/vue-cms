<template>
    <div class="goodsInfoContent">
        <div class="mui-card">
			<div class="mui-card-content">
				<swiper :bannerList='bannerList' :isfull="false"></swiper>
			</div>
		</div>
        <div class="mui-card">
				<div class="mui-card-header mui-card-media">
					<span class="productName">商品名称</span>
				</div>
				<div class="mui-card-content">
				市场价&nbsp;&nbsp;<del>¥2499</del>&nbsp;&nbsp;销售价：<span class="newPrice">¥2195</span>
                	<div class="num">购买数量：
                        <div class="numbox">
                            <button class="desc" type="button" @click=' msg==1 ?msg=1:msg--'>-</button>
                            <input id="test" class="input-numbox" type="number"  v-model="msg">
                            <button class="increase" type="button" @click="increase">+</button>
                        </div> 
                    </div> 
                    <div class="btn">
                        <mt-button type="primary" size='small'>立即购买</mt-button>
                        <mt-button type="danger" size='small' @click="addCar">加入购物车</mt-button>
                    </div>
			    </div>
        </div>
                
        <!-- 商品参数区域 -->
        <div class="mui-card">
            <div class="mui-card-header">商品参数</div>
            <div class="mui-card-content">
                <p>商品货号：{{ productNumList.goods_no }}</p>
                <p>库存情况：{{ productNumList.stock_quantity }}件</p>
                <p>上架时间：{{ productNumList.add_time | dataFormate }}</p>
            </div>
            <div class="mui-card-footer">
                <mt-button type="primary" size="large" plain @click="goDesc(id)">图文介绍</mt-button>
                <mt-button type="danger" size="large" plain @click="goComment(id)">商品评论</mt-button>
            </div>
        </div>
        <transition name='ball' @beforeEnter='beforeEnter' @enter='enter' @after-enter='afterEnter'>
             <div class="ball" v-show="flag"  ref="ball"></div>
        </transition>
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
            productNumList:{},
            msg:1,
            flag:false
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
        },
        addCar(){
            this.flag=!this.flag
            var goodsinfo = {
                id:this.id,
                count:this.msg,
                price:this.productNumList.sell_price,
                Select:true
            }
             this.$store.commit("addToCar", goodsinfo)
        },
        increase(){
            if(this.msg>=this.productNumList.stock_quantity){
                this.msg=this.productNumList.stock_quantity
               
            }else{
                this.msg++
            }
        },
        beforeEnter(el){
            el.style.transform = 'translate(0,0)'
        },
        enter(el,done){
            el.offsetWidth
            //小球在可视区域中的位置
            const ballPosition=this.$refs.ball.getBoundingClientRect()
            //获取车在可视区域的位置
            const shopCarPosition =document.getElementById('badge').getBoundingClientRect()
            // console.log(ballPosition+'-------'+shopCarPosition)
            //在水平方向应该移动的距离
           const xDist = shopCarPosition.left - ballPosition.left
           const yDist = shopCarPosition.top - ballPosition.top
            el.style.transform=`translate(${xDist}px,${yDist}px)`

            el.style.transition='all 0.2s ease'

            done()
        },
        afterEnter(el){
            this.flag=!this.flag
        },
        goDesc(id){
            this.$router.push({name:'descript',params:{id}})
        },
        goComment(id){
            this.$router.push({name:'goodsCommon',parmas:{id}})
        }

    },
    components:{
        swiper
    }
}
</script>


<style lang='less'>
    .goodsInfoContent{
        position: relative;
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
            .btn{
                button{
                margin-right: 15px;
            }
            }
            .numbox {
                width: 120px;
                height: 33px;
                display:flex;
                border: 1px solid #ccc;
            }
            .desc{
                border: none;
            }
            .input-numbox{
                height: 30px;
                border: none;
                padding: 0;
                margin: 0;
                border-right: 1px solid #ccc;
                border-left:1px solid #ccc;
                text-align: center;
            }
            .increase{
                border: none
            }
        }
        .mui-card-footer{
              display: block;
            button{
                width: 100%;
                 margin: 15px 0;
            }
        }
        .ball {
            position: absolute;
            width: 15px;
            height: 15px;
            background-color: red;
            top: 345px;
            left: 143px;
            z-index: 99;
            border-radius: 50%;

        }
    }
</style>
