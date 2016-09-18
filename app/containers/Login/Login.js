/**
 * Created by xiaoqi on 2016/9/6.
 */

import React from 'react';
import Row from '../../components/Row';
import Col from '../../components/Col';
import TextField from 'material-ui/TextField';
import RaiseButton from 'material-ui/RaisedButton';
import {browserHistory} from 'react-router';
import * as RouterPath from '../../constants/RouterPath'
class Login extends  React.Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }
    handleSubmit(e){
        e.preventDefault();
        console.log('login ');
        browserHistory.push(RouterPath.home);
    }
    render(){
        return(
            <section id="login">
                <h1>健康管理系统</h1>
                <Row>
                    <Col flex="25"/>
                    <Col flex="50">
                        <Row>
                            <Col flex="30"/>
                            <Col flex="40">
                                <form onSubmit={this.handleSubmit}>
                                    <TextField hintText={'用户名'} floatingLabelText={'登录名或者手机'} fullWidth={true}/>
                                    <TextField type={'password'} hintText={'密码'} floatingLabelText={'请输入密码'} fullWidth/>
                                    <RaiseButton primary={true} label="登录" fullWidth={true} type="submit"/>
                                </form>
                            </Col>
                        </Row>
                    </Col>
                </Row>

            </section>
        )
    }
};

export  default Login;