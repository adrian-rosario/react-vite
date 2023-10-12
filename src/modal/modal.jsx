import { Fragment } from "react";
import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { motion } from "framer-motion";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
}

function ModalContent(props) {
  return (
    <motion.div
      initial={{ opacity: 0, y: -30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -30 }}
      className={styles.modal}
    >
      {props.children}
    </motion.div>
  );
}

const portalElement = document.getElementById("overlays");

export default function Modal(props) {
  return (
    <Fragment>
      {ReactDOM.createPortal(
        <Backdrop onClose={props.onClose} />,
        portalElement
      )}
      {ReactDOM.createPortal(
        <ModalContent>{props.children}</ModalContent>,
        portalElement
      )}
    </Fragment>
  );
}
