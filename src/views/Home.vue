<template>
	<main id="home">
		<MapBox :curr-step='currStep' :opacity="currStepProgress"/>
		<div class="main__scrollama" ref="scrollama_container">
			<div class="step" data-step-no="0">
				<div>
					<h6>通勤</h6>
					<p>在台北上下班通勤有較多的交通運輸選擇項目，如捷運、公車、ubike、計程車以及自行開車；選擇騎車上下班的主要優點除了減少和人群接觸也節省轉車時間，但也增添了突發事故的風險。</p>
					<p>底圖是2019年台北市交通局提供的事故統計資料2019年台北市交通局提供的事故統計資料，根據數據熱區可以看出事故經常發生在主要幹道上的路口。</p>
				</div>
			</div>
			<div class="step" data-step-no="1">
				<div>
					<p>將這兩年上下班常行駛的道路軌跡疊加在地圖之上，可以發現行經路線風險差異，似乎在中山區那一段對於我來說是最容易發生事故的區段。</p>
					<DistLineChart/>
				</div>
			</div>
			<div class="step" data-step-no="2">
				<div>
					<h6>氣候</h6>
					<p>
						一般來說氣候不佳會導致視線不佳以及煞車不及的事故發生，不過統計數據不同於預期，可能是因為駕駛人在晴朗天氣之下，相對於惡劣天氣情況較不注意道路情況，反而容易讓事故發生機率。
						把數據與<a href="https://www.ntpc.gov.tw/ch/home.jsp?id=f165f60bfe5a0a96">平均降雨日</a>與事故發生機率，應該會得到會有更準確的結果。
					</p>
					<!-- <p>這兩年發生三次車禍，將其座標與2019年台北市交通局提供的事故統計資料重疊，看看事故風險的區域以及透過數據歸納出事故經常發生於哪些情況。</p> -->
					<WeatherPieChart/>
					<p>前言提到的車禍其中一次是在下班行駛到橋下，光線昏暗且當晚大雨視線不佳前面的機車突然緊急煞車因而摔車；另一次是在上班途中行駛在巷口被右方來車撞上。</p>
				</div>
			</div>
			<div class="step" data-step-no="3">
				<div>
					<h6>事故易發生的時間區段</h6>
					<p>統計了2019年事故發生的時間區段，數據指出大部分事故發生在傍晚視線不佳的時間區段。</p>
					<HistoryLineChart/>

				</div>
			</div>
			<div class="step" data-step-no="4">
				<div>
					<h6>事故發生道路類型</h6>
					<p>道路限速與設計</p>
				</div>
			</div>
			<div class="step" data-step-no="5">
				<div>
					<p>事故</p>
					<p>交通事故區分為Ａ１、Ａ２、Ａ３類等三種：</p>
					<ul>
						<li>Ａ１類指造成人員當場或二十四小時內死亡之交通事故</li>
						<li>Ａ２類指造成人員受傷或超過二十四小時死亡之交通事故</li>
						<li>Ａ３類指僅有車輛財物受損之交通事故</li>
					</ul>
				</div>

				<div>結語</div>
				<p>除了自身對於車輛保養及駕駛當下的注意力狀態，希望地方政府可以對路況妥善優化，像是車輛隨意臨停問題、巷弄的反射鏡髒污處理及架設</p>
			</div>
		</div>
	</main>
</template>

<script>
import "intersection-observer"
import scrollama from "scrollama"
import MapBox from '@/components/MapBox.vue'
import DistLineChart from '@/components/DistLineChart.vue'
import HistoryLineChart from '@/components/HistoryLineChart.vue'
import WeatherPieChart from '@/components/WeatherPieChart.vue'

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
		MapBox,DistLineChart, HistoryLineChart, WeatherPieChart
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
				font-size: 0.9rem;
    			text-indent: 1.8rem;
				line-height: 1.5rem;
			}
			a{
				color: #ddd;
			}
		}
	}
}
ul{
	list-style-type: none;
	padding: 0;
}
.iconList{
	color: #ddd;
	&:before{
		content: '';
		display: inline-block;
		width: 0.5rem;
		height: 0.5rem;
		margin: 0 .5rem;
		border-radius: 50%;
		background: #ddd;
	}
	&.sun:before{
		background: #cab138;
	}
	&.cloud:before{
		background: #2ec7a5;
	}
	&.wind:before{
		background: #f1839c;
	}
	&.rain:before{
		background: #9fd7fd;
	}
	&.overrain:before{
		background: #38adff;
	}
}
</style>
