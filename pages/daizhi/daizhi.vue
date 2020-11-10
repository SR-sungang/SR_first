<template>
	<view>
		<map id="myMap"
		    :markers="markers"
		    style="width:100%;height:300px;"
		    longitude="poi.longitude"
		    latitude="poi.latitude"
		    scale='16' show-location>
		</map>
	</view>
	
</template>

<script>
	var QQMapWX = require('@/modure/qqmap-wx-jssdk.js');
	var qqmapsdk = new QQMapWX({
	    key: 'HG6BZ-TTGRO-57HWF-SHOJ6-SC4RO-2QFLJ' // 必填
	});  
	var pageobj
	export default {
		data() {
			return {
				geocoder:"山东省济南市槐荫区经十路29851号",
				markers:[]
			}
		},
	
		formSubmit(e){
			     //调用地址解析接口
			     qqmapsdk.geocoder({
			       //获取表单传入地址
			       address:pageobj.geocoder, //地址参数，例：固定地址，address: '北京市海淀区彩和坊路海淀西大街74号'
			       success: function(res) {//成功后的回调
			         console.log(res);
			         var res = res.result;
			         var latitude = res.location.lat;
			         var longitude = res.location.lng;
			         //根据地址解析在地图上标记解析地址位置
			         pageobj.setData({// 获取返回结果，放到markers及poi中，并在地图展示
			           markers: [{
			             id: 0,
			             title: res.title,
			             latitude: latitude,
			             longitude: longitude,
			             iconPath: './resources/placeholder.png',//图标路径
			             width: 20,
			             height: 20,
			             callout: { //可根据需求是否展示经纬度
			               content: latitude + ',' + longitude,
			               color: '#000',
			               display: 'ALWAYS'
			             }
			           }],
			           poi: { //根据自己data数据设置相应的地图中心坐标变量名称
			             latitude: latitude,
			             longitude: longitude
			           }
			         });
			       },
			       fail: function(error) {
			         console.error(error);
			       },
			       complete: function(res) {
			         console.log(res);
			       }
			     })
		},
		
		onLoad(){
			pageobj=this
			
		},
		methods: {
			
		}
	}
</script>

<style>

</style>
