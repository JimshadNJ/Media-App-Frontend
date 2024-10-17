import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap';
import Table from 'react-bootstrap/Table';
import { FaHome } from "react-icons/fa";
import { Link } from 'react-router-dom';
import { deleteHistoryAPI, getHistoryAPI } from '../Services/allAPIs';
import { MdDelete } from "react-icons/md";

function WatchHistory() {
const hDelete=async(id)=>{
   const result=await deleteHistoryAPI(id)
   window.location.reload()
   console.log(result);
   
}

const[history,setHistory]=useState([])
  const getWatch=async()=>{
    const response=await getHistoryAPI()
    console.log(response.data);
    setHistory(response.data)
  }
  console.log(history);
  useEffect(()=>{
    getWatch()
  },[])
  return (
    <div style={{
      padding:'50px'
    }}>
<Row>
  <Col>
  <h5>Watch History</h5>
  <Table striped bordered hover>
      <thead>
        <tr>
          <th><h6>SI No</h6></th>
          <th><h6>Caption</h6></th>
          <th><h6>URL</h6></th>
          <th><h6>Timestamp</h6></th>
          <th><h6>Action</h6></th>
        </tr>
      </thead>
      <tbody>
        {
          history?history.map((item,index)=>(
            <tr>
          <td>{index+1}</td>
          <td>{item.caption}</td>
          <td>{item.url}</td>
          <td>{item.timestamp}</td>
          <td><MdDelete  onClick={()=>hDelete(item.id)} /></td>
        </tr>
          )):'No data'
        }
       
      </tbody>
    </Table></Col>
    <Col>
    <Link to={'/home'}>
    <h5 style={{paddingLeft:'400px'}}>Back to home <FaHome /></h5>
    </Link></Col>
</Row>
    </div>
  )
}

export default WatchHistory