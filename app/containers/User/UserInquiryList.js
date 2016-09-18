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
class UserInquiryList extends React.Component {
    shouldComponentUpdate(nextProps={},nextState={}){
        return !Immutable.is(nextProps,this.props)||Immutable.is(nextState,this.state);
    }
    render() {
        let {
            userInquiry:{
                listData:{data},
                pieEachPeriodData,
                pieDiseaseData,
                pieUnitInquiryData,
                pieDepartmentInquiryData,
                pieTeamInquiryData,
                pieDoctorNameInquiryData
            }
        }=this.props;
        return (
            <div id="userInquiryList">
                <h2>问诊列表</h2>
                <CommonPie paramsObj={{
                    id: "eachPeriodPie",
                    data: pieEachPeriodData.data,
                    titleText: '挂诊时段分布图',
                    seriesName: '挂诊时段',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id: "eachPeriodDiseasePie",
                    data: pieDiseaseData.data,
                    titleText: '挂诊病种分布图',
                    seriesName: '挂诊病种',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id: "unitInquiryPie",
                    data: pieUnitInquiryData.data,
                    titleText: '挂诊单位分布图',
                    seriesName: '挂诊单位',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id: "departmentInquiryPie",
                    data: pieDepartmentInquiryData.data,
                    titleText: '挂诊科室分布图',
                    seriesName: '挂诊科室',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id: "teamInquiryPie",
                    data: pieTeamInquiryData.data,
                    titleText: '挂诊团队分布图',
                    seriesName: '挂诊团队',
                    theme: 'infographic'
                }}/>
                <CommonPie paramsObj={{
                    id: "doctorNameInquiryPie",
                    data: pieDoctorNameInquiryData.data,
                    titleText: '挂诊医生分布图',
                    seriesName: '挂诊医生',
                    theme: 'infographic'
                }}/>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>
                                账号名
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                挂号日期
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                姓名
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                问诊日期
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                单位
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                科室
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                团队
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                病种
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                医生账户
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                医生名称
                            </TableHeaderColumn>

                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item, key)=> {
                            return (
                                <TableRow key={key}>

                                    <TableRowColumn>{item.phone}</TableRowColumn>
                                    <TableRowColumn>{moment(item.registrationTime).format('YYYY-MM-DD')}</TableRowColumn>
                                    <TableRowColumn>{item.name}</TableRowColumn>
                                    <TableRowColumn>{moment(item.inquiryTime).format('YYYY-MM-DD') }</TableRowColumn>
                                    <TableRowColumn>{item.unitName}</TableRowColumn>
                                    <TableRowColumn>{item.deparment}</TableRowColumn>
                                    <TableRowColumn>{item.teamName}</TableRowColumn>
                                    <TableRowColumn>{item.diseases}</TableRowColumn>
                                    <TableRowColumn>{item.doctorPhone}</TableRowColumn>
                                    <TableRowColumn>{item.doctorName}</TableRowColumn>
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
export default  connect(
    state=>({
        userInquiry: state.userInquiry
    })
)(UserInquiryList);