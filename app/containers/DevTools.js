/**
 * Created by xiaoqi on 2016/9/6.
 */
import React from 'react'

//从redux-devtools中引入createDevTools
import { createDevTools } from 'redux-devtools';

//显示包是单独的，要额外指定
import LogMonitor from 'redux-devtools-log-monitor';
import DockMonitor from 'redux-devtools-dock-monitor';

//创建DevTools组件
const DevTools = createDevTools(
    <DockMonitor toggleVisibilityKey="H"
                 changePositionKey="Q"
                 defaultIsVisible={true}>
        <LogMonitor />
    </DockMonitor>
);

export default DevTools