/**
 * Created by xiaoqi on 2016/9/18.
 */
import getRandomColor from '../utils/getRandomColor'
const initialState={
    listData:{
        data: [
            {
                id: "57ca91a4d4616805d18f8bb0",
                phone: "15302212088",
                name:"asaa",
                faultReportTime: "12131",
                faultReportType: "类型1",
                faultReportContent:"sds"
            },
            {
                id: "57ca91a4d4616805d18f8bb2",
                phone: "15302212083",
                name:"WWQ",
                faultReportTime: "12132",
                faultReportType: "类型2",
                faultReportContent:"sd2"
            }
        ],
        draw: 1,
        recordsFiltered: 38,
        recordsTotal: 38
    }
};

export  default  (state=initialState,action={})=>{
    switch (action.type){
        default:
            return state;
    }
}