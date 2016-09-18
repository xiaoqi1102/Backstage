/**
 * Created by xiaoqi on 2016/9/6.
 */
if (process.env.NODE_ENV === 'development') {
    module.exports = require('./configureStore.dev');
} else {
    module.exports = require('./configureStore.prod');
}