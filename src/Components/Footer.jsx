import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'


function Footer() {
  return (
    <div>
        <Container style={{marginTop:'100px'}}>
        
            <Row>
                <Col>Media Player</Col>
                <Col>About Us</Col>
                <Col>Address</Col>
            </Row>
            <Row className='Text-center'>
            <p style={{textAlign:'center',padding:'50px'}}>All Rights are @mediaapp.com 2024</p>
            </Row>
        </Container>
    </div>
  )
}

export default Footer