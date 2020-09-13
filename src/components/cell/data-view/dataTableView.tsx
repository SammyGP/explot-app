import React, { FunctionComponent } from 'react'
import * as df from 'data-forge'

const DataTableView: FunctionComponent<any> = ({
  dataset,
  setActiveDataset,
}) => {
  const jsonData = new df.DataFrame(dataset).toJSON()
  const data = JSON.parse(jsonData)

  const columns = Object.keys(data[0]).map((item) => {
    return { title: item }
  })
  const rows = data.map((el: any, i: number) => {
    return Object.values(el).map((item, i) => item)
  })

  return <div></div>
}

export default DataTableView
