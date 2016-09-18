/**
 * Created by xiaoqi on 2016/9/5.
 */
require('babel-register');
import path from 'path';
import webpack from 'webpack';
import webpackConfig from '../../webpack.dev.config';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';

import Express from 'express';

const app = new Express();
const port = 5000;

// 注意: 不能添加 "lazy:true" 选项, 添加后客户端无法热更新.
const compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    // lazy: true,
    hot: true,
    inline: true,
    progress: true,
    historyApiFallback: true,
    stats: {colors: true},
    publicPath: webpackConfig.output.publicPath
}));
app.use(webpackHotMiddleware(compiler));

app.use(Express.static(path.join(__dirname, '/'))); //设置当前目录为静态资源根目录.


// 处理直接输入 URL 的情况.
app.get('*', function (request, response) {
    response.sendFile(path.join(__dirname, '/', 'index.html'))
});

app.listen(port, (error) => {
    if (error) {
        console.error(error)
    } else {
        console.info(`==> 🌎  Listening on port ${port}. Open up http://localhost:${port}/ in your browser.`)
    }
});