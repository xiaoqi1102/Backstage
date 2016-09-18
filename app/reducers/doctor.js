/**
 * Created by xiaoqi on 2016/9/5.
 */
import  * as types from '../constants/ActionTypes';

const initialState={
  doctorList:{

  }
};

export default (state=initialState,action={})=>{
    switch (action.type){
        case types.LOAD_DOCTOR_LIST:
            return state;
        default :
            return state;
    }
}