export default {
	name: 'yyt-my-testcom',
	// 注册属性
	props: {
		pageIndex: {
			type: Number,
			default: 1
		}
	},
	data() {
		return {
			title: {}
		};
	},
	methods: {
		// 注册事件
		_onClick() {
			this.$emit('onClick');
		}
	}
};