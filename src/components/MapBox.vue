<template>
    <main id="mapbox_container">
        <div id="mapboxBg" :style="{background: bgColor[currStep], opacity: opacity}"/>
        <div id="mapboxBox"/>
        <Loading :load-start="mapLoading" :curr-step="currStep"/>
    </main>
</template>
<script>
import mapboxgl from 'mapbox-gl'
import axios from 'axios'

import 'mapbox-gl/dist/mapbox-gl.css'
import mapStyle,{ buildingsIn3D, taipeiTown, taipeiVillage, taipeiAccident, taipeiAccidentHeat, lineStyle } from '@/assets/config/mapbox-style.js'
import {bgColor} from '@/assets/config/page-style.js'

import Loading from '@/components/Loading.vue'

const MAPBOXTOKEN = process.env.VUE_APP_MAPBOXTOKEN
const MapboxLanguage = require('@/assets/js/mapbox-gl-language.js')
const mainCenter = [121.5019207529167, 25.046374395604346]
const initZoom = 11
const locations = [
    {
        name: '',
        center: []
    }
]
export default {
    data(){
        return {
            bgColor,
            MapBoxObject: null,
            mapLoading: false,
            work_track: []
        }
    },
    mounted(){
        this.initMapBox()
    },
    destroyed(){},
	components:{
		Loading
	},
    props: {
        currStep: {
            type: String,
            default: ''
        },
        opacity: {
            type: Number,
            default: 1
        }
    },
    computed: {},
    watch: {
        currStep: function (val, oldVal) {
            this.currStepWatchHandler(val, oldVal)
        }
    },
    methods: {
        initMapBox(){
            mapboxgl.accessToken = MAPBOXTOKEN
            this.MapBoxObject = new mapboxgl.Map({
                antialias: true,
                container: "mapboxBox",
                style: mapStyle,
                // pitch: 45, //视野倾斜，0-60
                // bearing: -17, //视野旋转角度
                center: mainCenter,
                maxBounds: [
                    [121.3870596781498, 24.95733863075891], // Southwest coordinates
                    [121.6998231749096, 25.21179993640203] // Northeast coordinates
                ],
                zoom: initZoom,
                minZoom: 11,
                maxZoom: 20
            })
            // Add zoom and rotation controls to the map.
            this.MapBoxObject.addControl( new mapboxgl.NavigationControl() )

            // Add language controls to the map.
            if (mapboxgl.getRTLTextPluginStatus() !== 'loaded') {
                mapboxgl.setRTLTextPlugin('/js/mapbox-gl-rtl-text.js') 
            }
            this.MapBoxObject.addControl(new MapboxLanguage({
                defaultLanguage: 'zh-Hant'
            }))
            this.MapBoxObject.on("load", () => {
                this.mapLoading = true
                this.loadDataToMapbox()
            })
            this.MapBoxObject.on('idle', () => {
                this.mapLoading = false
            })
        },
        loadDataToMapbox(){
            this.MapBoxObject.addLayer(buildingsIn3D)
            const taipei_town_request = axios.get(`../../data/taipei_town.geojson`)
            const taipei_village_request = axios.get(`../../data/taipei_village.geojson`)
            const taipei_accident_request = axios.get(`../../data/accident.geojson`)
            const work_request = axios.get(`../../data/track_work.geojson`)
            const workoff_request = axios.get(`../../data/track_offwork.geojson`)
            axios.all([taipei_town_request, taipei_village_request, taipei_accident_request, work_request, workoff_request]).then(axios.spread((res1, res2, res3, res4, res5) => {
                this.MapBoxObject.addSource('taipei_town', { type: 'geojson', data: res1.data }).addLayer(taipeiTown)
                this.MapBoxObject.addSource('taipei_village', { type: 'geojson', data: res2.data }).addLayer(taipeiVillage)
                this.MapBoxObject.addSource('taipei_accident', { type: 'geojson', data: res3.data }).addLayer(taipeiAccident)
                this.MapBoxObject.addSource('taipei_accident_heat', { type: 'geojson', data: res3.data }).addLayer(taipeiAccidentHeat)
                this.work_track_data = res4.data
                this.MapBoxObject.addSource('work_track', { type: 'geojson', data: res4.data }).addLayer({
                    id: 'work_track',
                    source: 'work_track',
                    ...lineStyle
                }).setPaintProperty('work_track', 'line-color', '#dca491');
                this.MapBoxObject.addSource('offwork_track', { type: 'geojson', data: res5.data }).addLayer({
                    id: 'offwork_track',
                    source: 'offwork_track',
                    ...lineStyle
                }).setPaintProperty('offwork_track', 'line-color', '#53b7c4');
            }))
            this.MapBoxObject.on("click", (event) => {
                this.MapBoxObject.getCanvas().style.cursor = 'pointer'
                console.log(event);
                // this.clickFeatureDatas = this.MapBoxObject.queryRenderedFeatures(event.point, { layers: this.mapDisplayLayers })
                // if(this.clickFeatureDatas.length > 0){
                //     this.mapboxPopupGetInfo(event)
                // }
                // console.log( this.MapBoxObject.getBounds())
                console.log( this.MapBoxObject.getCenter())
                // console.log( this.MapBoxObject.getBearing())
                // console.log( this.MapBoxObject.getZoom())
                // console.log(JSON.stringify(event.lngLat.wrap()))
            })
        },
        currStepWatchHandler(val, oldVal){
            console.log('new: %s, old: %s', val, oldVal)
            switch (val) {
                case '0':
                    //init map
                    this.MapBoxObject
                    .rotateTo(0, {duration: 5000})
                    .zoomTo(initZoom, {duration: 5000})
                    .panTo(mainCenter, {duration: 5000})

                    //Animate a line
                    this.animateLine()
                    break;

                case '1':
                    this.MapBoxObject.panTo([121.536609, 25.044808], {duration: 5000});
                    break;
                case '2':
                    this.MapBoxObject.zoomTo(14.5, {
                        duration: 3000,
                        offset: [100, 50]
                    })
                    break;
                case '3':
                    this.MapBoxObject.zoomOut({offset: [80, 60]});
                    this.MapBoxObject.rotateTo(30, {duration: 2000});
                    break;
                case '4':
                    this.MapBoxObject.zoomTo(13, {
                        duration: 3000,
                        offset: [100, 50]
                    })
                    break;
                default:
                    this.MapBoxObject.rotateTo(0, {duration: 2000}).panTo([121.3870596781498, 24.95733863075891], {
                        duration: 5000
                    })
                    break;
            }
        },
        animateLine(){
            let i = 0;
            let coordinates = []
            const timer = setInterval(() => {
                if (i < this.work_track.length) {
                    data.features[0].geometry.coordinates.push(this.work_track[i]);
                    this.MapBoxObject.getSource('work_track').setData(data);
                    i++;
                } else {
                    window.clearInterval(timer);
                }
            }, 10);
        }
    }
}
</script>
<style lang="scss" scoped>
#mapbox_container {
    position: fixed;
    width: 100vw;
	height: 100vh;
	background-color: #eee;
    top: 0;
    z-index: 0;
    >div{
        position: absolute;
    }
}
#mapboxBg{
    width: 100%;
    height: 100%; 
    top: 0;
    left: 0;

}
#mapboxBox{
    width: 98%;
    height: 98%;
    margin: 1%;
    top: 0;
    left: 0;
}
</style>