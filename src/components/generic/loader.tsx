import React from 'react'
import styled from 'styled-components'

export const Loader = styled.svg`
  width: 2rem;
  display: inline-block;
  vertical-align: middle;
`

export const LoaderSpan = () => {
  return (
    <Loader
      version='1.1'
      xmlns='http://www.w3.org/2000/Loader'
      viewBox='0 0 100 100'
    >
      <path
        fill='#fff'
        d='M73,50c0-12.7-10.3-23-23-23S27,37.3,27,50 M30.9,50c0-10.5,8.5-19.1,19.1-19.1S69.1,39.5,69.1,50'
      >
        <animateTransform
          attributeName='transform'
          attributeType='XML'
          type='rotate'
          dur='1s'
          from='0 50 50'
          to='360 50 50'
          repeatCount='indefinite'
        />
      </path>
    </Loader>
  )

  return (
    <circle
      cx='50'
      cy='50'
      fill='none'
      stroke='#e15b64'
      stroke-width='10'
      r='35'
      stroke-dasharray='164.93361431346415 56.97787143782138'
    >
      <animateTransform
        attributeName='transform'
        type='rotate'
        repeatCount='indefinite'
        dur='1.2195121951219512s'
        values='0 50 50;360 50 50'
        keyTimes='0;1'
      ></animateTransform>
    </circle>
  )
}
