import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const continerVariant = {
  from: {
    x: "100vw",
  },
  to: {
    x: 0,
    transition: {
      duration: 0.5,
    },
  },
  exit:{
    x:"-100vw",
    transition:{ease:"easeInOut"}
  }
};

const buttonVariant = {
  hover: {
    //scale:[1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1,1.1,1],    // keyframes
    scale: 1.1,
    textShadow: "0 0 8px #ffffff",
    boxShadow: "0 0 8px #ffffff",
    transition: {
      repeat: Infinity,    // repetation of the keyframes infinately
      duration:0.4
    }
  }
};

const Toppings = ({ addTopping, pizza }) => {
  let toppings = [
    "mushrooms",
    "peppers",
    "onions",
    "olives",
    "extra cheese",
    "tomatoes",
  ];

  return (
    <motion.div
      className="toppings container"
      variants={continerVariant}
      initial="from"
      animate="to"
      exit="exit"
    >
      <h3>Step 2: Choose Toppings</h3>
      <ul>
        {toppings.map((topping) => {
          let spanClass = pizza.toppings.includes(topping) ? "active" : "";
          return (
            <motion.li
              key={topping}
              onClick={() => addTopping(topping)}
              whileHover={{ scale: 1.3, color: "yellow", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{topping}</span>
            </motion.li>
          );
        })}
      </ul>

      <Link to="/order">
        <motion.button
          variants={buttonVariant} whileHover="hover"
        >
          Order
        </motion.button>
      </Link>
    </motion.div>
  );
};

export default Toppings;
