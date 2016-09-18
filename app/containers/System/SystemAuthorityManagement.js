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
class SystemAuthorityManagement extends React.Component{
    render(){
        return(
            <div id="systemAuthorityManagement">
                <h2>权限管理</h2>

            </div>
        )
    }
};
export  default  SystemAuthorityManagement;