import React, { useState, FunctionComponent } from 'react'
import { XAxis32, YAxis32, ZAxis32, PlayOutline32 } from '@carbon/icons-react'
import { validateColumn } from '../../../utils/validator'
import { prepareOptions } from '../../../utils/transformer'
import { Options } from '../../../types/types'

const GroupTab = ({}) => {
  return (
    <div>
      <h3>Coming Soon</h3>
    </div>
  )
}

const ChartSetOptionsView: FunctionComponent<any> = ({
  columns,
  setChartConfig,
  setView,
  dataframe,
}) => {
  const [loading, setLoading] = useState(false)
  //const [tab, setTab] = useState(0)

  // Aggregate state for Y axis
  const [radioState, setRadioState] = useState(null)
  const handleRadioChange = (e: any) => {
    // handle if value is set to none as it should return null for the aggretate to be skipped
    setRadioState(e.target.value)
  }

  // Axes intpu
  const [xAxis, setXAxis] = useState(columns[0])
  const handleXAxisChange = (e: any) => {
    setXAxis(e.target.value)
  }
  const [yAxis, setYAxis] = useState(columns[0])
  const handleYAxisChange = (e: any) => {
    setYAxis(e.target.value)
  }

  return (
    <div className='h-full w-full'>
      {/*<nav> NO nav for now
        <ul className="flex">
          <li onClick={() => setTab(0)}>Dimension</li>
          <li onClick={() => setTab(1)}>Aggretate</li>
          <li onClick={() => setTab(2)}>Group</li>
        </ul>
      </nav>*/}
      <h2 className='p-2'>Configure Chart Dimensions</h2>
      <form
        className='px-2 mx-auto'
        onSubmit={(e) => {
          e.preventDefault()
          if (xAxis === yAxis || !xAxis || !yAxis) {
            console.log("Can't choose both same axis for both")
            return
          }

          const options: Options = {
            xAxis,
            yAxis,
            aggregate: radioState,
          }

          // Handles all the dataframe transformation and aggregation
          prepareOptions(options, dataframe).then((df) => {
            const dataset = df.toArray()
            // Set the cell container chart object to be the prepared dataframe
            setChartConfig({
              xAxis,
              yAxis,
              dataset,
              agg: options.aggregate,
            })

            // make sure this isnt called before data is set we dont want to change the view before the data exist
            setView(3)
          })
        }}
      >
        {/**
         * X Axis
         */}
        <div className='flex p-4'>
          <XAxis32 />
          <label className='mx-2'>Set X axis</label>
          <select
            className='block bg-white border border-gray-400 rounded shadow focus:outline-none focus:shadow-outline'
            value={xAxis}
            onChange={handleXAxisChange}
          >
            {columns.map((col: any) => (
              <option value={col}>{col}</option>
            ))}
          </select>
        </div>
        {/**
         * Y Axis
         */}
        <div className='p-4'>
          <div className='flex'>
            <YAxis32 />
            <label className='mx-2'>Set Y axis</label>
            <select
              className='block bg-white border border-gray-400 rounded shadow focus:outline-none focus:shadow-outline'
              value={yAxis}
              onChange={handleYAxisChange}
            >
              {columns.map((col: any) => (
                <option value={col}>{col}</option>
              ))}
            </select>
          </div>
          <ul className='flex px-2 py-2 mx-2'>
            <li className='mr-2 flex flex-col'>
              <input
                type='radio'
                value='max'
                name='aggregation'
                className='mr-1 mx-auto w-full'
                onClick={handleRadioChange}
              />
              <label>max</label>
            </li>
            <li className='mr-2 flex flex-col'>
              <input
                type='radio'
                value='min'
                name='aggregation'
                className='mr-1 mx-auto w-full'
                onClick={handleRadioChange}
              />
              <label>min</label>
            </li>
            <li className='mr-2 flex flex-col'>
              <input
                type='radio'
                value='avg'
                name='aggregation'
                className='mr-1 mx-auto w-full'
                onClick={handleRadioChange}
              />
              <label>avg</label>
            </li>
            <li className='mr-2 flex flex-col'>
              <input
                type='radio'
                value='std'
                name='aggregation'
                className='mr-1 mx-auto w-full'
                onClick={handleRadioChange}
              />
              <label>std</label>
            </li>
            <li className='mr-2 flex flex-col'>
              <input
                type='radio'
                value='cnt'
                name='aggregation'
                className='mr-1 mx-auto w-full'
                onClick={handleRadioChange}
              />
              <label>cnt</label>
            </li>
            <li className='mr-2 flex flex-col'>
              <input
                type='radio'
                value='sum'
                name='aggregation'
                className='mr-1 mx-auto w-full'
                onClick={handleRadioChange}
              />
              <label>sum</label>
            </li>
            <li className='mr-2 flex flex-col'>
              <input
                type='radio'
                value='med'
                name='aggregation'
                className='mr-1 mx-auto w-full'
                onClick={handleRadioChange}
              />
              <label>med</label>
            </li>
            <li className='mr-2 flex flex-col'>
              <input
                type='radio'
                value=''
                name='aggregation'
                className='mr-1 mx-auto w-full'
                onClick={handleRadioChange}
              />
              <label>none</label>
            </li>
          </ul>
        </div>
        <div className='w-full text-center'>
          <button
            className='shadow-custom mx-auto w-8 h-8 text-center shadow focus:outline-none'
            type='submit'
          >
            <PlayOutline32 />
          </button>
        </div>
      </form>
    </div>
  )
}

/*
const oldForm = (
  <div>
    {tab === 0 ? (
      <DimensionTab columns={columns} />
    ) : tab === 1 ? (
      <AggregateTab
        dataframe={dataframe}
        options={options}
        addOptions={addOptions}
      />
    ) : tab === 2 ? (
      <GroupTab />
    ) : (
      <DimensionTab columns={columns} />
    )}
  </div>
)
*/
export default ChartSetOptionsView
