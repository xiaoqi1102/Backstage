/**
 * Created by xiaoqi on 2016/9/6.
 */
import React from 'react'
import './row.less';

class Row extends React.Component{
    render(){
        return(
            <div className="grid">
                {this.props.children}
            </div>
        )
    }
};

export  default  Row;