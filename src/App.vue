<template>
	<div id="nav">
		<router-link to="/">騎噗噗上下班</router-link>
		<!-- <router-link to="/about">關於</router-link> -->
	</div>
	<router-view/>
	<footer id="main_footer">
		<p>查閱完圖表致死事故以機車為主，行人次之，覺得好像坐大眾運輸或是汽車還是比較安全的選擇...＝口＝</p>
		<p>延伸連結：</p>
		<a target="_blank" href="https://geojson.io/">手繪路線工具</a>
		<a target="_blank" href="https://www.ntpc.gov.tw/ch/home.jsp?id=f165f60bfe5a0a96">平均降雨日（或許與事故數據交叉計算會得到更準確的機率比）</a>
		<a target="_blank" href="https://www-ws.gov.taipei/Download.ashx?u=LzAwMS9VcGxvYWQvNjExL3JlbGZpbGUvMjgxOTQvODE3NzUxMC80MDFjZmY0Yy01Njc3LTRiYTktOTNmYy1lYTBjYzdmMmNmNjkucGRm&n=6Ie65YyX5biCMTA45bm05Lqk6YCa5LqL5pWF5YiG5p6Q5aCx5ZGKLnBkZg%3D%3D&icon=.pdf">臺北市108 年交通事故分析報告</a>
		<a target="_blank" href="https://www-ws.gov.taipei/Download.ashx?u=LzAwMS9VcGxvYWQvNjExL3JlbGZpbGUvMjgxOTQvODQwODEwNy9hOTI4YjJhNC1mZjMxLTRhNDMtYTNkMS0yYmIyOWJmMDcyZTUucGRm&n=6Ie65YyX5biCMTA55bm05Lqk6YCa5LqL5pWF5YiG5p6Q5aCx5ZGKLnBkZg%3D%3D&icon=..pdf">臺北市109 年交通事故分析報告</a>
	</footer>
</template>

<style lang="scss">
body{
	margin: 0;
	padding: 0;
	background: linear-gradient( to bottom, #a8d3d8, #2b383c 30% , #ada8d8 75%,  #c19a8e);
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
			color: #a8d3d8;
		}
	}
}
#main_footer {
	position: relative;
	padding: 10%;
	background: #c19a8e;
	text-align: left;
	a{
		display: block;
		font-weight: bold;
		color: #2c3e50;
		text-decoration: none;
		padding:0.5rem;
		&:hover{
			color: #222;
		}

	}
}
</style>
