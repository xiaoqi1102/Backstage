/**
 * Created by xiaoqi on 2016/9/12.
 */
import React from 'react';
import echarts from 'echarts'
import Immutable from 'immutable';
import  renderPie from '../../../utils/renderPie'
class AgeArea extends React.Component {
    renderChart() {
        let {pieAgeData:{data}}=this.props;
        let paramsObj={
            data,
            container:document.getElementById('ageArea'),
            titleText:'注册用户年龄分布图',
            seriesName:'年龄分布',
            theme:'infographic'
        };
        renderPie(paramsObj);
    };

    componentDidMount() {
        this.renderChart();
    };

    componentDidUpdate() {
        this.renderChart();
    };

    shouldComponentUpdate(nextProps = {}, nextState = {}) {
        return !Immutable.is(nextProps.pieAgeData, this.props.pieAgeData);
    }

    render() {
        let {pieAgeData:{data}}=this.props;
        return (
            <div id="ageArea" style={{display: 'inline-block', width: 500, height: 500}}>
            </div>
        )
    }
}
;
export  default  AgeArea;