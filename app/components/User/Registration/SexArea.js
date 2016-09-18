/**
 * Created by xiaoqi on 2016/9/8.
 */
import React from 'react';
import Immutable from 'immutable';
import renderPie from '../../../utils/renderPie'
class SexArea extends  React.Component{
    getTotalUser(data){
        let total=0;
        data.map(function (item, index) {
            total+=item.value
        });
        return total;
    }
    renderCharts(){
        let {pieSexData:{data}}=this.props;
        let paramsObj={
            data,
            container:document.getElementById('sexArea'),
            titleText:'注册用户性别分布图',
            seriesName:'用户性别分布',
            theme:'infographic'
        };
        renderPie(paramsObj);
    }
    componentDidMount(){
        this.renderCharts();
    }
    componentDidUpdate(){
        this.renderCharts();
    }
    shouldComponentUpdate(nextProps={},nextState={}){
        return !Immutable.is(nextProps.pieSexData,this.props.pieSexData);
    }
    render(){
        let {pieSexData:{data}}=this.props;
       /// console.log(data);
        return(
            <div id="sexArea" className="areaContainer">

            </div>
        )
    }
};

export  default  SexArea;