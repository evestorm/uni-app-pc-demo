import Vue from 'vue'
import App from './App'
import Router, {RouterMount} from 'uni-simple-router';

// 引入vuex
import store from '@/store'

// 第三方文件引入(lib目录下的全局引入)
import _ from "@/lib/lodash/lodash.js"
import moment from "@/lib/moment/moment.min.js"

// 自定义开发文件引入(common目录下的全局引入)
import * as filters from '@/common/vue-filter/vue-filters.js'
import storage from '@/common/unistorage/index.js'
import util from '@/common/util.js'
import AppConst from '@/AppConst.js'

Vue.config.productionTip = false
App.mpType = 'app';

//----------------------------全局引入---------------------
let filterObj = {}; // 全局filter obj
// 添加全局过滤器
Object.keys(filters).forEach(key => {
	Vue.filter(key, filters[key]);
	filterObj[key] = filters[key];
});

// 扩展vue原型属性
prototypeEx(Vue);

// 扩展Vue原型
function prototypeEx(Vue) {
	// vue prototype 扩展
	Vue.prototype._ = _; // 加入 lodash使用
	Vue.prototype.$moment = moment; // 加入 moment使用
	Vue.prototype.$storage = storage; // 用于存储
	Vue.prototype.$store = store; // vuex
	Vue.prototype.$util = util; // vuex
	Vue.prototype.$AppConst = AppConst; // vuex
	Vue.prototype.$filter = filterObj; // 全局过滤
}

//---------------------------处理路由配置-------------------------------
Vue.use(Router);

// 参考 http://hhyang.cn/src/router/api/routerInsatll.html#router-%E6%9E%84%E5%BB%BA%E9%80%89%E9%A1%B9
const router = new Router({
    routes:ROUTES, //路由表
	h5:{
		 loading:false,
	}
});

// 全局路由前置守卫
router.beforeEach((to, from, next) => {
    let userInfo=getApp().globalData.userInfo;
	if(to.meta&&to.meta.isNoLogin&&!userInfo){
		let  redirect=from.path+util.urlEncode(from.query,'?');
		uni.navigateTo({
			url: `/pages/homePageSub/login/login?redirect=${redirect}`
		});
	}else{
		next()
	}
})


const app = new Vue({
	store,
	...App
});

// #ifdef H5
	RouterMount(app,'#app');
// #endif

// #ifndef H5
	app.$mount(); //为了兼容小程序及app端必须这样写才有效果
// #endif