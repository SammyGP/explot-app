export const setOptions = (options: any) => {
  return {
    legend: {},
    tooltip: {},
    dataset: options.dataset,
    xAxis: {},
    yAxis: {},
    series: options.series,
  }
}

export const getOptions = (dataset: any) => {
  return {}
}
