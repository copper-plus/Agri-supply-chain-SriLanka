import React from 'react';
import ReactEcharts from 'echarts-for-react';
import {paddyProductionData} from '../data/padduProductionData'


export const Paddyproduction = () =>(
        <ReactEcharts
        option = {{
          title: {
              text: 'Paddy Production Sri Lanka',
              subtext: 'Time period 1952-2012',
              left: 'center'
          },
          tooltip: {
              trigger: 'axis',
              axisPointer: {
                  animation: false
              }
          },
          legend: {
              //data: ['Yala', 'Maha'],
              left: 500
          },
          
          axisPointer: {
              link: {xAxisIndex: 'all'}
          },
          dataZoom: [
              {
                  show: true,
                  realtime: true,
                  start: 30,
                  end: 70,
                  xAxisIndex: [0, 1]
              },
              {
                  type: 'inside',
                  realtime: true,
                  start: 30,
                  end: 70,
                  xAxisIndex: [0, 1]
              }
          ],
          grid: [{
              left: 50,
              right: 50,
              height: '35%'
          }, {
              left: 50,
              right: 50,
              top: '55%',
              height: '35%'
          }],
          xAxis: [
              {
                  type: 'category',
                  boundaryGap: false,
                  axisLine: {onZero: true},
                  data: paddyProductionData.map(function(o){return o.year})
              },
              {
                  gridIndex: 1,
                  type: 'category',
                  boundaryGap: false,
                  axisLine: {onZero: true},
                  data: paddyProductionData.map(function(o){return o.year}),
                  position: 'top'
              }
          ],
          yAxis: [
              {
                  name: 'Mt.',
                  type: 'value',
                  max: 2700
              },
              {
                  gridIndex: 1,
                  name: 'Mt.',
                  type: 'value',
                  inverse: true,
                  max: 2700
              }
          ],
          series: [
              {
                  name: 'maha',
                  type: 'line',
                  symbolSize: 8,
                  hoverAnimation: false,
                  data:paddyProductionData.map(function(o){return o.maha_production}),
                  areaStyle: {}
              },
              {
                  name: 'yala',
                  type: 'line',
                  xAxisIndex: 1,
                  yAxisIndex: 1,
                  symbolSize: 8,
                  hoverAnimation: false,
                  data:paddyProductionData.map(function(o){return o.yala_production}),
                  areaStyle: {}
              }
          ]
      }}
        ></ReactEcharts>
)
    