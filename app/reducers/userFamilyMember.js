/**
 * Created by xiaoqi on 2016/9/13.
 */

const initialState = {
    listData: {
        data: [
            {
                bindTime: "Sat Sep 03 17:02:28 CST 2016",
                id: "57ca91a4d4616805d18f8bb0",
                name: "拉拉",
                phone: "15302212088",
                relation: "AA",
                contacts: "13569854689",
                contactsName: "asas"
            },
            {
                bindTime: "Sat Sep 03 17:05:28 CST 2016",
                id: "57ca91a4d4616805d18f8bb1",
                name: "拉dd",
                phone: "15302212022",
                relation: "Agg",
                contacts: "136565965556",
                contactsName: "fdfd"
            }
        ],
        draw: 1,
        recordsFiltered: 38,
        recordsTotal: 38
    }
};
export  default (state = initialState, action = {})=> {
    switch (action.type) {
        default:
            return state;
    }
}