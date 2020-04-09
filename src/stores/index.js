import Vue from 'vue'
import Vuex from 'vuex'
import suser from './modules/suser'
import menus from './modules/menus'
import setting from './modules/setting'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    suser,
    menus,
    setting
  }
})
