/**
 * Created by xiaoqi on 2016/9/9.
 */
import fetch from 'isomorphic-fetch'
import OriginConfig from '../config/OriginConfig';
export default  class FetchUtil{
    constructor(options){}
    static get baseUrl() {
        return OriginConfig.BaseUrl;
    }
    static getHeader(){
        return new Header({

        })
    }
    static Get(url){
        let fetchInit={
            method:'get',
            mode:'cors',
            cache:'default'
        };
        return fetch(url,fetchInit)
            .then(response=>response.json())
    }
}