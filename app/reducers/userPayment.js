/**
 * Created by xiaoqi on 2016/9/18.
 */
import * as ActionTypes from '../constants/ActionTypes'
import getRandomColor from '../utils/getRandomColor'
const initialState={
    listData:{
        data: [
            {
                id: "57ca91a4d4616805d18f8bb0",
                phone: "15302212088",
                name:"asaa",
                paymentOrderNo: "12131",
                paymentTime: "Sat Sep 03 17:15:28 CST 2016",
                paymentProject:"sds",
                paymentMoney:"121",
                completionTime:"Sat Sep 03 17:25:28 CST 2016",
                diseases:"2111",
                unitName:"13564894566",
                deparment:"ggdd",
                teamName:"sds",
                doctorName:"hgf",
                paymentState:"已缴费"
            },
            {
                id: "57ca91a4d4616805d18f8bb0",
                phone: "15302212088",
                name:"asaa",
                paymentOrderNo: "12131",
                paymentTime: "Sat Sep 03 17:15:28 CST 2016",
                paymentProject:"sds",
                paymentMoney:"121",
                completionTime:"Sat Sep 03 17:25:28 CST 2016",
                diseases:"2111",
                unitName:"13564894566",
                deparment:"ggdd",
                teamName:"sds",
                doctorName:"hgf",
                paymentState:"已缴费"
            }
        ],
        draw: 1,
        recordsFiltered: 38,
        recordsTotal: 38
    },
    pieDiseaseOrderData:{
        data: [
            {
                name: "糖尿病",
                value: 10,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "心脏病",
                value: 13,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "风湿",
                value: 55,
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
    pieUnitOrderData:{
        data: [
            {
                name: "事业单位",
                value: 11,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "民营单位",
                value: 88,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "外企单位",
                value: 11,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "国企",
                value: 51,
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
    pieDepartmentOrderData:{
        data: [
            {
                name: "牙科",
                value: 88,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "耳鼻喉科",
                value: 66,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "妇科",
                value: 16,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "男科",
                value: 77,
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
    pieTeamOrderData:{
        data: [
            {
                name: "暴龙团队",
                value: 88,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "飓风团队",
                value: 45,
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
    pieDiseaseSuccessOrderData:{
        data: [
            {
                name: "糖尿病",
                value: 5,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "心脏病",
                value: 13,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "风湿",
                value: 33,
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
    pieUnitSuccessOrderData:{
        data: [
            {
                name: "事业单位",
                value: 11,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "民营单位",
                value: 87,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "外企单位",
                value: 8,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "国企",
                value: 51,
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
    pieDepartmentSuccessOrderData:{
        data: [
            {
                name: "牙科",
                value: 88,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "耳鼻喉科",
                value: 55,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "妇科",
                value: 16,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "男科",
                value: 40,
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
    pieTeamSuccessOrderData:{
        data: [
            {
                name: "暴龙团队",
                value: 40,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "飓风团队",
                value: 30,
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
    pieDiseaseFailOrderData:{
        data: [
            {
                name: "糖尿病",
                value: 1,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "心脏病",
                value: 4,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "风湿",
                value: 7,
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
    pieUnitFailOrderData:{
        data: [
            {
                name: "事业单位",
                value: 11,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "民营单位",
                value: 6,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "外企单位",
                value: 1,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "国企",
                value: 5,
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
    pieDepartmentFailOrderData:{
        data: [
            {
                name: "牙科",
                value: 5,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "耳鼻喉科",
                value: 11,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "妇科",
                value: 6,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "男科",
                value: 2,
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
    pieTeamFailOrderData:{
        data: [
            {
                name: "暴龙团队",
                value: 4,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "飓风团队",
                value: 7,
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
    pieDiseaseNonPaymentOrderData:{
        data: [
            {
                name: "糖尿病",
                value: 6,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "心脏病",
                value: 4,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "风湿",
                value: 10,
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
    pieUnitNonPaymentOrderData:{
        data: [
            {
                name: "事业单位",
                value: 11,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "民营单位",
                value: 5,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "外企单位",
                value: 3,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "国企",
                value: 10,
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
    pieDepartmentNonPaymentOrderData:{
        data: [
            {
                name: "牙科",
                value: 5,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "耳鼻喉科",
                value: 11,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "妇科",
                value: 12,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "脑科",
                value: 9,
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
    pieTeamNonPaymentOrderData:{
        data: [
            {
                name: "暴龙团队",
                value: 8,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "飓风团队",
                value: 3,
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
    pieDiseaseCancelOrderData:{
        data: [
            {
                name: "糖尿病",
                value: 8,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "心脏病",
                value: 1,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "风湿",
                value: 10,
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
    pieDepartmentCancelOrderData:{
        data: [
            {
                name: "牙科",
                value: 5,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "耳鼻喉科",
                value: 3,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "妇科",
                value: 12,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "脑科",
                value: 4,
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
    pieTeamCancelOrderData:{
        data: [
            {
                name: "暴龙团队",
                value: 3,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "飓风团队",
                value: 11,
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
    pieUnitCancelOrderData:{
        data: [
            {
                name: "事业单位",
                value: 11,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "民营单位",
                value: 14,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "外企单位",
                value: 3,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "国企",
                value: 8,
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
    pieDoctorOrderData:{
        data: [
            {
                name: "刘医生",
                value: 12,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "霍去病",
                value: 55,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "康医生",
                value: 42,
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
    pieDoctorSuccessOrderData:{
        data: [
            {
                name: "刘医生",
                value: 12,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "霍去病",
                value: 80,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "康医生",
                value: 33,
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
    pieDoctorFailOrderData:{
        data: [
            {
                name: "刘医生",
                value: 12,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "霍去病",
                value: 22,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "康医生",
                value: 123,
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
    pieDoctorNonPaymentOrderData:{
        data: [
            {
                name: "刘医生",
                value: 12,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "霍去病",
                value: 33,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "康医生",
                value: 47,
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
    pieDoctorCancelOrderData:{
        data: [
            {
                name: "刘医生",
                value: 99,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "霍去病",
                value: 33,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "康医生",
                value: 47,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            }
        ],
        success: true
    }
};

export default (state=initialState,action={})=>{
    switch (action.type){
        case ActionTypes.SET_PAYMENT_DISEASE:
            return Object.assign({},state,{
                pieDiseaseOrderData:action.pieDiseaseOrderData
            });
        default:
            return state;
    }
}