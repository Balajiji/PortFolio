import React from 'react'
import { NavBar } from './NavBar'
import {Container,Col,Row,ProgressBar} from 'react-bootstrap'
import '../Components/Skills.css'
export const Skills = () => {
  return (
    <>
     <div  className='bo' style={{height:'100vh',backgroundColor:'black'}}>
        <NavBar/>
        <Container fluid className='mb-5'>
       
        <Row className='mt-5 mb-5'>
          <Col className='col-1'></Col>
          <Col className='col-7'><h2 className='text-warning text-start'>My Skills</h2></Col>
        </Row>
        <Row className='mt-2 text-start ms-5'>
          {/* <Col className='col-'></Col> */}
            <Col className='col-4'>
            <Row className='text-white co mb-4'><h5>FrontEnd</h5></Row>
            <Row className='mb-3'><h5 className='text-white'>HTML</h5></Row>
            <Row className='ms-0 mb-3'> <ProgressBar  animated variant="warning" now={70} style={{ width: '75%' }} /></Row>
            <Row className='mb-3'><h5 className='text-white'>CSS</h5></Row>
            <Row className='ms-0 mb-3'> <ProgressBar  animated variant="warning" now={60} style={{ width: '75%' }} /></Row>
            <Row className='mb-3'><h5 className='text-white'>JAVASCRIPT</h5></Row>
            <Row className='ms-0  mb-3'> <ProgressBar  animated variant="warning" now={50} style={{ width: '75%' }} /></Row>
            <Row className='mb-3'><h5 className='text-white'>REACT JS</h5></Row>
            <Row className='ms-0'> <ProgressBar  animated variant="warning" now={40} style={{ width: '75%' }} /></Row>
            <Row></Row>
            <Row></Row>
            <Row></Row>
            </Col>
            <Col className='col-4'>
            <Row className='text-white co mb-4'><h5>BackEnd</h5></Row>
            
            <Row className='mb-3'><h5 className='text-white'>JAVA</h5></Row>
            <Row className='ms-0 mb-3'> <ProgressBar  animated variant="warning" now={70} style={{ width: '75%' }} /></Row>
            <Row className='mb-3'><h5 className='text-white'>NODE JS</h5></Row>
              <Row className='ms-0 mb-3'> <ProgressBar  animated variant="warning" now={60} style={{ width: '75%' }} /></Row> 
            {/* <Row className='mb-3'><h5 className='text-white'>JAVASCRIPT</h5></Row>
            <Row className='ms-0  mb-3'> <ProgressBar  animated variant="warning" now={50} style={{ width: '75%' }} /></Row>
            <Row className='mb-3'><h5 className='text-white'>REACT JS</h5></Row>
            <Row className='ms-0'> <ProgressBar  animated variant="warning" now={40} style={{ width: '75%' }} /></Row> */} 
            </Col>

            <Col ClassName='col-4'>
            <Row className='text-white co mb-4'><h5>DataBases</h5></Row>
            
            <Row className='mb-3'><h5 className='text-white'>MongoDB</h5></Row>
            <Row className='ms-0 mb-3'> <ProgressBar  animated variant="warning" now={70} style={{ width: '75%' }} /></Row>
            <Row className='mb-3'><h5 className='text-white'>MYSQL</h5></Row>
            <Row className='ms-0 mb-3'> <ProgressBar  animated variant="warning" now={60} style={{ width: '75%' }} /></Row>
            <Row className='mb-3'><h5 className='text-white'>ORACLE</h5></Row>
            <Row className='ms-0  mb-3'> <ProgressBar  animated variant="warning" now={50} style={{ width: '75%' }} /></Row>
            {/* <Row className='mb-3'><h5 className='text-white'>REACT JS</h5></Row>
            <Row className='ms-0'> <ProgressBar  animated variant="warning" now={40} style={{ width: '75%' }} /></Row> */}
            </Col>
        </Row>

      





        </Container>
     </div>
    </>
   
  )
}
