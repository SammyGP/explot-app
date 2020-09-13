import * as dataforge from 'data-forge'

const readAndUploadFile = async (file: File): Promise<dataforge.DataFrame> => {
  const reader = new FileReader()
  return new Promise((resolve) => {
    reader.onload = () => {
      const result = <string>reader.result
      const dataframe = dataforge.fromCSV(result, {
        dynamicTyping: true,
      })
      resolve(dataframe)
    }

    reader.onerror = () => {
      reader.abort()
      throw new Error('Error reading file')
    }

    reader.readAsText(file)
  })
}

export default readAndUploadFile
