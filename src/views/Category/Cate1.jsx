import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { CateListContainer, CateContainer } from "@/views/Category/style";
// 导入请求的成员
import Req from "@/http/request";
import { CATEGORY } from "@/config/uri";

class Cate1 extends Component {
    // 初始化状态
    state = {
        // 左侧的分类列别数据
        cateList: [],
        // 右侧的列表数据
        cateInfoList: [],
        // 标记哪个左侧分类被选中（加active样式）
        activeList: [],
    };
    async componentDidMount() {
        try {
            let ret = await Req.get(CATEGORY);
            if (ret.data.code === 0) {
                // 获取全部的数据
                let obj = ret.data.data.category;
                // Object.entries(obj)，返回一个数组，数组第1个元素是obj的key，数组的第2个元素是obj的value
                let tmp = Object.entries(obj);
                // let tmp = Object.keys(obj);
                let cateInfoList = tmp[0][1];
                let activeList = new Array(tmp.length).fill("");
                // 默认展示第一个的
                activeList[0] = "active";
                // 修改状态
                this.setState(() => ({
                    cateList: tmp,
                    cateInfoList,
                    activeList,
                }));
            }
        } catch (error) {}
    }
    clickHandler(index) {
        let activeList = new Array(this.state.cateList.length).fill("");
        // 给指定的索引位置加上选中样式
        activeList[index] = "active";
        // 右侧的数据
        let cateInfoList = this.state.cateList[index][1];
        // 修改状态
        this.setState(() => ({
            activeList,
            cateInfoList,
        }));
    }
    render() {
        return (
            <>
                <CateListContainer>
                    {/* 左侧的div */}
                    <div>
                        <ul>
                            {this.state.cateList.map((item, index) => {
                                return (
                                    <li
                                        key={index}
                                        className={this.state.activeList[index]}
                                        onClick={this.clickHandler.bind(
                                            this,
                                            index
                                        )}
                                    >
                                        {item[0]}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                    {/* 右侧的div */}
                    <div>
                        <ul>
                            {this.state.cateInfoList.map((item, index) => {
                                return <li key={index}>{item}</li>;
                            })}
                        </ul>
                    </div>
                </CateListContainer>
            </>
        );
    }
}

export default withRouter(Cate1);
