/**
 * Created by xiaoqi on 2016/9/14.
 */
import React from 'react';
import renderPie from '../../../utils/renderPie';
import Immutable from 'immutable';
class ChangeListServicePie extends  React.Component{
    renderChart(){
        let {pieServiceData:{data}}=this.props;
        let paramsObj={
            data,
            container:document.getElementById('changeListServicePie'),
            titleText:'变更服务类型分布图',
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
        return !Immutable.is(nextProps.pieServiceData,this.props.pieServiceData);
    }
    render(){
        return(
            <div id="changeListServicePie" className="areaContainer">

            </div>
        )
    }
};
export  default  ChangeListServicePie;