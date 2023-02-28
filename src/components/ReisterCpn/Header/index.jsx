import React, { memo } from 'react'
import RegisterHeaderWrapper from './style'
import logo from "../../../assets/img/logo.png"

const RegisterHeader = memo(() => {
  return (
    <RegisterHeaderWrapper>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='message'></div>
    </RegisterHeaderWrapper>
  )
})

export default RegisterHeader