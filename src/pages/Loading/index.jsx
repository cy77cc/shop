import { Spin } from 'antd'
import React, { memo } from 'react'

const Loading = memo(() => {
  return (
    <div style={{
      width: "100vw",
      height: "100vh",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "rgba(0, 0, 0, 0.07)"
    }}>
      <Spin size='large' tip='加载中……' />
    </div>
  )
})

export default Loading