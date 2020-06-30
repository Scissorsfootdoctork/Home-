import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/book.js'
import getters from './getters'
import actions from './actions'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        home
    },
    getters,
    actions
})
