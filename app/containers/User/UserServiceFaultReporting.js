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
class UserServiceFaultReporting extends React.Component{
    render(){
        let {userServiceFaultReporting:{listData:{data}}}=this.props;
        return(
            <div id="userServiceFaultReporting">
                <h2>故障申告</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>姓名</TableHeaderColumn>
                            <TableHeaderColumn>账户名</TableHeaderColumn>
                            <TableHeaderColumn>申告时间</TableHeaderColumn>
                            <TableHeaderColumn>申告类型</TableHeaderColumn>
                            <TableHeaderColumn>申告内容</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item,key)=>{
                            return(
                                <TableRow key={key}>
                                    <TableRowColumn>{item.name}</TableRowColumn>
                                    <TableRowColumn>{item.phone}</TableRowColumn>
                                    <TableRowColumn>{item.faultReportTime}</TableRowColumn>
                                    <TableRowColumn>{item.faultReportType}</TableRowColumn>
                                    <TableRowColumn>{item.faultReportContent}</TableRowColumn>
                                </TableRow>
                            )
                        })}
                    </TableBody>
                </Table>
            </div>
        )
    }
};
export default connect(state=>({
    userServiceFaultReporting:state.userServiceFaultReporting
}))(UserServiceFaultReporting);