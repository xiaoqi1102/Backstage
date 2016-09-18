/**
 * Created by xiaoqi on 2016/9/13.
 */
import getRandomColor from '../utils/getRandomColor'
const initialState={
    listData:{
        data: [
            {
                watchTime: "Sat Sep 03 17:02:28 CST 2016",
                id: "57ca91a4d4616805d18f8bb0",
                name: "拉拉",
                phone: "15302212088",
                disease: "AA",
                doctorName: "ree",
                department:"骨科",
                unit:"fdfdf"
            },
            {
                watchTime: "Sat Sep 03 17:05:28 CST 2016",
                id: "57ca91a4d4616805d18f8bb1",
                name: "拉dd",
                phone: "15302212022",
                disease: "Agg",
                doctorName: "ree",
                department:"骨科",
                unit:"fdfdf"
            }
        ],
        draw: 1,
        recordsFiltered: 38,
        recordsTotal: 38
    },
    departmentPieData:{
        data: [
            {
                name: "骨科",
                value: 10,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "男科",
                value: 13,
                itemStyle: {
                    normal: {
                        // 设置扇形的颜色
                        color: getRandomColor(),
                    }
                }
            },
            {
                name: "牙科",
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
    pieDiseasesData:{
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
    }
};

export default (state=initialState,action={})=>{
    switch (action.type){
        default:
            return state;
    }
}