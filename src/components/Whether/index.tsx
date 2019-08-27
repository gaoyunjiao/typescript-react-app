import React, { Component } from 'react';
import { connect } from 'react-redux';

interface PropsType {
    LOAD_START: () => void,
    data: Array<any>
}

class Whether extends Component<PropsType> {
    loadData() {
        this.props.LOAD_START()
    }

    render() {
        const { data = [] } = this.props
        console.log('this.props =====>', this.props)
        return (
            <div>
                <button onClick={this.loadData.bind(this)}>拉取数据</button>
                <ul>
                    {
                        data && data.map((day: any, index: number) => <li key={index}>{day.date}/{day.week}:{day.tem}-{day.air_tips}</li>)
                    }
                </ul>
            </div>
        )
    }
}

// 从全局state获取组件想要的state
function mapStateToProps(state: any) {
    return {
        data: state.whetherReducer.data
    }
}

// 从全局函数获取组件想要的函数
function mapDispatchToProps(dispatch: any) {
    return {
        LOAD_START: function() {
            dispatch({
                type: 'LOAD_START',
                payload: {}
            })
        },
        LOAD_SUCCESS: function() {
            dispatch({
                type: 'LOAD_SUCCESS',
                payload: {}
            })
        },
        LOAD_ERROR: function() {
            dispatch({
                type: 'LOAD_ERROR',
                payload: {}
            })
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Whether);
