/**
 * Created by xiaoqi on 2016/9/14.
 */
import React from 'react';
import renderPie from '../../../utils/renderPie';
import Immutable from 'immutable';
class UserContractAmountPie extends React.Component{
    renderChart(){
        let {pieContractAmountData:{data}}=this.props;
        let paramsObj={
            data,
            container:document.getElementById('userContractAmountPie'),
            titleText:'签约金额分布图',
            seriesName:'签约金额',
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
        return !Immutable.is(nextprops.pieContractAmountData,this.props.pieContractAmountData);
    }
    render(){
        return(
            <div id="userContractAmountPie" className="areaContainer">

            </div>
        )
    }
};
export  default  UserContractAmountPie;