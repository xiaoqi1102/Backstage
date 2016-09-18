/**
 * Created by xiaoqi on 2016/9/8.
 */
import * as ActionTypes from '../constants/ActionTypes'
//加载健康状况列表
export const  loaderUserHealthList=()=>{

};
//打开用户健康状况详情
export const openUserHealthDetailDialog=()=>{
    return{
        type:ActionTypes.TOGGLE_USER_HEALTH_DETAIL_DIALOG,
        dialogOpen:true
    }
};
//关闭用户健康状况详情
export const  closeUserHealthDetailDialog=()=>{
  return{
      type:ActionTypes.TOGGLE_USER_HEALTH_DETAIL_DIALOG,
      dialogOpen:false
  }
};
//设置当前数据
export const setCurrentUserHealthData=(id)=>{
    return (dispatch,getState)=>{
        let state=getState();
        let {userHealth:{listData:{data}}}=state;
        let currentData=data.find((item,index)=>{
           return item.id===id;
        });
        dispatch({type:ActionTypes.SET_CURRENT_USER_HEALTH_DATA,currentUserHealthData:currentData})
        //console.log(currentData);
    }
};