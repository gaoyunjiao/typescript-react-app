/*
 * @功能描述: 
 * @作者: 高云蛟
 * @Date: 2019-08-27 15:12:47
 */

 // request 处理结果
import request from '../utils/request'

class Api {
    static requsetData = async() => {
        const url: string = 'https://www.tianqiapi.com/api/?version=v1';
        const result = await request(url);
        return result;
    }
}

export default Api;