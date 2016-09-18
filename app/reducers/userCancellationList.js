/**
 * Created by xiaoqi on 2016/9/14.
 */
import getRandomColor from '../utils/getRandomColor'
const initialState={
    listData:{
        data: [
            {
                id: "57ca91a4d4616805d18f8bb0",
                cancelPhone: "15302212088",
                signedOrderNo:"32323232",
                originalSignedOrderNo: "1541645146",
                cancelApplyTime: "Sat Sep 03 17:05:28 CST 2016",
                serviceType:"sds",
                cancelPatientName:"李大大",
                cancelledDoctorPhone:"1354616465",
                cancelledDoctorName:"2111",
                cancelServiceType:"asa",
                cancelMealType:"dds",
                signedMealPeriod:"13~18",
                money:"123",
                cancelReason:"saaas",
                approvalState:"通过"
            },
            {
                id: "57ca91a4d4616805d18f8bb0",
                cancelPhone: "15302212088",
                signedOrderNo:"32323233",
                originalSignedOrderNo: "1541645146",
                cancelApplyTime: "Sat Sep 03 17:05:28 CST 2016",
                serviceType:"sds",
                cancelPatientName:"李笑笑",
                cancelledDoctorPhone:"1354616462",
                cancelledDoctorName:"2111",
                cancelServiceType:"asa",
                cancelMealType:"dds",
                signedMealPeriod:"13~18",
                money:"123",
                cancelReason:"saaas",
                approvalState:"不通过"
            }
        ],
        draw: 1,
        recordsFiltered: 38,
        recordsTotal: 38
    },
    pieUnwindServiceData:{
        data: [
            {
                name: "家庭医生",
                value: 11,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "上门面诊",
                value: 33,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "巡诊",
                value: 96,
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
    pieUnwindMealData:{
        data: [
            {
                name: "爱心套餐",
                value: 78,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "专业套餐",
                value: 88,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "实惠套餐",
                value: 23,
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
    pieUnwindDayPartData:{
        data: [
            {
                name: "月度",
                value: 11,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "季度",
                value: 80,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "半年度",
                value: 70,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "年度",
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
    pieUnwindMoneyData:{
        data: [
            {
                name: "0-100",
                value: 78,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "101-200",
                value: 45,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "200以上",
                value: 96,
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
    pieUnwindCauseData:{
        data: [
            {
                name: "服务质量不满意",
                value: 78,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "价钱原因",
                value: 66,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "其他原因",
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
    }
};

export  default (state=initialState,action={})=>{
    switch (action.type){
        default:
            return state;
    }
}