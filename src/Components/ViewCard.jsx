import React, { useState } from 'react';
import { Button, Card, Modal } from 'react-bootstrap';
import { MdDelete } from "react-icons/md";
import { addHistoryAPI, deleteAVideoAPI } from '../Services/allAPIs';
import Swal from 'sweetalert2';


function ViewCard({ videoDetails }) {

  const handleDelete=async(id)=>{
    const result=await deleteAVideoAPI(id)
    window.location.reload()
  }


  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  //add watch history API details to the server
  const handleShow = async() => {
    setShow(true);
    const{caption,url}=videoDetails
    //generate date and time
    let today=new Date()
    console.log(today);//Wed Oct 09 2024 16:36:10 GMT+0530 (India Standard Time)
    //covert date and time
    let timestamp=new Intl.DateTimeFormat('en-US',{year:'numeric',month:'numeric',day:'numeric',hour:'2-digit',minute:'2-digit',second:'2-digit'}).format(today)
    console.log(timestamp);//10/9/2024, 04:46:41 PM

    let details={
      caption,url,timestamp
    }
     //API call 
    const response=await addHistoryAPI(details)
    console.log(response);
  }
const dragStarted=(e,videoId)=>{
  console.log('video dragStarted...id: '+videoId);
  console.log(e);
  e.dataTransfer.setData("videoId",videoId)
  
}

return (
    <div>
      <Card draggable={true} onDragStart={(e)=>dragStarted(e,videoDetails.id)} style={{ width: '160px', height: '200px' }}>
        <Card.Img 
        onClick={handleShow}
          variant="top" 
          src={videoDetails.img} 
          style={{ height: '100px', width:'100%' ,objectFit: 'cover' }} 
        />
        <Card.Body>
          <Card.Title style={{display:'flex',paddingTop:'20px',justifyContent:'center'}}>
            <h6>{videoDetails.caption}</h6>
            <span>
              <Button 
                style={{ backgroundColor: 'red', height: '40px',marginLeft:'30px',border:'0px'  }} 
                onClick={()=>handleDelete(videoDetails.id)}>
                <MdDelete />
              </Button>
            </span>
          </Card.Title>
        </Card.Body>
      </Card>

      <Modal show={show} onHide={handleClose}>
        <Modal.Body>
          <iframe 
            width="450" 
            height="315" 
            src={videoDetails.url} 
            title={`YouTube video: ${videoDetails.caption}`} 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            referrerPolicy="strict-origin-when-cross-origin" 
            allowFullScreen
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancel
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default ViewCard;
