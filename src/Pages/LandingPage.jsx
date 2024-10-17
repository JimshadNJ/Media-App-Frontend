import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import img from '../assets/th.jpeg'
import Card from 'react-bootstrap/Card';
import { Link } from 'react-router-dom';


Container

function LandingPage() {
  return (
    <div>
      <Container>
      <Row>
        <Col>
        <h5 style={{paddingTop:'60px'}}>Welcome to <span style={{color:'yellow'}}>Media player</span></h5>
        <p style={{textAlign:'justify'}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem quasi. Vero beatae repellendus similique distinctio ipsa provident fugit? Dolores nam voluptatem assumenda eaque consectetur doloremque debitis tempore dolorem amet?
        Mollitia, rem aperiam, at pariatur cum magnam ut beatae nulla quis facilis hic aspernatur sit suscipit error! Cupiditate cumque doloribus aperiam soluta consectetur! Quas sapiente vero nulla nesciunt assumenda odio.
        Doloribus maxime provident earum alias sit error, voluptatem tenetur, similique distinctio architecto reprehenderit impedit vero ratione minus enim maiores aperiam magni commodi ad, illo ullam voluptas. Cumque saepe alias voluptatibus.
        </p>
        
          <Link to={'/home'}>
          <Button style={{marginBottom:'50px',backgroundColor:'yellow',color:'black'}}>Get Started</Button>
          </Link>
        
        </Col>
        <Col>
        <img style={{padding:'50px',paddingLeft:'80px'}} src={img} width={'400px'} alt="" />
        </Col>
      </Row>

      <div>
        <h4 style={{textAlign:'center',padding:'50px'}}>Features</h4>
      </div>
  <Row>
    <Col>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
    <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
       
      </Card.Body>
    </Card>
    </Col>
    <Col>
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={img} />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        
      </Card.Body>
    </Card>
    </Col>
  </Row>
  <Card style={{backgroundColor:'black',border:'solid 1px',padding:'50px',margin:'70px'}}>
    <Row>
      <h5 style={{color:'yellow'}}>Simple Fast and Powerful</h5>
      <Col><b>Play Everything:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem quasi. Vero beatae repellendus similique distinctio ipsa provident fugit <br /><br />
      <b>Play Everything:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem quasi. Vero beatae repellendus similique distinctio ipsa provident fugit <br /><br />
      <b>Play Everything:</b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iste, autem quasi. Vero beatae repellendus similique distinctio ipsa provident fugit <br /><br />
      </Col>

      <Col>
      <iframe width="400" height="320" src="https://www.youtube.com/embed/AiD6SOOBKZI?si=rZf1-GdiGkswyDbu" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe></Col>
    </Row>
  </Card>
      </Container>
    </div>
  )
}

export default LandingPage