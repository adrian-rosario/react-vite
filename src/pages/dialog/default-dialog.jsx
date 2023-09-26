import Modal from "../../modal/modal";
import styles from './defaultDialog.module.css'
import { motion } from "framer-motion";
import '../../modal/modal.module.css'

export default function DefaultDialog(props){
  return(
    <>
    <div>
      <motion.Modal onClose={props.onClose}
          initial={{opacity: 1}}

          exit={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            duration:1.5,
            delay: 0.3,
            ease: [0.5, 0.71, 1, 1.5],
            
          }}
      >
        <div role="alert" aria-live="assertive">
          <h3 className={styles.heading}>
            Hello, thanks for visiting today.
          </h3>
          <button onClick={props.onClose}>Close</button>
        </div>
      </motion.Modal>
    </div>
    </>
  )
}