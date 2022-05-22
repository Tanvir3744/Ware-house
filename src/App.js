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
import AddItem from './components/AddItem/AddItem';
import ManageItem from './components/ManageItem/ManageItem';
import NotFound from './components/NotFound/NotFound';
import MyItem from './components/MyItem/MyItem';
import Detail from './components/Detail/Detail';
import RequireAuth from './components/RequireAuth/RequireAuth.js'
import Update from './components/Update/Update';
function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path='home' element={<Home></Home>}></Route>
        <Route path="register" element={<Register></Register>}></Route>
        <Route path='login' element={<Login></Login>}></Route>
        <Route path='blog' element={<Blog></Blog>}></Route>
        <Route path='addItem' element={<RequireAuth><AddItem /></RequireAuth>} />
        <Route path='manageItem' element={
          <RequireAuth>
            <ManageItem></ManageItem>
          </RequireAuth>
        }></Route>
        <Route path='myItem' element={
          <RequireAuth>
            <MyItem></MyItem>
          </RequireAuth>
        }></Route>
        <Route path='details/:id' element={
          <RequireAuth>
            <Detail></Detail>
          </RequireAuth>
        }></Route>
        <Route path='/update' element={<RequireAuth><Update></Update></RequireAuth>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
