<template>
	<view >
		<image :src="url|imgurl" @click="upload()" :class="{red:true}"></image>
		<input type="text" v-model="massage" />
		<button type="default" @click="set">添加</button>
		<button type="default" @click="get">获取</button>
		<button type="default" @click="remove">删除</button>
		<button type="default" @click="clear">清除缓存</button>
	
	</view>
</template>

<script>
	var obj
	export default {
		data() {
			return {
				url:["../../static/icon/20161101143719_658.png"],
				massage:"原有信息"
			}
		},
		methods: {
			set(){
				uni.setStorage({
					key:"massage",
					data:obj.massage,
					success:function(res){
						console.log(res)
					},
					fail:function(err){
						console.log(err)
					}
				})
				
			},
			get(){
				uni.getStorage({
					key:"massage",
					data:obj.massage,
					success:function(res){
						console.log(res)
					},
					fail:function(err){
						console.log(err)
					}
				})
				
			},
			remove(){
				uni.removeStorage({
					key:"massage",
					data:obj.massage,
					success:function(res){
						console.log(res)
					},
					fail:function(err){
						console.log(err)
					}
				})
				
			},
			clear(){
				uni.clearStorage()
				
			},
			upload(){
				uni.chooseImage({
					count: 6, //默认9
					sizeType: ['original', 'compressed'], //可以指定是原图还是压缩图，默认二者都有
					sourceType: ['album','camera'], //从相册选择
					success: function (res) {
						obj.url=res.tempFilePaths
					    console.log(obj.url);
						for(var i in obj.url){
							uni.uploadFile({
								url:"http://192.168.31.119:3000/shops/update",
								filePath:obj.url[i],
								name:"img"+i,
								formData:{"usname":"熊猫"},
								success:function(res){
									console.log(res)
								},
								fail:function(err){
									console.log(err)
								}
							})
						}
					}
				})
			}
		},
		filters:{
			imgurl(array){
				return array[0]
			}
		},
		onLoad(){
			obj=this
		}
	}
</script>

<style>
	.red{
		width: 120px;
		height: 120px;
		border-radius: 50%;
		display: flex;
		justify-content: center;
	}
	.blue{
		background-color: #007AFF;
		width: auto;
		height: 500PX;
	}
	.black{
		background-color:#333333;
		width: auto;
		height: 100%;
	}
</style>
