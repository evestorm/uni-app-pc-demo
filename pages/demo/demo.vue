<template>
	<view class="page-box">
		<!--内容-->
		<view class="page-center">
			<uni-list>
				<navigator url="/pages/demoSub/testStyle/testStyle">
					<uni-list-item title="公用样式测试"></uni-list-item>
				</navigator>
			
				<navigator url="/pages/demoSub/demoIndex/demoIndex">
					<uni-list-item title="学生测试"></uni-list-item>
				</navigator>
				
			</uni-list>
		</view>

		<!--底部-->
		<view class="page-bottom"></view>
	</view>
</template>

<script>
export { default } from './demo.js';
</script>

<style lang="less" scoped>
@import url('demo.less');
</style>
