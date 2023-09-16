import { Routes, Route } from 'react-router-dom'
import { CssBaseline, ThemeProvider } from '@mui/material'

import { ColorModeContext, useMode } from './theme'

import Layout from './components/Layout'

import Dashboard from './features/Dashboard'

import Team from './features/Data/Team'
import Invoices from './features/Data/Invoices'
import Contacts from './features/Data/Contacts'

import Calendar from './features/Pages/Calendar'
import Form from './features/Pages/Form'
import FAQ from './features/Pages/FAQ'

import Bar from './components/Charts/Bar'
import Line from './components/Charts/Line'
import Pie from './components/Charts/Pie'
import Geo from './components/Charts/Geo'

const App = () => {
  const [theme, colorMode] = useMode()

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <div className='app'>

          <Routes>
            <Route path='/' element={<Layout />}>

              <Route index element={<Dashboard />} />

              <Route path='team' element={<Team />} />
              <Route path='contacts' element={<Contacts />} />
              <Route path='invoices' element={<Invoices />} />
              <Route path='calendar' element={<Calendar />} />

              <Route path='form' element={<Form />} />
              <Route path='faq' element={<FAQ />} />

              <Route path='bar' element={<Bar />} />
              <Route path='line' element={<Line />} />
              <Route path='pie' element={<Pie />} />
              <Route path='geo' element={<Geo />} />

              <Route path="*" Component={() => (
                <div>
                  <h1>404 Page Not Found</h1>
                </div>
              )} />

            </Route>
          </Routes>
        </div>
      </ThemeProvider>
    </ColorModeContext.Provider>
  )
}

export default App
