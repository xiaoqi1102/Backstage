/**
 * Created by xiaoqi on 2016/9/12.
 */
import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Row from '../../Row';
import Col from '../../Col';
import Immutable from 'immutable'
import Divider from 'material-ui/Divider';
import * as actions from '../../../actions/userHealth'
class UserHealthDetailDialog extends React.Component{
    constructor(props){
        super(props);
        this.handleClose=this.handleClose.bind(this);
    }
    handleClose(){
        this.props.actions.closeUserHealthDetailDialog();
    }
    shouldComponentUpdate(nextProps={},nextState={}){
        //console.log('should update');
        return !Immutable.is(nextProps,this.props)||!Immutable.is(nextState,this.state)
    }
    render(){
        let {userHealth:{currentUserHealthData}}=this.props;
        let  {
            avatarUrl,
            email,
            id,
            name,
            phone,
            registerDate,
            role
        }=currentUserHealthData;
        const actionList = [
            <FlatButton
                label="关闭"
                primary={true}
                onClick={this.handleClose}
            />,
            <FlatButton
                label="确定"
                primary={true}
                onClick={this.handleClose}
            />
        ];
        let {userHealth:{dialogOpen}}=this.props;
       return(
           <div id="userHealthDetailDialog">
               <Dialog
                   title="用户注册资料详情"
                   actions={actionList}
                   modal={true}
                   open={dialogOpen}
               >
                   <Card>
                       <CardHeader
                           avatar={avatarUrl}
                           title={name}
                           subtitle={role}
                           actAsExpander={true}
                           showExpandableButton={false}
                       >
                           <CardText>
                               <Row>
                                   <Col>
                                       手机：{phone}
                                   </Col>
                                   <Col>
                                       角色：{role}
                                   </Col>
                               </Row>
                               <Divider/>
                               <Row>
                                   <Col>
                                   邮箱：{email}
                                   </Col>
                                   <Col>
                                       注册日期：{moment(registerDate).format('YYYY-MM-DD')}
                                   </Col>
                               </Row>
                               <Divider/>
                           </CardText>
                       </CardHeader>
                   </Card>
               </Dialog>

           </div>
       )
    }
};

export  default  connect(
    state=>({
        userHealth:state.userHealth
    }),
    dispatch=>({
        actions:bindActionCreators(actions,dispatch)
    })
)(UserHealthDetailDialog);