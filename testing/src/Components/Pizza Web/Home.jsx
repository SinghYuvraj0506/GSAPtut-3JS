import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Loader from "./Loader";

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


const containerVariant = {
  from:{
    opacity:0
  },
  to:{
    opacity:1,
    transition:{
      delay:0.5,
      duration:1.5
    }
  },
  exit:{
    x:"-100vw",
    transition:{ease:"easeInOut"}
  }
}

const Home = () => {
  return (
    <motion.div
      className="home container"
      variants={containerVariant}
      initial="from" // here default type is tween and not spring because it has duration
      animate="to"
      exit="exit"
    >
      <h2>Welcome to Pizza Joint</h2>
      <Link to="/base">
        <motion.button variants={buttonVariant} whileHover="hover">
          Create Your Pizza
        </motion.button>
      </Link>

      <Loader/>
    </motion.div>
  );
};

export default Home;
