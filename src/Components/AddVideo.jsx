import React from 'react'
import { Button } from '@mui/material'
import { FaCloudUploadAlt } from "react-icons/fa";
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import Form from 'react-bootstrap/Form';
import { addVideoAPI } from '../Services/allAPIs';
import Swal from 'sweetalert2'




function AddVideo({setUploadVideoResponse}) {
   const [videoDetails,setVideoDetails]=useState({
    caption:"",
    img:"",
    url:""
   })
console.log(videoDetails);

const getEmbbedLink = (e)=>{
  // console.log(e.target.value);
  const {value}=e.target
  console.log(value);
  let yCode = value.slice(-31)
  let yLink = `https://www.youtube.com/embed/${yCode}`
  setVideoDetails({...videoDetails,url:yLink})
  
}

const handleAdd=async()=>{
   // destructure
   const { caption, url, img} = videoDetails
   if(!caption||!url ||!img){
     alert("Please Fill the Details")
   }
   else{
     //add videoAPI
     const response = await addVideoAPI(videoDetails)
     console.log(response);
     if(response.status>=200 && response.status<300){
      Swal.fire({
        title: 'Success!',
        text: 'Video added successfully',
        icon: 'success',
        confirmButtonText: 'Back'
      })
      setUploadVideoResponse(response.data)
     
      
      setVideoDetails({
        caption:'',
        url:'',
        img:''
   })
    handleClose() 
     }else{
      Swal.fire({
        title: 'Error!',
        text: response.message,
        icon: 'error',
        confirmButtonText: 'Cool'
      })
      setVideoDetails({
        caption:'',
        url:'',
        img:''
   })
    handleClose() 
     }
     
}
}

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  return (
    <div>
      <Button variant="text" onClick={handleShow}><FaCloudUploadAlt style={{width:'100%',color:'yellow'}}/></Button>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'yellow'}}>Upload Videos</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control onChange={e=>setVideoDetails({...videoDetails,caption:e.target.value})} className='mb-2' type="text" placeholder="Video Caption" />
        <Form.Control  onChange={e=>setVideoDetails({...videoDetails,img:e.target.value})} className='mb-2' type="text" placeholder="Video Image" />
        <Form.Control  onChange={getEmbbedLink} className='mb-2' type="text" placeholder="Video URL" />
        
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" style={{backgroundColor:'yellow'}} onClick={handleAdd}>
            Upload
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  )
}

export default AddVideo