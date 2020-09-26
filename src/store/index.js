import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        testState: 555,
        remSetting: {extendRem:1, tftUse:1, fightLength:120,
            statHaste:0, statCrit:0, statVers:0,
            statMastery:0, statInt:0,simMode:"infiniteRSK" },
        chartData: {
            labels: [0,1],
            datasets: [
                {
                    label: 'Test',
                    fontColor: '#ffffff',
                    borderColor: '#87f86d',
                    data: [40, 20]
                }
            ]
        }
    },
    mutations: {
        setData(state, newData) {
            state.remSetting = newData
        },
        setChartData(state, newData) {
            state.chartData = newData
        }
    },
    actions: {
    },
    modules: {
    }
})
