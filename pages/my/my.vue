<template>
	<view >
		<block v-if="userInfo">用户ID:{{userInfo.id}},用户姓名:{{userInfo.name}}</block>
		<uni-list>
			<navigator url="/pages/mySub/updatePwd/updatePwd">
				<uni-list-item title="修改密码" ></uni-list-item>
			</navigator>
		</uni-list>
	</view>
</template>

<script>
export { default } from './my.js';
</script>

<style lang="less" scoped>
@import url('my.less');
</style>
