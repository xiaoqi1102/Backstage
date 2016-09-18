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
class UserHealthBasicInformation extends React.Component{
    render(){
        return(
            <div id="userHeathBasicInformation">
                <h2>健康基本信息</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>
                                帐号名
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                姓名
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                血型
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                RH血型
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                身高
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                体重
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                腰围
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                就诊医院
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                就诊号
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                身份证号
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                </Table>
            </div>
        )
    }
};

export default  UserHealthBasicInformation;