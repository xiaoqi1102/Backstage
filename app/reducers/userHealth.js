/**
 * Created by xiaoqi on 2016/9/8.
 */
import * as ActionTypes from '../constants/ActionTypes';
const initialState={
    listData:{
        data: [
            {
                avatarUrl: "http://192.168.1.232:8048/common/v1/file/57cb8ac0d4616805d1659b7a.png",
                email: "1455398554@qq.com",
                id: "57ca91a4d4616805d18f8bb0",
                name: "拉拉",
                phone: "15302212088",
                registerDate: "Sat Sep 03 17:02:28 CST 2016",
                role: "USER"
            },
            {
                avatarUrl: "http://192.168.1.232:8048/common/v1/file/57cd4041d461681f55b46d7b.png",
                email: "14552348554@qq.com",
                id: "57ca9facd4616805d18f8bbe",
                name: "小杜",
                phone: "13246850819",
                registerDate: "Sat Sep 03 18:02:20 CST 2016",
                role: "PUBLIC_DOCTOR"
            }
        ],
        draw: 1,
        recordsFiltered: 38,
        recordsTotal: 38
    },
    currentUserHealthData:{
        avatarUrl: "http://192.168.1.232:8048/common/v1/file/57cd4041d461681f55b46d7b.png",
        email: "14552348554@qq.com",
        id: "57ca9facd4616805d18f8bbe",
        name: "小杜",
        phone: "13246850819",
        registerDate: "Sat Sep 03 18:02:20 CST 2016",
        role: "PUBLIC_DOCTOR"
    },
    dialogOpen:false
};

export default (state=initialState,action={})=>{
    switch (action.type){
        case ActionTypes.TOGGLE_USER_HEALTH_DETAIL_DIALOG:
            return Object.assign({},state,{
               dialogOpen:action.dialogOpen
            });
        case ActionTypes.SET_CURRENT_USER_HEALTH_DATA:
            return Object.assign({},state,{
                currentUserHealthData:action.currentUserHealthData
            });
        default :
            return state;
    }
};