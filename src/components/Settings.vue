<template>
    <section>
        <form v-on:submit.prevent="saveNewDataToStore()">
            <div>
                <label>Extend Rem </label>
                <input type="number" v-model="extendRem" >
            </div>
            <div>
            <label>Use TFT </label>
            <input type="number" max="1" min="0" v-model="tftUse" >
            </div>
            <div>
            <label>Fight Length </label>
            <input type="number" max="1000" min="30" v-model="fightLength">
            </div>
            <hr>
            <div>
            <label> Haste </label>
            <input type="number" v-model="statHaste">
            </div>
            <div>
            <label>Crit </label>
            <input type="number" v-model="statCrit">
            </div>
            <div>
            <label>Vers </label>
            <input type="number" v-model="statVers">
            </div>
            <div>
            <label>Mastery </label>
            <input type="number" v-model="statMastery">
            </div>
            <div>
            <label>Int </label>
            <input type="number" v-model="statInt">
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
                statInt: this.$store.state.testState
                //vars
            }
        },
        methods: {
            saveNewDataToStore() {
                let data = {"extendRem":this.extendRem,"tftUse":this.tftUse,"fightLength":this.fightLength,
                    "statHaste":this.statHaste,"statCrit":this.statCrit,"statVers":this.statVers,
                    "statMastery":this.statMastery, "statInt":this.statInt }
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