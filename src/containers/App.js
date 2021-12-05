import React, { Component, Fragment } from "react";
import { Route } from "react-router-dom";
import Headers from "../components/Header";
import routes from "../routes";
import { renderRoutes } from "react-router-config";
import actions from "../store/actions/session"
import styles from "./App.css";
import withStyles from "../withStyles";

class App extends Component {
    render() {
        return (
            <Fragment>
                <Headers staticContext={this.props.staticContext} />
                <div className={styles.app}>
                {renderRoutes(this.props.route.routes)}
                </div>
            </Fragment>
        )
    }
}

App.loadData = function(store){
    return store.dispatch(actions.getUser())
}

export default withStyles(App, styles);