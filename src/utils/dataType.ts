/*
 * @功能描述: 
 * @作者: 高云蛟
 * @Date: 2019-08-27 14:12:48
 */
export interface ListData {
    id: number,
    title: string,
    content: string
}

export interface HellData {
    total: number,
    pageSize: number,
    pageNo: number,
    data: Array<ListData>
}

export interface ActionType {
    type: string,
    payload: any
}

export interface HelloPropsType {
    data: Array<ListData>,
    dispatch: void,
    HIDE: () => void,
    SHOW: () => void
}

export interface ResponseType {
    statusCode: number,
    message: string,
    data: Array<ListData>
}