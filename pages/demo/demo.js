import CY17 from '@/service/CY/CY17AppService.js';

const app = getApp();
export default {
	data() {
		return {
			title: '模板页', // 页面的title
			firstName:'123',
			lastName:'456'
		};
	},
	// 页面加载事件
	onLoad(options) {
		this.fullName = 'John Doe'
	},

	methods: {
		// 测试ajax发送
		async testAjax() {
			const data = {
				pageIndex: 1,
				pageSize: 10,
				order: 'StoreID desc'
			};

			let result = await CY17AppService.GetViewPage(data);
			debugger;
		}
	},
	computed: {
		// fullName: {
		//    get: function () {
		//        return this.firstName+this.lastName
		//    },
		//    set: function (newValue) {
		//        var names = newValue.split(' ')
		//        this.firstName = names[0]
		//        this.lastName = names[names.length - 1]
		//    }
		// }
		//this.fullName = 'John Doe' // set测试
	},
	filters: {
		// parseScene(value) {
		// return value+'123';
		// }
	},
	watch: {
		//"currentStore.storeId": {
		//    handler: function (val, oldval) {
		//        if (val) {
		//            vmDivItem1.$options.methods.getMonthSummaryData.bind(vmDivItem1)(1, val);
		//            vmDivItem3.$options.methods.getTodyBookData.bind(vmDivItem3)(1, val);
		//        }
		//    }
		//}
	}
};
