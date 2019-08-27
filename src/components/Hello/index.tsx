import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HelloPropsType } from '../../utils/dataType';

class Hello extends Component<HelloPropsType> {

    hideList() {
        this.props.HIDE();
    }

    showList() {
        this.props.SHOW();
    }

    render() {
        const { data } = this.props;
        return (
            <div>
                {
                    data.length > 0 ? (
                        <ul>
                            {
                                data.map(item => <li key={item.id}>{item.content}</li>)
                            }
                        </ul>
                    ) : null
                }
                <button onClick={this.hideList.bind(this)}>隐藏</button>
                <button onClick={this.showList.bind(this)}>显示</button>
            </div>
        )
    }
}

// 从全局state获取组件想要的state
function mapStateToProps(state: any) {
    return {
        data: state.helloReducer.data
    }
}

// 从全局函数获取组件想要的函数
function mapDispatchToProps(dispatch: any) {
    return {
        HIDE: function() {
            dispatch({
                type: 'HIDE',
                payload: {}
            })
        },
        SHOW: function() {
            dispatch({
                type: 'SHOW',
                payload: {}
            })
        }
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Hello);