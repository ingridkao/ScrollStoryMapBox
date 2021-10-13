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
                credits: {enabled: false },
                title: { 
                    text: "道路類型",
                    style: {
                        fontSize: '12px'
                    }
                },
                colors: ['#b0a5ca', '#338daf', '#64c59d', '#94d075','#7f385c', '#7f4238', '#c38378'],
                xAxis: {
                    title: { text: null },
                    categories: [
                        "四岔路",
                        "直路",
                        "巷弄",
                        "三岔路",
                        "彎曲路及附近",
                        "其他",
                        "高架道路及橋樑",
                        "圓環及地下道"
                    ]
                },
                yAxis: {
                    title: { text: null },
                    min: 1
                },
                series: [
                    {
                        name: "自用小客車",
                        data: [0,0,0,1,0,1,0,0]
                    },{
                        name: "大型重型機車1(550C.C.以上)",
                        data: [2,0,11,0,0,0,1,0]
                    },{
                        name: "大型重型機車2(250-550C.C.)",
                        data: [2,0,0,1,0,1,2,0]
                    },{
                        name: "乘客",
                        data: [2,0,0,1,0,0,2,0]
                    },{
                        name: '普通重型機車',
                        data: [7,13,1,5,4,1,1,2]
                    },{
                        name: '腳踏自行車與其他',
                        data: [5,2,0,1,2,0,0,0]
                    },{
                        name: "行人",
                        data: [14,8,2,3,1,1,2,0]
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