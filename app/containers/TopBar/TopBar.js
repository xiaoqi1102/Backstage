/**
 * Created by xiaoqi on 2016/9/6.
 */
import React from 'react';
import AppBar from 'material-ui/AppBar'
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import IconButton from 'material-ui/IconButton';
import KeyBoardArrowDown from 'material-ui/svg-icons/hardware/keyboard-arrow-down'
import {browserHistory} from 'react-router'
import * as RouterPath from '../../constants/RouterPath'
class TopBar extends  React.Component{
    render(){
        return(
            <AppBar
            title='健康后台管理系统'
            iconElementRight={
                <IconMenu
                    iconButtonElement={
                        <IconButton><KeyBoardArrowDown /></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}
                >
                    <MenuItem primaryText="我的账号" />
                    <MenuItem primaryText="退出登录" onClick={()=>{
                        browserHistory.push(RouterPath.login)
                    }} />
                    <MenuItem primaryText="后台管理首页" onClick={()=>{
                        browserHistory.push(RouterPath.home)
                    }} />
                </IconMenu>
            }
            />
        )
    }
};

export  default  TopBar;