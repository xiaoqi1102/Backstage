/**
 * Created by xiaoqi on 2016/9/14.
 */
import renderPie from '../../../utils/renderPie';
import React from 'react';
import Immutable from 'immutable';
class UserContractServiceLifePie extends React.Component{
    renderChart(){
        let {pieServiceLifeData:{data}}=this.props;
        let paramsObj={
            data,
            container:document.getElementById('userContractServiceLifePie'),
            titleText:'签约套餐服务期限分布图',
            seriesName:'服务期限',
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
        return !Immutable.is(nextprops.pieServiceLifeData,this.props.pieServiceLifeData);
    }
    render(){
        return(
            <div id="userContractServiceLifePie" className="areaContainer">

            </div>
        )
    }
};
export  default  UserContractServiceLifePie;