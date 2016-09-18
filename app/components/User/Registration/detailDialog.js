import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {Card, CardActions, CardHeader, CardText} from 'material-ui/Card';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux'
import Row from '../../Row';
import Col from '../../Col';
import Immutable from 'immutable'
import Divider from 'material-ui/Divider'
import * as actions from '../../../actions/userRegistrationInfo';
class DetailDialog extends React.Component {
    constructor(props) {
        super(props);
        this.state={};
        this.handleClose = this.handleClose.bind(this);
    };

    handleClose() {
        this.props.actions.closeDetailDialog();
    }
    shouldComponentUpdate(nextProps={},nextState={}){
       // console.log(this.props);
        return !Immutable.is(this.props,nextProps)||!Immutable.is(this.state,nextState);
    }
    render() {
       // console.log('render detail dialog');
        let {userRegistrationInfo:{detailOpen,currentUserRegistrationInfo:{
            address,
            avatarUrl,
            birthday,
            career,
            contactPhone,
            email,
            id,
            identity,
            name,
            phone,
            registerDate,
            role,
            sex
        }}}=this.props;
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
        return (
            <div id="DetailDialog">

                <Dialog
                    title="用户注册资料详情"
                    actions={actionList}
                    modal={true}
                    open={detailOpen}
                >
                    <Card>
                        <CardHeader
                            avatar={avatarUrl}
                            title={name}
                            subtitle={career}
                            actAsExpander={true}
                            showExpandableButton={false}
                        />
                        <CardText >
                           <Row>
                               <Col>
                                   生日：{moment(birthday).format('YYYY-MM-DD')}
                               </Col>

                               <Col>
                                   性别：{sex}
                               </Col>

                           </Row>
                            <Divider/>
                            <Row>
                                <Col>
                                    注册日期: {moment(registerDate).format('YYYY-MM-DD')}
                                </Col>
                                <Col>
                                    角色 ：{role}
                                </Col>
                            </Row>
                            <Divider/>
                            <Row>
                                <Col>
                                    手机：{phone}
                                </Col>
                                <Col>
                                    曾用手机: {contactPhone}
                                </Col>
                            </Row>
                            <Divider/>
                            <Row>
                                <Col>
                                    地址：{address}
                                </Col>
                            </Row>
                            <Divider/>
                        </CardText>
                    </Card>
                </Dialog>
            </div>
        )
    }
}
;
export default connect(
    state=>({
        userRegistrationInfo: state.userRegistrationInfo
    }),
    dispatch=>({
        actions: bindActionCreators(actions, dispatch)
    })
)(DetailDialog);
