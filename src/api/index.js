// index 页面的api请求
const baseFetchUrl = "/api"
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
		url: '/select_column/'
	})
}



export function changeDB(data) {
	return request({
		method: 'post',
		data: data,
		url: '/get_db_name/'
	})
}


export function getHistory() {
	return request({
		method: 'GET',
		url: '/history_message/'
	})
}

export function openhistory(id) {
	return request({
		method: 'POST',
		data:{
			id:id
		},
		url: '/choose_chat/'
	})
}