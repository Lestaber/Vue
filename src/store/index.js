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
    SET_PAYMENTS_LIST_DATA (state, payload) {
      state.paymentsList = payload
    },
    ADD_DATA_TO_PAYMENTS_LIST (state, payload) {
      state.paymentsList.push(payload)
    },
    SET_CATEGORIES (state, payload) {
      if(!Array.isArray(payload)) {
        payload = [payload]
      }
      state.categoryList = payload
    },
    SET_FULL_PAYMENTS: (state) => {
      let sum = 0;
      state.costs.forEach(el => {
        sum += el.price;
      })
      state.total = sum
    },
  },
  actions: {
    FETCH_DATA({ commit }) {
      return new Promise((resolve) => {
        setTimeout(() => {
          resolve([
            {
              "date": "28.03.2020",
              "category": "Food",
              "value": "169"
            },
            {
              "date": "24.03.2020",
              "category": "Transport",
              "value": "3607"
            },
            {
              "date": "24.03.2020",
              "category": "Sport",
              "value": "532"
            },
            {
              "date": "23.12.2020",
              "category": "Mobile",
              "value": "231"
            },
            {
              "date": "12.09.2018",
              "category": "Housing",
              "value": "324"
            },
            {
              "date": "23.12.2020",
              "category": "Navigation",
              "value": "132"
            },
            {
              "date": "03.04.2020",
              "category": "Edication",
              "value": "156"
            },
            {
              "date": "23.12.2020",
              "category": "Entertainment",
              "value": "430"
            },
            {
              "date": "28.03.2020",
              "category": "Sport",
              "value": "169"
            },
            {
              "date": "24.03.2020",
              "category": "Transport",
              "value": "3607"
            },
            {
              "date": "24.03.2020",
              "category": "Sport",
              "value": "532"
            },
            {
              "date": "23.12.2020",
              "category": "Edication",
              "value": "231"
            },
            {
              "date": "12.09.2018",
              "category": "Housing",
              "value": "324"
            },
            {
              "date": "23.12.2020",
              "category": "Navigation",
              "value": "132"
            },
            {
              "date": "03.04.2020",
              "category": "Edication",
              "value": "156"
            },
            {
              "date": "23.12.2020",
              "category": "Food",
              "value": "430"
            },
            {
              "date": "28.03.2020",
              "category": "Food",
              "value": "169"
            },
            {
              "date": "24.03.2020",
              "category": "Transport",
              "value": "3607"
            },
            {
              "date": "24.03.2020",
              "category": "Sport",
              "value": "532"
            },
            {
              "date": "23.12.2020",
              "category": "Mobile",
              "value": "231"
            },
            {
              "date": "12.09.2018",
              "category": "Housing",
              "value": "324"
            },
            {
              "date": "23.12.2020",
              "category": "Navigation",
              "value": "132"
            },
            {
              "date": "03.04.2020",
              "category": "Edication",
              "value": "156"
            },
            {
              "date": "23.12.2020",
              "category": "Entertainment",
              "value": "430"
            },
            {
              "date": "28.03.2020",
              "category": "Sport",
              "value": "169"
            },
            {
              "date": "24.03.2020",
              "category": "Transport",
              "value": "3607"
            },
            {
              "date": "24.03.2020",
              "category": "Sport",
              "value": "532"
            },
            {
              "date": "23.12.2020",
              "category": "Edication",
              "value": "231"
            },
            {
              "date": "12.09.2018",
              "category": "Housing",
              "value": "324"
            },
            {
              "date": "23.12.2020",
              "category": "Navigation",
              "value": "132"
            },
            {
              "date": "03.04.2020",
              "category": "Edication",
              "value": "156"
            },
            {
              "date": "23.12.2020",
              "category": "Food",
              "value": "430"
            },
            {
              "date": "28.03.2020",
              "category": "Food",
              "value": "169"
            },
            {
              "date": "24.03.2020",
              "category": "Transport",
              "value": "3607"
            },
            {
              "date": "24.03.2020",
              "category": "Sport",
              "value": "532"
            },
            {
              "date": "23.12.2020",
              "category": "Mobile",
              "value": "231"
            },
            {
              "date": "12.09.2018",
              "category": "Housing",
              "value": "324"
            },
            {
              "date": "23.12.2020",
              "category": "Navigation",
              "value": "132"
            },
            {
              "date": "03.04.2020",
              "category": "Edication",
              "value": "156"
            },
            {
              "date": "23.12.2020",
              "category": "Entertainment",
              "value": "430"
            },
            {
              "date": "28.03.2020",
              "category": "Sport",
              "value": "169"
            },
            {
              "date": "03.04.2020",
              "category": "Edication",
              "value": "156"
            },
            {
              "date": "23.12.2020",
              "category": "Food",
              "value": "430"
            }
          ])
        }, 2000)
      }).then(res => {
        commit('SET_PAYMENTS_LIST_DATA', res)
      })
    },
    LOAD_CATEGORIES({ commit }){
      return new Promise((resolve) => {
        setTimeout(()=>{
          resolve(['Food', 'Transport', 'Clothing', 'Navigation', 'Edication', 'Mobile', 'Sport', 'Entertainment'])
        }, 1000)
      }).then(res=> {
        commit('SET_CATEGORIES', res)
      })
    },
    ACTION_NEW_PAYMENT: ({ commit }, paymentsList) => {
      commit("ADD_DATA_TO_PAYMENTS_LIST", paymentsList);
      commit("SET_FULL_PAYMENTS");
    },
  },
  getters: {
    GET_PAYMENTS_LIST: state => state.paymentsList,
    GET_FULL_PAYMENTS_VALUE: state => {
      return state.paymentsList.reduce((acc, cur) => acc + Number(cur.value), 0)
    }, 
    GET_CATEGORY_LIST: state => state.categoryList
  }
})