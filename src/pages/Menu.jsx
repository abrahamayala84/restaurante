import React from "react";

import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import {  useState } from 'react';

import { Link } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup'

function Menu (){

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

<div className="container" >
    <img style={{width:'100%', alignContent:'center', marginBottom: '10px', marginTop:'10px'}} src="./imagenes/tadamalgence.jpg" />
    <img id="menus" src="./imagenes/menu.jpg" alt="" />
</div>
      <div >
<CardGroup id="card" style={{gap: "5px" ,width:'100%',height:'60%'}}>
      <Card >
        <Card.Img variant="top" style={{height:'57%'}} src="./imagenes/rollos.jpg" />
        <Card.Body>
          <Card.Title>Pan dulce</Card.Title>
          <Card.Text>
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque facere quo blanditiis veniam quam nemo ducimus, magni maxime voluptatum voluptate.
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src='./imagenes/pizza.jpg' />
        <Card.Body>
          <Card.Title>pizza</Card.Title>
          <Card.Text>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente recusandae adipisci pariatur quae dicta. Nemo nulla quae debitis voluptatum odio. Alias fuga magnam eveniet cupiditate explicabo libero sed qui omnis?.{' $100'}
          </Card.Text>
        </Card.Body>
       
      </Card>
      <Card>
        <Card.Img variant="top" src='./imagenes/burritos.jpg' />
        <Card.Body>
          <Card.Title>Burritos</Card.Title>
          <Card.Text >
           Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur et reprehenderit nulla, animi ratione voluptate corrupti quisquam doloremque doloribus culpa expedita dolor consequuntur recusandae facilis officia, in nemo placeat! Aut.
          </Card.Text>
        </Card.Body>
      </Card>
    </CardGroup>
    </div>  
      

         <footer className="footer" >
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

    )
}

export default Menu