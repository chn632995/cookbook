// 引入react全家桶
import React from "react";
import ReactDOM from "react-dom";
// 引入router
import { BrowserRouter as Router } from "react-router-dom";
// 引入根组件
import App from "./App";

// 渲染
ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root")
);
