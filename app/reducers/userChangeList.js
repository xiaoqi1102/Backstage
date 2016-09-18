/**
 * Created by xiaoqi on 2016/9/13.
 */
import getRandomColor from '../utils/getRandomColor'
const initialState = {
        listData: {
            data: [
                {
                    id: "57ca91a4d4616805d18f8bb0",
                    name: "拉拉",
                    phone: "15302212088",
                    signedOrderNo: "1541645146",
                    originalService: "ree",
                    originalMeal: "骨科",
                    originalMealPeriod: "fdfdf",
                    originalSignedTime: "Sat Sep 03 17:05:28 CST 2016",
                    originalSignedMoney: "121",
                    originalDoctor: "GHG",
                    mealChangeTime: "Sat Sep 03 17:05:28 CST 2016",
                    changeService: "sdsds",
                    changeMeal: "sadsds",
                    changeMealPeriod: "Sat Sep 03 17:05:28 CST 2016",
                    changeMoney: "432",
                    mealDoctor: "fdd",
                    changeMoneyType: "增加"
                },
                {
                    id: "57ca91a4d4616805d18f8bb1",
                    name: "拉dd",
                    phone: "15302212022",
                    signedOrderNo: "1541645146",
                    originalService: "ree",
                    originalMeal: "骨科",
                    originalMealPeriod: "fdfdf",
                    originalSignedTime: "Sat Sep 03 17:05:28 CST 2016",
                    originalSignedMoney: "121",
                    originalDoctor: "GHG",
                    mealChangeTime: "Sat Sep 03 17:05:28 CST 2016",
                    changeService: "sdsds",
                    changeMeal: "sadsds",
                    changeMealPeriod: "Sat Sep 03 17:05:28 CST 2016",
                    changeMoney: "432",
                    mealDoctor: "fdd",
                    changeMoneyType: "减少"
                }
            ],
            draw: 1,
            recordsFiltered: 38,
            recordsTotal: 38
        },
        pieSetMealData:{
            data: [
                {
                    name: "爱心套餐",
                    value: 55,
                    itemStyle: {
                        normal: {
                            // 设置扇形的颜色
                            color: getRandomColor(),
                        }
                    }
                },
                {
                    name: "专业套餐",
                    value: 22,
                    itemStyle: {
                        normal: {
                            // 设置扇形的颜色
                            color: getRandomColor(),
                        }
                    }
                },
                {
                    name: "实惠套餐",
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
        pieServiceData:{
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
                    value: 22,
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
        pieChangeDayPartData:{
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
                    value: 96,
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

    }
    ;

export  default  (state = initialState, action = {})=> {
    switch (action.type){
        default:
            return state;
    }
}