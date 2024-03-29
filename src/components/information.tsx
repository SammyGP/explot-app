import React, { useState } from "react"

const Information = () => {
  const [modal, toggleModal] = useState(false)
  return (
    <div>
      {modal ? (
        <div
          className="bg-teal-100 border-t-4 border-teal-500 rounded-b text-teal-900 px-4 py-3 shadow-md"
          role="alert"
        >
          <div className="flex">
            <div className="py-1">
              <svg
                className="fill-current h-6 w-6 text-teal-500 mr-4"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                onClick={() => toggleModal(!modal)}
              >
                <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
              </svg>
            </div>
            <div>
              <p className="font-bold">
                Data is for demostrative purposes only.
              </p>
              <p className="text-sm">
                The data in this demo is example data obtained from
                www.kaggle.com and is only meant to be used as means to provie
                examples and is not a part of explot.
              </p>
            </div>
          </div>
        </div>
      ) : (
        <svg
          className="fill-current h-6 w-6 ml-4 mt-4"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          onClick={() => toggleModal(!modal)}
        >
          <path d="M2.93 17.07A10 10 0 1 1 17.07 2.93 10 10 0 0 1 2.93 17.07zm12.73-1.41A8 8 0 1 0 4.34 4.34a8 8 0 0 0 11.32 11.32zM9 11V9h2v6H9v-4zm0-6h2v2H9V5z" />
        </svg>
      )}
    </div>
  )
}

export default Information
