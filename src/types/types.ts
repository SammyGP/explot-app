import { DataFrame } from "data-forge"

export interface ChartOptions {
  dataset: ChartData
  xAxis: any
  yAxis: any
  series: Series | Series[]
}
/**
 * Encode maps the x, y to the dimension names or [] position
 */
export type Series = {
  type: string
  encode: {
    x: any
    y: any
    tooltip?: string
  }
}
export type ChartData = {
  dimension: string[]
  source: any[]
}

export type Dataset = {
  index: number
  name: string
  size: Number
  lastModified: Date
  dataframe: DataFrame
}

export type Aggregate = {
  name: string
  aggregate: string
}

export type Options = {
  xAxis: string
  yAxis: string
  grouping?: string
  aggregate: string | null
}

export type ChartConfig = {
  dataset: object[]
  xAxis: string
  yAxis: string
  agg?: string
}
