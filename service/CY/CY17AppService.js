import app from '@/common/api.js'

// 获取门店优惠券
const GetViewPage = async (data,isShowLoading = true) => {
	let result= await app.Request({
		url: '/api/services/app/CY17/GetViewPage',
		data: data,
		isObj: true,
		isShowLoading: isShowLoading,
	});
	return result;
};

export default {
	GetViewPage
}
