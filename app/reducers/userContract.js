/**
 * Created by xiaoqi on 2016/9/14.
 */
import getRandomColor from '../utils/getRandomColor'
const initialState={
    listData:{
        data: [
            {
                id: "57ca91a4d4616805d18f8bb0",
                phone: "15302212088",
                signedOrderNo: "1541645146",
                signedTime: "Sat Sep 03 17:05:28 CST 2016",
                serviceType:"sds",
                signedDoctor:"fdfdf",
                signedMeal:"sdddds",
                signedMoney:"2111",
                serviceDeadline:"Sat Sep 03 17:12:28 CST 2016"
            },
            {
                id: "57ca91a4d4616805d18f8bb0",
                phone: "15302212088",
                signedOrderNo: "1541645146",
                signedTime: "Sat Sep 03 17:05:28 CST 2016",
                serviceType:"sds",
                signedDoctor:"fdfdf",
                signedMeal:"sdddds",
                signedMoney:"2111",
                serviceDeadline:"Sat Sep 03 17:12:28 CST 2016"
            }
        ],
        draw: 1,
        recordsFiltered: 38,
        recordsTotal: 38
    },
    pieContractAmountData:{
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
    pieContractMealData:{
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
                value: 12,
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
    pieServiceLifeData:{
        data: [
            {
                name: "月度",
                value: 66,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "季度",
                value: 33,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "半年度",
                value: 44,
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
    }
};
export  default (state=initialState,action={})=>{
    switch (action.type){
        default:
            return state;
    }
}