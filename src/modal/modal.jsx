import ReactDOM from "react-dom";
import styles from "./modal.module.css";
import { motion } from "framer-motion";

function Backdrop(props) {
  return <div className={styles.backdrop} onClick={props.onClose}></div>;
}

function ModalContent(props) {
  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: -30 }, // when we can't see the element
        visible: { opacity: 1, y: 0 }, // state we want framer-motion to transition to
      }}
      initial='hidden'
      animate='visible'
      exit='hidden'
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
