import * as df from 'data-forge'
import { Options } from '../types/types'
import { IColumn } from 'data-forge/build/lib/dataframe'

/**
 *
 * @param dataframe
 * @param xAxis
 * @param yAxis
 * @returns the entire `dataframe` as an array of Objects
 */
export const echartsDataPreparer = (chartConfig: any): Object[] => {
  return chartConfig.dataset

  //const dataset = JSON.parse(dataframe.toJSON())
  //return dataset
}

const aggregateData = (data: df.Series, aggregation: any) => {
  if (aggregation === 'max') {
    return data.max()
  }
  if (aggregation === 'min') {
    return data.min()
  }
  if (aggregation === 'cnt') {
    return data.count()
  }
  if (aggregation === 'std') {
    return data.std()
  }
  return data.toArray()
}

const columnParser = (series: df.Series) => {
  // do stuff
  return series
}

/**
 * Gets called on a `dataframe` pivot to determine how to aggregate it
 * @param aggr
 * @returns The aggregation type
 */
const aggreate = (aggr: string) => {
  if (aggr === 'max') {
    return df.Series.max
  }
  if (aggr === 'min') {
    return df.Series.min
  }
  if (aggr === 'cnt') {
    return df.Series.count
  }
  if (aggr === 'std') {
    return df.Series.std
  }
  if (aggr === 'sum') {
    return df.Series.sum
  }
  if (aggr === 'avg') {
    return df.Series.average
  }
  if (aggr === 'med') {
    return df.Series.median
  }
  return df.Series.average
}

const transformDate = (dateString: string) => {
  const date = new Date(dateString)
  return date
}

/**
 * Applyies the Data Forge pivot function
 * @param dataframe a dataforge dataframe
 * @param groupBy the string column to group the data by
 * @param valueCol the number column that will be aggregated
 * @param aggregation aggregation type
 * @returns new `dataframe` grouped and agggregated
 */
const pivot = (
  dataframe: df.DataFrame,
  groupBy: string,
  valueCol: string,
  aggregation: string
) => {
  // Get the columns we want first and discard the rest
  const newDf = new df.DataFrame(dataframe.subset([groupBy, valueCol]))

  // Check if groupBy is a number or string

  const xAxis = newDf
    .detectTypes()
    .toArray()
    .find((x) => x.Column === groupBy)

  // if its a string group by it
  if (xAxis && xAxis.Type === 'string') {
    // If x axis is a string group the data by the x axis
    // (that will be true for all in the mvp as we only support one data point per X axis piont (for string x values that is))
    const pivot = newDf.pivot(groupBy, valueCol, aggreate(aggregation))
    return pivot
  } else if (xAxis && xAxis.Type === 'number') {
    // if its a number return the df without aggregation

    // lets try giving it back on a number col to
    const pivot = newDf.pivot(groupBy, valueCol, aggreate(aggregation))
    return pivot
  }
  return dataframe
}

/**
 * Prepares the `dataframe` before visualizing it by grouping and aggregating the data in proper formats
 * @param options
 * @param dataframe
 * @returns A `new dataframe` with the new aggregations and grouping
 */
export const prepareOptions = async (
  options: Options,
  dataframe: df.DataFrame
) => {
  /*options.aggregate.forEach(type => {
    const agg = type.aggregate
    const name = type.name
    const column = dataframe.getSeries(name)
  })*/
  const df = handleDataTransformation(
    dataframe,
    options.xAxis,
    options.yAxis,
    options.aggregate
  )
  return df
}

/**
 * Everyting related to changing the data in any way happens here
 * @param dataframe
 * @param xAxis
 * @param yAxis
 */
const handleDataTransformation = (
  dataframe: df.DataFrame,
  xAxis: any,
  yAxis: any,
  agg: any
) => {
  if (agg) {
    // Pivot data and group
    const aggDataframe = pivot(dataframe, xAxis, yAxis, agg)
    return aggDataframe
  } else {
    return dataframe
  }
}

export const getInfo = async (dataframe: df.DataFrame) => {
  const columnStats = dataframe.detectTypes().toArray()
  const valueStats = dataframe.detectValues().toArray()
}
