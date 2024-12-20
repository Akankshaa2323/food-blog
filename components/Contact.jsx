import React from 'react'
import './Contact.css'
import Footer from './footer'

const Contact = () => {
  return (
    <>
    <div className="contact-container">
    <div>WRITE SOMETHING TO US...</div>
    <form>

        <div className="contact-form">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required></input> <br/>

            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required></input> <br/> <br/>

            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="4" required></textarea> <br/>

        <button type="submit">Submit</button>  </div>
    </form>

</div>

    <Footer/>
    </>
  )
}

export default Contact
