<template>
	<view class="page-box">
		<view class="cu-form-group margin-top">
			<view class="title">学生班级</view>
			<picker
				@change="classPickChange"
				:range="classPickData"
				:value="copyItem.calssIndex"
				range-key="className"
			>
				<view class="picker">
					{{ copyItem.calssIndex > -1 ? classPickData[copyItem.calssIndex].className : '请选择' }}
				</view>
			</picker>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">学生姓名</view>
			<input placeholder="学生姓名" name="input" v-model="copyItem.studentName" class="text-right" />
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">学生年龄</view>
			<input
				placeholder="学生年龄"
				type="number"
				name="input"
				v-model="copyItem.studentAge"
				class="text-right"
			/>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">学生生日</view>
			<picker
				mode="date"
				:value="copyItem.studentBirthday"
				start="1900-01-01"
				end="2030-09-01"
				@change="birthdayChg"
			>
				<view class="picker">{{ copyItem.studentBirthday|parseTextDate }}</view>
			</picker>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">学生身高</view>
			<input
				placeholder="学生身高"
				type="digit"
				name="input"
				v-model="copyItem.studentHeight"
				class="text-right"
			/>
		</view>

		<view class="cu-form-group margin-top">
			<view class="title">是否VIp</view>
			<switch
				@change="copyItem.studentIsVip = copyItem.studentIsVip ? 0 : 1"
				:class="copyItem.studentIsVip ? 'checked' : ''"
				:checked="copyItem.studentIsVip ? true : false"
			></switch>
		</view>
		
		<view class="cu-form-group align-start margin-top">
			<view class="title">学生头像</view>
			<view class="cu-avatar radius bg-gray" @tap="chooseImg">
				<image class="cu-avatar" :src="copyItem.studentHeadUrl" mode="aspectFill"></image>
			</view>
		</view>
		
		<view class="cu-form-group margin-top">
			<view class="title">学生等级</view>
			<picker
				@change="levelPickChange"
				:range="levelPickData"
				:value="copyItem.levelIndex"
				range-key="text"
			>
				<view class="picker">
					{{ copyItem.levelIndex > 0 ? levelPickData[copyItem.levelIndex].text : '请选择' }}
				</view>
			</picker>
		</view>

		<view class="cu-form-group align-start margin-top d-flex">
			<view class="title">学生爱好</view>
			<checkbox-group @change="checkboxChange" class="a-self-center">
				<view v-for="(favItem, index) in favors" :key="index" class="d-inline-block">
					<checkbox
						:class="favItem.checked ? 'checked' : ''"
						:checked="favItem.checked"
						:value="favItem.text"
					></checkbox>
					{{ favItem.text }}
				</view>
			</checkbox-group>
		</view>
		
		<view class="cu-form-group align-start margin-top">
			<view class="title">学生描述</view>
			<textarea maxlength="999" placeholder="多行文本输入框" v-model="copyItem.studentDesc"></textarea>
		</view>
		
		<view class="cu-form-group align-start margin-top">
			<view class="title">学生自传</view>
			<yyt-editor ref="yytEditor" :inputText="copyItem.studentMeRemark"></yyt-editor>
		</view>
		  <button type="primary" @tap="saveData">保存</button>
	</view>
</template>

<script>
export { default } from './demoEdit.js';
</script>

<style lang="less" scoped>
@import url('demoEdit.less');
</style>
