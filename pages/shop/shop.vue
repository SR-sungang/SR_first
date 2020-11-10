<template>
	<view>
		<scroll-view scroll-y="true" :style="{'height':windowHeight+'px'}"  @scrolltolower="load">
			<van-row v-for="(item,index) in array"   custom-class="scroll-view-item" :key="index">
			  <van-col offset="1" span="22">
				 <van-card
				   num="1"
				   :price="item.shop_price|formatMoney"
				   desc="描述信息"
				   :title="item.shop_name"
				   :thumb="item.shop_img"
				   custom-class="blue"
				 />
			  </van-col>
			</van-row>
			<!-- <view v-show="true"  loading="true" :class="{red:true}">
				暂无更多数据
			</view> -->
			<i-load-more v-show="no_more" tip="暂无更多数据" loading="false" i-class="red"/>
			<i-load-more v-show="loading" loading="true" />
		</scroll-view>
		
		
	</view>
</template>

<script>
	var pageobj
	export default {
		data() {
			return {
				array:[],
				num:10,
				windowHeight:0,
				windowWidth:0,
				page:1,
				pageSize:10,
				pageCount: 0,
				no_more:false,
				loading:false
			}
		},
		
		methods: {
			load:function(e){
				if(this.page+1<=this.pageCount){
					this.page+=1
					this.showLimit();
				}else{
					this.no_more=true
				}
			},
			showLimit(){
				this.$axios.post("/shops/showLimit",{page:this.page,pageSize:this.pageSize})
				.then(function(res){
					pageobj.pageCount=res.data.pageCount
					pageobj.array=pageobj.array.concat(res.data.array)
					pageobj.loading=false;
				}).catch(function(err){
					console.log(err)
				})
			}
		},
		onLoad(option){
			pageobj=this;
			uni.getSystemInfo({
				success:function(res){
					pageobj.windowHeight=res.windowHeight
					pageobj.windowWidth=res.windowWidth
				}
			})
			this.showLimit();
		},
		filters:{
			formatMoney(value){
				var value=Number(value)
			    var value=Math.round(parseFloat(value)*100)/100;
				var s=value.toString().split(".");
				if(s.length==1){
					value=value.toString()+".00";
					return value;
				}
				if(s.length>1){
					if(s[1].length<2){
						value=value.toString()+"0";
					}
					return value;
				}
				
			}
		}
		
	}
</script>

<style>
.red{
	color: red;
	text-align: center;
	font-size: 12px;
}
.blue{
	width: auto;
	height: 150px;
	background-color:#C0C0C0;
	margin: 10px;
	
	font-size: 40px;
	font-weight: 800;
	border-radius: 20px;
	box-shadow: 0px 5px 5px #555555 inset 
}
</style>
