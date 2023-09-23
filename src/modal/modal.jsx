import { Fragment } from "react"
import ReactDOM from 'react-dom'
import styles from './modal.module.css'

// function Backdrop(props){
//   return(
//     <div className={styles.backdrop} onClick={props.onClose}></div>
//   )
// }

function ModalOverlay(props){
  return(
    <div className={styles.modal}>{props.children}</div>
  )
}

// const portalElement = document.getElementById('overlays');

export default function Modal(props){

  return(
    <ModalOverlay>{props.children}</ModalOverlay>
  )
}

/*
    <Fragment>
      {ReactDOM.createPortal(<Backdrop onClose={props.onClose} />, portalElement)}
      {ReactDOM.createPortal(<ModalOverlay>{props.children}</ModalOverlay>, portalElement)}
    </Fragment>
*/