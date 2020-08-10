<!--作者:于大明-->
<template>
	<view>
		<!--头部搜索-->
		<demo-index-head @onChgSearch="onChgSearch"></demo-index-head>

		<!--列表展示-->
		<view class="page-center">
			<uni-swipe-action>
				<uni-swipe-action-item
					:options="swipeOption"
					@click="swiperClick($event, index)"
					v-for="(item, index) in calPageList"
					:key="index"
				>
					<view class="flex-1">
						<yyt-student :studentItem="item" @onSelectItem="selectItem">
							<view>我放在默认插槽里面</view>
							<view slot="button">
								<button type="primary" plain="true" @tap.stop="deleteStudent(index)">
									删除
								</button>
							</view>
						</yyt-student>
					</view>
				</uni-swipe-action-item>
			</uni-swipe-action>

			<view class="text-center" v-show="isAllLoad">
				----我也是有底线的-----
			</view>
			<view class="flex-column a-center d-flex" v-show="isEmpty">
				<image
					style="width: 140rpx;height: 120rpx;"
					src="https://pic.cwyyt.cn/upload/img/20200409/1216271627_empty-data.png"
				></image>
				<text>暂无数据</text>
			</view>
		</view>
	</view>
</template>

<script src="./demoIndex.js"></script>

<style lang="less" scoped>
@import url('demoIndex.less');
</style>
