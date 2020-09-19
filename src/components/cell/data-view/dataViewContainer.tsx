import React, { useState, FunctionComponent, useContext } from 'react'
import styled from 'styled-components'
import DataAddFileView from './dataAddFileView'
import DataViewFilesView from './dataViewFilesView'
import DataTableView from './dataTableView'
import Loading from '../../loading'
import ActiveDataframe from '../../../context/dataframe'

const TableView = styled.div`
  width: 100vw;
`

const DataViewContainer: FunctionComponent<any> = () => {
  const [view, setView] = useState(0)
  const [dataframe] = useContext(ActiveDataframe)
  // Load in the dataframe once a file has been chosen
  if (!dataframe) {
    return <DataAddFileView />
  }
  /*if (view === 1) {
    return (
      <DataViewFilesView
        allSavedFiles={allSavedFiles}
        setView={setView}
        setActiveId={setActiveId}
      />
    )
  }*/
  if (dataframe) {
    return <DataTableView dataset={dataframe} />
  }
  return <Loading />
}

export default DataViewContainer
