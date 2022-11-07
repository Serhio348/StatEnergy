import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoutePath, routes } from './routes'
import Header from './component/header/Header'
import Error from './pages/Error'

import './App.scss'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="app-container">
        <Header />
        <Routes>
          <Route>
            {routes.map((route) => (
              <Route
                index={RoutePath.HOME === route.path}
                path={route.path}
                element={<route.component />}
                key={route.name}
              />
            ))}
          </Route>
          <Route path="*" element={<Error />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}

export default App
