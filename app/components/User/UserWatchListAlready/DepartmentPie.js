/**
 * Created by xiaoqi on 2016/9/13.
 */
import React from 'react';
import renderPie from '../../../utils/renderPie'
class DepartmentPie extends React.Component{
    renderChart(){
        let {departmentPieData:{data}}=this.props;
        let paramsObj={
            data,
            container:document.getElementById('departmentPie'),
            titleText:'关注对象科室分布图',
            seriesName:'科室',
            theme:'infographic'
        };
       renderPie(paramsObj);
    }
    componentDidMount(){
        this.renderChart();
    }
    componentDieUpdate(){
        this.renderChart();
    }
    componentWillRe(){}
    render(){
        return(
            <div id="departmentPie" className="areaContainer">

            </div>
        )
    }
};
export  default  DepartmentPie;