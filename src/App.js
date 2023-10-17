import React from "react";
import Home from './pages/Home';
import Products from './pages/Products';
import Cart from './pages/Cart';
import {BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import Product from './pages/Product';
import CartIcon from './Components/CartIcon';
import store from "./store/store";
import {Provider} from 'react-redux';





class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
    <div className="container">
      <nav className="navbar navbar-expand-lg bg-light">
          <NavLink className="navbar-brand" to="/">CatsStore</NavLink>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">Home</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">Products</NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/cart">Cart</NavLink>
              </li>
            </ul>
          </div>
          
        
      
      
      
          <CartIcon />
    
      </nav>


      


      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/products/:id" exact element={<Product />} />
        <Route path="/cart" element={<Cart />} />

      </Routes>
  </div>
  </Router>
  </Provider>
  );
}
}

export default App;
