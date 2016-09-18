/**
 * Created by xiaoqi on 2016/9/12.
 */
import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import Search from 'material-ui/svg-icons/action/search';
import FontIcon from 'material-ui/FontIcon';
import TextField from 'material-ui/TextField';
import DropDownMenu from 'material-ui/DropDownMenu'
class AdministratorInformationSearchForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            role: '',
            job:'',
            name:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSelect=this.handleSelect.bind(this);
    }

    handleSelect(event, index, value, name) {
        let newState = this.state;
        newState[name] = value;
        this.setState(newState)
    }
    handleChange(event) {
        let {name,value}=event.target;
        let newState = this.state;
        newState[name]=value;
        this.setState(newState);
    }


    render() {
        let {role,job,name}=this.state;
        return (
            <div id="administratorInformationSearchForm">
                <SelectField
                    floatingLabelText={'角色'}
                    value={role}
                    onChange={(event, index, value)=> {
                        this.handleSelect(event, index, value, 'role')
                    }}>
                    <MenuItem value="" primaryText={'角色'}/>
                    <MenuItem value="1" primaryText={'超级管理员'}/>
                </SelectField>
                <SelectField
                    floatingLabelText={'职位'}
                    value={job}
                    onChange={(event, index, value)=> {
                        this.handleSelect(event, index, value, 'job')
                    }}>
                    <MenuItem value="" primaryText={'客服'}/>
                    <MenuItem value="1" primaryText={'运营人员'}/>
                </SelectField>
                <TextField
                    className={'inline-textField'}
                    name="name"
                    onChange={this.handleChange}
                    value={name}
                    hintText={'姓名'}
                    floatingLabelText={'姓名'}
                />
                <RaisedButton primary={true} icon={<Search/>} label={'查询'} />
            </div>
        )
    }
}
;
export  default  AdministratorInformationSearchForm;