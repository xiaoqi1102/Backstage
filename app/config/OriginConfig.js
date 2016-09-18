/**
 * Created by xiaoqi on 2016/9/9.
 */
let origin = null;
if(process.env.NODE_ENV=='production'){
    origin='localhost:5000'
}else {
    origin='localhost:5000'
}

module.exports={
    BaseUrl:origin
};