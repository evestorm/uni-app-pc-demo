import app from '@/common/api.js'

// 学生表格
const GetViewPage = async (data,isShowLoading = true) => {
	let result= await app.Request({
		url: '/api/services/app/DemoStudentTe/GetViewPage',
		data: data,
		isObj: true,
		isShowLoading: isShowLoading,
	});
	return result;
};



// 更新数据
const UpdateByDto = async (data,isShowLoading = true) => {
	let result= await app.Request({
		url: '/api/services/app/DemoStudentTe/UpdateByDto',
		data: data,
		isObj: true,
		isShowLoading: isShowLoading,
	});
	return result;
};


// 创建数据
const CreateByDto = async (data,isShowLoading = true) => {
	let result= await app.Request({
		url: '/api/services/app/DemoStudentTe/CreateByDto',
		data: data,
		isObj: true,
		isShowLoading: isShowLoading,
	});
	return result;
};

// 获取单个数据
const GetViewDto = async (data,isShowLoading = true) => {
	let result= await app.Request({
		url: '/api/services/app/DemoStudentTe/GetViewDto',
		data: data,
		isObj: false,
		isShowLoading: isShowLoading,
	});
	return result;
};


// 删除数据
const DeleteByDto = async (data,isShowLoading = true) => {
	let result= await app.Request({
		url: '/api/services/app/DemoStudentTe/DeleteByDto',
		data: data,
		isObj: true,
		isShowLoading: isShowLoading,
	});
	return result;
};
export default {
	GetViewPage,
	UpdateByDto,
	CreateByDto,
	GetViewDto,
	DeleteByDto
}
