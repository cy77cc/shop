import React, { memo } from 'react'
import LoginHeaderWrapper from './style'
import logo from "../../../assets/img/logo.png"

const LoginHeader = memo(() => {
  return (
    <LoginHeaderWrapper>
      <div className='logo'>
        <img src={logo} alt="" />
      </div>
      <div className='message'></div>
    </LoginHeaderWrapper>
  )
})

export default LoginHeader