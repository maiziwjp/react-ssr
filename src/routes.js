import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import Home from "./containers/Home";
import Counter from "./containers/Counter";
import App from "./containers/App";
import Login from "./containers/Login";
import Logout from "./containers/Logout";
import Profile from "./containers/Profile";
import NotFound from "./containers/NotFound";
// 要渲染多级路由，
export default [
    {
        path: '/',
        component: App,
        loadData: App.loadData,
        routes: [{
            path: '/',
            component: Home,
            exact: true,
            key: '/',
            loadData: Home.loadData // 加载数据，如果有此属性，就加载异步数据
        },
        {
            path: '/counter',
            component: Counter,
            exact: true,
            key: '/counter'
        },{
            path: '/login',
            component: Login,
            exact: true,
            key: '/login'
        },{
            path: '/logout',
            component: Logout,
            exact: true,
            key: '/logout'
        },{
            path: '/profile',
            component: Profile,
            exact: true,
            key: '/profile'
        },{
            component: NotFound,
            key: '/notfound'
        }]
    }
]
// export default (
//     <Fragment>
//         <Route path="/" exact component={Home} />
//         <Route path="/counter" exact component={Counter} />
//     </Fragment>
// )