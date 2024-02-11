import React from 'react'
import { NavBar} from './NavBar'
import {Button} from 'react-bootstrap'
import '../Components/Home.css';
import { FaInstagram ,FaLinkedin,FaFacebook, FaTwitter} from 'react-icons/fa'
import { Link } from 'react-router-dom';
export const Home = () => {
  const handleDownload=()=> {const resumeFilePath = './Resume.pdf'; 
  const link = document.createElement('a');

  link.href = resumeFilePath;
  link.download =  './Resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
};
  return (
   <>
   <div className='bb' style={{height:'100vh'}}>
    <NavBar/>
    <div  className='bo text-warning' style={{marginTop:'150px'}}>
      <div >
        <h1  className='typewriter' style={{fontSize:'4rem'}}>Hello, I'm BALAJI I.<br/><span style={{transitiondelay:'4s'}}>Full Stack Developer</span></h1>
        {/* <h2  className='typewriter' style={{fontSize:'4rem',marginLeft:'55px'}}>Full Stack Developer</h2> */}</div>
        <div className='abt'>
        <div style={{marginTop:'30px'}}>
          <Button variant="outline-warning">Hire Me</Button>
          <Button variant="outline-warning" style={{marginLeft:'8px'}} onClick={handleDownload}>Download Resume</Button>
        </div>
        <div style={{marginTop:'20px'}}> <Link to={'https://www.instagram.com/mr__green82/?hl=en'} style={{textDecoration:'none'}}><FaInstagram size={40} color="#ffcc00" />  </Link>   <Link to={'https://www.linkedin.com/in/balaji-i-27496a214/'}><FaLinkedin size={40} color="#ffcc00" /></Link>  <FaTwitter size={40} color="#ffcc00" />  <Link to={'https://www.facebook.com/theribalaji.theribalaji.10'}><FaFacebook size={40} color="#ffcc00" /></Link> 
</div> 
</div>
    </div>
   </div>
   </>
  )
}
