import uStorage from './storage.js'

const prefix = 'UniAppDemo.';

const storage = {
	// 设置用户信息
	setUserInfo(userInfo) {
		// 设置全局用户信息
		getApp().globalData.userInfo=userInfo;
		return uStorage.set(prefix + 'UserInfo',userInfo);
	},
	// 获取用户信息
	getUserInfo() {
		return uStorage.get(prefix + 'UserInfo');
	},
}

export default storage
