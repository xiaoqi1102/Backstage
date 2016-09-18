/**
 * Created by xiaoqi on 2016/9/14.
 */
import React from 'react'
import Immutable from 'immutable';
import renderPie from '../../../utils/renderPie'
class ChangeListMealPie extends React.Component{
    renderChart(){
        let {pieSetMealData:{data}}=this.props;
        let paramsObj={
            data,
            container:document.getElementById('changelistMealPie'),
            titleText:'变更套餐分布图',
            seriesName:'套餐',
            theme:'infographic'
        };
        renderPie(paramsObj);
    }
    componentDidMount(){
        this.renderChart();
    };
    componentDidUpdate(){
        this.renderChart();
    }
    shouldComponentUpdate(nextprops={},nextState={}){
        return !Immutable.is(nextprops.pieSetMealData,this.props.pieSetMealData);
    }
    render(){
        return(
            <div id="changelistMealPie" className="areaContainer">

            </div>
        )
    }
};
export  default  ChangeListMealPie;