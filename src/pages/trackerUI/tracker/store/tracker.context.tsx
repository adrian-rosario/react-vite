import React, { useState } from "react";
import TodoModel from "../models/todo";


type myContextObject = {
  items: TodoModel[];
  addTodo: (text: string) => void;
  removeTodo: (id: string) => void;
};


export const TodoContext = React.createContext<myContextObject>
({
  items: [],
  addTodo: (text: string) => {},
  removeTodo: (id: string) => {},
});
// not defining a type definition
// creating a js object w/ concrete definitions & properties

export const TodosContextProvider: React.FC = (props) => {
  // useState();

  const [theItems, setTheItems] = useState<TodoModel[]>([]);

  const addTodoHandler = (theText: string) => {

    const theAddedTodo = new TodoModel(theText);

    setTheItems( (existingTodos) => {
      console.log('existing?', existingTodos);
      return existingTodos.concat(theAddedTodo);
    });
  }

  const removeToDoHandler = (todoId: string) => {
    setTheItems( (previousItems) => {
      return previousItems.filter( todo => todo.id !== todoId) // keep ids that dont match
    })
  }  

  /* ** */
  const myContextValue: myContextObject = {
    items: theItems,
    addTodo: addTodoHandler,
    removeTodo: removeToDoHandler
  }
  /* ** */

  return (
    <TodoContext.Provider value={myContextValue}>
    {props.children}
    </TodoContext.Provider>
  )
};

export default TodosContextProvider;


