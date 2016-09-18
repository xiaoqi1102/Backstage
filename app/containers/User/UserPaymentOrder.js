/**
 * Created by xiaoqi on 2016/9/7.
 */
import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Immutable from 'immutable';
import Pagination from '../../components/Pagination';
import CommonPie from '../../components/CommonPie/CommonPie';
import * as actions from '../../actions/userPayment';
class UserPaymentOrder extends React.Component {
    shouldComponentUpdate(nextProps={},nextState={}){

        return !Immutable.is(nextProps,this.props)||Immutable.is(nextState,this.state);
    }
    componentDidMount(){

    }
    render() {
        let {
            userPayment:{
                listData:{data},
                pieDiseaseOrderData,
                pieUnitOrderData,
                pieDepartmentOrderData,
                pieTeamOrderData,
                pieDiseaseSuccessOrderData,
                pieUnitSuccessOrderData,
                pieDepartmentSuccessOrderData,
                pieTeamSuccessOrderData,
                pieDiseaseFailOrderData,
                pieUnitFailOrderData,
                pieDepartmentFailOrderData,
                pieTeamFailOrderData,
                pieDiseaseNonPaymentOrderData,
                pieUnitNonPaymentOrderData,
                pieDepartmentNonPaymentOrderData,
                pieTeamNonPaymentOrderData,
                pieDiseaseCancelOrderData,
                pieDepartmentCancelOrderData,
                pieTeamCancelOrderData,
                pieUnitCancelOrderData,
                pieDoctorOrderData,
                pieDoctorSuccessOrderData,
                pieDoctorFailOrderData,
                pieDoctorNonPaymentOrderData,
                pieDoctorCancelOrderData
            }
        }=this.props;
        return (
            <div id="userPaymentOrder">
                <h2>缴费列表</h2>
                <CommonPie paramsObj={{
                    id:'userPaymentDiseasePie',
                    data:pieDiseaseOrderData.data,
                    titleText: '缴费病种统计图',
                    seriesName: '病种',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentUnitPie',
                    data:pieUnitOrderData.data,
                    titleText: '缴费单位统计图',
                    seriesName: '单位',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentDepartmentPie',
                    data:pieDepartmentOrderData.data,
                    titleText: '缴费科室统计图',
                    seriesName: '科室',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentTeamPie',
                    data:pieTeamOrderData.data,
                    titleText: '缴费团队统计图',
                    seriesName: '团队',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentSuccessOrderDiseasePie',
                    data:pieDiseaseSuccessOrderData.data,
                    titleText: '缴费成功病种统计图',
                    seriesName: '病种',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentUnitSuccessOrderPie',
                    data:pieUnitSuccessOrderData.data,
                    titleText: '缴费成功单位统计图',
                    seriesName: '单位',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentSuccessOrderDepartmentPie',
                    data:pieDepartmentSuccessOrderData.data,
                    titleText: '缴费成功科室统计图',
                    seriesName: '科室',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentSuccessOrderTeamPie',
                    data:pieTeamSuccessOrderData.data,
                    titleText: '缴费成功团队统计图',
                    seriesName: '团队',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentFailOrderDiseasePie',
                    data:pieDiseaseFailOrderData.data,
                    titleText: '缴费失败病种团队统计图',
                    seriesName: '病种',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentFailOrderUnitPie',
                    data:pieUnitFailOrderData.data,
                    titleText: '缴费失败单位统计图',
                    seriesName: '单位',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentFailOrderDepartmentPie',
                    data:pieDepartmentFailOrderData.data,
                    titleText: '缴费失败科室统计图',
                    seriesName: '科室',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentFailOrderTeamPie',
                    data:pieTeamFailOrderData.data,
                    titleText: '缴费失败团队统计图',
                    seriesName: '团队',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userNonPaymentOrderDiseasePie',
                    data:pieDiseaseNonPaymentOrderData.data,
                    titleText: '未缴费病种统计图',
                    seriesName: '病种',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userNonPaymentOrderUnitPie',
                    data:pieUnitNonPaymentOrderData.data,
                    titleText: '未缴费单位统计图',
                    seriesName: '单位',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userNonPaymentOrderDepartmentPie',
                    data:pieDepartmentNonPaymentOrderData.data,
                    titleText: '未缴费科室统计图',
                    seriesName: '科室',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userNonPaymentOrderTeamPie',
                    data:pieTeamNonPaymentOrderData.data,
                    titleText: '未缴费团队统计图',
                    seriesName: '团队',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentCancelOrderDiseasePie',
                    data:pieDiseaseCancelOrderData.data,
                    titleText: '取消缴费病种统计图',
                    seriesName: '病种',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentCancelOrderDepartmentPie',
                    data:pieDepartmentCancelOrderData.data,
                    titleText: '取消缴费科室统计图',
                    seriesName: '科室',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentCancelOrderTeamPie',
                    data:pieTeamCancelOrderData.data,
                    titleText: '取消缴费团队统计图',
                    seriesName: '团队',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentCancelOrderUnitPie',
                    data:pieUnitCancelOrderData.data,
                    titleText: '取消缴费单位统计图',
                    seriesName: '单位',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentOrderDoctorPie',
                    data:pieDoctorOrderData.data,
                    titleText: '缴费医生统计图',
                    seriesName: '医生',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentSuccessOrderDoctorPie',
                    data:pieDoctorSuccessOrderData.data,
                    titleText: '缴费成功医生统计图',
                    seriesName: '医生',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentFailOrderDoctorPie',
                    data:pieDoctorFailOrderData.data,
                    titleText: '缴费失败医生统计图',
                    seriesName: '医生',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userNonPaymentOrderDoctorPie',
                    data:pieDoctorNonPaymentOrderData.data,
                    titleText: '未缴费医生统计图',
                    seriesName: '医生',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'userPaymentCancelOrderDoctorPie',
                    data:pieDoctorCancelOrderData.data,
                    titleText: '取消缴费医生统计图',
                    seriesName: '医生',
                    theme: 'infographic'
                }}/>


                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>缴费人姓名</TableHeaderColumn>
                            <TableHeaderColumn>缴费账户名</TableHeaderColumn>
                            <TableHeaderColumn>缴费单号</TableHeaderColumn>
                            <TableHeaderColumn>缴费项目</TableHeaderColumn>
                            <TableHeaderColumn>缴费金额</TableHeaderColumn>
                            <TableHeaderColumn>缴费完成时间</TableHeaderColumn>
                            <TableHeaderColumn>病种</TableHeaderColumn>
                            <TableHeaderColumn>单位</TableHeaderColumn>
                            <TableHeaderColumn>科室</TableHeaderColumn>
                            <TableHeaderColumn>团队</TableHeaderColumn>
                            <TableHeaderColumn>医生</TableHeaderColumn>
                            <TableHeaderColumn>状态</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item,key)=>{
                            return(
                                <TableRow key={key}>
                                    <TableRowColumn>{item.name}</TableRowColumn>
                                    <TableRowColumn>{item.phone}</TableRowColumn>
                                    <TableRowColumn>{item.paymentOrderNo}</TableRowColumn>
                                    <TableRowColumn>{item.paymentProject}</TableRowColumn>
                                    <TableRowColumn>{item.paymentMoney}</TableRowColumn>
                                    <TableRowColumn>{moment(item.completionTime).format('YYYY-MM-DD')}</TableRowColumn>
                                    <TableRowColumn>{item.diseases}</TableRowColumn>
                                    <TableRowColumn>{item.unitName}</TableRowColumn>
                                    <TableRowColumn>{item.deparment}</TableRowColumn>
                                    <TableRowColumn>{item.teamName}</TableRowColumn>
                                    <TableRowColumn>{item.doctorName}</TableRowColumn>
                                    <TableRowColumn>{item.paymentState}</TableRowColumn>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
};
export default  connect(
    state=>({
        userPayment: state.userPayment
    }),
    dispatch=>({
        actions:bindActionCreators(actions,dispatch)
    })
)(UserPaymentOrder);