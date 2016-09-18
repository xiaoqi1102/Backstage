/**
 * Created by xiaoqi on 2016/9/7.
 */
import * as ActionTypes from '../constants/ActionTypes'
export const loaderRegistrationInfo=()=>{

};
export const openDetailDialog=()=>{
    return {
        type:ActionTypes.TOGGLE_DETAIL_DIALOG,
        detailOpen:true
    }
};

export const closeDetailDialog=()=>{
    return {
        type:ActionTypes.TOGGLE_DETAIL_DIALOG,
        detailOpen:false
    }
};

export const setCurrentRegistrationInfo=(id)=>{
    return  (dispatch,getState)=>{
        let state=getState();
        let {userRegistrationInfo:{listData:{data}}}=state;
        //console.log(listData);
        //return;
        const currentData =data.find(function (item, index) {
            return item.id==id
        });
       // console.log(currentData);
        dispatch({type:ActionTypes.SET_CURRENT_REGISTRATION_INFO,currentUserRegistrationInfo:currentData})
    };
};