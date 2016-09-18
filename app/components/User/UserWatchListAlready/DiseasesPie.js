/**
 * Created by xiaoqi on 2016/9/13.
 */
import React from 'react';
import renderPie from '../../../utils/renderPie'
class DiseasesPie extends React.Component{
    renderChart(){
        let {pieDiseasesData:{data}}=this.props;
        let paramsObj={
            data,
            container:document.getElementById('diseasesPie'),
            titleText:'关注对象病种分布图',
            seriesName:'病种',
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
    render(){
        return(
            <div id="diseasesPie" className="areaContainer">

            </div>
        )
    }
};
export  default  DiseasesPie;