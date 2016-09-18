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
import UserContractAmountPie from '../../components/User/UserContract/UserContractAmountPie';
import UserContractMealPie from '../../components/User/UserContract/UserContractMealPie';
import UserContractServiceLifePie from '../../components/User/UserContract/UserContractServiceLifePie'
class UserContractList extends React.Component {
    shouldComponentUpdate(nextProps={},nextState={}){
        return !Immutable.is(nextProps,this.props)
    }
    render() {
        let {
            userContract:{
                listData:{data},
                pieContractAmountData,
                pieContractMealData,
                pieServiceLifeData
            }
        }=this.props;
        return (
            <div id="userContractList">
                <h2>
                    签约列表
                </h2>
                <UserContractAmountPie pieContractAmountData={pieContractAmountData}/>
                <UserContractMealPie pieContractMealData={pieContractMealData}/>
                <UserContractServiceLifePie pieServiceLifeData={pieServiceLifeData}/>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>签约订单</TableHeaderColumn>
                            <TableHeaderColumn>签约时间</TableHeaderColumn>
                            <TableHeaderColumn>手机号</TableHeaderColumn>
                            <TableHeaderColumn>服务类型</TableHeaderColumn>
                            <TableHeaderColumn>签约医生</TableHeaderColumn>
                            <TableHeaderColumn>签约套餐</TableHeaderColumn>
                            <TableHeaderColumn>签约金额</TableHeaderColumn>
                            <TableHeaderColumn>服务期限</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, key)=> {
                            return (
                                <TableRow key={key}>
                                    <TableRowColumn>{item.signedOrderNo}</TableRowColumn>
                                    <TableRowColumn>{moment(item.signedTime).format('YYYY-MM-DD')}</TableRowColumn>
                                    <TableRowColumn>{item.phone}</TableRowColumn>
                                    <TableRowColumn>{item.serviceType}</TableRowColumn>
                                    <TableRowColumn>{item.signedDoctor}</TableRowColumn>
                                    <TableRowColumn>{item.signedMeal}</TableRowColumn>
                                    <TableRowColumn>{item.signedMoney}</TableRowColumn>
                                    <TableRowColumn>{moment(item.serviceDeadline).format('YYYY-MM-DD')}</TableRowColumn>
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

export  default  connect(state=>({
    userContract: state.userContract
}))(UserContractList);