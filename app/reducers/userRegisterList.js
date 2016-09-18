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
              name:"asaa",
              registrationTime: "Sat Sep 03 17:05:28 CST 2016",
              inquiryTime: "Sat Sep 03 17:15:28 CST 2016",
              unitName:"sds",
              deparment:"李大大",
              teamName:"1354616465",
              diseases:"2111",
              doctorPhone:"13564894566",
              doctoeName:"ggdd"
          },
          {
              id: "57ca91a4d4616805d18f8bb0",
              phone: "15302212088",
              name:"asaa",
              registrationTime: "Sat Sep 03 17:05:28 CST 2016",
              inquiryTime: "Sat Sep 03 17:15:28 CST 2016",
              unitName:"sds",
              deparment:"李大大",
              teamName:"1354616465",
              diseases:"2111",
              doctorPhone:"13564894566",
              doctoeName:"ggdd"
          }
      ],
      draw: 1,
      recordsFiltered: 38,
      recordsTotal: 38
  },
    pieUnitRegisteredData:{
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
                value: 33,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "外企单位",
                value: 178,
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
    pieDepartmentRegisteredData:{
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
                value: 178,
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
    pieTeamRegisteredData:{
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
                value: 66,
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
    pieDiseaseRegisteredData:{
        data: [
            {
                name: "心脏病",
                value: 12,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "肠胃病",
                value: 66,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "外伤",
                value: 88,
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
    pieNameRegisteredData:{
        data: [
            {
                name: "刘医生",
                value: 33,
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
                value: 88,
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
        default:
            return state;
    }
}