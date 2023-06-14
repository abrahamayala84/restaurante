import { Link } from "react-router-dom"


function Pedidos (){
    return (
        <>
<h1>Pedidos</h1>
<Link  to="/">Home</Link>
<div className="container">
  <form action="get">
    <label htmlFor="">nombre completo </label>
    <input type="text" />
    <label htmlFor="">email</label>
    <input type="email" name="" id="" />
  </form>
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

export default Pedidos