<template>
    <section>
        <form v-on:submit.prevent="saveNewDataToStore()">
            <div>
                <label>Mode </label>
                <select  type="text" v-model="simMode">
                    <option value="infiniteRSK" selected>RSK 0s cd</option>
                    <option value="onlyRSK">RSK default cd (no tp + bk)</option>
                    <option value="realGameSim">RSK default cd + tp + bk</option>
                </select>
            </div>
            <div>
                <label>Extend Rem </label>
                <input type="text" v-model="extendRem" >
            </div>
            <div>
                <label>Use TFT </label>
                <input type="number" max="1" min="0" value="1" v-model="tftUse" >
            </div>
            <div>
                <label>Fight Length </label>
                <input type="number" max="1000" min="30" v-model="fightLength">
            </div>
            <hr>
            <div>
                <label> Haste </label>
                <input type="text" v-model="statHaste">
            </div>
            <div>
                <label>Crit </label>
                <input type="text" v-model="statCrit">
            </div>
            <div>
                <label>Vers </label>
                <input type="text" v-model="statVers">
            </div>
            <div>
                <label>Mastery </label>
                <input type="text" v-model="statMastery">
            </div>
            <div>
                <label>Int </label>
                <input type="text" v-model="statInt">
            </div>
            <button>Set</button>
        </form>
    </section>
</template>

<script>
    export default {
        name: "Settings",
        data() {
            return {
                //v-models
                extendRem:1, //1=100%
                tftUse:0, //0 = rem 1 = rsk
                fightLength:180, //sec
                statHaste:0, //%
                statCrit:0, //%
                statVers:0, //%
                statMastery:0, //%
                statInt: this.$store.state.testState,
                simMode: ""
                //vars
            }
        },
        methods: {
            saveNewDataToStore() {
                let data = {"extendRem":this.extendRem,"tftUse":this.tftUse,"fightLength":this.fightLength,
                    "statHaste":this.statHaste,"statCrit":this.statCrit,"statVers":this.statVers,
                    "statMastery":this.statMastery, "statInt":this.statInt,"simMode":this.simMode }
                this.$store.commit('setData',data)
            }
        }
    }
</script>

<style scoped>
    form {
        display:flex;
        flex-wrap: nowrap;
        flex-direction:column;
        align-items: center;
        width:500px;
        margin: 0 auto;
    }
    form div {
        padding:2px;
    }
    form button {
        width:80px;
    }
    input {
        width: 50px;
    }
</style>