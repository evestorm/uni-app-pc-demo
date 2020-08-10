<!--作者:于大明-->
<template>
	<view
		@tap="_onSelectItem(item)"
		class="p-2 pb-0 border-bottom-4"
		:class="{ 'bg-primary': item.selected, 'bg-white': !item.selected }"
	>
		<view class="d-flex j-sb">
			<view>姓名</view>
			<view>{{ item.studentName }}</view>
		</view>
		<view class="d-flex j-sb">
			<view>身高</view>
			<view>{{ item.studentHeight | formatMoney }}</view>
		</view>
		<view class="d-flex j-sb">
			<view>是否VIP</view>
			<view>{{ item.studentIsVip | boolFormatter }}</view>
		</view>
		<view class="d-flex j-sb">
			<view>班级名称</view>
			<view>{{ item.className }}</view>
		</view>
		<view class="d-flex j-sb">
			<view>学生等级</view>
			<view>{{ item.studentLevel | levelFormat('(等级备注)') }}</view>
		</view>
		<view class="d-flex j-sb">
			<view>创建时间</view>
			<view>{{ item.createTime | parseTextDate }}</view>
		</view>
		<checkbox :checked="item.selected" :class="{ checked: item.selected }" />
		<slot></slot>
		<slot name="button"></slot>
	</view>
</template>

<script>
export { default } from './yyt-student.js';
</script>

<style lang="less" scoped>
@import url('yyt-student.less');
</style>
