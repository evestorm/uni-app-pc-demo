<!--作者:于大明-->
<template>
	<view class="page-box">
		<!--头部搜索-->
		<view class="page-top bg-white">
			<uni-nav-bar
				:fixed="false"
				color="#333333"
				background-color="#FFFFFF"
				right-icon="scan"
				@click-left="showCity"
				@click-right="scan"
			>
				<block slot="left">
					<view class="row a-center">
						<view>北京</view>
						<uni-icons type="arrowdown" color="#333333" size="22" />
					</view>
				</block>
				<view class="row a-center bg-gray radius-20 " style="height: 60rpx;line-height: 60rpx;">
				 <navigator :url="`/pages/demoSub/demoDetail/demoDetail?id={currentSelectItem.id}`"><uni-icons type="search" size="22" color="#666666" /></navigator>  
					<input
						confirm-type="search"
						type="text"
						placeholder="输入标题搜索"
						@confirm="confirm"
					/>
				</view>
			</uni-nav-bar>
		</view>

		<!--列表-->
		<view class="page-center">
			<view class="center-t">
				<uni-swiper-dot :info="headBannerData.info" :current="headBannerData.current" field="content" mode="nav">
					<swiper class="swiper-box" @change="change" :duration="3000">
						<swiper-item v-for="(item, index) in headBannerData.info" :key="index">
							<image
								:src="item.url"
								mode="aspectFill"
								style="height: 360rpx;"
							></image>
						</swiper-item>
					</swiper>
				</uni-swiper-dot>
			</view>
			
			<view class="center-list mt-1 p-2 pb-0 bg-white" v-for="(item,index) in calArticleList" :key="index">
				<view class="d-flex">
					<view class="center-l" style="width: 180rpx;">
						<image
							src="https://img.36krcdn.com/20200411/v2_9504af093fb043078090d544d0f2fbef_img_png"
							mode="aspectFill"
							style="width: 180rpx;height: 140rpx;"
						></image>
					</view>
					<view class="center-r ml-1 d-flex flex-column j-sa">
						<view class="right-t font-28 line-h-sm text-ellipsis-2 text-dark">
							2020数字中国创新大赛-数字政府赛道21强出炉，四大赛题紧贴政府数字化发展需求
							出炉，四大赛题紧贴
						</view>
						<view class="right-b d-flex j-sb text-gray-light">
							<view class="bottom-l">	未来汽车日报</view>
							<view class="bottom-r">2020/04/11 16:59</view>
						</view>
					</view>
				</view>
			</view>
			
		</view>

		<!--底部-->
		<view class="page-bottom"></view>
	</view>
</template>

<script>
export { default } from './demoIndex.js';
</script>

<style lang="less" scoped>
@import url('demoIndex.less');
</style>
