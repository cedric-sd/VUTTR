import React from 'react'
import { ToolProvider } from './contexts/ContextTool'

import Routes from './routes'

const App = () => {
  return (
    <ToolProvider>
      <Routes></Routes>
    </ToolProvider>
  )
}

export default App
