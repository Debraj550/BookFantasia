import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Signin from '../componenets/Signin';
import Signup from '../componenets/Signup';
import Home from '../pages/Home';


const pathRoutes = (
    <Routes>
        <Route exact path = '/' element = { <Home /> }></Route>
        <Route exact path = '/signup' element = { <Signup /> }></Route>
        <Route exact path = '/signin' element = { <Signin /> }></Route>
    </Routes>
  )

export default pathRoutes