import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter, Routes, Route, } from "react-router-dom";
import Home from './pages/Home';

function App() {
  return (
    <BrowserRouter>
      <Navbar></Navbar>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
