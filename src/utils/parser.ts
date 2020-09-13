import * as df from 'data-forge'
import { read } from 'fs'

/**
 * Parse the CSV file into a data-forge `dataframe` in an array format
 */
export const parseCSV = async (file: any) => {
  const reader = new FileReader()
  return new Promise((resolve, reject) => {
    reader.onload = () => {
      const result = <string>reader.result
      const dataframe: df.DataFrame = df.fromCSV(result)
      dataframe.toArray()
      resolve(dataframe)
    }
    reader.onerror = () => {
      reader.abort()
      reject('error found')
    }
    reader.readAsText(file)
  })
}

/**
 * Parses data from the gatsbyGraphQL url from the file prop file.node.publicURL
 * @return a DataFrame
 */
export const parseGatsbyFile = async (url: string) => {
  const reader = new FileReader()
  const fileBlob = await fetch(url)
  const file = await fileBlob.blob()
  return new Promise((resolve, reject) => {
    reader.onload = () => {
      const result = <string>reader.result
      const dataframe: df.DataFrame = df.fromCSV(result, {
        dynamicTyping: true,
      })
      dataframe.toArray()
      resolve(dataframe)
    }
    reader.onerror = () => {
      reader.abort()
      reject('error found')
    }
    reader.readAsText(file)
  })
}
