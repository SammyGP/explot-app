import React, { FunctionComponent, useEffect, useState } from 'react'
import * as df from 'data-forge'
import DataTable from 'react-data-table-component'
import styled from 'styled-components'
import { Chemistry32 } from '@carbon/icons-react'

const TableNavStyle = styled.nav<any>`
  width: 100%;
  min-height: 32px;
  max-height: 20%;
  height: ${(props) => (props.toggled ? '20px' : '10px')};
  background-color: #1bb978;
  cursor: not-allowed;
`

const Table = styled(DataTable)`
  // Disable header for now since we have no content there
  .rdt_TableHeader {
    min-height: 0;
  }
  .rdt_TableCol {
    font-size: 1rem;
  }
  .rdt_TableCell {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }
`

const DataTableView: FunctionComponent<{ dataframe: df.DataFrame }> = ({
  dataframe,
}) => {
  // Only get the 100 first rows
  // useMemo and https://github.com/bvaughn/react-window to make it more effiecient later
  const [data, setData] = useState(dataframe.endAt(99).toArray())
  const [isOpen, toggle] = useState(false)
  const [dataTypes, setDataTypes] = useState(dataframe.detectTypes().toArray())
  useEffect(() => {
    // Use this to split it into chunks of 100
    //const dfSplit = dataframe.window(99)
    //setData(jsonData)
  }, [])
  if (!data) {
    return <h1>No Data</h1>
  }
  const columns = Object.keys(data[0]).map((item) => {
    return { name: item, selector: item }
  })
  return (
    <div>
      {/*<TableNavStyle toggled={isOpen} title='under construction'>
        {isOpen ? (
          <ul>
            <RowExpand32 /> Table Tools
          </ul>
        ) : (
          <ul>
            <RowExpand32 /> Table Tools
          </ul>
        )}
      </TableNavStyle>*/}
      <span>
        Only showing the first: <code>100</code> rows from the file (all will be
        used in the chart)
      </span>
      <Table fixedHeader={true} columns={columns} data={data} dense={true} />
    </div>
  )
}

export default DataTableView
