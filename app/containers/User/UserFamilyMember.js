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
class UserFamilyMember extends React.Component {
    shouldComponentUpdate(nextprops={},nextState={}){
        return !Immutable.is(nextprops,this.props)||!Immutable.is(nextState,this.state)
    }
    render() {
        let {userFamilyMember:{listData:{data}}}=this.props;
        //console.log(data);
        return (
            <div id="userFamilyMember">
                <h2>
                    家庭成员
                </h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>
                                姓名
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                绑定时间
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                手机
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                注册日期
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                关系人姓名
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                关系
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map(function (item, index) {
                            return (
                                <TableRow key={index}>
                                    <TableRowColumn>{item.name}</TableRowColumn>
                                    <TableRowColumn>{moment(item.bindTime).format('YYYY-MM-DD')}</TableRowColumn>
                                    <TableRowColumn>{item.phone}</TableRowColumn>
                                    <TableRowColumn>{moment(item.registerDate).format('YYYY-MM-DD')}</TableRowColumn>
                                    <TableRowColumn>{item.contactsName}</TableRowColumn>
                                    <TableRowColumn>{item.contacts}</TableRowColumn>
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
export default connect(state=>({
    userFamilyMember: state.userFamilyMember
}))(UserFamilyMember);