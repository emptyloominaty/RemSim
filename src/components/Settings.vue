<template>
    <section>
        <form v-on:submit.prevent="saveNewDataToStore()">
            <div>
                <div class="inputDiv">
                    <label>Mode </label>
                    <select  type="text" v-model="simMode">
                        <option value="infiniteRSK" selected>Auto ReM Extend</option>
                        <option value="onlyRSK">only RSK </option>
                        <option value="realGameSim">RSK + tp + bk</option>
                    </select>
                </div>
                <div class="inputDiv">
                    <label>Extend Rem (1=100%) </label>
                    <input type="number"  step="any" v-model="extendRem" >
                </div>
                <div class="inputDiv">
                    <label>Use TFT (0=ReM 1=RSK)</label>
                    <input type="number" max="1" min="0" value="1" v-model="tftUse" >
                </div>
                <div class="inputDiv">
                    <label>Fight Length </label>
                    <input type="number" max="600" min="30" v-model="fightLength">
                </div>
                <button>Set</button>
            </div>

            <div>
                <div class="inputDiv">
                    <label> Haste </label>
                    <input type="number"  step="any" v-model="statHaste">
                </div>
                <div class="inputDiv">
                    <label>Crit </label>
                    <input type="number"  step="any" v-model="statCrit">
                </div>
                <div class="inputDiv">
                    <label>Vers </label>
                    <input type="number"  step="any" v-model="statVers">
                </div>
                <div class="inputDiv">
                    <label>Mastery </label>
                    <input type="number"  step="any" v-model="statMastery">
                </div>
                <div class="inputDiv">
                    <label>Int </label>
                    <input type="number"  step="any" v-model="statInt"> &nbsp;&nbsp;
                </div>
            </div>
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

                if (this.simMode=="") {
                    this.simMode="infiniteRSK"
                }

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
        background-color: #303030;
        color: #efcc00;
        text-shadow: 0 0 3px #987300;
        font-family: Calibri, Arial, sans-serif;
        font-size:1.1rem;
        /*font-weight:600;*/
        display:flex;
        flex-wrap: nowrap;
        flex-direction:row;
        width:300px;
        margin: 0 auto;
        border: 2px solid #333333;
        border-radius: 3px;
        padding:8px;
    }
    form div {
        padding:2px;
        display:flex;
        flex-wrap:wrap;
        justify-content: center;
        align-items:center;
    }

    .inputDiv {
        padding:10px;
        display:flex;
        flex-wrap:wrap;
        flex-direction:column;
    }


    label {
    padding-right: 5px;
    }

    form button {
        margin:5px;
        width:100px;
        background-color: #303030;
        color: #ffde00;
        text-shadow: 0 0 3px #987300;
        border:2px solid #000;
        border-radius:3px;
        cursor:pointer;
        transition:all 0.2s;
        font-size:1.2rem;
    }
    form button:hover {
        background-color: #3f3f3f;
        text-shadow: 0 0 8px #d7ac00;
    }

    input {
        background-color: #404040;
        color:#fff;
        font-family: Calibri, Arial, sans-serif;
        font-size:1rem;
        text-align:center;
        border:1px solid #000;
        border-radius: 3px;
        width: 50px;
        padding:3px;
    }

    input:focus {
        outline:none;
        border-color: #fff;
    }

    select,option {
        font-family: Calibri, Arial, sans-serif;
        font-size:1rem;
        text-align:center;
        text-align-last:center;
        border-color:#000;
        border-radius:3px;
        padding:3px;
        background-color: #404040;
        color: #fff;
    }

    select:focus {
        outline:none;
        border-color:#fff;
    }
    /* -----Disable Arrows from input type number------- */
    /* Chrome, Safari, Edge, Opera */
    input::-webkit-outer-spin-button,
    input::-webkit-inner-spin-button {
        -webkit-appearance: none;
        margin: 0;
    }

    /* Firefox */
    input[type=number] {
        -moz-appearance: textfield;
    }


</style>