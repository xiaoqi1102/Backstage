var webpack = require('webpack');
var webpackDevMiddleware = require('webpack-dev-middleware');
var webpackHotMiddleware = require('webpack-hot-middleware');
var config = require('../../webpack.simple.config');
var formidable = require('formidable');
var fs = require('fs');

var express = require('express');
var app = express();
var port = 4000;
var ip = '127.0.0.1';
var path=require('path');
var compiler = webpack(config);
var routerPath=require('../../app/constants/RouterPath');
app.use(webpackDevMiddleware(compiler, {
    noInfo: true,
    publicPath: config.output.publicPath,
    hot: true,
    historyApiFallback: true,
    stats: {
        colors: true
    }
}));
//app.use(webpackDevMiddleware(compiler, { noInfo: true, publicPath: config.output.publicPath, lazy: false, watchOptions: {aggregateTimeout: 300,poll: true}}))
app.use(webpackHotMiddleware(compiler));
app.use('/', express.static(__dirname + '/'));

app.get(routerPath.rootPath, function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get(routerPath.home, function (req, res) {
    res.sendFile(__dirname + '/index.html')
});

app.get("/news", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get("/ask", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.get("/project", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.get("/cloudDoc", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.get("/cloudForm", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get("/formTemplate", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get("/formTemplatePreview", function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.post("/uploader/adminEditorImg", function(req, res) {
    var imgDir = '/public/images/';
    var form = new formidable.IncomingForm();
    form.encoding = 'utf-8';
    form.uploadDir = __dirname + imgDir;
    form.keepExtensions = true;
    form.maxFieldsSize = 2 * 1024 * 1024;   //文件大小
    form.parse(req, function(err, fields, files) {
        //
        var extName = '';
        switch (files.uploadFile.type) {
            case 'image/pjpeg':
                extName = 'jpg';
                break;
            case 'image/jpeg':
                extName = 'jpg';
                break;
            case 'image/png':
                extName = 'png';
                break;
            case 'image/x-png':
                extName = 'png';
                break;
        }
        if(extName.length == 0){
            res.json({'success': false});
        }
        var avatarName = files.uploadFile.name + Math.random() + '.' + extName;
        var newPath = form.uploadDir + avatarName;
        var newPath2 = imgDir + avatarName;
        console.log(newPath);
        fs.renameSync(files.uploadFile.path, newPath);
        res.locals.success = '上传成功';
        res.json({'success': true, 'msg': 'success', 'file_path': newPath2});
        //
    });
});

app.listen(port, function (error) {
    if (error) {
        console.error(error)
    } else {
        console.info("==>    Listening on port %s. Open up http://%s:%s/ in your browser.", port, ip, port)
    }
});
