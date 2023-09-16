import { Routes, Route } from 'react-router-dom'

import Layout from './components/Layout'
import Home from './features/Dashboard/Home'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>

        <Route index element={<Home />} />

        <Route path="*" Component={() => (
          <div>
            <h1>404 Page Not Found</h1>
          </div>
        )} />

      </Route>
    </Routes>
  )
}

export default App
