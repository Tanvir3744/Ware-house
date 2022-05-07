import './App.css';
/* import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js' */
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path ='/home' element= {<Home></Home>}></Route>
      </Routes>
    </div>
  );
}

export default App;
