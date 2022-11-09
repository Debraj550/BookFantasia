import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Signin from '../componenets/Signin';
import Signup from '../componenets/Signup';
import Cart from '../pages/Cart';
import Home from '../pages/Home';
import SellBook from '../pages/SellBook';


const pathRoutes = (
    <Routes>
        <Route exact path = '/' element = { <Home /> }>
          <Route exact path = '/Engineering' element = { <Signin /> }></Route>
        </Route>
         
        <Route exact path = '/Science' element = { <Home /> }></Route>
        <Route exact path = '/signup' element = { <Signup /> }></Route>
        <Route exact path = '/signin' element = { <Signin /> }></Route>
        <Route exact path = '/SellBook' element = { <SellBook /> }></Route>
        <Route exact path = '/Cart' element = { <Cart />} ></Route>
    </Routes>
  )

export default pathRoutes