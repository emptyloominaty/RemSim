<script>
    import { Line} from 'vue-chartjs'

    export default {
        name: "ChartDamage",
        extends: Line,
        data() {
            return {
                chartdata: {
                    labels: [0],
                    datasets: [
                        {
                            label: '',
                            fontColor: '#ffffff',
                            borderColor: '#92f871',
                            data: [0]
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    legend: { labels: {fontColor:'#fff'}},
                    scales: {
                        xAxes: [{
                            display: true,
                            gridLines: {
                                color: '#555'
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Time'
                            }
                        }],
                        yAxes: [{
                            display: true,
                            ticks: {
                                suggestedMin: 0,
                            },
                            gridLines: {
                                color: '#555'
                            },
                            scaleLabel: {
                                display: true,
                                labelString: 'Damage'
                            }
                        }]
                    }


                }
            }
        },
        watch: {
            '$store.state.chartDataDamage': function() {
                this.chartData = this.$store.state.chartDataDamage
                this.renderChart(this.chartData,this.options)
            }
        }
    }

</script>

<style scoped>

</style>