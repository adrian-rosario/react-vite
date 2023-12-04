import React from "react";
import TodoModel from "./models/todo";
import { motion } from "framer-motion";

const hoverAnimation = {
  scale: 1.1,
  backgroundColor: "#260339",
  borderColor: "#fff",
};
const buttonTransition = { type: "spring", stiffness: 500, mass: 1 };

const ToDoListItem: React.FC<{text: string, removeAToDo: () => void}> = (props) => {


  return <li>
    <motion.button onClick={props.removeAToDo}
      whileHover={hoverAnimation}
      whileFocus={hoverAnimation}
      transition={buttonTransition}
    >{props.text}</motion.button></li>
}

export default ToDoListItem;