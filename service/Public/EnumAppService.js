import app from '@/common/api.js'

const GetEnumArray = async (data,isShowLoading = true) => {
	let result= await app.Request({
		url: '/api/services/app/Enum/GetEnumArray',
		data: data,
		isObj: true,
		isShowLoading: isShowLoading,
	});
	return result;
};

export default {
	GetEnumArray
}
