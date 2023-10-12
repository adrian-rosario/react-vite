import { useState } from "react";
import "../../app.css";
import DefaultDialog from "../dialog/default-dialog";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function HomePage() {
  const [modalIsShown, setModalIsShown] = useState(false);
  const buttonTransition = { type: "spring", stiffness: 500, mass: 1 };

  function showModalHandler() {
    return setModalIsShown(true);
  }

  function hideModalHandler() {
    return setModalIsShown(false);
  }

  const dogsPage = "./dogs";

  const hoverAnimation = {
    scale: 1.1,
    backgroundColor: "#260339",
    borderColor: "#fff",
  };

  return (
    <>
      <AnimatePresence>
        {modalIsShown && <DefaultDialog onClose={hideModalHandler} />}
      </AnimatePresence>

      <div className='mainGreeting'>
        <h1>Vite + React</h1>

        <br />

        <ul>
          <li>
            <form action={dogsPage}>
              <motion.button
                whileHover={hoverAnimation}
                whileFocus={hoverAnimation}
                transition={buttonTransition}
                action='submit'
              >
                Dogs Page
              </motion.button>
            </form>
          </li>
          <li>
            <motion.button
              whileHover={hoverAnimation}
              whileFocus={hoverAnimation}
              transition={buttonTransition}
              action='submit'
              onClick={showModalHandler}
            >
              Show Overlay
            </motion.button>
          </li>
        </ul>
      </div>
    </>
  );
}
