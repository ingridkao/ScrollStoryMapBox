<template>
    <highcharts :options="chartOptions" :class="{dark: darkMode}" class="highchartsPieBox"/>
</template>
<script>
export default {
    data() {
        return {
            darkMode:true,
            chartOptions: {
                chart: { 
                    type: 'pie',
                    plotBackgroundColor: null,
                    plotBorderWidth: null,
                    plotShadow: false
                },
                credits: {
                    enabled: false
                },
                title: { text: null },
                plotOptions: {
                    pie: {
                        allowPointSelect: true,
                        // dataLabels: {
                        //     enabled: false
                        // },
                        showInLegend: true,
                        cursor: 'pointer',
                        colors: ["#cab138", "#2ec7a5", "#f1839c", "#9fd7fd", "#38adff", "#ddd"]
                    }
                },
                xAxis: {
                    categories: [
                        "晴",
                        "陰",
                        "強風",
                        "雨",
                        "暴雨",
                        "其他"
                    ],
                    title: {
                        text: null
                    }
                },
                series: [{
                    name: '件數',
                    colorByPoint: true,
                    data: [
                    {
                        name: '晴',
                        y: 35511
                    }, {
                        name: '陰',
                        y: 8639
                    }, {
                        name: '強風',
                        y: 2
                    }, {
                        name: '雨',
                        y: 8214
                    }, {
                        name: '暴雨',
                        y: 59
                    }, {
                        name: '其他',
                        y: 4
                    }]
                }]
            }
        }
    }
}
</script>
<style lang="scss">
.highchartsPieBox{
    height: 17.5rem;
    &.dark{
        .highcharts-background{
            fill: rgb(42, 42, 42, 0.6);
        }
    }
}

@media (prefers-color-scheme: dark) { 
    :root {
        --background-color: #1F2227;
        --text-color: #c0c0c0;
        --hilight-color: #8db4d6;
    }
    
    /* Some data colors. Light mode uses defaults */
    .highcharts-color-0 {
        fill: #0460ba;
        stroke: #0460ba;
    }
    .highcharts-color-1 {
        fill: #9696ab;
        stroke: #9696ab;
    }
}
.highcharts-background {
    fill: var(--background-color);
}
.highcharts-container text {
    fill: #c0c0c0 !important;
    tspan{
        stroke-width: 0px;
    }
}
.highcharts-subtitle,
.highcharts-credits,
.highcharts-axis-title {
    fill-opacity: 0.7;
}
.highcharts-grid-line {
    stroke: var(--text-color);
    stroke-opacity: 0.2;
}
.highcharts-tooltip-box {
    fill: var(--background-color);
}
.highcharts-column-series rect.highcharts-point {
    stroke: var(--background-color);
}

</style>