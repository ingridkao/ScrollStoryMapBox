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
                    text: "道路類型",
                    style: {
                        fontSize: '12px'
                    }
                },
                plotOptions: {
                    series: {
                        // color: '#6f738e',
                        borderColor: '#464d7d',
                        stacking: 'normal'
                    },
                    bar: {
                        dataLabels: {
                            enabled: true
                        }
                    }
                },
                colors: ['#d4b24c', '#8989ad'],
                xAxis: {
                    categories: [
                        "四岔路",
                        "直路",
                        "三岔路",
                        "多岔路",

                        "其他",
                        "彎曲路及附近",
                        "橋樑",
                        "巷弄",

                        "高架道路",
                        "圓環",
                        "坡路",
                        "隧道",
                        "地下道",
                        "涵洞",
                        "廣場"
                    ],
                    title: {
                        text: null
                    }
                },
                yAxis: {
                    title: { text: null }
                },
                series: [
                    {
                        name: "A1類",
                        data: [
                            70, 
                            51, 
                            36, 
                            16, 
                            
                            6,
                            26, 
                            0, 
                            6, 

                            10,
                            2,
                            77,
                            0,
                            2,
                            0,
                            2
                        ]
                    },{
                        name: 'A2類',
                        data: [
                            18867, 
                            18419, 
                            9478, 
                            1875, 
                            
                            1286,
                            744, 
                            561, 
                            337, 

                            268,
                            138,
                            77,
                            71,
                            62,
                            21,
                            2
                        ]
                    }
                ]
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