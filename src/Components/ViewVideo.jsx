import React, { useEffect, useState } from 'react'
import ViewCard from '../Components/ViewCard'
import { Col, Row } from 'react-bootstrap'
import { getVideoAPI } from '../Services/allAPIs'



function ViewVideo({uploadVideoResponse}) {
  //to hold all video details
const [video,setVideo]=useState([])

  const getVideo=async()=>{
    const response=await getVideoAPI()
    console.log(response.data);//array of data
    setVideo(response.data)
   
  }
  console.log(video);//array of video
  
  useEffect(()=>{
    getVideo()
  },[uploadVideoResponse])
  
  return (
    <div >
<Row >
  {
    video.length!=0? video.map(item=>(
<Col className='pt-4 '>
  <ViewCard videoDetails={item}/>
  </Col>
  )):"Not found"
  }
  
  
  
</Row>
    </div>
  )
}

export default ViewVideo