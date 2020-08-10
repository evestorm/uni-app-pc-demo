<!--作者:于大明-->
<template>
	<view class="demo-index-head">
		<uni-nav-bar :fixed="false" color="#333333" background-color="#FFFFFF" right-icon="scan">
			<block slot="left">
				<navigator :url="`/pages/demoSub/demoDetail/demoDetail?id=21321`">
					<view class="row a-center">
						<view>北京</view>
						<uni-icons type="arrowdown" color="#333333" size="22" />
					</view>
				</navigator>
			</block>
			<view class="d-flex a-center bg-gray radius-20 " style="height: 60rpx;line-height: 60rpx; width: 500rpx;">
				<uni-icons type="search" size="22" color="#666666" />
				<input
					confirm-type="search"
					type="text"
					v-model="searhText"
				/>
			</view>
		</uni-nav-bar>
	</view>
</template>

<script>
 export { default } from './demo-index-head.js';
</script>

<style lang="less" scoped>
@import url('demo-index-head.less');
</style>
