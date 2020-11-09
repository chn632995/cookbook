// 文件：src/components/GoodCook/Detail.jsx
// 作用：菜谱详情组件，依据动态参数id展示对应菜谱的详情信息
import React, { Component } from "react";

class Detail extends Component {
    render() {
        return (
            <>
                <div>详情{this.props.match.params.id}</div>
            </>
        );
    }
}

export default Detail;
