import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routers/index'

const App = memo(() => {
  return (
    <div className='app'>
      {useRoutes(routes)}
    </div>
  )
})

export default App