/**
 * Created by xiaoqi on 2016/9/8.
 */
import React from 'react';
import {Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn} from 'material-ui/Table'
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Immutable from 'immutable';
import Pagination from '../../components/Pagination';
import AdministratorInformationSearchForm  from '../../components/System/AdministratorInformation/AdministratorInfomationSearchForm'
class SystemAdministratorInformation extends React.Component{
    constructor(props){
        super(props);
    }
    shouldComponentUpdate(nextprops={},nextState={}){
        return !Immutable.is(nextprops,this.props)||Immutable.is(nextState,this.state)
    }
    render(){
        return(
            <div id="systemAdministratorInformation">
                <h2>管理员信息</h2>
                <AdministratorInformationSearchForm/>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>
                                账户名
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                姓名
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                性别
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                角色
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                部门
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                职位
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                联系方式
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                状态
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                操作
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                </Table>
            </div>
        )
    }
};
export default  SystemAdministratorInformation