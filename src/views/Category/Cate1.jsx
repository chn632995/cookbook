import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { CateListContainer, CateContainer } from "@/views/Category/style";

class Cate1 extends Component {
    render() {
        return (
            <>
                <div>这是cate1组件</div>
            </>
        );
    }
}

export default withRouter(Cate1);
