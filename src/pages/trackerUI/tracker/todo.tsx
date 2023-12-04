import React, { useContext } from "react";
// import TodoModel from "../../models/todo";
import ToDoListItem from './todoListItem';
import {TodoContext} from "./store/tracker.context";

const Todo: React.FC = () => {

  const todosContextReference = useContext(TodoContext);

  return (
    <>
      <ul>
        {todosContextReference.items.map((item) => (
          <ToDoListItem 
          key={item.id} 
          text={item.text} 
          removeAToDo={todosContextReference.removeTodo.bind(null, item.id)}></ToDoListItem>
          // bind = default method which allows us to preconfigure a function for future execution
          ))}
      </ul>
    </>
  );
};

export default Todo;

