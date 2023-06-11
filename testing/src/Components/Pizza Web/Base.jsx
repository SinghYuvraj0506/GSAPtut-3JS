import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Base = ({ addBase, pizza }) => {
  const bases = ["Classic", "Thin & Crispy", "Thick Crust"];

  const continerVariant = {
    from:{
      x:"100vw"
    },
    to:{
      x:0,
      transition:{
        duration:0.5
      }
    },
    exit:{
      x:"-100vw",
      transition:{ease:"easeInOut"}
    }
  }

  const nextVariant = {
    from:{
      x:"-100vw"
    },
    to:{
      x:0,
      transition:{
        type: "spring", stiffness: 120
      }
    }
  }

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

  return (
    <motion.div
      className="base container"
      variants={continerVariant}
      initial="from"
      animate="to"
      exit="exit"
    >
      <h3>Step 1: Choose Your Base</h3>
      <ul>
        {bases.map((base) => {
          let spanClass = pizza.base === base ? "active" : "";
          return (
            <motion.li
              key={base}
              onClick={() => addBase(base)}
              whileHover={{ scale: 1.3, color: "yellow", originX: 0 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <span className={spanClass}>{base}</span>
            </motion.li>
          );
        })}
      </ul>

      {pizza.base && (
        <motion.div
          className="next"
          variants={nextVariant}
        >
          <Link to="/toppings">
            <motion.button
             variants={buttonVariant} whileHover="hover"
            >
              Next
            </motion.button>
          </Link>
        </motion.div>
      )}
    </motion.div>
  );
};

export default Base;
