import logo from './logo.svg';
import './App.css';
import Home from "./components/Home";
import Clones from "./components/Clones";
import { BrowserRouter as Router ,Routes, Route, Navigate } from 'react-router-dom';


function App() {
  return (<Router>
    <div className="App">
      <Routes>

        <Route path='/' element={<Home/>}/>
        <Route path="/clones" element={<Clones/>} />



      </Routes>
    </div>
  </Router>
  );
}

export default App;
