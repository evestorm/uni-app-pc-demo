<script>
import Vue from 'vue';
import storage from '@/common/unistorage/index.js';
export default {
	globalData: {
		userInfo: storage.getUserInfo(), // 用户信息,优先获取缓存的 这个是为了防止页面刷新造成获取不到数据
		// demo页面的全局变量
		demoIndexPageData: {
			selectStudent: {
			} // 选中的学生
		},
		// 初始化app数据
		async initData() {
			// 获取AppConst 数据可以用 Vue.prototype.$AppConst
			let userInfo = Vue.prototype.$AppConst.TestUserInfo;
			storage.setUserInfo(userInfo);
			return userInfo;
		}
	},
	onLaunch() {
		this.$options.globalData.initData(); // 初始化程序数据
	},
	onShow() {},
	onHide() {}
};
</script>

<style>
/*每个页面公共css */
/* 官方ui库 */
@import '/common/css/uni.css';
/* 第三方动画库 */
@import '/common/css/animate.css';
/*colorUi库*/
@import './lib/colorui/main.css';
/*colorUi-icon库*/
@import './lib/colorui/icon.css';
/* UI基础库 */
@import '/common/css/ui-main.css';
/* 公共样式 */
@import '/common/css/common.css';
/* 自定义图标库 */
@import '/common/css/app-icon.css';
</style>
