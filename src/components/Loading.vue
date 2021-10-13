<template>
    <div class="loadingContainer" :class="{loadStart}">
        <div class="loadingBox">
            <div :style="{'background-color': sectionColor[currStep]}"/>
            <div :style="{'background-color': sectionColor[currStep]}"/>
            <div :style="{'background-color': sectionColor[currStep]}"/>
        </div>
    </div>
</template>
<script>
import {sectionColor} from '@/assets/config/page-style.js'

export default {
    props: {
        loadStart: {
            type: Boolean,
            default: false
        },
        currStep: {
            type: String,
            default: ''
        }
    },
    data(){
        return {
            sectionColor
        }
    }
}
</script>
<style lang="scss">
    .loadingContainer{
        display: flex;
        align-items: center;
        justify-content: center;
        display: none;
        opacity: 0;
        width: 100%;
        height: 100%;

        transition-property: opacity, display;
        transition-duration: 3s, 1s;
        &.loadStart{
            display: flex;
            opacity: 1;
        }
    }
    .loadingBox{
        display: flex;
    }
    .loadingBox div {
        margin: 10px;
        width: 50px;
        height: 50px;
        background-color: #ddd;
        border-radius: 50%;
        animation-duration: 0.8s;
        animation-iteration-count: infinite;
        &:nth-child(1){
            animation-name: load-one;
        }
        &:nth-child(2){
            animation-name: load-two;
        }
        &:nth-child(3){
            animation-name: load-three;
        }

    }

    @keyframes load-one {
        30% {
            transform: translateY(-50%);
        }
    }
    @keyframes load-two {
        50% {
            transform: translateY(-50%);
        }
    }
    @keyframes load-three {
        70% {
            transform: translateY(-50%);
        }
    }
</style>