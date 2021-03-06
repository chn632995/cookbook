import React, { Component } from "react";

import Cate1 from "@/views/Category/Cate1";
import Cate2 from "@/views/Category/Cate2";
import { HeaderContainer } from "@/views/Category/style";

class Index extends Component {
    state = {
        slider: "slider",
        classList: ["active", ""],
        flag: true,
    };
    clickHandler(index) {
        // 修改滑块的位置
        let slider = index === 0 ? "slider" : "slider right";
        // 修改默认选中的效果
        let classList = index === 0 ? ["active", ""] : ["", "active"];
        // 默认展示的子组件，true=cate1，false=cate2
        let flag = index === 0 ? true : false;
        // 修改最终的数据
        this.setState(() => ({
            slider,
            classList,
            flag,
        }));
    }
    render() {
        return (
            <>
                <HeaderContainer>
                    <ul>
                        <li
                            className={this.state.classList[0]}
                            onClick={this.clickHandler.bind(this, 0)}
                        >
                            分类
                        </li>
                        <li
                            className={this.state.classList[1]}
                            onClick={this.clickHandler.bind(this, 1)}
                        >
                            食材
                        </li>
                        <li className={this.state.slider}></li>
                    </ul>
                </HeaderContainer>
                {/* 具体的显示内容 */}
                {this.state.flag && <Cate1 />}
                {!this.state.flag && <Cate2 />}
            </>
        );
    }
}

export default Index;
