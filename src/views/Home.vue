<template>
	<main id="home">
		<MapBox :curr-step='currStep' :opacity="currStepProgress"/>
		<div class="main__scrollama" ref="scrollama_container">
			<div class="step" data-step-no="0">
				<div>
					<h6>台北市交通事故統計資料</h6>
					<p>數據來源為2019年ＸＸ局提供的交通事故</p>
					<HistoryLineChart/>
				</div>
			</div>
			<div class="step" data-step-no="1">
				<h6>事故發生的時間</h6>
				<p>較容易發生在傍晚視線不佳的時間區段</p>
				
<!-- 
				<h6>上下班</h6>
				<p>可以上傳你的路線(僅geojson格式)</p> -->

			</div>
			<div class="step" data-step-no="2">
				<div>
					<h6>發生時間</h6>
					<p></p>
				</div>
			</div>
			<div class="step" data-step-no="3">
				<div>
					<p>交通事故區分為Ａ１、Ａ２、Ａ３類等三種：</p>
					<ul>
						<li>Ａ１類指造成人員當場或二十四小時內死亡之交通事故</li>
						<li>Ａ２類指造成人員受傷或超過二十四小時死亡之交通事故</li>
						<li>Ａ３類指僅有車輛財物受損之交通事故</li>
					</ul>
				</div>
				<div>
					<h6>氣候</h6>
					<p>這幾年曾經發生兩次車禍，一次在下班途中雨天橋下視線不佳，前面的機車突然緊急煞車因而煞不住車摔車，另一次是在上班途中行駛在巷口，右方來車</p>
					<p>統計指出雨天視線不佳及冬天則是日照時間較短兩者影響視線較容易</p>
					<span class="weather">晴</span>
					<span class="weather">陰</span>
					<span class="weather">雨</span>
				</div>
				<div>
					<h6></h6>
				</div>
			</div>
			<div class="step" data-step-no="4">
				<div></div>
			</div>
			<div class="step" data-step-no="5">
				<div>道路限速與設計</div>
			</div>
		</div>
	</main>
</template>

<script>
import "intersection-observer"
import scrollama from "scrollama"
import MapBox from '@/components/MapBox.vue'
import HistoryLineChart from '@/components/HistoryLineChart.vue'

export default {
	name: "Home",
	mounted () {
		this._scroller = scrollama()
		this.setup();
	},
	beforeDestroy() {
		this._scroller.destroy();
	},
	data() {
		return {
			currStep: null,
			currStepProgress: 0
		};
	},
	components:{
		MapBox,HistoryLineChart
	},
	computed: {
		opts() {
			return Object.assign({},  {
				step: Array.from(this.$refs.scrollama_container.childNodes),
				progress: true

			}, this.$attrs)
		}
	},
	methods: {
		setup() {
			this._scroller.destroy()

			this._scroller
			.setup(this.opts)
			.onStepProgress(resp => {
				const {progress} = resp				
				this.currStepProgress = (Math.floor(progress*100)/100)/2+0.5
			})
			.onStepEnter(resp => {
				const {element} = resp
				this.currStep = element.dataset.stepNo
			})
			.onStepExit(resp => {
				const {element} = resp
				this.currStep = element.dataset.stepNo
			});
			window.addEventListener('resize', this.handleResize)
		},
		handleResize () {
			this._scroller.resize()
		}
	}
}
</script>

<style lang="scss">
.main__scrollama{
    position: relative;
	z-index: 1;
	// pointer-events: none;
	width: 30%;
	.step {
		display: flex;
		// align-items: center;
		// justify-content: center;
		width: 100%;
		height: 100vh;
		>div{
			background-color: rgb(50,50,50,0.8);
			box-shadow: 1px 1px 5px rgb(0,0,0,0.5);
			width: 100%;
			height: auto;
			margin: 10vh 0 0 2rem;
			padding: 1rem;
			text-align: left;
			h6{
				color: #98a5b7;
				font-size: 1rem;
				margin: 1rem 0;
			}
			p{
				color: #8e8e8e;
			}
		}
	}
}
</style>
