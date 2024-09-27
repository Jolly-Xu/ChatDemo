// index 页面的api请求
const baseFetchUrl = "http://10.32.22.196:8000"
import request from "./request";

export function chat2test(data) {
	const controller = new AbortController();
    const signal = controller.signal;
    return [fetch(baseFetchUrl + "/chat/",{
        method: 'Post',
        signal,
		body:JSON.stringify(data),
		}),controller];
}

export function postrule(data) {
	return request({
		method: 'post',
		data: data,
		url: '/rules'
	})
}

export function ConnDatabases(data) {
	return request({
		method: 'post',
		data: data,
		url: '/connect_sql/'
	})
}

export function getTablesByBasename(data) {
	return request({
		method: 'post',
		data: data,
		url: '/connect_sql/'
	})
}


