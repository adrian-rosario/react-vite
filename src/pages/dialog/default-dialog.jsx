import Modal from "../../modal/modal";
import styles from "./defaultDialog.module.css";
import images from "./intro-images";
import { motion } from "framer-motion";

export default function DefaultDialog(props) {
  return (
    <>
      <div role='alert' aria-live='assertive'>
        <Modal onClose={props.onClose}>
          <div className={styles.introDialog}>
            <h3 className={styles.heading}>
              Hello, thanks for visiting today.
            </h3>
            <div className={styles.badges}>
              <ul>
                {images.map((image) => {
                  return (
                    <li key={image.alt}>
                      <img key={image.alt} {...image} />
                    </li>
                  );
                })}
              </ul>
            </div>
            <button onClick={props.onClose}>Close</button>
          </div>
        </Modal>
      </div>
    </>
  );
}
