/**
 * Created by xiaoqi on 2016/9/8.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import Row from '../../components/Row';
import Col from '../../components/Col';
class SystemChangePassword extends  React.Component{
    render(){
        return(
            <div id="systemChangePassword">
                <h2>密码修改</h2>
                <form >
                    <Row>
                        <Col flex="10"/>
                        <Col  flex="30" style={{justifyContent:'center'}}>
                            <TextField floatingLabelText={'账号'} fullWidth={true} hintText={'账号'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col flex="10"/>
                        <Col flex="30">
                            <TextField type="password" floatingLabelText={'原密码'} fullWidth={true} hintText={'账号'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col flex="10"/>
                        <Col flex="30">
                            <TextField type="password" floatingLabelText={'新密码'} fullWidth={true} hintText={'账号'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col flex="10"/>
                        <Col flex="30">
                            <TextField type="password" floatingLabelText={'确认密码'} fullWidth={true} hintText={'确认密码'}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col flex="10"/>
                        <Col flex="30">
                            <RaisedButton fullWidth={true} primary={true} label="确认修改密码"/>
                        </Col>
                    </Row>
                </form>
            </div>
        )
    }
};

export default  SystemChangePassword;