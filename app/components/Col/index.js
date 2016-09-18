/**
 * Created by xiaoqi on 2016/9/6.
 */
import React from 'react';
import './col.less'
class Col extends React.Component{
    render(){
        let {style,flex,className}=this.props;
         flex='0 0 '+flex+'%';
       className? className+=' grid-cell':className='grid-cell';
       // console.log(style);
        return(
            <div className={className}  style={Object.assign({},style,{flex})}>
                {this.props.children}
            </div>
        )
    }
};
export  default  Col;