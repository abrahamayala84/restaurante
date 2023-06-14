
import Carousel from 'react-bootstrap/Carousel';
import Button from 'react-bootstrap/Button';
import {  useState } from 'react';
import { Link } from 'react-router-dom';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';


function Home() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  return (

    <> 
    
    <Container fluid style={{backgroundColor: 'chocolate', display:'flex',justifyContent: 'space-between', gap:10,alignItems: 'center'}}>
      <img style={{width: '45px'}} src='./imagenes/logo.jpg'/>
      <h1>El Tadamalgense</h1>
      <Button variant="outline-warning" onClick={handleShow}>
        Launch
      </Button>

      <Offcanvas show={show} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Registro</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
         <h1>Iniciar Sesion</h1>
         < div style={{display: 'flex', justifyContent: 'space-between'}}>
         <Link to='/'>Inicio</Link> 
         <Link to='/Menu'>Menu</Link> 
         <Link to='/Reservaciones'>Reservaciones</Link>
         </div>
        </Offcanvas.Body>
      </Offcanvas>
      </Container>
    
      <div className='container'  style={{ marginTop:10, marginBottom:10 }}>
      <Carousel>
      <Carousel.Item>
        <img
          
          className="d-block w-100"
          src='./imagenes/antojos.jpg'
          alt="First slide"
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src= './imagenes/michi.jpg'
          alt="Second slide"
        />

        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src='./imagenes/pozole.jpg'
          alt="Third slide"
        />

      </Carousel.Item>
    </Carousel>
      </div>
      
      <footer className='footer'>
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-3 col-sm-2">
              <h4>avsios de privacidad</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit sequi architecto fugiat tenetur voluptatibus natus? Ullam dolore eaque aperiam, consequatur officia molestias, doloribus consequuntur rem omnis quis neque natus sint.</p>
        </div>
        <div className="col-lg-3 col-md-3 col-sm-3">
        <ul id="list"> <h4>Otros links</h4>
          <li>
            facturaciones
          </li>
          <li>
            nosotros
          </li>
          <li>bolsa de trabajo</li>
        </ul>
        </div>

        <div className="col-lg-3 col-md-4 col-sm-4">
          <h4>Politicas</h4>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ut qui, quod sed molestiae libero, ullam nulla quas voluptas esse consequatur et voluptates perferendis assumenda sunt itaque laborum illum. Delectus, ex!</p>
        </div>
        <div className="col-lg-3 col-md-2 col-sm-3">
          <h2>Contactanos</h2>
        <ul style={{display: 'flex', gap: 15, listStyle: 'none'}}>
           
           <li><img id='logos' src="/imagenes/insta.png" alt="" /></li>
           <li><img id="logos" src='/imagenes/facebook.png' alt="" /></li>
           
                   </ul></div>
                   </div>
                   </div>
      </footer>
      </> 
  
  );
}




export default Home


