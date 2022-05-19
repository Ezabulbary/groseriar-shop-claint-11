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
import Categories from './pages/Home/Categories/Categories';
import Inventory from './pages/Home/Inventories/Inventories';
import InventoryAll from './pages/Home/InventoryAll/InventoryAll';
import { ToastContainer } from 'react-toastify';
import ManageAllItems from './pages/ManageAllItems/ManageAllItems';

function App() {
  return (
    <div>
      <Header></Header>
      <Routes>
        <Route path='/' element={<Home></Home>}></Route>
        <Route path='/home' element={<Home></Home>}></Route>
        <Route path='/blogs' element={<Blogs></Blogs>}></Route>
        <Route path='/about' element={<About></About>}></Route>
        <Route path='/about/:id' element={<About></About>}></Route>
        <Route path='/categories' element={<Categories></Categories>}></Route>
        <Route path='/inventory' element={<Inventory></Inventory>}></Route>
        <Route path='/inventory/:id' element={<Inventory></Inventory>}></Route>
        <Route path='/inventoryAll' element={
          <RequireAuth>
            <InventoryAll></InventoryAll>
          </RequireAuth>
        }></Route>
        <Route path='/manageAllItems' element={
          <RequireAuth>
            <ManageAllItems></ManageAllItems>
          </RequireAuth>
        }></Route>
        <Route path='/manageItems/:id' element={<ManageItems></ManageItems>}></Route>
        <Route path='/addItems' element={
          <RequireAuth>
            <AddItems></AddItems>
          </RequireAuth>
        }></Route>
        <Route path='/myItems' element={<MyItems></MyItems>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/register' element={<Register></Register>}></Route>
        <Route path='*' element={<NotFound></NotFound>}></Route>
      </Routes>
      <Footer></Footer>
      <ToastContainer></ToastContainer>
    </div>
  );
}

export default App;
