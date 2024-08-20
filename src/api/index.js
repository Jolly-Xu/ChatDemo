// index 页面的api请求

import request from "./request";

export function chat2test(params) {
	const controller = new AbortController();
    const signal = controller.signal;
    return [fetch("http://127.0.0.1:8080/chat",{
        method: 'Get',
        signal}),controller];
}

export function postrule(data) {
	return request({
		method: 'post',
		data: data,
		url: '/rules'
	})
}

export function updaterule(id, data) {
	return request({
		method: 'post',
		data: data,
		url: '/rules/${id}'
	})
}
