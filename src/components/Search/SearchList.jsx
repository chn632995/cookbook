import React, { Component } from "react";
import { withRouter } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "@/store/actions/action_search";
// 引入请求需要的信息
import Req from "@/http/request";
import { GOODCOOK } from "@/config/uri";

class SearchList extends Component {
    state = {
        list: [],
    };
    render() {
        return <>搜索词是：{this.props.search}</>;
    }
    async componentDidMount() {
        try {
            let ret = await Req.get(GOODCOOK + "?keyword=" + this.props.search);
            if (ret.data.code === 0) {
                this.setState(() => ({ list: ret.data.data }));
            }
        } catch (error) {}
    }
}

const mapStateToProps = (state) => {
    return {
        search: state.get("reducer_search").get("search"),
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        submitHandler(keyword) {
            dispatch(actions.actionCreator(keyword));
        },
    };
};

export default withRouter(
    connect(mapStateToProps, mapDispatchToProps)(SearchList)
);
