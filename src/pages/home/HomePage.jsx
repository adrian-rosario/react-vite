import { useState } from "react";
import "../../app.css";
import DefaultDialog from "../dialog/default-dialog";
import { AnimatePresence } from "framer-motion";
import { motion } from "framer-motion";

export default function HomePage() {
  // for showing/hiding the modal dialog
  const [modalIsShown, setModalIsShown] = useState(false);

  function showModalHandler() {
    return setModalIsShown(true);
  }

  function hideModalHandler() {
    return setModalIsShown(false);
  }
  //

  // so we don't have to re-declare the same animation
  const hoverAnimation = {
    scale: 1.1,
    backgroundColor: "#260339",
    borderColor: "#fff",
  };
  const buttonTransition = { type: "spring", stiffness: 500, mass: 1 };
  //

  const dogsPage = "./dogs";
  const challengesGreeting = "../challenge";

  return (
    <>
      <AnimatePresence>
        {modalIsShown && <DefaultDialog onClose={hideModalHandler} />}
      </AnimatePresence>

      <main>
        <div className='mainGreeting'>
          <header>
            <h1>
              Vite + React <span>[with additional examples]</span>
            </h1>
          </header>

          <nav>
            <ul>
              <li>
                <form action={challengesGreeting}>
                  <motion.button
                    whileHover={hoverAnimation}
                    whileFocus={hoverAnimation}
                    transition={buttonTransition}
                  >
                    Challenges Tracker
                  </motion.button>
                </form>
              </li>

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
                  onClick={showModalHandler}
                >
                  Modal Dialog
                </motion.button>
              </li>
            </ul>
          </nav>
        </div>
      </main>
    </>
  );
}
