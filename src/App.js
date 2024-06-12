import React, { useState } from "react";
import Singup from "./Components/Front/Singup/Singup";
import data from "./Components/Back/Data/Data";
import Card from "./Components/Front/Cart/Card";
import Header from "./Components/Front/Header/Header";
import { Routes, Route } from "react-router-dom";
import Products from "./Components/Front/Products/Products";
const App = () => {
  const { ProductItems } = data;
  const [cartItems, setCartItems] = useState([]);

  const handlerAddProduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const handlerRemoveproduct = (product) => {
    const productExist = cartItems.find((item) => item.id === product.id);
    if (productExist.quantity === 1) {
      setCartItems(cartItems.filter((item) => item.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...productExist, quantity: productExist.quantity - 1 }
            : item
        )
      );
    }
  };

  const emptyCart = () => {
    setCartItems([]);
  };

  const orderProducts = () => {
    alert("order......");
  };

  return (
    <div>
      <Header cartItems={cartItems} />
      <Routes>
        <Route
          path="/"
          element={
            <Products
              ProductItems={ProductItems}
              handlerAddProduct={handlerAddProduct}
            />
          }
        />
        <Route path="/Singup" element={<Singup />} />
        <Route
          path="/Cart"
          element={
            <Card
              cartItems={cartItems}
              handlerAddProduct={handlerAddProduct}
              handlerRemoveproduct={handlerRemoveproduct}
              emptyCart={emptyCart}
              orderProducts={orderProducts}
            />
          }
        />
      </Routes>
    </div>
  );
};

export default App;
