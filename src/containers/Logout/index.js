import React, { Component } from "react";
import { connect } from "react-redux";
import actions from "../../store/actions/session"
class Logout extends Component{
    render(){
        return (
            <div className="row">
                <div className="col-md-6 col-md-offset-6">
                <button className="btn btn-primary" onClick={this.props.logout}>退出</button>
                </div>
            </div>
        )
    }
}

Logout = connect(
    state => state.counter,
    actions
)(Logout);

export default Logout ;