
import { useRef, useContext } from "react";
import { TodoContext } from "./store/tracker.context";
import React from "react";
import { motion } from "framer-motion";
import pageCopy from "../tracker/tracker.pageCopy";

const NewTodo: React.FC = () => {

  const todosContext = useContext(TodoContext);

  const myRef = useRef<HTMLInputElement>(null);

  const myFormHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const theFormItemValue = myRef.current!.value;

    console.log('input value: ', theFormItemValue);

    if (theFormItemValue.trim().length === 0) {
      // throw error, nothing in input
      return;
    }

    todosContext.addTodo(theFormItemValue);
  };

  const hoverAnimation = {
    scale: 1.1,
    backgroundColor: "#260339",
    borderColor: "#fff",
  };
  const buttonTransition = { type: "spring", stiffness: 500, mass: 1 };

  return (
    <>
    <form onSubmit={myFormHandler}>

      <label htmlFor="textField">
        {pageCopy.add} 
      </label>
    
      <input id="textField" type="text" ref={myRef} />
      &nbsp;
      
      <motion.button
        whileHover={hoverAnimation}
        whileFocus={hoverAnimation}
        transition={buttonTransition}>
       {pageCopy.cta}
      </motion.button>
  </form>
    </>
  );
};

export default NewTodo;