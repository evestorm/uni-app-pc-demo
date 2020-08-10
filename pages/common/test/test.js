import CY17AppService from '@/service/CY/CY17AppService.js';

const app = getApp();
export default {
	data() {
		return {
			userInfo: app.userInfo, // 标注title
			obj: {
				test: null
			}
		};
	},
	// 页面加载事件
	onLoad() {
		this.obj = this.$util.null2str(this.obj);
		console.log(this.userInfo);
		let employees = [{
				'name': 'zhangsan',
				'age': 30,
				salary: 5000
			},
			{
				'name': 'lisi',
				'age': 36,
				salary: 4000
			},
			{
				'name': 'wangwu',
				'age': 32,
				salary: 6000
			}
		];

		// 获取所有员工姓名，并以”，“分割
		let names = this._.chain(employees)
			.map(x => x.name)
			.join(",")
			.value();
		console.log(names); // 输出：zhangsan,lisi,wangwu
	},
	methods: {
		// 测试ajax发送
		async testAjax() {
			const data = {
				pageIndex: 1,
				pageSize: 10,
				order: 'StoreID desc'
			};
			
			let result= await CY17AppService.GetViewPage(data);
			debugger;
		},
		openTypeError(error) {
			console.error('open-type error:', error);
		}
	}
};
