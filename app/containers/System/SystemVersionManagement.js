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
class SystemVersionManagement extends React.Component{
    render(){
        return(
            <div id="systemVersionManagement">
                <h2>版本管理</h2>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>时间</TableHeaderColumn>
                            <TableHeaderColumn>版本号</TableHeaderColumn>
                            <TableHeaderColumn>类型</TableHeaderColumn>
                            <TableHeaderColumn>管理员</TableHeaderColumn>
                            <TableHeaderColumn>更新类型</TableHeaderColumn>
                            <TableHeaderColumn>升级包上传</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                </Table>
            </div>
        )
    }
};
export  default  SystemVersionManagement;