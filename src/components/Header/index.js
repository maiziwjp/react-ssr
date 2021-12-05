import React, { Component, Fragment } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import actions from "../../store/actions/session"
import styles from "./index.css";
import withStyles from "../../withStyles";
class Header extends Component {
    render() {
        return (
            <nav className="navbar navbar-inverse navbar-fixed-top">
                <div className="navbar-header">
                    <div className="navbar-brand">SSR</div>
                </div>
                <div>
                    <ul className="nav navbar-nav">
                        <li><Link to="/">首页</Link></li>
                        {
                            this.props.user && (
                                <Fragment>
                                    <li><Link to="/logout">退出</Link></li>
                                    <li><Link to="/profile">个人中心</Link></li>
                                </Fragment>
                            )
                        }
                        {
                            !this.props.user && <li><Link to="/login">登陆</Link></li>
                        }
                    </ul>
                    {
                        this.props.user && (
                            <ul className="nav navbar-nav navbar-right">
                                <li><span className={styles.user}>{this.props.user.username}</span></li>
                            </ul>
                        )
                    }
                </div>
            </nav>
        )
    }
}

Header = connect(
    state => state.session,
    actions
)(Header);

export default withStyles(Header, styles)