import React from "react"

const MobileDisclaimer = () => {
  return (
    <div className="mobile">
      <div role="alert">
        <div className="bg-red-500 text-white font-bold rounded-t px-4 py-2">
          Warning!
        </div>
        <div className="border border-t-0 border-red-400 rounded-b bg-red-100 px-4 py-3 text-red-700">
          <p>
            Explot could use a lot of recources to render the data and chart
            based on the size therefore its best used on a desktop. Mobile use
            is not supported. While nothing bad will happen for using a phone
            the design and layout might be a bit wonky at best, we recommend
            saving the link and trying on a computer instead.
          </p>
        </div>
      </div>
    </div>
  )
}

export default MobileDisclaimer
