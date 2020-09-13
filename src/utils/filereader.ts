import * as dataforge from 'data-forge'

const readAndUploadFile = async (
  file: File
): Promise<dataforge.DataFrame | Error> => {
  const reader = new FileReader()
  console.log('reader called')
  return new Promise((resolve, reject) => {
    reader.onload = () => {
      const result = <string>reader.result
      const dataframe = dataforge.fromCSV(result, {
        dynamicTyping: true,
      })
      resolve(dataframe)
    }

    reader.onerror = () => {
      reader.abort()
      const error = new Error('Error reading file')
      reject(error)
    }

    reader.readAsText(file)
  })
}

export default readAndUploadFile
