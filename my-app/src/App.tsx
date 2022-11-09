import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { RoutePath, routes } from './routes'
import Header from './component/header/Header'
import Error from './pages/Error'
import Layout from './component/layout/Layout'

import './App.scss'

const App: React.FC = () => {
  return (
    <div className="app-container">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
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
      </BrowserRouter>
    </div>
  )
}

export default App
