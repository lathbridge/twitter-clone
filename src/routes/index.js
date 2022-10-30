import React from 'react'
import {Routes, Route} from 'react-router-dom'
import SignInPage from '../pages/signin'
import SignUpPage from '../pages/signup'


const AppRouter = () => {
  return (
    <Routes>
        <Route path='/signin' element={<SignInPage/>} />
        <Route path='/signup' element={<SignUpPage/>} />
    </Routes>
  )
}

export default AppRouter