import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter, Route, Routes} from  "react-router-dom";
import Container from "./Components/Shared/Container";
import Home from './Components/Pages/Home';
import Carrito from './Components/Pages/Carrito';
import Perfil from './Components/Pages/Perfil';
import Login from './Components/Pages/Login';
import Nopage from './Components/Pages/Nopage';

function App() {
  return (
       <BrowserRouter >
        <Routes>
          <Route path='/' element={ <Container/> }>
            <Route index element={ <Home/> }></Route>
            <Route path='/Carrito' element={ <Carrito/> }></Route>
            <Route path='/Perfil' element={ <Perfil/> }></Route>
            <Route path='/Login' element={ <Login/> }></Route>
            <Route path='*' element={ <Nopage /> }></Route>
          </Route>
        </Routes>
       </BrowserRouter>
  );
}

export default App;
