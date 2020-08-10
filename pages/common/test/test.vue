<template>
	<view>
		<!--头部-->
		<view ></view>
		<input class="uni-input"  v-model="obj.test" />
		<!--内容-->
		<view >
			<uni-calendar 
			    :insert="true"
			    :lunar="true" 
			    :start-date="'2019-3-2'"
			    :end-date="'2019-5-20'"
			     ></uni-calendar>
			<view class="uni-padding-wrap uni-common-mt"><button type="primary" @click="testAjax()">{{obj.test}}</button></view>
			<view class="padding flex flex-wrap justify-between align-center bg-white">
				<button class="cu-btn" @click="testAjax()">测试ajax</button>
				<button class="cu-btn round">圆角</button>
				<button class="cu-btn cuIcon"><text class="cuIcon-emojifill"></text></button>
			</view>
			<view class="padding-xl">
				<button class="cu-btn block line-orange lg">
					<text class="cuIcon-upload"></text>
					图标
				</button>
				<button class="cu-btn block bg-blue margin-tb-sm lg">
					<text class="cuIcon-loading2 cuIconfont-spin"></text>
					{{ '2019/01/01 12:00:00' | parseShortDate }}
				</button>
				<button class="cu-btn block bg-black margin-tb-sm lg" loading>原生加载</button>
			</view>
		</view>
		

		<!--底部-->
		<view id="PageBottom"></view>
	</view>
</template>

<script>
export { default } from './test.js';
</script>

<style lang="less" scoped>
@import url('test.less');
</style>
