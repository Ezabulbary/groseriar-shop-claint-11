import logo from './logo.svg';
import './App.css';
import Header from './sheard/Header/Header';
import Footer from './sheard/Footer/Footer';
import { Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <Routes>
        <Route path='/'></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
