import Axios from 'axios';

const axios = Axios.create({
	// eslint-disable-next-line @typescript-eslint/naming-convention
	baseURL: 'http://127.0.0.1:3000',
	timeout: 10000, // 请求超时 20s
});

// 前置拦截器（发起请求之前的拦截）
axios.interceptors.request.use(
	response =>
	/**
     * 根据你的项目实际情况来对 config 做处理
     * 这里对 config 不做任何处理，直接返回
     */
		response,
	async error => Promise.reject(error),
);

// 后置拦截器（获取到响应时的拦截）
axios.interceptors.response.use(
	response =>
	/**
     * 根据你的项目实际情况来对 response 和 error 做处理
     * 这里对 response 和 error 不做任何处理，直接返回
     */
		response,
	async error => {
		// eslint-disable-next-line @typescript-eslint/prefer-optional-chain
		if (error.response && error.response.data) {
			console.error('[Axios Error]', error.response);
		} else {
			console.log(error);
		}

		return Promise.reject(error);
	},
);

export default axios;
