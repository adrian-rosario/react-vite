import Modal from "../../modal/modal";
import styles from "./defaultDialog.module.css";
import images from "./intro-images";
import { motion } from "framer-motion";
import { useEffect } from "react";

export default function DefaultDialog(props) {
  const hoverAnimation = {
    scale: 1.1,
    backgroundColor: "#260339",
    borderColor: "rgb(255, 140, 0)",
  };
  const buttonTransition = { type: "spring", stiffness: 500, mass: 1 };

  useEffect(() => {
    const handleEsc = (event) => {
      if (event.key === "Escape") {
        props.onClose();
      }
    };
    window.addEventListener("keydown", handleEsc);

    return () => {
      window.removeEventListener("keydown", handleEsc);
    };
  }, [props]);

  return (
    <>
      <div role='alert' aria-live='assertive' id='dialog'>
        <div tabIndex={0} id='trapAnchor'></div>
        <Modal onClose={props.onClose}>
          <div className={styles.introDialog}>
            <h3 className={styles.heading}>
              Hello, thanks for visiting today.
            </h3>
            <div className={styles.badges}>
              <motion.ul
                variants={{
                  visible: { transition: { staggerChildren: 0.05 } },
                }}
              >
                {images.map((image) => (
                  <motion.li key={image.alt}>
                    <button>
                      <img key={image.alt} {...image} />
                    </button>
                  </motion.li>
                ))}
              </motion.ul>
            </div>
            <motion.button
              whileHover={hoverAnimation}
              whileFocus={hoverAnimation}
              transition={buttonTransition}
              onClick={props.onClose}
              id='last'
            >
              Close
            </motion.button>
          </div>
        </Modal>
      </div>
    </>
  );
}
