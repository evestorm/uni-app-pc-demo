<template>
	<view class="home">
		<input class="uni-input"  @blur="inputBlur" @focus="inputFocus"  style="-webkit-transform: translate3d(0, 0, 0);"/>
		<text v-if="userInfo" @longtap="testLongTap">用户ID:{{userInfo.id}},用户姓名:{{userInfo.name}}</text>
		<uni-list>
			<navigator url="/pages/homePageSub/login/login">
				<uni-list-item title="登录"></uni-list-item>
			</navigator>

			<navigator url="/pages/common/testComp/testComp">
				<uni-list-item title="组件测试"></uni-list-item>
			</navigator>
			
			<navigator url="/pages/common/test/test">
				<uni-list-item title="测试页面"></uni-list-item>
			</navigator>
		</uni-list>
		<text class="iconfont icon-edit"></text>
	</view>
</template>

<script>
export { default } from './homePage.js';
</script>

<style lang="less" scoped>
@import url('homePage.less');
</style>
