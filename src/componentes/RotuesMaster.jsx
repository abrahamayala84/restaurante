import {Routes, Route} from 'react-router-dom'
import Home from '../pages/home';
import Menu from '../pages/Menu';
import Reservaciones from '../pages/reservaciones';
import Pedidos from '../pages/Pedidos';


function RoutesMaster (){
    return (
        <Routes>
            <Route path="/" element={<Home/>}/>
           <Route path="/menu" element={<Menu/>} />
           <Route path="/Reservaciones" element={<Reservaciones/>} />
           <Route path='/Pedidos' element={<Pedidos/>} />
        </Routes>

    )
}

export default RoutesMaster;