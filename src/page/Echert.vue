<template>
    <div id="app">
        <div id="main"></div>
    </div>
</template>
<script>
export default {
    name: 'app',
    methods: {
        drawChart () {
            // 基于准备好的dom，初始化echarts实例
            const myChart = this.$echarts.init(document.getElementById('main'))
            // 指定图表的配置项和数据
            const option = {
                color: ['#003366', '#006699', '#4cabce', '#e5323e'],
                tooltip: {
                    trigger: 'axis',
                    axisPointer: {
                        type: 'shadow'
                    }
                },
                legend: {
                    data: ['峰', '谷', '总', '用']
                },
                toolbox: {
                    show: true,
                    orient: 'vertical',
                    left: 'right',
                    top: 'center',
                    feature: {
                        mark: { show: true },
                        dataView: {
                            show: true,
                            readOnly: false
                        },
                        magicType: {
                            show: true,
                            type: ['line', 'bar', 'stack', 'tiled']
                        },
                        restore: { show: true },
                        saveAsImage: { show: true }
                    }
                },
                xAxis: [
                    {
                        type: 'category',
                        axisTick: { show: false },
                        data: ['2012', '2013', '2014', '2015', '2016']
                    }
                ],
                yAxis: [
                    {
                        type: 'value'
                    }
                ],
                series: [
                    {
                        name: '峰',
                        type: 'bar',
                        barGap: 0,

                        data: [320, 332, 301, 334, 390]
                    },
                    {
                        name: '谷',
                        type: 'bar',
                        data: [220, 182, 191, 234, 290]
                    },
                    {
                        name: '总',
                        type: 'bar',
                        data: [150, 232, 201, 154, 190]
                    },
                    {
                        name: '用',
                        type: 'bar',
                        data: [150, 232, 201, 154, 190]
                    }
                ]
            }
            // 使用刚指定的配置项和数据显示图表。
            myChart.setOption(option)
        }
    },
    mounted () {
        this.drawChart()
    }
}
</script>
<style scoped lang="scss">
@import "../assets/styles/global.scss";

#app {
    transform: rotate(90deg);

    #main {
        width: px2rem(620);
        height: px2rem(370);
    }
}

</style>
