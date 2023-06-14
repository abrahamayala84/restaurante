
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Container from 'react-bootstrap/Container';
import { Link } from 'react-router-dom';

import Col from 'react-bootstrap/Col';
import {  useState } from 'react';
import {db} from  '../componentes/firebase';
import { getDocs, collection,addDoc } from 'firebase/firestore';



function Reservaciones() {
  
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
   
const Reservacionescollection = collection(db, 'Reservaciones')
   
  const getReservaciones = async () => {
  const data = await getDocs(Reservacionescollection)
  const filterData = data.docs.map((doc) =>({
    ...doc.data(),
    id: doc.id,
    
  }));
  console.log(filterData)
  }
  
  const addinfo = async () => {
    try{

   await addDoc(Reservacionescollection,values)
   alert('Reservacion Exitosa')
   
   console.log('hola') 

  }catch(error){
    console.log(error)
  }
  }

   const valuesState = {
    nombre: '',
   apellido: '',
   fecha: '',
   tiempo:'',
 }
  const [values, setvalues] = useState(
    valuesState
    )

    const inputsChange = e => {
    
      const {name, value} = e.target;
      console.log(name, value)
      setvalues({...values, [name]: value})
  
     };

  const handleSubmit = e => {
    e.preventDefault();
    console.log(values);
    getReservaciones()
   addinfo()

  }
 


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

      <div style={{display:'row' ,justifyContent: 'center', alignItems: 'center',marginTop:'50px'}} className="container-col">
      <div style={{Col , textAlign: 'center', backgroundImage:'url(./imagenes/logo.jpg)'}}>
        
      <h1>Reservaciones</h1>
      <label>re</label>
     <form  onSubmit={handleSubmit} style={{Col , textAlign: 'center',marginTop: '50px',marginBottom: '200px'}}>
      
      <label htmlFor="">
        Nombre
      </label><br />
      <input type="text" name="nombre" onChange={inputsChange} /><br /><br />
      <label htmlFor="">
        Apellido
      </label><br />
      <input type="text" name="apellido" onChange={inputsChange}/><br /><br />
      <label htmlFor="">
        Fecha
      </label>
      <br />
      <input type='Date' name="fecha" onChange={inputsChange}/>
      
      <input type='time' name='tiempo'onChange={inputsChange}/><br /><br />
      <Button type="submit">Reservar</Button>
     
     </form>




     <footer className='footer'>
        <div className="container">
          <div className="row" >
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

         
      </div>
      </div>
    </>
  );
}

export default Reservaciones;







