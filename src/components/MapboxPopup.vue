<template>
    <header class="popupHeader">此位置共有{{featuresData.length}}項事故紀錄</header>
    <div class="popupBox">
        <div v-for="(feature, i) in featuresData" :key="i" class="featuresDataBox">
            <div v-for="(item, j) in feature.properties" :key="j" v-show="j != 'Timestamp'">
                <span v-if="j != 'IncidentLocation'">{{j}}</span>
                <b>{{item}}</b>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.mapboxgl-popup-content {
    width: 18rem;
}
.popupHeader{
    color: #6d8a8e;
    text-align: left;
}
.popupBox{
    width: 18rem;
    white-space:nowrap;
    overflow: scroll;
    text-align: left;
    padding-bottom: 1rem;
}
.featuresDataBox{
    display: inline-block;
    width: 18rem;
    word-wrap:break-word;
    span{
        padding-right: .5rem;
    }
}
</style>