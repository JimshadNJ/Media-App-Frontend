import React, { useState } from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import AddVideo from '../Components/AddVideo'
import ViewVideo from '../Components/ViewVideo'
import AddCategory from '../Components/AddCategory'
import { FaHistory } from "react-icons/fa";



function Home() {
     //state creation for state lifting (parent component)
  const [uploadVideoResponse,setUploadVideoResponse]=useState({})
 


  return (
    <>
    <Container>
      <Row style={{marginTop:'30px'}}>
        <Col>
        <div className="d-flex">
          {/* first child for state lifting AddVideo (setState)*/}
        <h6 className>Upload Video</h6>   
        <AddVideo setUploadVideoResponse={setUploadVideoResponse}  />
        </div>
        
        </Col>
        <Col>
        <Link to={'/watchHistory'}>
        <h6 style={{float:'right'}}>Watch History   <FaHistory /></h6>
        </Link>
        </Col>
      </Row>
      <Row className='d-flex pt-5'>
        <Col>
        <h6>All Videos</h6>
        {/* 2nd child for state lifting ViewVideo (state)  */}
        <ViewVideo uploadVideoResponse={uploadVideoResponse} />
        </Col>
        
        <Col>
        <div style={{float:'right'}}>
        <h6 >Category</h6>
        <AddCategory/>
        </div>
        
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default Home