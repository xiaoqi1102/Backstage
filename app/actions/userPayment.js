/**
 * Created by xiaoqi on 2016/9/18.
 */
import * as ActionTypes from '../constants/ActionTypes';

export const  setPaymentDisease=(pieDiseaseOrderData)=>{
    return{
        type:ActionTypes.SET_PAYMENT_DISEASE,
        pieDiseaseOrderData
    }
};