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
import DepartmentPie from '../../components/User/UserWatchListAlready/DepartmentPie';
import DiseasesPie from '../../components/User/UserWatchListAlready/DiseasesPie'
class UserWatchListAlready extends React.Component {

    componentDidMount(){

    }
    render() {
        let {userWatchListAlready:{listData:{data},departmentPieData,pieDiseasesData}}=this.props;
        //console.log(data);
        return (
            <div id="userWatchListAlready">
                <h2>已关注列表</h2>
                <DepartmentPie departmentPieData={departmentPieData}/>
                <DiseasesPie pieDiseasesData={pieDiseasesData} />
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>
                                关注时间
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                名字
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                手机
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                医生名称
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                科室
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                单位
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, key)=> {
                            return (
                                <TableRow key={key}>
                                    <TableRowColumn>
                                        {moment(item.watchTime).format('YYYY-MM-DD')}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.name}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.phone}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.doctorName}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.department}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.unit}
                                    </TableRowColumn>
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
    userWatchListAlready: state.userWatchListAlready
}))(UserWatchListAlready);