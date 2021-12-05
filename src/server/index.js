import render from "./render";
import proxy from "express-http-proxy";
const express = require('express');
const app = express();

app.use(express.static('public'));

app.use('/api',proxy('http://127.0.0.1:4000',{
    //修改请求路径
    proxyReqPathResolver: function (req) {
        return `/api${req.url}`;
    }
}));

app.get('*', function (req, res) {
    render(req, res);
})
app.listen(3000, function () {
    console.log('server started at port 3000')
})