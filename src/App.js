import './App.css';
/* import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js' */
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import { Routes, Route } from 'react-router-dom'
import Home from './components/Home/Home';
import Header from './components/Header/Header';
import Register from './components/Register/Register';
import Login from './components/Login/Login';
import Blog from './components/Blog/Blog';
import Footer from './components/Footer/Footer';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path ='/home' element= {<Home></Home>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
