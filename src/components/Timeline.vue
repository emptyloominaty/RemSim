<template>
    <section>
        <div class="remDiv" v-for="item in time" :key="item.id" v-bind:class="{lessthan3rems : item.rems<3, rems3: item.rems===3, rems4: item.rems===4, rems5: item.rems===5, morethan5rems: item.rems>5}" >
          {{ item.time }}
          <p>  <b>{{ item.rems }}</b> </p>
        </div>
    </section>
</template>

<script>
    export default {
        name: "Timeline",
        data() {
            return {
                time: this.generateTimeline(this.$store.state.remSetting)
            }
        },
        methods: {
            generateTimeline(set) {
                let timeline = []

                for (let i=0; i<set.fightLength; i++) {
                    let time1 = i
                    let rems = 0
                    

                   timeline[i] = {id:i,time:time1,rems:rems}


                }
                return timeline
            }
        },
        watch: {
            '$store.state.remSetting': function () {
                this.generateTimeline(this.$store.state.remSetting)
            }
        }
    }
</script>

<style scoped>
    section {
        display:flex;
        justify-content: flex-start;
        margin-top:20px;
    }
    p {
        padding-top: 10px;
        margin-bottom: 10px;
    }
    .remDiv {
        width:30px;
        padding: 5px;
        margin-right:-1px;
        border: 1px solid #333;
    }
    .lessthan3rems {
        background-color: #ccffcc ;
    }
    .rems3 {
        background-color: #66ff66 ;
     }
    .rems4 {
        background-color: #00cb3d;
    }
    .rems5 {
        background-color: #00b43c;
    }
    .morethan5rems {
        background-color: #009133;
    }
</style>