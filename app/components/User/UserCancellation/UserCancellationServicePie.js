/**
 * Created by xiaoqi on 2016/9/14.
 */
import React from 'react';
import renderPie from '../../../utils/renderPie';
import Immutable from 'immutable';
class UserCancellationServicePie extends  React.Component{
    renderChart(){
        let {pieUnwindServiceData:{data}}=this.props;
        let paramsObj={
            data,
            container:document.getElementById('userCancellationService'),
            titleText:'解约服务类型分布图',
            seriesName:'服务类型',
            theme:'infographic'
        };
        renderPie(paramsObj);
    }
    componentDidMount(){
        this.renderChart();
    }
    componentDidUpdate(){
        this.renderChart();
    }
    shouldComponentUpdate(nextProps,nextState){
        return !Immutable.is(nextProps.pieUnwindServiceData,this.props.pieUnwindServiceData);
    }
    render(){
        return(
            <div id="userCancellationService" className="areaContainer">

            </div>
        )
    }
};
export  default  UserCancellationServicePie;