<script>
	var QQMapWX = require('@/modure/qqmap-wx-jssdk.js');
	var qqmapsdk = new QQMapWX({
	    key: 'HG6BZ-TTGRO-57HWF-SHOJ6-SC4RO-2QFLJ' // 必填
	});  
	export default {
		onLaunch: function() {
			uni.getLocation({
			    type: 'gcj02', //返回可以用于uni.openLocation的经纬度
			    geocode:true,
			    success: function (res) {
			        var latitude = res.latitude;
			        var longitude = res.longitude;
			    	uni.openLocation({
			    		latitude:latitude,
			    		longitude:longitude,
			    		success(res) {
			    			console.log("好哇还记得哈")
			    		}
			    	})
			    }
			});
		},
		onShow: function() {
			console.log('App Show')
		},
		onHide: function() {
			console.log('App Hide')
		}
	}
</script>

<style>
	/*每个页面公共css */
</style>
