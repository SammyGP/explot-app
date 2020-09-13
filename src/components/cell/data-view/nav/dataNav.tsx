import React, { FunctionComponent } from 'react'

// Handles the viewstate of the data nav
// Maybe skip entire nav and add down arrow that open up otions like in the kaggle table view?

/**
 * Handles the viewstate of the data view
 * @param view will be either `expanded` to show the data table or `closed` to show the icons
 */
const DataNav: FunctionComponent<any> = ({ view }) => {
  if (!view) {
    return null
  }
  return null
}

export default DataNav
