import React, { FunctionComponent, useEffect, useState } from 'react'
import * as df from 'data-forge'
import DataTable from 'react-data-table-component'
import styled from 'styled-components'
import { RowExpand32 } from '@carbon/icons-react'

const TableNavStyle = styled.nav<any>`
  width: 100%;
  min-height: 32px;
  max-height: 20%;
  height: ${(props) => (props.toggled ? '20px' : '10px')};
  background-color: #1bb978;
  cursor: not-allowed;
`

const Table = styled(DataTable)`
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
  const [data, setData] = useState(dataframe.endAt(99).toArray())
  const [isOpen, toggle] = useState(false)
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
      <span>Info span</span>
      <Table fixedHeader={true} columns={columns} data={data} dense={true} />
    </div>
  )
}

export default DataTableView
