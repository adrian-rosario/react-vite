import { motion } from "framer-motion";
import { useState } from "react";
import pageCopy from "../tracker.pageCopy"; // TODO: for i18n
import NewTrack from "../newTrack/newTrack.component";
import "../tracker.component.css";

export default function ChallengeTrackerHeader() {
  const [displayingDialog, setDisplayingDialog] = useState();

  function handleDisplayDialog() {
    setDisplayingDialog(true);
  }

  function handleHideDialog() {
    setDisplayingDialog(false);
  }

  const hoverAnimation = {
    scale: 1.1,
    backgroundColor: "#260339",
    borderColor: "#fff",
  };
  const buttonTransition = { type: "spring", stiffness: 500, mass: 1 };

  return (
    <>
      {displayingDialog && <NewTrack onDone={handleHideDialog} />}

      <header id='tracker-header'>
        <h1>{pageCopy.heading}</h1>
        <motion.button
          whileHover={hoverAnimation}
          whileFocus={hoverAnimation}
          transition={buttonTransition}
          onClick={handleDisplayDialog}
        >
          {pageCopy.cta}
        </motion.button>
      </header>
    </>
  );
}

/*
  // so we don't have to re-declare the same animation
  const hoverAnimation = {
    scale: 1.1,
    backgroundColor: "#260339",
    borderColor: "#fff",
  };
  const buttonTransition = { type: "spring", stiffness: 500, mass: 1 };
  //
*/
