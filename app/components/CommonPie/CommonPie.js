/**
 * Created by xiaoqi on 2016/9/14.
 */
import React from 'react';
import renderPie from '../../utils/renderPie';
import Immutable from 'immutable'
class CommonPie extends React.Component{
    renderChart(){
        let {paramsObj}=this.props;
       paramsObj.container=document.getElementById(paramsObj.id);
        renderPie(paramsObj);
    };
    componentDidMount(){
        this.renderChart()
    };
    componentDidUpdate(){
        this.renderChart();
    };
    shouldComponentUpdate(nextProps={},nextState={}){

       let bool= !Immutable.is(nextProps.paramsObj.data,this.props.paramsObj.data);
        return bool;
    }
    render(){
        let {paramsObj}=this.props;
        return(
            <div id={paramsObj.id} className="areaContainer">

            </div>
        )
    }
};
export  default  CommonPie;