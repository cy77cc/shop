import React, {memo} from 'react'
import {useRoutes} from 'react-router-dom'
import routes from './routers/index'
import {ConfigProvider, message} from "antd";
import zhCN from 'antd/locale/zh_CN';
import 'dayjs/locale/zh-cn';
import dayjs from "dayjs";
import customParseFormat from 'dayjs/plugin/customParseFormat'

dayjs.extend(customParseFormat)
dayjs.locale('zh-cn')

const App = memo((props) => {
  const [, messageHolder] = message.useMessage();
  return (
      <ConfigProvider
          locale={zhCN}
          theme={{
            token: {
              colorPrimary: '#0CAF60',
            },
          }}
      >
        <div className='app'>
          {messageHolder}
          {useRoutes(routes)}
        </div>
      </ConfigProvider>
  )
})

export default App