require('babel-register');

if (process.env.NODE_ENV === 'development') {
    console.log('加载开发服务器.');
    require('./server/dev/server');
} if (process.env.NODE_ENV === 'simple') {
    console.log('加载simple服务器.');
    require('./server/simple/server');
} else {
    //require('./server/simple/server');
    require('./server/prod/server');
}
