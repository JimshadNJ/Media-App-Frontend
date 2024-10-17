import React, { useEffect } from 'react'
import { Button, Form } from 'react-bootstrap'
import Modal from 'react-bootstrap/Modal';
import { useState } from 'react';
import { addCategoryAPI, deleteCategoryAPI, getAVideoDetailsAPI, getCategoryAPI, updateAVideoDetailsAPI } from '../Services/allAPIs';
import Table from 'react-bootstrap/Table';
import { MdDelete } from "react-icons/md";
import Swal from 'sweetalert2';
import ViewCard from './ViewCard';


function AddCategory() {
  const handleDelete=async(id)=>{
    const result=await deleteCategoryAPI(id)
    window.location.reload()
  }

  const[category,setCategory]=useState("")
    const handleAdd=async()=>{
    if (category){
      const body={
        category,
        allVideos:[]
      }
      try{
        const result=await addCategoryAPI(body)
        console.log(result);
        alert('Category added successfully')
        handleClose()
        window.location.reload() 
       }
       catch(error){
        console.log(error);
        
       }
      }
    }
const [getCategory,setGetCategory]=useState([])
const Category=async()=>{
  const result=await getCategoryAPI()
  console.log(result.data);
  setGetCategory(result.data)
  
}
console.log(getCategory);
useEffect(()=>{
  Category()
},[])

  
  
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

const dragOver=(e)=>{
  e.preventDefault()
  console.log('Video Over');
  console.log(e);
}

  const videoDropped=async(e,categoryId)=>{
    const videoId=e.dataTransfer.getData("videoId")
    console.log('video dropped successfully...categoryId: '+categoryId, "Video Id: "+videoId);
console.log(e);
// fetch the video details
    const {data} =await getAVideoDetailsAPI(videoId)
    console.log(data);
    //add these details to the category => allVideos[]
    const selectedCategory = getCategory.find(item=>item.id==categoryId)
    selectedCategory.allVideos.push(data)
    console.log(selectedCategory);
    const updateCategory = await updateAVideoDetailsAPI(categoryId,selectedCategory)
    console.log(updateCategory);
    
  }
  
  return (
    <div >
      <Button variant="primary" style={{backgroundColor:'yellow',color:'black'} }onClick={handleShow} >
            Add Category
          </Button>
          <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title style={{color:'yellow'}}>  Add Category</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        
        <Form.Control onChange={(e)=>setCategory(e.target.value)} className='mb-2' type="text" placeholder="Category Name" />
      
        
      </Form.Group>
      </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary"  onClick={handleClose}>
            Cancel
          </Button>
          <Button variant="primary" style={{backgroundColor:'yellow'}} onClick={handleAdd}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>
      
        {
          getCategory.length>0?getCategory.map(item=>(
            
              <Table striped bordered hover>
      
      <tbody>
        <tr droppable={true} onDragOver={e=>dragOver(e)} onDrop={(e)=>videoDropped(e,item.id)}>
          <td><h4>{item.category}</h4></td>
          
           <td ><MdDelete style={{alignItems:'center',color:'red'}} onClick={()=>handleDelete(item.id)}/></td>
        </tr>
       <tr>
       {
          item.allVideos.length>0?item.allVideos.map(video=>(
            
              <ViewCard videoDetails={video}/> 
          )):""
        
          }
        
        
       </tr>
      </tbody>
    </Table>
            
          )):'No data'
        }
      </div>
    
  )}


export default AddCategory