import React, { FunctionComponent, useState } from 'react'
import * as df from 'data-forge'
import DataTable from 'react-data-table-component'
import styled from 'styled-components'
import { RowExpand32 } from '@carbon/icons-react'

const TableNavStyle = styled.nav<any>`
  width: 100%;
  min-height: 32px;
  max-height: 20%;
  height: ${(props) => (props.toggled ? '20px' : '10px')};
  cursor: not-allowed;
`

const DataTableView: FunctionComponent<any> = ({ dataset }) => {
  const [isOpen, toggle] = useState(false)
  const jsonData = new df.DataFrame(dataset).toJSON()
  const data = JSON.parse(jsonData)

  const columns = Object.keys(data[0]).map((item) => {
    return { name: item, selector: item }
  })
  return (
    <div>
      <TableNavStyle toggled={isOpen} title='under construction'>
        {isOpen ? (
          <ul>
            <RowExpand32 />
          </ul>
        ) : (
          <ul>
            <RowExpand32 />
          </ul>
        )}
      </TableNavStyle>
      <DataTable
        fixedHeader={true}
        columns={columns}
        data={data}
        dense={true}
      />
    </div>
  )
}

export default DataTableView
