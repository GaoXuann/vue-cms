<template>
    <div class="shopCarContent">
        <div class="mui-card" v-for="item in carList" :key="item.id">
				<div class="mui-card-content">
					<div class="mui-card-content-inner">
						<div class="card-left">
                           <mt-switch></mt-switch>       
                        </div>
                        <div class="card-center">
                              <img src="https://img10.360buyimg.com/n7/jfs/t20569/241/521943946/338336/409b289f/5b0fcb56N90ae22f0.jpg" alt="">
                             <!-- <img :src="item.thumb_path" alt=""> -->
                        </div>
                        <div class="card-right">
                            <h3>
                                {{item.title}}
                            </h3>
                            <div class="price">
                                <div class="newPrice">
                                    ¥{{item.sell_price}}
                                </div>
                                   <div class="mui-numbox" data-numbox-min='1' style="height:25px;">
                                         <button class="mui-btn mui-btn-numbox-minus" type="button">-</button>
                                         <input id="test" class="mui-input-numbox" type="number" value="2" @change="getCountChange" ref="numbox"  />
                                        <button class="mui-btn mui-btn-numbox-plus" type="button">+</button>
                                    </div>
                                 <div class="href">
                                    <a href="javascript:;">删除</a>
                                </div>
                            </div>
                        </div>
					</div>
				</div>
		</div>
    </div>
</template>

<script>
import mui from '../../../lib/mui/js/mui.js'
    export default {
        data(){
            return {
                carList:[],              
            }
        },
        created(){
            this.getCarShop()
            // console.log('created')
            // this.getCountChange()
        }, 
         mounted(){
        // 初始化数字选择框组件
            mui(".mui-numbox").numbox();
            // console.log('mounted')
         },
        methods:{
            getCarShop(){
                let idArr = [];
                this.$store.state.car.forEach(element => {
                    idArr.push(element.id)
                    // console.log(element.id)
                });
                if(idArr.length == 0){
                    return;
                }
                 
                // let ids =idArr.join(',')
                this.$http.get('api/goods/getshopcarlist/'+idArr.join(',')).then(res=>{
                    // console.log(res.body.status)
                    // console.log(idArr)
                    if(res.body.status==0){  
                        this.carList = res.body.message
                        console.log(this.carList)
                    }
                })
          
            },
              getCountChange(){
            //    console.log (this.$refs.numbox[0].value) 
            //每当改变购物车的值都把最新的数据同步到购物车的store中，覆盖之前的值
            this.$store.commit('getUpdata',{
                id:this.carList.id,
                count:this.$refs.numbox[0].value
            })
            }
        }
    }
</script>

<style lang = 'less'>
    .shopCarContent {
        .mui-card-content-inner{
            display: flex;
            .card-left{
                display: flex;
               
                
        }
        .card-center {
             flex-direction: column;
             justify-content: center;
             margin-right: 10px;
            img{
                    width: 50px;
                    height: 55px;
                    /* margin: 0 15px; */
                }
            }
        .card-right{
            h3{
                font-weight: 700;
            }
            .price {
                display: flex;
                margin-top: 10px;
                  .newPrice {
                    color: red;
                    font-weight: 700;
                    margin-right: 10px;
                    }
                    .href{
                        margin-left: 10px;
                    }
                 }
            }
        }
        
    }
</style>
