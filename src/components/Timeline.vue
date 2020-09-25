<template>
    <section>
        <div class="remDiv" v-for="item in time" :key="item.id" v-bind:class="{rems3: item.rems===3, rems4: item.rems===4, rems5: item.rems===5, morethan5rems: item.rems>5}" >
          {{ item.time }}
          <p>  <b>{{ item.rems }}</b> </p>
        </div>
    </section>
</template>

<script>
    import simulateFunction from '../mixins/simulateFunction'
    export default {
        name: "Timeline",
        mixins: [simulateFunction],
        data() {
            return {
                time: this.simulate(this.$store.state.remSetting)
            }
        },
        methods: {
        },
        watch: {
            '$store.state.remSetting': function () {
                this.time = this.simulate(this.$store.state.remSetting)
            }
        }
    }
</script>

<style scoped>
    section {
        display:flex;
        flex-wrap:wrap;
        justify-content: flex-start;
        margin-top:20px;
        margin-bottom:20px;
    }
    p {
        padding-top: 10px;
        margin-bottom: 10px;
    }
    .remDiv {
        width:38px;
        padding: 5px;
        margin-right:-1px;
        margin-top:-1px;
        border: 1px solid #333;
    }

    .rems3 {
        background-color: #ccffcc ;
     }
    .rems4 {
        background-color: #66ff66 ;
    }
    .rems5 {
        background-color: #00b43c;
    }
    .morethan5rems {
        background-color: #006a26;
    }
</style>