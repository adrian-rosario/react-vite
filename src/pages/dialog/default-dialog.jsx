import Modal from "../../modal/modal";
import styles from './defaultDialog.module.css'

export default function DefaultDialog(props){
  return(
    <>
    <div>
      <Modal onClose={props.onClose}>
        <div>
          <h3 className={styles.heading}>
            Hello, thanks for visiting today.
          </h3>
          <button onClick={props.onClose}>Close</button>
        </div>
      </Modal>
    </div>
    </>
  )
}