import React from 'react'
import { NavBar } from './NavBar'
import {Container,Row,Col} from 'react-bootstrap'
import '../Components/Resume.css'
export const Resume = () => {
  return (
      <>
      <div className='bo' style={{height:'100%',backgroundColor:'black'}}>
        <NavBar/>
        <Container fluid className='mb-5'>

        </Container>
        <Row className='mb-3  '>
          <Col className='col-1'></Col>
          <Col className='col-6 tt text-start'><h4>CAREER OBJECTIVE</h4></Col>
        </Row>
        <Row className='mb-3'>
          <Col className='col-1'></Col>
          <Col className='col-8 text-start text-white border-bottom'><p>To work in a dynamic professional environment with a growing organization and utilize my creativity and innovative thinking for benefit of the organisation and myselfinnovative thinking for benefit of the organisation and myself</p></Col>
        </Row>
        <div className='bor'></div>
        <Row className='mb-3 '>
           <Col className='col-1'></Col>
           <Col className='col-5 text-start text-white border-bottom'><h4 className='tt'>EDUCATION</h4><p className='mt-3'>BTech InformationTechnology</p> <p>Karpagam College Of Enginnering-Coimbatore</p><p>Current CGPA:<span className='text-warning'> 7.68</span></p><p>SSLC:2018-2019</p><p>Arumugam Academy Mt.Hr.Sec.School-Aravakurichi</p><p>Percentage:<span className='text-warning'> 79.2</span></p><p>HSLC:2018-2019</p><p>Ponnu Mt.Hr.Sec.School-Dharapuram</p><p>Percentage:<span className='text-warning'> 85.5 </span></p></Col>




           <Col className='col-5 text-start text-white border-bottom'><h4 className=' tt'>ProgrammingLanguages Known</h4>
           
           <ul><li><p>C</p><p className='text-warning'> (Intermediate)</p></li><li><p>C++</p><p className='text-warning'> (Intermediate)</p></li><li><p>JAVA</p><p className='text-warning'> (Intermediate)</p></li><li><p>JAVASCRIPT</p><p className='text-warning'> (Intermediate)</p></li></ul></Col>
        </Row>
       
       
        <Row className='mb-3'>
          <Col className='col-1'></Col>
          <Col className='col-5 text-start text-white border-bottom '><h4 className='tt'>ACCOMPLISHMENT</h4><p className='mt-3'>SKILLRACK: 1300+ Problems Solved</p><p>CODECHEFF: 250+ Problems Solved</p><p>LEETCODE: 300+ Problems Solved</p></Col>
          <Col className='col-5 text-start text-white border-bottom '><h4 className='tt'>CERTIFICATIONS</h4><div className='ce'><p>Infosis Springboard-</p><span className='text-warning'>(HTML5,CSS3)</span></div><div  className='ce'><p>CoURSERA-</p><span className='text-warning'>(META FRONTEND DEVELOPEMNT)</span></div><div className='ce'><p>CICSCO NETWORKING-</p><span className='text-warning'>(INTRODUCTION TO CYBER SECURITY)</span></div><div className='ce'><p>BHARATHIDHASAN UNIVERSITY-</p><span className='text-warning'>(C,C++ programming)</span></div><div className='ce'><p>NPTEL-</p><span className='text-warning'>(DESIGN THINKING-a premier,Soft Skill Development,Advance DataStructure Using JAVA)</span></div></Col>
        </Row>
        <Row className='mb-3'>
          <Col className='col-1'></Col>
          <Col className='col-5 text-white text-start border-bottom '><h4 className='tt '>SOFT SKILLS</h4><ul className='mt-3'><li><p>COMMUNICATION</p></li><li><p>TEAMWORK</p></li><li><p>TIMEMANAGEMENT</p></li><li><p>LEADERSHIP</p></li></ul></Col>
          <Col className='col-5 text-start text-white border-bottom '><h4 className='tt'>TOOLS KNOWN</h4><ul><li><p>devC++</p></li><li><p>Eclipse</p></li><li><p>VisualStudioCode</p></li><li><p>Adobe</p></li><li><p>MS-Word,Excel,PowerPoint</p></li></ul></Col>
        </Row>
        <Row>
          <Col className='col-1'></Col>
          <Col className='col-5 text-start text-white'><h4 className='tt'>LANGUAGES KNOWN</h4><ul className='mt-3'><li><p>ENGLISH</p></li><li><p>TAMIL</p></li></ul></Col>
          <Col className='col-5 text-start text-white '><h4 className='tt '>AREA OF INTEREST</h4><ul><li><p className='mt-3'>Web Development</p></li></ul></Col>
        </Row>
      </div>
      </>
  )
}
