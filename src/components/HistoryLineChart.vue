<template>
    <highcharts :options="chartOptions" :class="{dark: darkMode}" class="highchartsBox"/>
</template>
<script>
export default {
    data() {
        return {
            darkMode:true,
            chartOptions: {
                chart: { type: "column" },
                title: { text: "公司員工年齡分佈" },
                xAxis: {
                    categories: [
                        "18-24歲",
                        "25-29歲",
                        "30-34歲",
                        "35-39歲",
                        "40-44歲",
                        "45-49歲",
                        "50-54歲",
                        "55歲+"
                    ]
                },
                yAxis: {
                    title: { text: "人數" }
                },
                series: [{
                    name: "XX公司員工",
                    data: [12, 18, 22, 25, 32, 35, 26, 18]
                }]
            }
        }
    }
}
</script>
<style lang="scss">
.highchartsBox{
    &.dark{
        .highcharts-background{
            fill: rgb(42, 42, 42, 0.6);
        }
        .highcharts-container text{
            fill: #c0c0c0 !important;
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
    fill: var(--text-color);
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