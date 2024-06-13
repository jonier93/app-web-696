import './App.css';
import Navegation from './components/navegation';
import { Register } from './components/register';
import Home from './components/home'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Consult from './components/consult';
import {Contact} from './components/contact';

function App() {
  return (
    <div className="App">
      <Navegation />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/home" element={<Home/>}></Route>
          <Route path="/register_page" element={<Register/>} />
          <Route path="/consult_page" element={<Consult/>} />
          <Route path="/contact_page" element={<Contact />} />
        </Routes>
      </BrowserRouter>   
    </div>
  );
}

export default App;
