import React, { useEffect } from "react";

import { motion } from "framer-motion";
import { useState } from "react";

const continerVariant = {
  from: {
    x: "100vw",
  },
  to: {
    x: 0,
    transition: {
      type:"spring",
      mass:0.4,
      damping:8,
      when:"beforeChildren",      // these are orchestration props and used to seperate the animation of a parent and its children
      staggerChildren:0.4
    },
  },
  exit:{
    x:"-100vw",
    transition:{ease:"easeInOut"}
  }
}; 

const childVariant = {
  from: (i) => ({
    opacity: 0,
    y:-50 *i
  }),
  to: (i) => ({
    y:0,
    opacity: 1,
    transition:{
      delay:i*0.2
    }
  }),
};

const Order = ({ pizza,setShowModal }) => {


  useEffect(() => {
    setTimeout(() => {
      setShowModal(true)
    }, 4000);
  }, [setShowModal])
  
   
  return (
    <motion.div
      className="container order"
      variants={continerVariant}
      initial="from"
      animate="to"
      exit="exit"
    >
      <h2>Thank you for your order :)</h2>
      <motion.p variants={childVariant}>
        You ordered a {pizza.base} pizza with:
      </motion.p>
      {pizza.toppings.map((topping,i) => (
        <motion.div variants={childVariant} custom={i} key={topping}>
          {topping}
        </motion.div>
      ))}
    </motion.div>
  );
};

export default Order;
