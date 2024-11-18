import React from 'react'
import Navbar from './components/Navbar'
import {BrowserRouter , Route , Routes} from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'
import Products from './components/Products'
import Contact from './components/Contact'
import Cart from './components/Cart'
import Footer from './components/Footer'
import Error from './components/Error'
import Prodetails from './components/Prodetails'
import Billone from './components/Billone'
import { useState } from 'react'

const App = () => {
  const [sign,unsign]=useState(true);
  const [isstudent,yesstudent]=useState(true);
  const facenter=()=>{
    unsign(false);
    yesstudent(true);
  }
  const enter=()=>{
    unsign(false);
    yesstudent(false);
  }
  return sign?<>
  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRapZV1UvfqYWySDLjz7Ca5e3KHjqEIjkc1Tg&s" alt="vbit" />
   <div style={{display:"flex",justifyContent:"space-evenly"}}>
   <div>
   <h1><center>faculty</center></h1>
    <form>
      <label htmlFor="name">Enter your name:</label>
      <input type="text" id='name'/>
      <label htmlFor="password">Enter password:</label>
      <input type="password" id='password'/>
      <button onClick={facenter}>submit</button>
    </form>
   </div>
   <div>
   <h1><center>students</center></h1>
    <form>
      <label htmlFor="name">Enter your name:</label>
      <input type="text" id='name'/>
      <label htmlFor="password">Enter password:</label>
      <input type="password" id='password'/>
      <button onClick={enter} >submit</button>
    </form>
   </div>
   </div>
  </>: (
      <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/About' element={<About/>}/>
        <Route path='/Products' element={<Products stu={isstudent}/>}/>
        <Route path='/Contact' element={<Contact/>}/>
        <Route path='/Cart' element={<Cart stu={isstudent}/>}/>
        <Route path='*' element={<Error/>}/>
        <Route path='/Prodetails/:id' element={<Prodetails/>}/>
        <Route path='/billone/:name' element={<Billone/>}/>
      </Routes>
      <Footer/>
    </BrowserRouter>    
  )
}

export default App

