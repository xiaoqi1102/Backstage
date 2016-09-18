/**
 * Created by xiaoqi on 2016/9/14.
 */
import React from 'react';
import renderPie from '../../../utils/renderPie';
import Immutable from 'immutable';
class ChangeListDayPartPie extends  React.Component{
    renderChart(){
        let {pieChangeDayPartData:{data}}=this.props;
        let paramsObj={
            data,
            container:document.getElementById('changeListDayPart'),
            titleText:'变更服务时段统计',
            seriesName:'服务时段',
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
    shouldComponentUpdate(nextProps={},nextState={}){
        return !Immutable.is(nextProps.pieChangeDayPartData,this.props.pieChangeDayPartData)
    }
    render(){
        return(
            <div id="changeListDayPart" className="areaContainer">

            </div>
        )
    }
};

export  default  ChangeListDayPartPie;