/**
 * Created by xiaoqi on 2016/9/7.
 */
import * as ActionTypes from '../constants/ActionTypes';
import getRandomColor from '../utils/getRandomColor'
const initialState={
    listData:{
        data: [
            {
                address: "杭州",
                avatarUrl: "http://www.lgstatic.com/i/image/M00/38/CE/CgqKkVdj45GAKJ3EAABzCVVVB1411.jpeg",
                birthday: "Fri Jul 29 00:00:00 CST 2016",
                career: "吃喝玩乐",
                contactPhone: "13137915494",
                email: "112040287@qq.com",
                id: "57c3b3c9d4616805d1b19e78",
                identity: "420124198205155120",
                name: "刘单单",
                phone: "18320030171",
                registerDate: "Mon Aug 29 12:02:17 CST 2016",
                role: "USER",
                sex: "女"
            },
            {
                address: "北京",
                avatarUrl: "http://www.lgstatic.com/i/image/M00/38/CE/CgqKkVdj45GAKJ3EAABzCVVVB1411.jpeg",
                birthday: "Wed Aug 29 00:00:00 CST 2007",
                career: "狗狗",
                contactPhone: "156227113766",
                email: "1036427819@qq.com",
                id: "57c3b50fd4616805d1b19e7c",
                identity: "445122199410210010",
                name: "毫无意义",
                phone: "15622711376",
                registerDate: "Mon Aug 29 12:07:43 CST 2016",
                role: "USER",
                sex: "男"
            }
        ],
        draw: 1,
        recordsFiltered: 17,
        recordsTotal: 113
    },
    currentUserRegistrationInfo: {
        address: "火山街区",
        avatarUrl: "http://www.lgstatic.com/i/image/M00/38/CE/CgqKkVdj45GAKJ3EAABzCVVVB1411.jpeg",
        birthday: "Fri Jul 29 00:00:00 CST 2016",
        career: "吃喝玩乐",
        contactPhone: "1366054873",
        email: "112040287@qq.com",
        id: "57c3b3c9d4616805d1b19e78",
        identity: "420124198205155120",
        name: "刘单单",
        phone: "18320030171",
        registerDate: "Mon Aug 29 12:02:17 CST 2016",
        role: "USER",
        sex: "女"
    },
    pieSexData:{
        data: [
            {
                name: "男",
                value: 22,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "女",
                value: 13,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "未知",
                value: 50,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            }
        ],
        success: true
    },
    pieAgeData:{
        data: [
            {
                name: "1-20",
                value: 13,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "21-40",
                value: 23,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "41-60",
                value: 33,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "60-80",
                value: 44,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "80以上",
                value: 15,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            }
        ],
        success: true
    },
    detailOpen:false
};

export default (state=initialState,action={})=>{
    switch (action.type){
        case ActionTypes.TOGGLE_DETAIL_DIALOG:
            return Object.assign({},state,{
                detailOpen:action.detailOpen
            });
        case ActionTypes.SET_CURRENT_REGISTRATION_INFO:
            return Object.assign({},state,{
                currentUserRegistrationInfo:action.currentUserRegistrationInfo
            });
        default:
            return state;
    }
}