import React, { Fragment } from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter, Route } from 'react-router-dom';
// renderRoutes渲染多级路由的，matchRoutes实现路由匹配
import { renderRoutes, matchRoutes } from "react-router-config";
import Headers from "../components/Header";
import routes from '../routes';
import { getClientStore } from "../store";
// 使用hydrate是因为我们在服务端已经render了，在这里再次使用render不可以，所以使用hydrate
// 意思不用重新渲染，直接绑定事件就可以了，不用再完全重新渲染，再来一次
ReactDOM.hydrate(
    <Provider store={getClientStore()}>
        <BrowserRouter>
        {renderRoutes(routes)}
        </BrowserRouter>
    </Provider>, document.getElementById('root'))