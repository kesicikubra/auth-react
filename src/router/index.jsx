import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import HomePage from '../pages/home-page'
import LoginPage from '../pages/login-page'

const AppRouter = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<HomePage/>}/>
            <Route path='/login' element={<LoginPage/>}/>
        </Routes>    
    </BrowserRouter>

  )
}

export default AppRouter