<template>
	<div id="nav">
		<router-link to="/">騎噗噗上下班</router-link> |
		<!-- <router-link to="/about">關於</router-link> -->
	</div>
	<router-view/>
	<footer id="main_footer">
		<p>手繪路線工具：<a href="https://geojson.io/"></a></p>
	</footer>
</template>

<style lang="scss">
body{
	margin: 0;
	padding: 0;
}
#app {
	font-family: "Avenir", Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
}
#nav {
	position: fixed;
	top: 0;
	z-index: 2;
	padding: 30px;
	a {
		font-weight: bold;
		color: #2c3e50;
		text-decoration: none;
		&.router-link-exact-active {
			color: #2eb6c7;
		}
	}
}
#main_footer {
	position: relative;
	padding: 20vh;
	background: #eee;
}
</style>
