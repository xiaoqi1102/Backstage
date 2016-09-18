/**
 * Created by xiaoqi on 2016/9/7.
 */
import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import RaisedButton from 'material-ui/RaisedButton'
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Immutable from 'immutable';
import Pagination from '../../components/Pagination';
import UserCancellationServicePie from '../../components/User/UserCancellation/UserCancellationServicePie';
import CommonPie from '../../components/CommonPie/CommonPie'
class UserCancellationList extends React.Component {
    shouldComponentUpdate(nextProps = {}, nextState = {}) {
        return !Immutable.is(nextProps, this.props) || !Immutable.is(nextState, this.state);
    }

    render() {
        let {
            userCancellationList:{
                listData:{data},
                pieUnwindServiceData,
                pieUnwindMealData,
                pieUnwindDayPartData,
                pieUnwindMoneyData,
                pieUnwindCauseData
            }
        }=this.props;
        return (
            <div>
                <h2>
                    解约列表
                </h2>
                <UserCancellationServicePie pieUnwindServiceData={pieUnwindServiceData}/>
                <CommonPie paramsObj={{
                    id:"pieUnwindMealData",
                    data:pieUnwindMealData.data,
                    titleText: '解约服务类型分布图',
                    seriesName: '服务类型',
                    theme: 'infographic'
                }} />
                <CommonPie paramsObj={{
                    id:'unwindDayPartPie',
                    data:pieUnwindDayPartData.data,
                    titleText: '解约服务时段统计图',
                    seriesName: '服务时段',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'unwindMoneyPie',
                    data:pieUnwindCauseData.data,
                    titleText: '解约原因统计图',
                    seriesName: '解约原因',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id:'unwindCausePie',
                    data:pieUnwindMoneyData.data,
                    titleText: '解约服务金额统计图',
                    seriesName: '服务金额',
                    theme: 'infographic'
                }}/>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>
                                解约单号
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                原解约单号
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                解约申请时间
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                解约患者姓名
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                被解约医生账户
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                被解约医生名称
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                被解约服务种类
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                解约套餐种类
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                签约套餐时段
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                金额结算
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                解约原因
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                审核状态
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                操作
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, key)=> {
                            return (
                                <TableRow key={key}>
                                    <TableRowColumn>{item.signedOrderNo}</TableRowColumn>
                                    <TableRowColumn>{item.originalSignedOrderNo}</TableRowColumn>
                                    <TableRowColumn>{moment(item.cancelApplyTime).format('YYYY-MM-DD')}</TableRowColumn>
                                    <TableRowColumn>{item.cancelPatientName}</TableRowColumn>
                                    <TableRowColumn>{item.cancelledDoctorPhone}</TableRowColumn>
                                    <TableRowColumn>{item.cancelledDoctorName}</TableRowColumn>
                                    <TableRowColumn>{item.cancelServiceType}</TableRowColumn>
                                    <TableRowColumn>{item.cancelMealType}</TableRowColumn>
                                    <TableRowColumn>{item.signedMealPeriod}</TableRowColumn>
                                    <TableRowColumn>{item.money}</TableRowColumn>
                                    <TableRowColumn>{item.cancelReason}</TableRowColumn>
                                    <TableRowColumn>{item.approvalState}</TableRowColumn>
                                    <TableRowColumn><RaisedButton label={'审核'} primary={true}/></TableRowColumn>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
}
;

export  default connect(state=>({
    userCancellationList: state.userCancellationList
}))(UserCancellationList);