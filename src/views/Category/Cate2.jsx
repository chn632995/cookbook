import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { CateListContainer, CateContainer } from "@/views/Category/style";

class Cate2 extends Component {
    render() {
        return (
            <>
                <div>这是cate2组件</div>
            </>
        );
    }
}

export default withRouter(Cate2);
