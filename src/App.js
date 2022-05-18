import Header from './sheard/Header/Header';
import Footer from './sheard/Footer/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home/Home/Home';
import Blogs from './pages/Blogs/Blogs';
import NotFound from './sheard/NotFound/NotFound';
import About from './pages/Home/About/About';
import Login from './pages/Login/Login/Login';
import ManageItems from './pages/ManageItems/ManageItems';
import AddItems from './pages/AddItems/AddItems';
import MyItems from './pages/MyItems/MyItems';
import RequireAuth from './pages/Login/RequireAuth/RequireAuth';
import Register from './pages/Login/Register/Register';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/manageItems' element={
          <RequireAuth>
            <ManageItems></ManageItems>
          </RequireAuth>
        }></Route>
        <Route path='/addItems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={
          <RequireAuth>
            <MyItems></MyItems>
          </RequireAuth>
        }></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
