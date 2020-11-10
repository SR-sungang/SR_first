<template>
	<view style="background-color: #ffa900;">
		<!-- 标题栏(start)-->
		<van-row v-if="num<60"  custom-class="title">
		  <van-col span="24" >
			  <view class="dizhi">
				  <van-icon name="location-o" custom-style="font-weight:800;" size="15px"/>
				  <text style="margin:0 8rpx" @click="tiaozhuan()">{{dizhi}}</text>
				  <van-icon name="arrow" custom-style="font-weight:400" size="8px" />
			  </view>
		  </van-col>
		</van-row>
		<!-- 标题栏(start hidden)-->
		<van-row v-else custom-class="title2">
		  <van-col span="10" custom-class="title2_1">
			  <view class="dizhi">
				  <van-search
				    shape="round"
				    background="null"
				  	custom-class="sousuo"
				    placeholder="请输入搜索关键词"
					field-class="input"/>
			  </view>
		  </van-col>
		</van-row>
		<!-- 综合lan(start hidden)-->
				<view class="xiala">
					<view class="zonghe"  v-if="num>=100">
						<view class="" @click="open(1)">
							<text>综合排序</text>
							<van-icon name="arrow-up"  size="10px" v-if="type!=1" />
							<van-icon name="arrow-down" size="10px" v-else />
							<view class="zonghehidden" v-show="type==1" > 11111</view>
						</view>
						<view >
							<text>销量高</text>
						</view>
						<view >
							<text>速度快</text>
						</view>
						<view >
							<text>津贴优惠</text>
						</view>
						<view  @click="open(2)" >
							<text>筛选</text>
							<van-icon name="arrow-up"  size="10px" v-if="type!=2" />
							<van-icon name="arrow-down" size="10px" v-else />
							<view class="zonghehidden" v-show="type==2">22222</view>
						</view>
					</view>
					
				</view>
				<van-overlay :show="show" class="zhezhao" @click="hidde()" />
		<!-- 搜索框-->
		<van-row custom-class="body" >
		  <van-col span="24" >
			  <van-search
			    value=""
			    shape="round"
			    background="null"
				custom-class="sousuo"
			    placeholder="请输入搜索关键词"
				field-class="input"
			  />
		  </van-col>
		
		  
		  <!-- 搜索框(bottom text)-->
		  <van-col  span="24">
		  		<van-row gutter="5" custom-class="zhaji">
		  		  <van-col >
					  <text>
						  炸鸡
					  </text>
				  </van-col>
		  		  <van-col >
		  		  	  <text>
		  		  		 奶茶
		  		  	  </text>
		  		  </van-col>
				  <van-col >
				  	  <text>
				  		 汉堡
				  	  </text>
				  </van-col>
				  <van-col >
				  	  <text>
				  		蛋糕
				  	  </text>
				  </van-col>
				  <van-col >
				  	  <text>
				  		 喜茶
				  	  </text>
				  </van-col>
				  <van-col >
				  	  <text>
				  		 沪上阿姨
				  	  </text>
				  </van-col>
				  <van-col >
				  	  <text>
				  		 水果捞
				  	  </text>
				  </van-col>
		  		</van-row>
		  </van-col>
		  <!--轮播图-->
		  <van-col span="24" >
		  	<swiper style="margin-top: 10px; background-color: #FFFFFF; border-radius: 10px; padding: 6px 0px;" 
				indicator-dots="true" indicator-active-color="#ffa900">
		  	  <swiper-item>
		  	    <view class="daohang">
		  			<view >
						<image src="../../static/icon/1.png" ></image>
						<text>美食</text>
					</view>
					<view >
						<image src="../../static/icon/2.png" ></image>
						<text>超市便利</text>
					</view>
					<view >
						<image src="../../static/icon/3.png" ></image>
						<text>蔬菜水果</text>
					</view>
					<view >
						<image src="../../static/icon/4.png" ></image>
						<text>买药</text>
					</view>
					<view >
						<image src="../../static/icon/5.png" ></image>
						<text>跑腿代购</text>
					</view>
		  		</view>
				<view class="daohang">
					<view >
						<image src="../../static/icon/6.png" ></image>
						<text>包子早餐</text>
					</view>
					<view >
						<image src="../../static/icon/7.png" ></image>
						<text>面包</text>
					</view>
					<view >
						<image src="../../static/icon/8.png" ></image>
						<text>汉堡披萨</text>
					</view>
					<view >
						<image src="../../static/icon/9.png" ></image>
						<text>超值联盟</text>
					</view>
					<view >
						<image src="../../static/icon/10.png" ></image>
						<text>必存好券</text>
					</view>
				</view>
		  	  </swiper-item>
		  	  <swiper-item>
		  		<view class="daohang">
		  			<view >
		  				<image src="../../static/icon/12.png" ></image>
		  				<text>炸鸡零食</text>
		  			</view>
		  			<view >
		  				<image src="../../static/icon/13.png" ></image>
		  				<text>快餐简餐</text>
		  			</view>
		  			<view >
		  				<image src="../../static/icon/14.png" ></image>
		  				<text>津贴联盟</text>
		  			</view>
		  			<view >
		  				<image src="../../static/icon/15.png" ></image>
		  				<text>美团专送</text>
		  			</view>
		  			<view >
		  				<image src="../../static/icon/16.png" ></image>
		  				<text>日韩料理</text>
		  			</view>
		  		</view>
		  		<view class="daohang">
		  			<view >
		  				<image src="../../static/icon/17.png" ></image>
		  				<text>浪漫鲜花</text>
		  			</view>
		  			<view >
		  				<image src="../../static/icon/18.png" ></image>
		  				<text>无辣不欢</text>
		  			</view>
		  			<view >
		  				<image src="../../static/icon/11.png" ></image>
		  				<text>甜蜜蛋糕</text>
		  			</view>
		  			<view >
		  				<image src="../../static/icon/19.png" ></image>
		  				<text>小吃馆</text>
		  			</view>
		  			<view >
		  				<image src="../../static/icon/20.png" ></image>
		  				<text>全部分类</text>
		  			</view>
		  		</view>
			  </swiper-item>
			</swiper>
		  </van-col>
		
		</van-row>
	</view>
</template>

<script>
	var QQMapWX = require('@/modure/qqmap-wx-jssdk.js');
	var qqmapsdk = new QQMapWX({
	    key: 'HG6BZ-TTGRO-57HWF-SHOJ6-SC4RO-2QFLJ' // 必填
	});  
	var pageobj;
	export default {
		data() {
			return {
				num:0,
				show:false,
				type:0,
				dizhi:"我"
			}
		},
		methods: {
			tiaozhuan(){
				 uni.navigateTo({
					url:"/pages/daizhi/daizhi",
				})
			},
			open(num){
				this.show=true
				this.type=num
				
			},
			
			hidde(){
				this.show=false
				this.type=0
			}
		},
		onPageScroll(e) {
			this.num=e.scrollTop
			
		},
		onLoad(){
			pageobj=this
			uni.getLocation({
			    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
				geocode:true,
			    success: function (res) {
			        var latitude = res.latitude;
			        var longitude = res.longitude;
					qqmapsdk.reverseGeocoder({
						location:{
							latitude:latitude,
							longitude:longitude
						},
						success:function(res){
							pageobj.dizhi=res.result.formatted_addresses.recommend
						},
						fail:function(err){
							console.log(err)
						}
					})
			    }
			});
		}
		
		
	}
</script>

<style>
	@import "@/static/css/meituan.css";
</style>
