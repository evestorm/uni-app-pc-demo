// 作者:于大明

export default {
	name: 'yyt-student',
	// 注册属性
	props: {
		// 学生item
		studentItem: {
			type: Object,
			require: true,
			default: ()=>{
				return  {
				    "id": "d44700ab-d82c-40b2-a0dd-08d74bc0ec1b",
				    "studentName": ",mm1123",
				    "studentAge": 0,
				    "studentBirthday": null,
				    "studentHeight": 0,
				    "studentIsVip": 0,
				    "studentLevel": 0,
				    "classGUID": "a64d2ff9-ac4e-4fd7-f323-08d77fb7a9df",
				    "studentDesc": null,
				    "studentFavor": null,
				    "tenantId": "UR0700000012",
				    "isDeleted": 0,
				    "createTime": "2019-10-08 15:27:40",
				    "createGUID": null,
				    "createdName": null,
				    "modifiedTime": null,
				    "modifiedGUID": "EB87BD77-D30D-40DB-8D06-25D69C85E5C7",
				    "modifiedName": "王元元",
				    "approveState": null,
				    "approveGUID": null,
				    "approveTime": null,
				    "buUnitGUID": "GZH0900000036",
				    "studentHeadUrl": "https://pic.cwyyt.cn/upload/img/20191024/190425425_批注 2019-10-14 153500.png",
				    "studentMeRemark": null,
				    "studentFile": null,
				    "className": "软件1011"
				}
			}
		}
	},
	created(){
		
	},
	data() {
		return {
			title: {}
		};
	},
	methods: {
		// 注册事件 注意 暴露给外面的事件 以_on开头 里面的事件不用
		_onSelectItem(item) {
			item.selected=!item.selected;
			this.$emit('onSelectItem',item);
			uni.navigateTo({
				url: `/pages/demoSub/demoEdit/demoEdit?id=${item.id}`,
			});
		}
		
	},
	computed: {
		item(){
			return this.studentItem;
		}
	},
	filters: {
		levelFormat(value, after) {
			let levelType = {
				0: '',
				1: '学霸',
				2: '普通',
				3: '学渣'
			}
			return after ? levelType[value] + after : levelType[value];
		}
	},
};