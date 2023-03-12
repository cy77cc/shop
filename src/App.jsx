import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './routers/index'
import {ConfigProvider} from "antd";
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import dayjs from "dayjs";
dayjs.locale('zh-cn')

const App = memo(() => {
  return (
    <ConfigProvider locale={zhCN}>
      <div className='app'>
        {useRoutes(routes)}
      </div>
    </ConfigProvider>
  )
})

export default App