import React from 'react'
import styled from 'styled-components'

const Form = styled.div`
  width: 100%;
  height: 100vh;
  form {
    min-height: 50vh;
    width: 25%;
    margin: auto;
    margin-top: 4rem;
    padding: 3rem;
    border-radius: 8px;
    box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
      0 10px 10px -5px rgba(0, 0, 0, 0.04);
    input,
    select {
      width: 100%;
      padding: 12px 20px;
      margin: 8px 0;
      display: inline-block;
      border: 1px solid #ccc;
      border-radius: 4px;
      box-sizing: border-box;
    }
    input[type='submit'] {
      width: 100%;
      background-color: #24b47e;
      color: white;
      padding: 14px 20px;
      margin: 8px 0;
      border: none;
      border-radius: 4px;
      cursor: pointer;
      &:hover {
        color: black;
        box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1),
          0 10px 10px -5px rgba(0, 0, 0, 0.04);
      }
    }
  }
`

export default Form
