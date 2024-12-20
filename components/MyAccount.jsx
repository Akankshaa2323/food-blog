import React from 'react'
import './MyAccount.css'
import Footer from './footer'

const MyAccount = () => {
  return (
    <>
    <div className="myaccount-container">

   
   <div className="login">
        <div className="myaccount-login-heading"> LOGIN </div> 
        <form >
            <div className="myaccount-login-form">

                <label for="username">Username or Email Address*</label>
                <input type="text" id="username" name="username" required></input><br/><br/>
           
                <label for="password">Password*</label>
                <input type="password" id="password" name="password" required></input><br/><br/>
           
            <button type="submit">Log In</button>
            </div>
        </form>
        </div>

        <div className="register-line">DON'T HAVE AN ACCOUNT ? REGISTER YOURSELF...</div>


 <div className="register">
        <div className="myaccount-register-heading">Register</div>
        <form>
            <div className="myaccount-register-form">

                <label for="name">Name*</label>
                <input type="text" id="name" name="name" required></input>
                
                <label for="email">Email Address*</label>
                <input type="email" id="email" name="email" required></input>
           
                <label for="register-password">Password*</label>
                <input type="password" id="register-password" name="register-password" required></input>
            </div>
            <button type="submit">Register</button>
        </form>
    </div> 
    </div>

<Footer/>
    </>
  )
}

export default MyAccount
