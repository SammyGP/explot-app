import React, { useState } from "react"
import { Help32 } from "@carbon/icons-react"

const Form = () => {
  return (
    <div className="shadow-md bg-white rounded px-8 pt-6 pb-8 mb-4 w-64">
      <p className="block text-gray-500 font-bold">
        Tell us about your experience.
      </p>
      <div className="md:flex md:items-center mb-6">
        <p className="mb-1">
          Do you have any cool ideas you'd like to add? Click the button and let
          us know.
        </p>
      </div>
      <a target="_blank" href="https://www.explot.io/feedback/">
        <button
          className="items-center shadow justify-center px-2 py-1 border border-transparent text-base leading-6 rounded text-white bg-light-blue hover:text-black hover:shadow-xl focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out md:py-1 md:text-lg md:px-2"
          type="button"
        >
          Feedback
        </button>
      </a>
    </div>
  )
}

const Feedback = () => {
  const [showForm, toggleForm] = useState(false)
  const css = showForm
    ? "fixed bottom-0 right-0 px-4 pb-2 "
    : "fixed bottom-0 right-0 px-4 pb-2"
  return (
    <div className={css}>
      {showForm ? <Form /> : <div></div>}
      <div className="float-right">
        <Help32 onClick={() => toggleForm(!showForm)} />
      </div>
    </div>
  )
}

export default Feedback
