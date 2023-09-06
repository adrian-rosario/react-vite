import {useState } from 'react';
import '../../app.css'
import DefaultDialog from '../dialog/default-dialog';

export default function HomePage(){
  const [modalIsShown, setModalIsShown] = useState(false);  

  function showModalHandler(){
    return setModalIsShown(true);
  }

  function hideModalHandler(){
    return setModalIsShown(false);    
  }

  const dogsPage = './dogs';

  return(
    <>
    {modalIsShown && <DefaultDialog onClose={hideModalHandler} />}

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