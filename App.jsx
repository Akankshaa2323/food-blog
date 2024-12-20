import './App.css'
import {Routes, Route, BrowserRouter} from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './components/Home'
import About from './components/About'
import Contact from './components/Contact'
import MyAccount from './components/MyAccount'
import Breakfast from './components/Breakfast'
import Lunch from './components/Lunch'
import Dinner from './components/Dinner'


function App() {

  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path = "/" element = {<Navbar/>}>
      <Route path = "/" element = {<Home/>}> </Route>
      
      <Route path = "/home" element = {<Home/>}> </Route>
      <Route path = "/about" element = {<About/>}> </Route>
      <Route path = "/contact" element = {<Contact/>}> </Route>
      <Route path = "/myaccount" element = {<MyAccount/>}> </Route>
      <Route path = "/breakfast" element = {<Breakfast/>}> </Route>
      <Route path = "/lunch" element = {<Lunch/>}> </Route>
      <Route path = "/dinner" element = {<Dinner/>}> </Route>
      </Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
