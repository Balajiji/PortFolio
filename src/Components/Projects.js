import React from 'react'
import { NavBar } from './NavBar'
import { Container,Row,Col,Carousel } from 'react-bootstrap'

export const Projects = () => {
  return (
    <>
     <div  className='bo' style={{height:'100vh',backgroundColor:'black'}}>
      <NavBar/>
      <Container >
        <Row className='justify-content-center align-item-center mt-5'>
            <Col lg={8}>
            <Carousel>
      <Carousel.Item interval={2000}>
        <img className="d-block w-100" src={'cafee.jpg' }  alt="FirstSlide"/>
        <Carousel.Caption>
          <h3>CAFE MANAGEMENT SYSTEM</h3>
          <p>using JDBC through ORACLE Database</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className="d-block w-100" src={'bank.jpg'} alt="SecondSlide" />
        <Carousel.Caption>
          <h3>BANK MANAGEMENT SYSTEM</h3>
          <p>using JDBC through MYSQL Database.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className="d-block w-100" src={'td.jpg'} alt="ThirdSlide" />
        <Carousel.Caption>
          <h3>TODOLIST</h3>
          <p>
            using REACT JS
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={2000}>
      <img className="d-block w-100" src={'eveg.jpg'} alt="ThirdSlide" />
        <Carousel.Caption>
          <h3>FARMFRESH365</h3>
          <p>
            selling daily essential products website developed using MERN Stack.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
            </Col>
        </Row>
      
            
    
    </Container>
    </div>
    </>
  )
}
