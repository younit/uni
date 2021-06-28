import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { // 驱动应用的数据源
    HomeNavs: [ //  首页导航
      {
         id: 1,
         name: `红酒文化`,
         pic: 'http://mziu.club/w1.jpg',
         path: ``,
      },
      {
         id: 2,
         name: `葡萄品种`,
         pic: `http://mziu.club/w2.jpg`,
         path: ``,
      },
      {
         id: 3,
         name: `问答`,
         pic: `http://mziu.club/w3.jpg`,
         path: ``,
      },
      {
         id: 4,
         name: `产区`,
         pic: `http://mziu.club/w4.jpg`,
         path: ``,
      },
      {
         id: 5,
         name: `测试区`,
         pic: `http://mziu.club/w5.jpg`,
         path: ``,
      },
    ],
    
    paras: [ //  首页锚点导航
      {
        title: '新品上线',
        path: "hello"
      },
      {
        title: '猜你喜欢',
        path: "hello"
      },
    ],
    
  },
  getters: {
    ls_home_navs: (state) => {
      return state.HomeNavs
    },
    
    ls_paras: (state) => {
      return state.paras
    },
  },
  mutations: {
    
  },
  actions: {
    
  },
  modules: {
    
  }
})