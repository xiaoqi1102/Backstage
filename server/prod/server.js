/**
 * Created by xiaoqi on 2016/9/6.
 */
import path from 'path';
import Express from 'express';
import httpRequestLogger from 'morgan';
import bodyParser from 'body-parser';


import swig from 'swig';
import React from 'react';
import {renderToString} from '../../node_modules/react-dom/server';
import {match, RouterContext} from 'react-router';

import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux'
import thunk from 'redux-thunk' //中间键，diapatch异步实现
import {syncHistoryWithStore} from 'react-router-redux'
import rootReducer from './../../app/reducers/index'

//路由部分
//前端路由
import routes from './../../app/router.js';
//引入公共函数
import * as maple from './../../app/lib/index';

//导入日志
import logger from './logger';

const app = new Express();
const port = 4000;

app.use(httpRequestLogger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(Express.static(path.join(__dirname, '/'))); //设置当前目录为静态资源根目录.

//视图渲染
app.use(function (req, res) {
    const store = createStore(
        rootReducer,
        applyMiddleware(thunk)
    );

    match({routes: routes, location: req.url}, (error, redirectLocation, renderProps) => {
        if (error) {
            res.status(500).send(error.message);
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search);
        } else if (renderProps) {
            getReduxPromise().then(()=> {

                const maple = renderToString(
                    <Provider store={store}>
                        <RouterContext {...renderProps}/>
                    </Provider>
                );
                const initialState = store.getState();
                const htmlPath = path.join(__dirname, './views/index.html');

                logger.info('开始渲染.');

                var page = swig.renderFile(htmlPath, {
                    title: 'Maple',
                    author: 'maple',
                    keywords: 'maple',
                    description: 'maple-base',
                    maple: maple,
                    initialState: initialState
                });
                res.status(200).send(page);
            });

            function getReduxPromise() {
                let {query, params} = renderProps;
                let comp = renderProps.components[renderProps.components.length - 1].WrappedComponent;
                let promise = comp.fetchData ?
                    comp.fetchData({query, params, store}) :
                    Promise.resolve();

                return promise;
            }
        } else {
            console.log(error);
            res.status(404).send('Sorry, Not found');
        }
    });
});


app.listen(port, (error) => {
    if (error) {
        console.error(error)
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
    }
});