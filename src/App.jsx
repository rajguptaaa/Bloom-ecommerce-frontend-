import React from 'react';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { ShopCategory } from './Pages/ShopCategory';
import { Shop } from './Pages/Shop';
import { Product } from './Pages/Product';
import { Cart } from './Pages/Cart';
import { LoginSignUp } from './Pages/LoginSignUp';
import { Footer } from './Components/Footer/Footer';
import laptop_banner from './Components/Images/laptop_banner.png';
import keypad_banner from './Components/Images/keypad_banner.png';
import mousepad_banner from './Components/Images/mousepad_banner.png';
import { NewCollections } from './Components/NewCollections/NewCollections';
import { Hero } from './Components/Hero/Hero';

function AppContent() {
  const location = useLocation();

  return (
    <>
      <Navbar />
      <Routes>
        <Route path='/' element={<Shop />} />
        <Route path="/" element={<Hero/>} />
        <Route path="/new-collections" element={<NewCollections />} />
        <Route path='/keypad' element={<ShopCategory banner={keypad_banner} category="keypad" />} />
        <Route path='/mousepad' element={<ShopCategory banner={mousepad_banner} category="mousepad" />} />
        <Route path='/laptop' element={<ShopCategory banner={laptop_banner} category="laptop" />} />
        <Route path="product" element={<Product />}>
          <Route path=':productId' element={<Product />} />
        </Route>
        <Route path='/cart' element={<Cart />} />
        <Route path='/login' element={<LoginSignUp />} />
      </Routes>

     
      {location.pathname !== '/cart' && location.pathname !== '/login' && <Footer />}
    </>
  );
}

function App() {
  return (
    <BrowserRouter>
      <AppContent />
    </BrowserRouter>
  );
}

export default App;


