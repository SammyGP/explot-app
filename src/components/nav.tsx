import React from "react"
import { Home32 } from "@carbon/icons-react"

const Nav = () => {
  return (
    <nav className="flex w-full h-14 p-4 my-auto bg-gray-300 shadow sticky top-0 z-50 ">
      <a href="https://www.explot.io">
        <Home32 className="my-auto" />
      </a>
      <h3 className="mb-0 items-center justify-center mx-auto">
        Explot - Demo
      </h3>
      <ul className="flex inline-block px-8 absolute right-0 items-center justify-center">
        <li className="px-4">
          <a href="https://www.explot.io/trial">Beta Opt-in</a>
        </li>
        <li className="px-4">
          <a href="https://www.explot.io/early-access/" target="_blank">
            <button
              className="gradient px-2 py-1 items-center justify-center border border-transparent text-base leading-6 font-bold text-white hover:text-black hover:shadow-xl focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo transition duration-150 ease-in-out"
              type="button"
            >
              Buy early access
            </button>
          </a>
        </li>
      </ul>
    </nav>
  )
}

export default Nav
