import React, { memo } from 'react'
import IntroHeaderWrapper from './style'
import logo from "../../../assets/img/logo.png"

const IntroHeader = memo(() => {
  return (
    <IntroHeaderWrapper>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='message'></div>
    </IntroHeaderWrapper>
  )
})

export default IntroHeader