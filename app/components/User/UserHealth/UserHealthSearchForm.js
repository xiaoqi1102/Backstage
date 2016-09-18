/**
 * Created by xiaoqi on 2016/9/12.
 */
import React from 'react';
import DatePicker from 'material-ui/DatePicker'
import RaisedButton from 'material-ui/RaisedButton';
import SelectField from 'material-ui/SelectField';
import TextField from 'material-ui/TextField';
import MenuItem from 'material-ui/MenuItem';
import Search from 'material-ui/svg-icons/action/search';
import DropDownMenu from 'material-ui/DropDownMenu'
//import {shallowEqualImmutable} from 'react-immutable-render-mixin';
import Immutable from 'immutable';

class UserHealthSearchForm extends  React.Component{
    constructor(props){
        super(props);
        this.state={
            province:'',
            city:'',
            town:'',
            sex:''
        };
        this.handleChange=this.handleChange.bind(this)
    }
    handleChange(event,index,value,name){
        let newState=this.state;
        newState[name]=value;
        this.setState(newState)
    }
    shouldComponentUpdate(nextProps={},nextState={}){
        let boolUpdate=!Immutable.is(this.state,nextState)||!Immutable.is(this.props,nextProps);
        //console.log(boolUpdate);
        return boolUpdate;
    };
    render(){
        let {province,city,town,sex}=this.state;
        console.log('render user registration search form ');
        return(
            <div id="searchForm">
                <form>
                    <DropDownMenu id="province"   value={province} onChange={(event,index,value)=>{
                        this.handleChange(event,index,value,'province')
                    }}>
                        <MenuItem value={''} primaryText={'省份'}/>
                        <MenuItem value={1} primaryText={'广东省'}/>
                        <MenuItem value={2} primaryText={'广西省'}/>
                    </DropDownMenu>
                    <DropDownMenu id="city"    value={city} onChange={(event,index,value)=>{
                        this.handleChange(event,index,value,'city')
                    }}>
                        <MenuItem value={''} primaryText={'城市'}/>
                        <MenuItem value={1} primaryText={'汕头市'}/>
                        <MenuItem value={2} primaryText={'桂林市'}/>
                    </DropDownMenu>
                    <DropDownMenu id="city"    value={town} onChange={(event,index,value)=>{
                        this.handleChange(event,index,value,'town')
                    }}>
                        <MenuItem value={''} primaryText={'区/镇'}/>
                        <MenuItem value={1} primaryText={'澄海区'}/>
                        <MenuItem value={2} primaryText={'南澳县'}/>
                    </DropDownMenu>
                    <DropDownMenu  id="sex"   value={sex} onChange={(event,index,value)=>{
                        this.handleChange(event,index,value,'sex')
                    }}>
                        <MenuItem value={''} primaryText={'性别'}/>
                        <MenuItem value={1} primaryText={'男'}/>
                        <MenuItem value={2} primaryText={'女'}/>
                        <MenuItem value={2} primaryText={'未知'}/>
                    </DropDownMenu>
                    <TextField className={'inline-textField'} floatingLabelText={'现病史'} hintText={'按病史搜索'}/>

                    <RaisedButton  type="submit" icon={<Search/>} label={'查询'} primary={true}/>
                </form>
            </div>
        )
    }
};
export  default  UserHealthSearchForm;