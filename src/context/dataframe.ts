import React from 'react'
import { DataFrame } from 'data-forge'

type ActiveDataframeType = {
  dataframe: string
  setDataframe: any
}

const ActiveDataframe = React.createContext<any>(['', () => {}])

export default ActiveDataframe
