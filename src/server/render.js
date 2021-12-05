import React, { Fragment } from "react";
import { StaticRouter, matchPath, Route } from "react-router-dom";
import { renderToString } from 'react-dom/server'; // 把一个组件变成字符串
import Headers from "../components/Header";
import { renderRoutes, matchRoutes } from "react-router-config";
import { Provider } from "react-redux";
import { getServerStore } from "../store";
import routes from "../routes";
export default function (req, res) {
    // csses收集每一个组件引入的样式
    let context = { csses: [] };
    const store = getServerStore(req);
    // 获取要渲染的组件
    const matchedRoutes = matchRoutes(routes, req.path); // 匹配多级路由
    let promises = [];
    matchedRoutes.forEach(item => {
        if (item.route.loadData) {
            promises.push(new Promise(function(resolve){
                return item.route.loadData(store).then(resolve, resolve)
            }));
        }
    })
    Promise.all(promises).then(function () {
        // 创建仓库的时候，仓库里的数据已经有默认值
        const content = renderToString(
            <Provider store={store}>
                <StaticRouter context={context} location={req.path}>
                    {renderRoutes(routes)}
                </StaticRouter>
            </Provider>
        );
        let cssStr = context.csses.join('\n');
        if (context.action === 'REPLACE') {
            res.redirect(302, context.url)
        } else if (context.notFound) {
            res.status(404);
        }
        res.send(`
    <html>
        <head>
            <title>React-SSR</title>
            <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css" integrity="sha384-HSMxcRTRxnN+Bdg0JdbxYKrThecOKuH5zCYotlSAcp1+c8xmyTe9GYg1l9a69psu" crossorigin="anonymous">
            <style>${cssStr}</style>
            </head>
        <body>
            <div id="root">${content}</div>
        </body>
        <script>
            window.context = {
                state: ${JSON.stringify(store.getState())}
            }
        </script>
        <script src="/client.js"></script>
    </html>
`)
    })
}