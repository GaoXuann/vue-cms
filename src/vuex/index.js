import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var car = JSON.parse(localStorage.getItem('car')) || []
var store = new Vuex.Store({
    state: {
        car: car
    },
    mutations: {
        addToCar(state, goodsinfo) {
            //假设在car中没有找到相应的数据
            var flag = false
            state.car.some(item => {
                //在car中找到同样的商品
                if (item.id == goodsinfo.id) {
                    item.count += parseInt(goodsinfo.count)
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.car.push(goodsinfo)
            }
            localStorage.setItem('car', JSON.stringify(state.car))
        },
        //修改购物车商品的数量
        // getUpdata(state, goodsinfo) {
        //     state.car.some(item => {
        //             if (item.id = goodsinfo.id) {
        //                 item.count = goodsinfo.count
        //                 return true
        //             }
        //         })
        //         //同步本地数据
        //     localStorage.setItem('car', JSON.stringify(state.car))
        // }

    },
    getters: {
        getAllCount(state) {
            let c = 0
            state.car.forEach(item => {
                c += item.count
            })
            return c
        },
        getCountList(state) {
            let obj = {}
            state.car.forEach(item => {
                obj[item.id] = item.count
            })
            return obj
        }

    }
})
export default store