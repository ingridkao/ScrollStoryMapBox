<template>
	<div>
		<div class="main">
			<div class="main__graphic">{{ currStep }}</div>
			<div class="main__scrollama" ref="scrollama_container">
				<div class="step" data-step-no="1">step 1</div>
				<div class="step" data-step-no="2">step 2</div>
				<div class="step" data-step-no="3">step 3</div>
				<div class="step" data-step-no="4">step 4</div>
			</div>
		</div>
		<footer>
			Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta, at velit
      		sint facere ipsam doloremque placeat vel impedit sapiente alias.
		</footer>
	</div>
</template>

<script>
import "intersection-observer"
import scrollama from "scrollama"


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
			currStep: null
		};
	},
	computed: {
		opts() {
			return Object.assign({},  {
				step: Array.from(this.$refs.scrollama_container.childNodes)
			}, this.$attrs)
		}
	},

	methods: {
		setup() {
			this._scroller.destroy()

			this._scroller
			.setup(this.opts)
			.onStepProgress(resp => {
				console.log(resp);
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
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
footer {
  padding: 20vh;
}

// additions and overrides of DOM elements vue-scrollama sets up
.main {
  display: flex;
  .main__graphic {
    flex: 1;
    height: 80vh;
    top: 10vh;
    position: sticky;
  }
  .main__scrollama {
    flex: 1;
  }
}

.main__graphic {
	height: 100%;
	margin: 0 3rem;
	border: 1px solid #ccc;
	background-color: #eee;
	font-size: 10rem;
	display: flex;
	align-items: center;
	justify-content: center;
}

.step {
	padding: 20vh 0;
	margin: 0 3rem;
	margin-bottom: 10vh;
	background-color: beige;
	border: 1px solid #ccc;
	display: flex;
	align-items: center;
	justify-content: center;
	&:last-child {
		margin-bottom: 0;
	}
}
</style>
