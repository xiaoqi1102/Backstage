/**
 * Created by xiaoqi on 2016/9/9.
 */
var log4js = require('log4js');
log4js.configure({
    appenders: [
        {type: 'console'} //控制台输出
    ]
});
var logger = log4js.getLogger('normal');
logger.setLevel('INFO');

export default logger;