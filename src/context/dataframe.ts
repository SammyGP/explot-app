import React from 'react'
import { DataFrame } from 'data-forge'

type ActiveDataframeType = DataFrame | any

const ActiveDataframe = React.createContext<ActiveDataframeType[]>([
  '',
  () => {},
])

export default ActiveDataframe
