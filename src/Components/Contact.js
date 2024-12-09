import React, { useState } from 'react'
import { NavBar} from './NavBar'
import { Container,Col,Row,Button } from 'react-bootstrap'
// import '../Components/Contact.css'

import { toast } from 'react-toastify'
export const Contact = () => {
  const handleClick=()=>{
   // console.log("hello");
   console.log(name+" "+email+" "+desc);
   if(name==="")
   {
    toast.error("Enter name",{position:"top-center"});
   }
   else if(email==="")
   {
    toast.error("Enter email",{position:"top-center"})
   }
   else if(desc==="")
   {
    toast.error("Add Description",{position:"top-center"})
   }
else{
    toast.success("Submitted",{position:"top-center"});
    setName("");
    setDesc("");
    setEmail("");
}
  }

  const [name,setName] = useState("");
  const [email,setEmail] = useState("");
  const [desc,setDesc] = useState("");
  return (
    <>
    <div style={{backgroundColor:'black',height:'100vh'}}>
        <NavBar/>
        <Container fluid className='mb-5'>
        <Row className='mb-4 mt-3 '>
        <Col className='col-1'></Col>
          <Col className='col-8 border-bottom'><h2 className='text-warning text-start'>Contact Me</h2></Col>
          <Col className='col-2 border-bottom '></Col>
          </Row>
          <Row className='mt-5 mb-3'>
            <Col className='col-1'></Col>
            <Col className='col-2 text-start text-white co'><h4>Let's Talk</h4></Col>
          </Row>
        
          <Row className='mb-5 mt-4'>
           <Col className='col-1'></Col>
           <Col className='col-5 text-start'><input type='text' className='myInput' placeholder='Name' style={{width:'600px',height:'50px',border:'solid',borderColor:'yellow',borderRadius:'8px',backgroundColor:'transparent',color:'white'}} accordion 
           value={name} onChange={(e)=>setName(e.target.value)}
           ></input></Col>
           <Col className='col-5 text-start'><input type='text' className='myInput' placeholder='Email' style={{width:'600px',height:'50px',border:'solid',borderColor:'yellow',borderRadius:'8px',backgroundColor:'transparent',color:'white'}}
           value={email} onChange={(e)=>setEmail(e.target.value)}
           ></input></Col>
          </Row>
          <Row className='mb-3 mt-5'>
           <Col className='col-1'></Col>
           <Col className='col-5 text-start'><textarea type='text' className='mInput' placeholder='Description' style={{width:'600px',height:'250px',border:'solid',borderColor:'yellow',borderRadius:'8px',backgroundColor:'transparent',color:'white',position:'relative'}}
           value={desc} onChange={(e)=>setDesc(e.target.value)}
           
           ></textarea></Col>
          </Row>
          <Row>
             <Col className='col-1'></Col>
             <Col className='col-3 text-start' style={{width:'300px'}}> <Button className='mybutton' variant="outline-warning" onClick={handleClick}>SUBMIT</Button></Col>
          </Row>
        </Container>
    </div>
    </>
  )
}

