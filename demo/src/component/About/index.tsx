import React, { useEffect } from "react";
import * as echarts from 'echarts';
import styles from './index.module.scss';
interface HeatChartInterface {
  chartData: Array<any>
}
const HeatChart = (props: HeatChartInterface) => {
  const { chartData } = props
  console.log(chartData, 'chartData');
  useEffect(() => {
    renderChart()
  }, [])
  return (
    <div className={styles.heatChartBox}>
      <div className={styles.leftyAxisBox}>
        <span>1</span>
        <span>2</span>
        <span>3</span>
        <span>4</span>
        <span>5</span>
        <span>6</span>
      </div>
      <div id="chartBox" className={styles.chartBox} ></div>
    </div>
  )

}
const renderChart = () => {
  var chartDom = document.getElementById('chartBox');
  var myChart = echarts.init(chartDom);
  var option: any;

  var hours = ['12a', '1a', '2a', '3a', '4a', '5a', '6a', '7a', '8a', '9a', '10a', '11a'];
  var days = ['Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'];
  var data = [[0, 0, '5'], [0, 1, '1'], [0, 3, ''], [0, 4, 10]];

  data = data.map(function (item) {
    return [item[1], item[0], item[2] || '-'];
  });

  option = {
    tooltip: {
      position: 'top'
    },
    grid: {
      height: '50%',
      width: '100%',
      top: '10%'
    },
    xAxis: {
      type: 'category',
      data: hours,
      splitArea: {
        show: true
      }
    },
    yAxis: {
      type: 'category',
      data: days,

      splitArea: {
        show: true
      },
      triggerEvent: true
    },
    visualMap: {
      min: 0,
      max: 10,
      calculable: true,
      orient: 'horizontal',
      // left: 'center',
      bottom: '15%',
      left: '0%'
    },
    series: [{
      name: 'Punch Card',
      type: 'heatmap',
      data: data,
      label: {
        show: true
      },
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
    }]
  };

  option && myChart.setOption(option);
  myChart.on('click', function (param) {
    if (param.componentType == 'yAxis') {
      // 点击y轴，param
      // componentIndex: 0，componentType: "yAxis"，event: {type: "click", event: MouseEvent, target: TSpan, topTarget: TSpan, cancelBubble: false, …}，targetType: "axisLabel"，type: "click"，value: "Saturday"，yAxisIndex: 0
      console.log(param, 111);
    }

  })

}
export default HeatChart