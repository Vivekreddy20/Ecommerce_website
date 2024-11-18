import React from 'react'
import './Home.css'
import Services from './Services'
import Trusted from './Trusted'
import {Link} from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <div className="main">
        <div className="top">
          <div className="left">
            <p className='para'>welcome to</p>
            <h1>Vivek commerce</h1>
            <p>Welcome to vivek ecommerce, where innovation meets convenience! Discover a curated collection of cutting-edge products and accessories designed to elevate your lifestyle. From sleek gadgets to must-have essentials, our webstore is your go-to destination for the latest trends in technology. Explore, shop, and experience a seamless online shopping journey with us. Welcome to a world of possibilities – welcome to vbit canteen!</p>
            <Link to='/products'>
            <button>see menu</button>
            </Link>
          </div>
          <div className="right">
            <img src="https://plus.unsplash.com/premium_photo-1683121817275-85d1dcf9e4c4?q=80&w=500&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="lady shopping" />
          </div>
        </div>
{/* ====================================================== */}
    <Services/>
    <Trusted/>

      </div>
    </div>
  )
}

export default Home
