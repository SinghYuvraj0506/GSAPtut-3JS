import React from "react";

import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

const backdropVariant = {
  from: {
    opacity: 0,
  },
  to: {
    opacity: 1,
  },
  exit: {
    y:"-100vh",
    transition:{
        delay:0.2,
        type:"tween"
    }
  },
};

const modalVariant = {
  from: {
    y:"-110vh",
    opacity: 0,
  },
  to: {
    y:300,
    opacity: 1,
    transition:{
        delay:0.5
    }
  },
};

function Modal({ showModal, setShowModal }) {
  return (
    <>
      <AnimatePresence>
        {showModal && (
          <motion.div
            className="backdrop"
            variants={backdropVariant}
            initial="from"
            animate="to"
            exit="exit"
          >
            <motion.div className="modal" 
                variants={modalVariant}
            >
                <p>Want to make another pizza?</p>
                <Link to="/">
                    <button onClick={()=>{
                        setShowModal(false)
                    }}>Start Again</button>
                </Link>
            </motion.div>

          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Modal;
