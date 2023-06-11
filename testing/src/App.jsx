import "./App.css";
import {Routes, Route, useLocation } from "react-router-dom";

import Three from "./Components/Three";
import Header from "./Components/Pizza Web/Header.jsx";
import Home from "./Components/Pizza Web/Home.jsx";
import Base from "./Components/Pizza Web/Base.jsx";
import Toppings from "./Components/Pizza Web/Toppings.jsx";
import Order from "./Components/Pizza Web/Order.jsx";
import { useState } from "react";

import { AnimatePresence } from "framer-motion";
import Modal from "./Components/Pizza Web/Modal";

function App() {
  const location = useLocation();
  const [pizza, setPizza] = useState({ base: "", toppings: [] });

  const [showModal, setShowModal] = useState(false)

  const addBase = (base) => {
    setPizza({ ...pizza, base });
  };

  const addTopping = (topping) => {
    let newToppings;
    if (!pizza.toppings.includes(topping)) {
      newToppings = [...pizza.toppings, topping];
    } else {
      newToppings = pizza.toppings.filter((item) => item !== topping);
    }
    setPizza({ ...pizza, toppings: newToppings });
  };

  return (
    <>
      <Header />
      <Modal showModal={showModal} setShowModal={setShowModal}/>
      <AnimatePresence mode="wait" onExitComplete={()=>{setShowModal(false)}}>
        <Routes location={location} key={location.key}>
          <Route element={<Home />} path="*" />
          <Route
            path="/base"
            element={<Base addBase={addBase} pizza={pizza} />}
          />
          <Route
            path="/toppings"
            element={<Toppings addTopping={addTopping} pizza={pizza} />}
          />
          <Route path="/order" element={<Order pizza={pizza} setShowModal={setShowModal}/>} />
          <Route element={<Three />} path="/three" />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
