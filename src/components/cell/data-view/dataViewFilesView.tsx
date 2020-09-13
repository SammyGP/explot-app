import React, { FunctionComponent } from 'react'
import { Csv32 } from '@carbon/icons-react'

const DataViewFilesView: FunctionComponent<any> = ({
  allSavedFiles,
  setView,
  setActiveId,
}) => {
  const allFiles = allSavedFiles.map((set: any) => {
    // add on hover to show set.lastModified and set.size
    return (
      <div
        key={`file-${set.node.id}`}
        onClick={() => {
          setActiveId(set.node.id)
          setView(2)
        }}
      >
        <Csv32 className='mx-auto' />
        <p className='text-center text-gray-600'>{set.node.name}</p>
      </div>
    )
  })
  return (
    <div className='overflow-auto'>
      <div className='overflow-auto py-8 mx-4'>{allFiles}</div>
    </div>
  )
}

export default DataViewFilesView
