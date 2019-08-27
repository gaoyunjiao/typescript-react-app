/*
 * @功能描述: 
 * @作者: 高云蛟
 * @Date: 2019-08-27 14:06:57
 */
// 对请求的封装，用axios或者对普通的request封装例如fetch

import _ from 'lodash';

import { ResponseType } from './dataType'

// 暂时只是get请求
export default function request(url: string, method: string = 'GET', body: any = {}, logs?: {}) {
    const init: RequestInit = {
        method,
        headers: {
            'Accept-Ranges': 'bytes',
            ...logs
        },
    };

    if(method !== 'GET') {
        init.body = JSON.stringify(body)
    }

    //request
    return fetch(url)
            .then((res: any) => {
                const result = res.json()
                return result;
            })
            .catch((err: Error) => {
                console.error('err: ', err)
            });
}

function checkStatus(response: any) {
    return response;
}