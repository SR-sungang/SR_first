<template>
	<view :style="{'height':windowHeight+'px'}">
		<view v-for="i in num" :key="i" :class="{red:true}" >
			{{i}}
		</view>
	</view>
</template>

<script>
	var pageobj;
	export default {
		data() {
			return {
				windowWidth:0,
				windowHeight:0,
				num:10
			}
		},
		methods: {
			
		},
		 onPullDownRefresh() {
			 console.log("chufa")
			 setTimeout(function () {
			   uni.stopPullDownRefresh();
			 }, 1000);
		 },
		 onReachBottom(){
			 console.log("触底吖")
			 this.num+=10
		 },
		onLoad(option){
			pageobj=this
			uni.getSystemInfo({
			    success: function (res){
			        pageobj.windowWidth=res.windowWidth,
			        pageobj.windowHeight=res.windowHeight
				}
			})
			uni.startPullDownRefresh();
		}
	}
	
</script>

<style>
.red{
	width: auto;
	height: 150px;
	background-color:#C8C7CC;
	margin: 10px;
	display: flex;
	justify-content: center;
	align-items: center;
	font-size: 40px;
	font-weight: 800;
	border-radius: 20px;
	box-shadow: 0px 5px 5px #555555 inset 
	
}
</style>
