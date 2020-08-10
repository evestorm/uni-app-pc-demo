<template>
	<view class="page-box">
		<yyt-editor></yyt-editor>
		<!-- <yyt-my-testcom :pageIndex="pageIndex" @onClick="testClick"></yyt-my-testcom> -->
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '模板页', // 页面的title
			pageIndex: 2
		};
	},
	// 页面加载事件
	onLoad(options) {},
	methods: {}
};
</script>

<style lang="less" scoped>
@import url('testComp.less');
</style>
