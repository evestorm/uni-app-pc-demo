// 作者:于大明
import CY17 from '@/service/CY/CY17AppService.js';

export default {
	data() {
		return {
			// url参数
			urlOption:{
				
			},
			headBannerData: {
				current: 0, // 当前是第几个ban
				info: [{
					content: '内容 A',
					url: 'https://img.36krcdn.com/20200411/v2_16417a06088947debe0450950f8fc813_img_png'
				}, {
					content: '内容 B',
					url: 'https://img.36krcdn.com/20200411/v2_16417a06088947debe0450950f8fc813_img_png'
				}, {
					content: '内容 C',
					url: 'https://img.36krcdn.com/20200411/v2_16417a06088947debe0450950f8fc813_img_png'
				}]
			}, // 顶部的ban图
			query: {
				pageIndex: 1,
				pageSize: 10,
			},
			articleList: []
		}
	},
	onReachBottom() {
		this.query.pageIndex++;
		
	},
	// 页面加载事件
	onLoad(options) {
		this.initData();
	},
	methods: {
		initData() {
			let testArticle = {
				id: 1,
				artUrl: 'https://img.36krcdn.com/20200411/v2_9504af093fb043078090d544d0f2fbef_img_png',
				artTitle: '2020数字中国创新大赛-数字政府赛道21强出炉，四大赛题紧贴政府数字化发展需求出炉，四大赛题紧贴',
				artAuthor: '未来车报',
				artTime: '2020/04/11 16:59'
			}
			this.articleList = _.times(query.pageIndex * query.pageSize, x => testArticle);
		},
		change(e) {
			this.headBannerData.current = e.detail.current;
		},
		// 测试ajax发送
		async testAjax() {
			const data = {
				pageIndex: 1,
				pageSize: 10,
				order: 'StoreID desc'
			};

			let result = await CY17AppService.GetViewPage(data);
		}
	},
	computed: {
		calArticleList() {
			return this.articleList;
		}
	},
	filters: {
		// parseScene(value) {
		// return value+'123';
		// }
	},
	watch: {
		"query.pageIndex": {
			handler(val, oldval) {
				this.initData();
			}
		}
	}
	// ## 方法
};
