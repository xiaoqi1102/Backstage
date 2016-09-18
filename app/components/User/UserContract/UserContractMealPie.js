/**
 * Created by xiaoqi on 2016/9/14.
 */
import renderPie from '../../../utils/renderPie';
import React from 'react';
import Immutable from 'immutable';
class UserContractMealPie extends React.Component{
    renderChart(){
        let {pieContractMealData:{data}}=this.props;
        let paramsObj={
            data,
            container:document.getElementById('userContractMealPie'),
            titleText:'签约套餐分布图',
            seriesName:'签约套餐',
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
        return !Immutable.is(nextprops.pieContractMealData,this.props.pieContractMealData);
    }
    render(){
        return(
            <div id="userContractMealPie" className="areaContainer">

            </div>
        )
    }
};
export  default  UserContractMealPie;