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
import CommonPie from '../../components/CommonPie/CommonPie'
class UserRegisterList extends React.Component{
    shouldComponentUpdate(nextProps={},nextState={}){
        return !Immutable.is(nextProps,this.props)||!Immutable.is(nextState,this.state);
    }
    render(){
        let {
            userRegisterList:{
                listData:{data},
                pieUnitRegisteredData,
                pieDepartmentRegisteredData,
                pieTeamRegisteredData,
                pieDiseaseRegisteredData,
                pieNameRegisteredData
            }
        }=this.props;
        return(
            <div id="userRegiseterList">
                <h2>挂号列表</h2>
                <CommonPie paramsObj={{
                    id:"registeredUnitPie",
                    data:pieUnitRegisteredData.data,
                    titleText: '挂号单位分布图',
                    seriesName: '单位',
                    theme: 'infographic'
                }} />
                <CommonPie paramsObj={{
                    id:"registeredDepartmentPie",
                    data:pieDepartmentRegisteredData.data,
                    titleText: '挂号科室分布图',
                    seriesName: '科室',
                    theme: 'infographic'
                }} />
                <CommonPie paramsObj={{
                    id:"teamRegisterPie",
                    data:pieTeamRegisteredData.data,
                    titleText: '挂号团队分布图',
                    seriesName: '团队',
                    theme: 'infographic'
                }} />
                <CommonPie paramsObj={{
                    id:"diseaseRegisterPie",
                    data:pieDiseaseRegisteredData.data,
                    titleText: '挂号病种分布图',
                    seriesName: '病种',
                    theme: 'infographic'
                }} />
                <CommonPie paramsObj={{
                    id:"doctorNameRegisterPie",
                    data:pieNameRegisteredData.data,
                    titleText: '挂号医生分布图',
                    seriesName: '医生',
                    theme: 'infographic'
                }} />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>姓名</TableHeaderColumn>
                            <TableHeaderColumn>账号名</TableHeaderColumn>
                            <TableHeaderColumn>挂号时间</TableHeaderColumn>
                            <TableHeaderColumn>问诊时间</TableHeaderColumn>
                            <TableHeaderColumn>单位</TableHeaderColumn>
                            <TableHeaderColumn>科室</TableHeaderColumn>
                            <TableHeaderColumn>团队</TableHeaderColumn>
                            <TableHeaderColumn>病种</TableHeaderColumn>
                            <TableHeaderColumn>医生账号</TableHeaderColumn>
                            <TableHeaderColumn>医生名称</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item,key)=>{
                            return(
                                <TableRow key={key}>
                                    <TableRowColumn>{item.name }</TableRowColumn>
                                    <TableRowColumn>{item.phone}</TableRowColumn>
                                    <TableRowColumn>{moment(item.registrationTime).format('YYYY-MM-DD')}</TableRowColumn>
                                    <TableRowColumn>{moment(item.inquiryTime).format('YYYY-MM-DD')}</TableRowColumn>
                                    <TableRowColumn>{item.unitName}</TableRowColumn>
                                    <TableRowColumn>{item.deparment}</TableRowColumn>
                                    <TableRowColumn>{item.teamName}</TableRowColumn>
                                    <TableRowColumn>{item.diseases}</TableRowColumn>
                                    <TableRowColumn>{item.doctorPhone}</TableRowColumn>
                                    <TableRowColumn>{item.doctoeName}</TableRowColumn>
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
    userRegisterList:state.userRegisterList
}))(UserRegisterList);