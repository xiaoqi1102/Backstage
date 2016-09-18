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
import ChangeListMealPie from '../../components/User/UserChangeList/ChangeListMealPie';
import ChangeListServicePie from '../../components/User/UserChangeList/ChangeListServicePie';
import ChangeListDayPart  from '../../components/User/UserChangeList/ChangeListDayPartPie'
class UserChangeList extends  React.Component{
    shouldComponentUpdate(nextProps={},nextState={}){
        return !Immutable.is(nextProps,this.props)||!Immutable.is(nextState,this.state);
    }
    render(){
        let {
            userChangeList:{
                listData:{data},
                pieSetMealData,
                pieServiceData,
                pieChangeDayPartData
            }
        }=this.props;
        //console.log(data);
        return(
            <div id="userChangeList">
                <h2>变更列表</h2>
                <ChangeListMealPie pieSetMealData={pieSetMealData}/>
                <ChangeListServicePie pieServiceData={pieServiceData}/>
                <ChangeListDayPart pieChangeDayPartData={pieChangeDayPartData}/>
                <Table>
                    <TableHeader>
                        <TableRow>
                            <TableHeaderColumn>
                                姓名
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                手机
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                签约单号
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                原服务种类
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                原套餐种类
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                原套餐服务时段
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                原签约金额
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                原签约时间
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                变更服务种类
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                变更套餐
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                变更套餐服务时段
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                变更金额
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                套餐医生名称
                            </TableHeaderColumn>
                            <TableHeaderColumn>
                                金额变更
                            </TableHeaderColumn>
                        </TableRow>
                    </TableHeader>
                    <TableBody>
                        {data.map((item,key)=>{
                            return(
                                <TableRow key={key}>
                                    <TableRowColumn>
                                        {item.name}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.phone}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.signedOrderNo}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.originalService}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.originalMeal}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.originalMealPeriod}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.originalSignedMoney}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {moment(item.originalSignedTime).format('YYYY-MM-DD')}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.changeService}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.changeMeal}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.changeMealPeriod}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.changeMoney}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.mealDoctor}
                                    </TableRowColumn>
                                    <TableRowColumn>
                                        {item.changeMoneyType}
                                    </TableRowColumn>
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
    userChangeList:state.userChangeList
}))(UserChangeList);