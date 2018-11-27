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

                    item.count += parseInt(goodsinfo.count)


                    flag = true
                    return true
                }
            })
            if (!flag) {
                state.car.push(goodsinfo)
            }
        }
    },

    getters: {
        getAllCount(state) {
            let c = 0
            state.car.forEach(item => {
                c += item.count
            })
            return c
        }
    }

})
export default store