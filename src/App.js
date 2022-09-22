import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './components/Home';
import Hooks from './components/Hooks';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <nav>
          <NavLink to="/">Shows</NavLink> 
          <NavLink to="/state">Use State</NavLink>
        </nav>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path="/state" element={<Hooks/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
