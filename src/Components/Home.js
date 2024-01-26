import React from 'react'
import { NavBar} from './NavBar'
import {Button} from 'react-bootstrap'
import '../Components/Home.css';
import { FaInstagram ,FaLinkedin,FaFacebook, FaTwitter} from 'react-icons/fa'
export const Home = () => {
  return (
   <>
   <div className='bb' style={{height:'100vh'}}>
    <NavBar/>
    <div  className='bo text-warning' style={{marginTop:'150px'}}>
        <h1 style={{fontSize:'4rem'}}>Hello, I'm BALAJI I.</h1>
        <h2 style={{fontSize:'4rem',marginLeft:'55px'}}>Full Stack Developer</h2>
        <div style={{marginTop:'30px'}}>
          <Button variant="outline-warning">Hire Me</Button>
          <Button variant="outline-warning" style={{marginLeft:'8px'}}>Download Resume</Button>
        </div>
        <div style={{marginTop:'20px'}}> <FaInstagram size={40} color="#ffcc00" />       <FaLinkedin size={40} color="#ffcc00" />  <FaTwitter size={40} color="#ffcc00" />  <FaFacebook size={40} color="#ffcc00" /> 
</div> 
    </div>
   </div>
   </>
  )
}
