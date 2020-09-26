import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        remSetting: {extendRem:1, tftUse:1, fightLength:120,
            statHaste:0, statCrit:0, statVers:0,
            statMastery:0, statInt:0,simMode:"infiniteRSK" },
        chartData: {},
        chartDataMana: {},
        chartDataDamage: {},
        chartDataHeal: {},
    },
    mutations: {
        setData(state, newData) {
            state.remSetting = newData
        },
        setChartData(state, newData) {
            state.chartData = newData
        },
        setChartDataMana(state, newData) {
            state.chartDataMana = newData
        },
        setChartDataDamage(state, newData) {
            state.chartDataDamage = newData
        },
        setChartDataHeal(state, newData) {
            state.chartDataHeal = newData
        }
    },
    actions: {
    },
    modules: {
    }
})
