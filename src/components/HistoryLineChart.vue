<template>
    <highcharts :options="chartOptions" :class="{dark: darkMode}" class="highchartsBox"/>
</template>
<script>
const tw_months = ["一月","二月","三月","四月","五月","六月","七月","八月","九月","十月","十一月","十二月"]
export default {
    // props:{
    //     active: {
    //         type: Object,
    //         default: () => ({})
    //     }
    // },
    data() {
        return {
            darkMode:true,
            chartOptions: {
                chart: { type: "spline" },
                title: { text: "交通事故月份分佈" },
                credits: {enabled: false },
                xAxis: {
                    categories: tw_months
                    // categories: [
                    //     "一月",//2-4722
                    //     "二月",//4723-8136
                    //     "三月",//8137-12306
                    //     "四月",//12307-16451
                    //     "五月",//16451-20719
                    //     "六月",//20720-24636
                    //     "七月",//24637-29110
                    //     "八月",//29111-33335
                    //     "九月",//33336-37691
                    //     "十月",//37692-42356
                    //     "十一月",//42357-47319
                    //     "十二月"//47320-52430
                    // ]
                },
                yAxis: {
                    title: { text: "件數" }
                },
                plotOptions: {
                    series: {
                        color: '#ad5a5a',
                        cursor: 'pointer',
                        point: {
                            events: {
                                click: (e) => {
                                    const {category, y} = e.point
                                    const month_index = tw_months.findIndex(e => e === category)
                                    const month = (month_index < 9 )? `0${month_index + 1}` : (month_index + 1) 
                                    const yearMonth = this.$dayjs(`2019${month}`, 'YYYYMM')
                                    const start = this.$dayjs(`2019${month}01`, 'YYYYMMDD')
                                    const end = this.$dayjs(`2019${month}${yearMonth.daysInMonth()}`, 'YYYYMMDD')
                                    this.$emit('update', {
                                        category: category,
                                        start: start.unix(),
                                        end: end.unix(),
                                        count: y
                                    })
                                }
                            }
                        }
                    }
                },
                series: [{
                    name: "交通事故",
                    data: [4721, 3413, 4169, 4144, 4267, 3916, 4473, 4224, 4355, 4664, 4962, 5110]
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