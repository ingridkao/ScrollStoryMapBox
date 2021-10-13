<template>
    <highcharts :options="chartOptions" :class="{dark: darkMode}" class="highchartsBox"/>
</template>
<script>
export default {
    data() {
        return {
            darkMode:true,
            chartOptions: {
                chart: { type: "bar" },
                credits: {enabled: false },
                title: { 
                    text: "交通事故發生區域",
                    style: {
                        fontSize: '12px'
                    }
                },
                plotOptions: {
                    series: {
                        color: '#718e93'
                    }
                },
                xAxis: {
                    categories: [
                        "內湖",
                        "北投",
                        "中山",
                        "大安",
                        "大同",
                        "文山",
                        "萬華",
                        "士林",
                        "南港",
                        "中正",
                        "信義",
                        "松山"
                    ],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    title: { text: "件數" },
                    labels: {
                        overflow: 'justify'
                    }
                },
                series: [{
                    showInLegend: false,           
                    name: "交通事故",
                    data: [4668, 5165, 6441, 4871, 3465, 4836, 4127, 4129, 2009, 5351, 5524, 2760]
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