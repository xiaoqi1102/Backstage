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

import AgeArea from '../../components/User/Registration/AgeArea';
import SexArea from '../../components/User/Registration/SexArea';
import SearchForm from '../../components/User/Registration/SearchForm';
import * as actions from '../../actions/userRegistrationInfo';
import DetailDialog from '../../components/User/Registration/detailDialog';
import Mock from 'mockjs';

Mock.mock(/\/area\/getAll/ , 'get', {
    "total_record|1-100": 4,
    "data|8-10": [{
        "date": '@date',
        "number|1-100": '100',
        "name": '@cname',
        "account": '@id',
        "birthday":'@birthday',
        "datetime": '@datetime',
        'age|1-100': 100,
        "gender|1": ['男', '女'],
        "nowiphone": '@id',
        "usediphone": '@id',
        "career":'@guid',
        "area|1": ["上海", "广州", "北京", "重庆", "天津"],
        "address": '@county(true)'
    }]
});

class UserRegistrationInfo extends React.Component {
    constructor(props){
        super(props);
        this.state={
            province:'',
            city:'',
            town:'',
            activePage:1
        };
        this.handleSelect=this.handleSelect.bind(this)
    }
    shouldComponentUpdate(nextProps={},nextState={}){
        return !Immutable.is(this.props,nextProps)||!Immutable.is(this.state,nextState);
    };
    handleSelect(event,data){
        let {eventKey}=data;
        this.setState({
            activePage:eventKey
        })
    }
    componentWillMount(){
    };
    render() {
        let {userRegistrationInfo:{listData:{data},pieSexData,pieAgeData}} =this.props;

       // console.log('render UserRegistrationInfo');
        return (
            <div id="userRegistrationInfo">
                <h2>注册信息</h2>
                <SexArea pieSexData={pieSexData}/>
                <AgeArea pieAgeData={pieAgeData}/>
                <SearchForm/>
                <Table  >
                    <TableHeader adjustForCheckbox={false} displaySelectAll={false}>
                        <TableRow>
                            <TableHeaderColumn>注册时间</TableHeaderColumn>
                            <TableHeaderColumn>序号</TableHeaderColumn>
                            <TableHeaderColumn>账户名</TableHeaderColumn>
                            <TableHeaderColumn>姓名</TableHeaderColumn>
                            <TableHeaderColumn>出生日期</TableHeaderColumn>
                            <TableHeaderColumn>性别</TableHeaderColumn>
                            <TableHeaderColumn>现用手机</TableHeaderColumn>
                            <TableHeaderColumn>地域</TableHeaderColumn>
                            <TableHeaderColumn>邮箱</TableHeaderColumn>
                            <TableHeaderColumn>住址</TableHeaderColumn>
                            <TableHeaderColumn>操作</TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody displayRowCheckbox={false}>
                        {data.map(function (item, key) {
                            return (
                                <TableRow key={key}>
                                    <TableRowColumn>{moment(item.registerDate).format('YYYY-MM-DD')}</TableRowColumn>
                                    <TableRowColumn>{item.identity}</TableRowColumn>
                                    <TableRowColumn>13660454895</TableRowColumn>
                                    <TableRowColumn>{item.name}</TableRowColumn>
                                    <TableRowColumn>{moment(item.birthday).format('YYYY-MM-DD')}</TableRowColumn>
                                    <TableRowColumn>{item.sex}</TableRowColumn>
                                    <TableRowColumn>{item.phone}</TableRowColumn>
                                    <TableRowColumn>全国</TableRowColumn>
                                    <TableRowColumn>{item.email}</TableRowColumn>
                                    <TableRowColumn>{item.address}</TableRowColumn>
                                    <TableRowColumn><IconButton onClick={()=>{
                                        this.props.actions.openDetailDialog();
                                        this.props.actions.setCurrentRegistrationInfo(item.id);
                                    }}><Search/></IconButton></TableRowColumn>
                                </TableRow>
                            )
                        }.bind(this))}
                    </TableBody>
                </Table>
                <Pagination
                    maxButtons={5}
                    activePage={this.state.activePage}
                    onSelect={this.handleSelect}
                    items={20}
                    last
                    first
                    next
                    prev
                />
                <DetailDialog/>
            </div>
        )
    }
};
export  default  connect(
    state=>({
        userRegistrationInfo: state.userRegistrationInfo
    }),
    dispatch=>({
        actions: bindActionCreators(actions, dispatch)
    })
)(UserRegistrationInfo);