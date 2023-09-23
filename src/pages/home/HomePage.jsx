import {useState } from 'react';
import '../../app.css';
import DefaultDialog from '../dialog/default-dialog';
import { AnimatePresence } from "framer-motion";
import ReactDOM from 'react-dom';
import { motion } from "framer-motion";


export default function HomePage(props){
  const [modalIsShown, setModalIsShown] = useState(false);  

  function showModalHandler(){
    return setModalIsShown(true);
  }

  function hideModalHandler(){
    return setModalIsShown(false);    
  }

  function Backdrop(props){
    return(
      <AnimatePresence>
      <motion.div className='backdrop' onClick={props.onClose}
          initial={{opacity: 0}}
          exit={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{duration:2}}
      ></motion.div>
      </AnimatePresence>
    )
  }  

  const dogsPage = './dogs';

  const portalElement = document.getElementById('overlays');


  return(
    <>

    {modalIsShown && ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}

    <AnimatePresence>    
    {modalIsShown && <DefaultDialog onClose={hideModalHandler} />}
    </AnimatePresence>


    <h1>Vite + React</h1>

    <br />

    <ul>
      <li>
        <a href={dogsPage}>[Dogs Page]</a>
      </li>
      <li>
        <button onClick={showModalHandler}>
          show overlay
        </button>
      </li>
    </ul>
    </>
  )
}