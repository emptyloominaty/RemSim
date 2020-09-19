import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        testState: 555,
        remSetting: {extendRem:1, tftUse:0, fightLength:60,
            statHaste:0, statCrit:0, statVers:0,
            statMastery:0, statInt:0 }
    },
    mutations: {
        setData(state, newData) {
            state.remSetting = newData
        },
    },
    actions: {
    },
    modules: {
    }
})
