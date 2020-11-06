import React, { Component } from "react";

// 导入布局文件（底部导航）
import Layout from "@/components/Layout";
// 引入全局样式
import GlobalStyle from "./style";

class App extends Component {

    render() {
        return (
            <>
                {/* 全局样式使用 */}
                <GlobalStyle />
                {/* 布局文件使用 */}
                <Layout />
            </>
        );
    }
}

export default App;
