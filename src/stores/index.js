import Vue from 'vue'
import Vuex from 'vuex'
import suser from './modules/suser'
import menu from './modules/menu'
import setting from './modules/setting'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    suser,
    menu,
    setting
  }
})
