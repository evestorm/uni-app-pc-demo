const app = getApp();
export default {
	data() {
		return {
			userInfo: app.globalData.userInfo
		};
	},
	async onLoad(option) {
		this.userInfo = await app.globalData.initData();
	},
	onShow() {
		console.log('show')
	},
	onReady() {
		console.log('onReady')
	},
	methods: {
		testLongTap(){
			alert('123');
		},
		inputBlur() {
			uni.showTabBar({
				animation: true
			});
		},
		inputFocus() {
			uni.hideTabBar({
				animation: true
			});
		}
	}
}
