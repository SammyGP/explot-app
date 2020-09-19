import React, { FunctionComponent } from 'react'
import {
  ChartArea32,
  ChartBar32,
  ChartBubble32,
  ChartLineData32,
  ChartPie32,
  ChartCandlestick32,
  ChartRadar32,
  ChartScatter32,
  ChartTreemap32,
  ChartHistogram32,
  ChartStacked32,
} from '@carbon/icons-react'

const allCharts = [
  {
    type: 'line',
    icon: <ChartLineData32 />,
  },
  {
    type: 'bar',
    icon: <ChartBar32 />,
  },
  {
    type: 'scatter',
    icon: <ChartScatter32 />,
  },
]

const futureCharts = [
  {
    type: 'area',
    icon: <ChartArea32 />,
  },
  {
    type: 'pie',
    icon: <ChartPie32 />,
  },
  {
    type: 'candle',
    icon: <ChartCandlestick32 />,
  },
  {
    type: 'radar',
    icon: <ChartRadar32 />,
  },
  {
    type: 'bubble',
    icon: <ChartBubble32 />,
  },
  {
    type: 'treemap',
    icon: <ChartTreemap32 />,
  },
  {
    type: 'histogram',
    icon: <ChartHistogram32 />,
  },
  {
    type: 'stackedbar',
    icon: <ChartStacked32 />,
  },
]

const ChartChooseChartView: FunctionComponent<any> = ({
  setView,
  setChartType,
}) => {
  return (
    <div className='h-full flex flex-col'>
      <h2 className='text-center pt-4'>Choose a chart type</h2>
      <div className='grid grid-cols-4 gap-4 mt-4'>
        {allCharts.map((chart) => (
          <div
            className='mx-auto cursor-pointer'
            onClick={() => {
              setChartType(chart.type)
              setView(1)
            }}
          >
            {chart.icon}
          </div>
        ))}
        {futureCharts.map((chart) => (
          <div className='mx-auto cursor-not-allowed opacity-50'>
            {chart.icon}
          </div>
        ))}
      </div>
    </div>
  )
}

export default ChartChooseChartView
