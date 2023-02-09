import type { FC } from 'react'
import { Button, ConfigProvider } from 'antd'
import 'antd/dist/reset.css'
import './App.css'

const App: FC = () => (
  <ConfigProvider
    theme={{
      token: {
        colorPrimary: '#FB9337',
        borderRadius: 4,
      },
    }}
  >
    <div className="App">
      <Button type="primary">Button</Button>
    </div>
  </ConfigProvider>
)

export default App
