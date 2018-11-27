import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

var store = new Vuex.Store({
    state: {
        car: []
    },
    mutations: {
        addToCar(state, goodsinfo) {
            //假设在car中没有找到相应的数据
            var flag = false
            state.car.some(item => {
                //在car中找到同样的商品
                if (item.id == goodsinfo.id) {
                    item.num += parseInt(goodsinfo.num)
                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.car.push(goodsinfo)
            }
        }
    },
    getters: {}
})
export default store