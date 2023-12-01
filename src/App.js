import logo from './logo.svg';
import './App.css';
import MyBag from "./Components/MyBag";
import Goods from "./Components/Goods";
import { Routes, Route, Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Link id='goodsİd'  to='/'>Goods</Link>
      <Link id='mybagsİd' to='/my-bag'>MyBag</Link>
      <Routes>
        <Route path='/' element={<Goods />} />
        <Route path='/my-bag' element={<MyBag />} />
      </Routes>

    </div>
  );
}

export default App;
