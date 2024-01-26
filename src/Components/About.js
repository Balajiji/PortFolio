import React from 'react'
import { NavBar } from './NavBar'
import '../Components/AboutMe.css';
import {Row,Col,Container} from 'react-bootstrap'
export const About = () => {
  return (
    <>
    <div  className='bo' style={{backgroundColor:'black',height:'100vh'}}>
   <NavBar></NavBar>
<Container fluid className='mb-5'>

 <Row className=' mt-5 mb-3  '>
  {/* <Col className='col-1'></Col> */}
  <Col className='col-1'></Col>
  <Col className='col-4  text-start text-warning mb-3 '><h2>About Me:</h2></Col>
  <Col className='col-6'></Col>
  <Col className='col-1 '></Col>
 </Row>
 <Row className='mt-3 mb-3'>
  <Col className='col-1'></Col>
  <Col className='col-7 text-warning   text-start'><h3>Full Stack Development</h3></Col>
 </Row>
 <Row className=' mb-3p'>
 <Col className='col-1'></Col>
 <Col className='col-10 text-start text-white mb-4  border-bottom '><p>As a B.Tech Information Technology student, I'm diving into full-stack development, mastering frontend technologies like HTML, CSS, and React, while exploring backend languages such as Node.js with frameworks like Express. I'm gaining proficiency in databases like MySQL and MongoDB, understanding RESTful services, and ensuring web security. Leveraging Git for version control and tools like Docker for containerization, I'm embracing a versatile skill set. Testing with frameworks like Jest, continuous integration, and effective communication complement my technical abilities. In this journey, I'm building a solid foundation in both the frontend and backend realms to excel in full-stack development.</p></Col>
 </Row>
 <Row className='mb-3'>
  <Col className='col-1'></Col>
  <Col className='col-7 text-warning   text-start'><h3>Personal Information</h3></Col>
 </Row>
 <Row>
    <Col className='col-1'></Col>
    <Col className='col-4 text-white   text-start'><div style={{display:'flex'}}>
      <p className='qu'>Name</p>
      <p className='an'>Balaji I</p>
      </div></Col>
 </Row>
 <Row>
    <Col className='col-1'></Col>
    <Col className='col-4 text-white   text-start'><div style={{display:'flex'}}>
      <p className='qu'>Age</p>
      <p className='an'>21</p>
      </div></Col>
 </Row>
 <Row>
    <Col className='col-1'></Col>
    <Col className='col-5 text-white   text-start'><div style={{display:'flex'}}>
      <p className='qu'>Address</p>
      <p className='an'>1-133 Puravipalayam,Thumbivadi,Karur,TamilNadu</p>
      </div></Col>
 </Row>
 <Row>
    <Col className='col-1'></Col>
    <Col className='col-4 text-white   text-start'><div style={{display:'flex'}}>
      <p className='qu'>Gmail</p>
      <p className='an'>moorthiebalaji@gmail.com</p>
      </div></Col>
 </Row>
 <Row>
    <Col className='col-1'></Col>
    <Col className='col-4 text-white  border-bottom   text-start'><div style={{display:'flex'}}>
      <p className='qu'>PhoneNo</p>
      <p className='an'>+91 9600318593</p>
      </div></Col>
 </Row>
    </Container>
    </div>
   </>
  )
}
