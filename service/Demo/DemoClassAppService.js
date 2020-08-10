import app from '@/common/api.js'

// 获取班级数据
const GetGridDto = async (data,isShowLoading = true) => {
	let result= await app.Request({
		url: '/api/services/app/democlass/GetGridDto',
		data: data,
		isObj: true,
		isShowLoading: isShowLoading,
	});
	return result;
};



export default {
	GetGridDto
}
