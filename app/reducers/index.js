/**
 * Created by xiaoqi on 2016/9/5.
 */
import {combineReducers} from 'redux'
import {routerReducer} from 'react-router-redux'
import doctors from './doctor';
import userRegistrationInfo from './userRegistrationInfo';
import userHealth from './userHealth';
import userFamilyMember from './userFamilyMember';
import userWatchListAlready from './userWatchListAleady';
import userChangeList from './userChangeList'
import userContract from './userContract';
import userCancellationList from './userCancellationList';
import userRegisterList from './userRegisterList';
import userInquiry from './userInquirty';
import userPayment from './userPayment';
import userServiceFaultReporting from './userServiceFaultReporting'
const rootReducers=combineReducers({
    doctors,
    userRegistrationInfo,
    userHealth,
    userWatchListAlready,
    userFamilyMember,
    userChangeList,
    userContract,
    userCancellationList,
    userRegisterList,
    userInquiry,
    userPayment,
    userServiceFaultReporting,
    routing:routerReducer,
});

export default rootReducers;