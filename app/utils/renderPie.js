/**
 * Created by xiaoqi on 2016/9/13.
 */
import echarts from 'echarts'
export  default (paramsObject)=>{
    let {data,container,theme,titleText,seriesName}=paramsObject;
    let nameArray = data.map(function (item, index) {
        return item.name
    });
    // console.log(nameArray);
    const myChart = echarts.init(container, theme);
    const option = {
        title: {
            text: titleText,
            subtext: '',
            x: 'center'
        },
        tooltip: {
            trigger: 'item',
            formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        legend: {
            orient: 'vertical',
            x: 'left',
            data: nameArray
        },
        toolbox: {
            show: true,
            feature: {
                mark: {show: true},
                dataView: {show: true, readOnly: false},
                magicType: {
                    show: true,
                    type: ['pie', 'funnel'],
                    option: {
                        funnel: {
                            x: '25%',
                            width: '50%',
                            funnelAlign: 'left',
                            max: 1548
                        }
                    }
                },
                restore: {show: true},
                saveAsImage: {show: true}
            }
        },
        calculable: true,
        series: [
            {
                name: seriesName,
                type: 'pie',
                radius: '55%',
                center: ['50%', '60%'],
                data: data
            }
        ]
    };

    myChart.setOption(option);
}