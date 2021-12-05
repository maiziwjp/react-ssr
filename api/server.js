const express = require('express');
const bodyParse = require('body-parser');
const session = require('express-session');
const app = express();
const users = [{id: 1, name: 'jupeng1'}, {id: 2, name: 'jupeng2'}]

app.use(bodyParse.urlencoded({ extended: true }));
app.use(bodyParse.json()); 
app.use(session({
    saveUninitialized: true,
    resave: true,
    secret: 'jupeng'
}))
app.get('/api/users', function (req, res) {
    res.json(users);
})
app.post('/api/login', function (req, res) {
    const user = req.body;
    req.session.user = user;
    res.json({
        code: 0,
        data: {
            user,
            success: '登录成功'
        }
    })
})
app.get('/api/logout', function (req, res) { 
    req.session.user = null;
    res.json({
        code: 0,
        data: {
            success: '退出成功'
        }
    })
})
app.get('/api/user', function (req, res) { 
    const user = req.session.user;
    if(user){
        res.json({
            code: 0,
            data: {
                user,
                success: '获取用户信息成功'
            }
        })
    }else{
        res.json({
            code: 1,
            data: {
                error: '用户未登录'
            }
        })
    }
})
app.listen(4000)