import { Promise } from 'core-js'
import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    paymentsList: [],
    categoryList: [],
  },
  mutations: {
    setPaymentsListData (state, payload) {
      state.paymentsList = payload
    },

    addDataToPaymentsList (state, payload) {
      state.paymentsList.push(payload)
    },

    setCategories (state, payload) {
      if(!Array.isArray(payload)) {
        payload = [payload]
      }
      state.categoryList = payload
    }
  },
  getters: {
    getPaymentsList: state => state.paymentsList,
    getFullPaymentValue: state => {
      return state.paymentsList.reduce((acc, cur) => acc + Number(cur.value), 0)
    }, 
    getCategorylist: state => state.categoryList
  },
  actions: {
    fetchData({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          const items = []
                for (let i = 1; i < 105; i++) {
                items.push({
                  date: '13.05.2021',
                  category: 'Education',
                  value: i
                })
                }
                resolve(items)
            }, 2000)
        //   resolve([
        // {
        //   date: "23.12.2020",
        //   category: "Food",
				// },
        // {
        //   date: "12.09.2018",
        //   category: "Housing",
        //   value: 12,
        // },
        // {
        //   date: "23.12.2020",
        //   category: "Food",
        //   value: 13,
        // },
        // {
        //   date: "03.04.2020",
        //   category: "Food",
        //   value: 1,
        // },
        // {
        //   date: "23.12.2020",
        //   category: "Clothing",
        //   value: 43,
        // },
        //   ])
        // },1000)
      }).then(res => {
        commit('setPaymentsListData', res)
      })
    },

    loadCategories({ commit }){
      return new Promise((resolve) => {
        setTimeout(()=>{
          resolve(['Food', 'Transport', 'Clothing', 'Edication', 'Mobile', 'Sport', 'Zkh'])
        }, 1000)
      }).then(res=> {
        commit('setCategories', res)
      })
    }
  }
})