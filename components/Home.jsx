import React from 'react'
import './Home.css'
import Footer from './footer'
import {Outlet, Link} from 'react-router-dom'


const Home = () => {
  return (
  <>
    <div>
      <div className="container">
      <div style={{background:"lightgray"}}>FOOD IS ESSENTIAL FOR LIFE, SO MAKE IT GOOD WITH OUR RECIPE :)</div> </div>

      <h1 className="recreate">LETS RECREATE A RECIPE...​</h1>  

      <div className="breakfast">
      <h1 className="breakfast-text" ><Link style={{color:'black', textDecoration: 'none'}} to ="/breakfast"> QUICK AND EASY BREAKFAST</Link></h1> </div>

      <div className="lunch">
      <h1 className="lunch-text"><Link style={{color:'black', textDecoration: 'none'}} to ="/lunch"> FULFILLING LUNCH </Link> </h1></div>

      <div className="dinner">
      <h1 className="dinner-text"><Link style={{color:'black', textDecoration: 'none'}} to ="/dinner"> DELICIOUS DINNER </Link></h1> </div>

    
      
    </div>
      <Footer/>
    </>
   
  )
}

export default Home
 