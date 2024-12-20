import {Outlet, Link} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul className="nav-links">
          <li><Link to = "/home">HOME</Link></li>
          <li><Link to = "/about">ABOUT</Link></li>
          <li><Link to = "/contact">CONTACT</Link></li>
          <li><Link to = "/myAccount">MY ACCOUNT</Link></li>
        </ul>
        <div className="search">
          <input type ="text" placeholder="search"/>
        </div>
      </nav>
      <Outlet/>
    </>
  )
}

export default Navbar
