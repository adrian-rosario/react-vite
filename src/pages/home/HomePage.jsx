import { useState } from "react";
import "../../app.css";
import DefaultDialog from "../dialog/default-dialog";
import { AnimatePresence } from "framer-motion";

export default function HomePage() {
  const [modalIsShown, setModalIsShown] = useState(false);

  function showModalHandler() {
    return setModalIsShown(true);
  }

  function hideModalHandler() {
    return setModalIsShown(false);
  }

  const dogsPage = "./dogs";

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
              <button action='submit'>Dogs Page</button>
            </form>
          </li>
          <li>
            <button onClick={showModalHandler}>show overlay</button>
          </li>
        </ul>
      </div>
    </>
  );
}
