/**
 * Created by xiaoqi on 2016/9/7.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as actions from '../../actions/userHealth'
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import IconButton from 'material-ui/IconButton'
import Search from 'material-ui/svg-icons/action/search';
import UserHealthForm from '../../components/User/UserHealth/UserHealthSearchForm'
import UserHealthDetailDialog from '../../components/User/UserHealth/UserHealthDetailDialog';
import Pagination from '../../components/Pagination'
class UserHealth extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            activePage:1
        };
        this.handleCheckDetail=this.handleCheckDetail.bind(this);
        this.handleSelect=this.handleSelect.bind(this);
    }
    handleCheckDetail(id){
        this.props.actions.openUserHealthDetailDialog();
        this.props.actions.setCurrentUserHealthData(id);
    }
    handleSelect(event,data){
        let {eventKey}=data;
        this.setState({
            activePage:eventKey
        })
    }
    render(){
        let {userHealth:{listData:{data}}}=this.props;
        //console.log(data);
        return(
            <div id="userHealth">
                <h2>健康状况</h2>
                <UserHealthForm/>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>序列号</TableHeaderColumn>
                            <TableHeaderColumn>姓名</TableHeaderColumn>
                            <TableHeaderColumn>邮箱</TableHeaderColumn>
                            <TableHeaderColumn>手机</TableHeaderColumn>
                            <TableHeaderColumn>注册时间</TableHeaderColumn>
                            <TableHeaderColumn>角色</TableHeaderColumn>
                            <TableHeaderColumn>操作</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        { data.map(function (item, key) {
                            return(
                                <TableRow key={key}>
                                    <TableRowColumn>{key}</TableRowColumn>
                                    <TableRowColumn>{item.name}</TableRowColumn>
                                    <TableRowColumn>{item.email}</TableRowColumn>
                                    <TableRowColumn>{item.phone}</TableRowColumn>
                                    <TableRowColumn>{moment(item.registerDate).format('YYYY-MM-DD')}</TableRowColumn>
                                    <TableRowColumn>{item.role}</TableRowColumn>
                                    <TableRowColumn><IconButton onClick={()=>{
                                        this.handleCheckDetail(item.id)
                                    }}><Search/></IconButton></TableRowColumn>
                                </TableRow>
                            )
                        }.bind(this))}

                    </TableBody>
                </Table>
                <Pagination
                    next
                    prev
                    last
                    first
                    items={8}
                    maxButtons={3}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect}
                />
                <UserHealthDetailDialog/>
            </div>
        )
    }
};

export default  connect(
    state=>({userHealth:state.userHealth}),
    dispatch=>({
        actions:bindActionCreators(actions,dispatch)
    })
)(UserHealth);