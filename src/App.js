import React from 'react'
import './App.css'
import { BrowserRouter } from 'react-router-dom'
import Routers from './routes'
import Header from './components/Header'
import 'bootstrap/dist/css/bootstrap.css'

function App () {
  return (
    <BrowserRouter>
      <Header />
      <div className='App'>
        <div className='App-header'>
          <Routers />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App
