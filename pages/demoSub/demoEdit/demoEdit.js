// 作者:于大明
import DemoStudentTe from '@/service/Demo/DemoStudentTeAppService.js';
import DemoClass from '@/service/Demo/DemoClassAppService.js';
import Enum from '@/service/Public/EnumAppService.js';


export default {
	data() {
		return {
			// --------------------------------------页面参数---------------------------
			urlOption: {}, // url参数

			// 学生Item 测试数据可参考 ：this.$AppCost.DemoEditConstData.studentItem
			studentItem: getApp().globalData.demoIndexPageData.selectStudent,
			copyItem: {}, // 复制的Item数据
			classPickData: [], // 班级选择数据
			levelPickData: [], // 学生等级数据
			favors: [{
					checked: false,
					text: '篮球'
				},
				{
					checked: false,
					text: '足球'
				},
				{
					checked: false,
					text: '羽毛球'
				},
				{
					checked: false,
					text: '跑步'
				}
			] // 学生爱好数据
		};
	},
	// 页面加载事件
	async onLoad(options) {
		this.urlOption = options;
		// 相互并行 请求班级数据和学生等级数据
		await Promise.all([
			this.getClassPick(),
			this.getStudentLevel(),
			// this.getStudentItem() 远程获取学生数据
		])
		this.initCopyItem();
		
	},
	methods: {
		// 初始化copyItem数据
		initCopyItem() {
			this.copyItem = this._.cloneDeep(this.studentItem);
			let calssIndex = this.classPickData.findIndex(x => x.id == this.studentItem.classGUID); // 选择的class的Index
			let levelIndex = this.levelPickData.findIndex(x => x.value == this.studentItem.studentLevel);
			this.$set(this.copyItem, 'calssIndex', calssIndex);
			this.$set(this.copyItem, 'levelIndex', levelIndex);
			// 设置爱好的选中
			if (this.copyItem.studentFavor) {
				let stuFavs = this.copyItem.studentFavor.split(',');
				this.favors.forEach(x => x.checked = stuFavs.find(v => v == x.text) ? true : false);
			}
		},
		// 获取学生数据
		async getStudentItem() {
			let id=this.urlOption.id;
			if(id){
				let res= await DemoStudentTe.GetViewDto({id:id});
				this.studentItem=res;
			}
		},
		// 学生等级变化
		levelPickChange(e) {
			this.copyItem.levelIndex = e.detail.value;
		},
		// 班级发生改变
		classPickChange(e) {
			this.copyItem.calssIndex = e.detail.value;
		},
		// 生日改变
		birthdayChg(e) {
			this.$set(this.copyItem, 'studentBirthday',e.detail.value); //
		},
		// 学生爱好改变
		checkboxChange(e) {
			let values = e.detail.value;
			this.favors.forEach(x => x.checked = values.find(v => v == x.text) ? true : false);
		},
		// 选择图片
		async chooseImg() {
			let [error, imgRes] = await uni.chooseImage({
				count: 1
			});
			let size = imgRes.tempFiles[0].size;
			if (size / 1024 > 1024) {
				uni.showLoading({
					title: '图片不能大于1M'
				});
			} else {
				let [error, res] = await uni.uploadFile({
					url: this.$AppConst.PicDomain,
					fileType: 'image',
					filePath: imgRes.tempFilePaths[0],
					name: 'file'
				});
				let fileData = JSON.parse(res.data);
				this.copyItem.studentHeadUrl = `${this.$AppConst.PicDomain}${fileData.path}`;
			}
		},
		// 获取班级数据
		async getClassPick() {
			const data = {
				page: 1,
				rows: 25,
				select: 'id,className',
				order: 'createTime desc',
				viewName: "View_Demo_class"
			};
			let result = await DemoClass.GetGridDto(data);
			this.classPickData = result.rows;
		},
		// 获取level数据
		async getStudentLevel() {
			const data = {
				enumTypeName: "DemoStudentTeStudentLevelEnum",
				module: "Demo"
			}
			let result = await Enum.GetEnumArray(data);
			this.levelPickData = result;
		},
		// 保存数据
		async saveData() {
			let copyItem = this.copyItem;
			// 一些选中的特殊组件需要重新赋值
			if (copyItem.calssIndex != -1) copyItem.classGUID = this.classPickData[copyItem.calssIndex].id;
			if (copyItem.levelIndex != -1) copyItem.studentLevel = this.levelPickData[copyItem.levelIndex].value;
			copyItem.studentMeRemark = this.$refs.yytEditor.getText();
			copyItem.studentFavor = this.favors.filter(x => x.checked).map(x => x.text).join(',');
			copyItem.studentBirthday = this.$filter['parseDatetime'](copyItem.studentBirthday) ;

			let res = null;
			// 有ID更新  没有就新增
			if (copyItem.id) {
				res = await DemoStudentTe.UpdateByDto(copyItem);
				// 直接赋值给修改后的数据 不用刷新表格
				this.studentItem = Object.assign(this.studentItem, copyItem);
			} else {
				res = await DemoStudentTe.CreateByDto(copyItem);
				// 刷新父级表格;
				uni.$emit(this.$AppConst.DemoIndexConstData.listRefrsh,copyItem );
			}
			if (res) {
				await uni.showToast({
					title: '保存成功'
				});
				uni.navigateBack({
					delta: 1
				});
			}

		}
	},
	computed: {},
	filters: {},
	watch: {

	}
};
