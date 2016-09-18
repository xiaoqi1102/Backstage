/**
 * Created by xiaoqi on 2016/9/6.
 */
import  React from 'react';
import {List, ListItem} from 'material-ui/List'

import  Assignment from 'material-ui/svg-icons/action/assignment'
import Subheader from 'material-ui/Subheader';
import Toggle from 'material-ui/Toggle';
import {Link, browserHistory} from 'react-router';
import * as RouterPath from '../../constants/RouterPath'
/*icon*/
import ActionGrade from 'material-ui/svg-icons/action/grade';
import ContentInbox from 'material-ui/svg-icons/content/inbox';
import Mood from 'material-ui/svg-icons/social/mood'
import ActionHome from 'material-ui/svg-icons/action/home';
import Receipt from 'material-ui/svg-icons/action/receipt';
import VerifiedUser from 'material-ui/svg-icons/action/verified-user';
import Accessibility from 'material-ui/svg-icons/action/accessibility'
import ContentDrafts from 'material-ui/svg-icons/content/drafts';
import ContentSend from 'material-ui/svg-icons/content/send';
import AccountBox from 'material-ui/svg-icons/action/account-box'
import SupervisorAccount from 'material-ui/svg-icons/action/supervisor-account'
import  AccountCircle from 'material-ui/svg-icons/action/account-circle';
import PermIdentity from 'material-ui/svg-icons/action/perm-identity'
import Group from 'material-ui/svg-icons/social/group'
import Setting from 'material-ui/svg-icons/action/settings';
import ScreenLockLandscape from 'material-ui/svg-icons/device/screen-lock-landscape';
import ContactMail from 'material-ui/svg-icons/communication/contact-mail';
import Description from 'material-ui/svg-icons/action/description';
import LockOutline from 'material-ui/svg-icons/action/lock-outline';
import FingerPrint from 'material-ui/svg-icons/action/fingerprint';
const menuDataSource = [
    {
        primaryText: '主页',
        leftIcon: <ActionHome/>,
        nestedItems: [],
        routerPath: RouterPath.home
    },
    {
        primaryText: '系统管理',
        leftIcon: <Setting/>,
        nestedItems: [{
            primaryText: '管理员信息',
            leftIcon: <Group/>,
            nestedItems: [],
            routerPath: RouterPath.systemAdministratorInformation
        },
            {
                primaryText: '权限管理',
                leftIcon: <LockOutline/>,
                nestedItems: [],
                routerPath: RouterPath.systemAuthorityManagement
            },
            {
                primaryText: '密码修改',
                leftIcon: <FingerPrint/>,
                nestedItems: [],
                routerPath: RouterPath.systemChangePassword
            },
            {
                primaryText: '版本管理',
                leftIcon: <Description/>,
                nestedItems: [],
                routerPath: RouterPath.systemVersionManagement
            }],
    },
    {
        primaryText: '用户管理',
        leftIcon: <AccountBox/>,
        nestedItems: [{
            primaryText: '注册信息',
            leftIcon: <PermIdentity/>,
            nestedItems: [],
            routerPath: RouterPath.userRegistrationInfo
        },
            {
            primaryText: '解约列表',
            leftIcon: <Receipt/>,
            nestedItems: [],
            routerPath: RouterPath.userCancellationList
        },
            {
                primaryText: '变更列表',
                leftIcon: <Receipt/>,
                nestedItems: [],
                routerPath: RouterPath.userChangeList
            },
            {
                primaryText: '签约列表',
                leftIcon: <Receipt/>,
                nestedItems: [],
                routerPath: RouterPath.userContractList
            },
            {
                primaryText: '评价列表',
                leftIcon: <Receipt/>,
                nestedItems: [],
                routerPath: RouterPath.userEvaluationList
            },
            {
                primaryText: '家庭成员',
                leftIcon: <SupervisorAccount/>,
                nestedItems: [],
                routerPath: RouterPath.userFamilyMember
            },
            {
                primaryText: '健康基本信息',
                leftIcon: <AccountBox/>,
                nestedItems: [],
                routerPath: RouterPath.userHealthBasicInformation
            },
            {
                primaryText: '健康档案',
                leftIcon: <AccountBox/>,
                nestedItems: [],
                routerPath: RouterPath.userHealthPersonalInformation
            },
            {
                primaryText: '健康状况',
                leftIcon: <AccountBox/>,
                nestedItems: [],
                routerPath: RouterPath.userHealth
            },
            {
                primaryText: '问诊列表',
                leftIcon: <AccountBox/>,
                nestedItems: [],
                routerPath: RouterPath.userInquiryList
            },
            {
                primaryText: '缴费列表',
                leftIcon: <AccountBox/>,
                nestedItems: [],
                routerPath: RouterPath.userPaymentOrder
            },
            {
                primaryText: '挂号列表',
                leftIcon: <AccountBox/>,
                nestedItems: [],
                routerPath: RouterPath.userRegisterList
            },
            {
                primaryText: '常见问题',
                leftIcon: <AccountBox/>,
                nestedItems: [],
                routerPath: RouterPath.userServiceCnProblemEditing
            },
            {
                primaryText: '服务评价-已评',
                leftIcon: <AccountBox/>,
                nestedItems: [],
                routerPath: RouterPath.userServiceEvaluated
            },
            {
                primaryText: '服务评价-未评',
                leftIcon: <AccountBox/>,
                nestedItems: [],
                routerPath: RouterPath.userServiceNotEvaluated
            },
            {
                primaryText: '产品咨询',
                leftIcon: <AccountBox/>,
                nestedItems: [],
                routerPath: RouterPath.userServiceProductAdvEditStatistics
            },
            {
                primaryText: '故障申告',
                leftIcon: <AccountBox/>,
                nestedItems: [],
                routerPath: RouterPath.userServiceFaultReporting
            },
            {
                primaryText: '意见/建议',
                leftIcon: <AccountBox/>,
                nestedItems: [],
                routerPath: RouterPath.userServiceSuggestion
            },
            {
                primaryText: '签约套餐',
                leftIcon: <AccountBox/>,
                nestedItems: [],
                routerPath: RouterPath.userSigningPackages
            },
            {
                primaryText: '已关注列表',
                leftIcon: <AccountBox/>,
                nestedItems: [],
                routerPath: RouterPath.userWatchListAlready
            },
            {
                primaryText: '取消关注列表',
                leftIcon: <AccountBox/>,
                nestedItems: [],
                routerPath: RouterPath.userWatchListUnsubscribe
            }]
    },
    {
        primaryText: '医生管理',
        leftIcon: <Mood/>,
        nestedItems: [{
            primaryText: '医生基本信息',
            leftIcon: <Assignment/>,
            nestedItems: [],
            routerPath: RouterPath.doctorBasicInfoBasic
        },
            {
                primaryText: '医生注册信息',
                leftIcon: <Assignment/>,
                nestedItems: [],
                routerPath: RouterPath.doctorBasicRegistration
            },
            {
                primaryText: '签约助理列表',
                leftIcon: <Assignment/>,
                nestedItems: [],
                routerPath: RouterPath.doctorBasicInfoSignedAssistant
            },
            {
                primaryText: '签约患者列表',
                leftIcon: <Assignment/>,
                nestedItems: [],
                routerPath: RouterPath.doctorBasicInfoSignedPatient
            },
            {
                primaryText: '签约人数设置',
                leftIcon: <Assignment/>,
                nestedItems: [],
                routerPath: RouterPath.doctorBasicInfoSignedPeople
            },
            {
                primaryText: '医生星级',
                leftIcon: <Assignment/>,
                nestedItems: [],
                routerPath: RouterPath.doctorBasicInfoStars
            },
            {
                primaryText: '资费信息',
                leftIcon: <Assignment/>,
                nestedItems: [],
                routerPath: RouterPath.doctorBasicInfoTariff
            },
            {
                primaryText: '解约助理列表',
                leftIcon: <Assignment/>,
                nestedItems: [],
                routerPath: RouterPath.doctorBasicInfoTerminationAssistant
            },
            {
                primaryText: '解约患者列表',
                leftIcon: <Assignment/>,
                nestedItems: [],
                routerPath: RouterPath.doctorBasicInfoTerminationPatient
            },
            {
                primaryText: '实时会诊',
                leftIcon: <Assignment/>,
                nestedItems: [],
                routerPath: RouterPath.doctorConsultationRealTime
            },
            {
                primaryText: '预约会诊',
                leftIcon: <Assignment/>,
                nestedItems: [],
                routerPath: RouterPath.doctorConsultationReservation
            },
            {
                primaryText: '服务评价',
                leftIcon: <Assignment/>,
                nestedItems: [],
                routerPath: RouterPath.doctorEvaluationList
            },
            {
                primaryText: '快速提问',
                leftIcon: <Assignment/>,
                nestedItems: [],
                routerPath: RouterPath.doctorFastTemplateAsk
            }]
    },
    {
        primaryText: '基础数据',
        leftIcon: <ContentInbox/>,
        nestedItems: [{
            primaryText: '基本信息',
            leftIcon: <Assignment/>,
            nestedItems: [],
            routerPath: RouterPath.assistantBasicInfoBase
        }]
    },
];
class LeftNavBar extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            open: true
        }
    };

    handleGoTo(routerPath) {
        if (routerPath) {
            browserHistory.push(routerPath);
        }
    };

    handleClick(e) {

    };

    render() {
        return (
            <section id="leftNavBar">
                <List>
                    <Subheader>菜单</Subheader>

                    {//当前只做两级菜单 可做扩展
                        menuDataSource.map(function (item, index) {
                            return (
                                <ListItem onClick={()=> {
                                    this.handleGoTo(item.routerPath)
                                }} key={index} leftIcon={item.leftIcon} primaryText={item.primaryText}
                                          nestedItems={item.nestedItems.map(function (content, key) {
                                              return (
                                                  <ListItem onClick={()=> {
                                                      this.handleGoTo(content.routerPath)
                                                  }} key={key} leftIcon={content.leftIcon}
                                                            primaryText={content.primaryText}/>
                                              )
                                          }.bind(this))}/>
                            )
                        }.bind(this))}
                </List>
            </section>
        )
    }
}
;

export  default  LeftNavBar;