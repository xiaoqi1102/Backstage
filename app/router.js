/**
 * Created by xiaoqi on 2016/9/5.
 */
import React from 'react';
import  {Route,IndexRoute} from 'react-router';
import App from './containers/App'
import Doctor from './containers/Doctor/Doctor';
import User from './containers/User/User'
import Login from './containers/Login/Login'
import WorkPlace from './containers/Workplace/WorkPlace'
import Home from './containers/Home/Home';
import AssistantBasicInfoBase from './containers/BasicInfo/AssistantBasicInfoBase';
/*用户*/
import UserCancellationList from './containers/User/UserCancellationList';
import UserChangeList from './containers/User/UserChangeList';
import UserContractList  from './containers/User/UserContractList';
import UserEvaluationList from './containers/User/UserEvaluationList';
import UserFamilyMember from './containers/User/UserFamilyMember';
import UserHealthBasicInformation from './containers/User/UserHealthBasicInformation';
import UserHealthPersonalInformation from './containers/User/UserHealthPersonalInformation';
import UserHealth from './containers/User/UserHealth';
import UserInquiryList from './containers/User/UserInquiryList';
import UserPaymentOrder from './containers/User/UserPaymentOrder';
import UserRegisterList from './containers/User/UserRegisterList';
import UserRegistrationInfo from './containers/User/UserRegistrationInfo';
import UserServiceCnProblemEditing from './containers/User/UserServiceCnProblemEditing';
import UserServiceEvaluated from './containers/User/UserServiceEvaluated';
import UserServiceFaultReporting from './containers/User/UserServiceFaultReporting';
import UserServiceNotEvaluated from './containers/User/UserServiceNotEvaluated';
import UserServiceProductAdvEditStatistics from './containers/User/UserServiceProductAdvEditStatistics'
import UserServiceSuggestion from './containers/User/UserServiceSuggestion';
import UserSigningPackages from './containers/User/UserSigningPackages';
import UserWatchListAlready from './containers/User/UserWatchListAlready';
import UserWatchListUnsubscribe from './containers/User/UserWatchListUnsubscribe';
/*系统*/
import SystemAdministratorInformation from './containers/System/SystemAmdinistorInformation';
import SystemAuthorityManagement from './containers/System/SystemAuthorityManagement';
import SystemChangePassword from './containers/System/SystemChangePassword';
import SystemVersionManagement from './containers/System/SystemVersionManagement'
import * as RouterPath from './constants/RouterPath'
/*医生*/
import DoctorBasicInfoBasic from './containers/Doctor/DoctorBasicInfoBasic';
import DoctorBasicInfoRegistration from './containers/Doctor/DoctorBasicInfoRegistration';
import DoctorBasicInfoSignedAssistant from './containers/Doctor/DoctorBasicInfoSignedAssistant';
import DoctorBasicInfoSignedPatient from './containers/Doctor/DoctorBasicInfoSignedPatient';
import DoctorBasicInfoSignedPeople from './containers/Doctor/DoctorBasicInfoSignedPeople';
import DoctorBasicInfoStars from './containers/Doctor/DoctorBasicInfoStars';
import DoctorBasicInfoTariff from './containers/Doctor/DoctorBasicInfoTariff';
import DoctorBasicInfoTerminationAssistant from './containers/Doctor/DoctorBasicInfoTerminationAssistant'
import DoctorBasicInfoTerminationPatient from './containers/Doctor/DoctorBasicInfoTerminationPatient'
import DoctorConsultationRealTime from './containers/Doctor/DoctorConsultationRealTime'
import DoctorConsultationReservation from './containers/Doctor/DoctorConsultationReservation'
import DoctorEvaluationList from './containers/Doctor/DoctorEvaluationList'
import DoctorFastTemplateAsk from './containers/Doctor/DoctorFastTemplateAsk'
export default (
    <Route path={RouterPath.rootPath} component={App}>
        <IndexRoute component={Login}/>
        <Route path={RouterPath.login} component={Login}/>
        <Route path={RouterPath.manager} component={WorkPlace}>
            <IndexRoute component={Home}/>
            <Route path={RouterPath.home} component={Home}/>
            <Route path={RouterPath.assistantBasicInfoBase} component={AssistantBasicInfoBase}/>
            {/*用户*/}
            <Route path={RouterPath.userList} component={User}/>
            <Route path={RouterPath.userCancellationList} component={UserCancellationList}/>
            <Route path={RouterPath.userChangeList} component={UserChangeList}/>
            <Route path={RouterPath.userContractList} component={UserContractList}/>
            <Route path={RouterPath.userEvaluationList} component={UserEvaluationList}/>
            <Route path={RouterPath.userFamilyMember} component={UserFamilyMember}/>
            <Route path={RouterPath.userHealthBasicInformation} component={UserHealthBasicInformation}/>
            <Route path={RouterPath.userHealthPersonalInformation} component={UserHealthPersonalInformation}/>
            <Route path={RouterPath.userHealth} component={UserHealth}/>
            <Route path={RouterPath.userInquiryList} component={UserInquiryList}/>
            <Route path={RouterPath.userPaymentOrder} component={UserPaymentOrder}/>
            <Route path={RouterPath.userRegisterList} component={UserRegisterList}/>
            <Route path={RouterPath.userRegistrationInfo} component={UserRegistrationInfo}/>
            <Route path={RouterPath.userServiceCnProblemEditing} component={UserServiceCnProblemEditing}/>
            <Route path={RouterPath.userServiceEvaluated} component={UserServiceEvaluated}/>
            <Route path={RouterPath.userServiceFaultReporting} component={UserServiceFaultReporting}/>
            <Route path={RouterPath.userServiceNotEvaluated} component={UserServiceNotEvaluated}/>
            <Route path={RouterPath.userServiceProductAdvEditStatistics} component={UserServiceProductAdvEditStatistics}/>
            <Route path={RouterPath.userServiceSuggestion} component={UserServiceSuggestion}/>
            <Route path={RouterPath.userSigningPackages} component={UserSigningPackages}/>
            <Route path={RouterPath.userWatchListAlready} component={UserWatchListAlready}/>
            <Route path={RouterPath.userWatchListUnsubscribe} component={UserWatchListUnsubscribe}/>
            {/*系统*/}
            <Route path={RouterPath.systemAdministratorInformation} component={SystemAdministratorInformation}/>
            <Route path={RouterPath.systemAuthorityManagement} component={SystemAuthorityManagement}/>
            <Route path={RouterPath.systemChangePassword} component={SystemChangePassword}/>
            <Route path={RouterPath.systemVersionManagement} component={SystemVersionManagement}/>
            {/*医生*/}
            <Route path={RouterPath.doctorList} component={Doctor}/>
            <Route path={RouterPath.doctorBasicInfoBasic} component={DoctorBasicInfoBasic}/>
            <Route path={RouterPath.doctorBasicRegistration} component={DoctorBasicInfoRegistration}/>
            <Route path={RouterPath.doctorBasicInfoSignedAssistant} component={DoctorBasicInfoSignedAssistant}/>
            <Route path={RouterPath.doctorBasicInfoSignedPatient} component={DoctorBasicInfoSignedPatient}/>
            <Route path={RouterPath.doctorBasicInfoSignedPeople} component={DoctorBasicInfoSignedPeople}/>
            <Route path={RouterPath.doctorBasicInfoStars} component={DoctorBasicInfoStars}/>
            <Route path={RouterPath.doctorBasicInfoTariff} component={DoctorBasicInfoTariff}/>
            <Route path={RouterPath.doctorBasicInfoTerminationAssistant} component={DoctorBasicInfoTerminationAssistant}/>
            <Route path={RouterPath.doctorBasicInfoTerminationPatient} component={DoctorBasicInfoTerminationPatient}/>
            <Route path={RouterPath.doctorConsultationRealTime} component={DoctorConsultationRealTime}/>
            <Route path={RouterPath.doctorConsultationReservation} component={DoctorConsultationReservation}/>
            <Route path={RouterPath.doctorEvaluationList} component={DoctorEvaluationList}/>
            <Route path={RouterPath.doctorFastTemplateAsk} component={DoctorFastTemplateAsk}/>
        </Route>
    </Route>
)