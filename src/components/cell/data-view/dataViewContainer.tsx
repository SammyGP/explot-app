import React, { useState, useEffect, FunctionComponent } from 'react'
import DataAddFileView from './dataAddFileView'
import DataViewFilesView from './dataViewFilesView'
import DataTableView from './dataTableView'
import { parseGatsbyFile } from '../../../utils/parser'
import Loading from '../../loading'

const DataViewContainer: FunctionComponent<any> = ({
  allSavedFiles,
  activeDataset,
  editActiveDataset,
  setActiveId,
  id,
}) => {
  const [view, setView] = useState(0)
  // Load in the dataframe once a file has been chosen
  useEffect(() => {
    if (id) {
      const file = allSavedFiles.find((item: any) => item.node.id === id)
      const data = parseGatsbyFile(file.node.publicURL)
      data.then((r) => {
        editActiveDataset(r)
      })
    }
  }, [id])

  if (view === 0) {
    return <DataAddFileView />
  }
  if (view === 1) {
    return (
      <DataViewFilesView
        allSavedFiles={allSavedFiles}
        setView={setView}
        setActiveId={setActiveId}
      />
    )
  }
  if (view === 2 && activeDataset) {
    return (
      <DataTableView
        dataset={activeDataset}
        setActiveDataset={editActiveDataset}
      />
    )
  }
  return <Loading />
}

export default DataViewContainer
