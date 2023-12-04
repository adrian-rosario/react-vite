import ChallengeTrackerHeader from "./header/trackerHeader.component";
import { TodosContextProvider } from "./store/tracker.context";
import Todo from "../tracker/todo";
import NewTodo from "../tracker/newToDo.tsx";
import pageCopy from "../tracker/tracker.pageCopy.js";

export default function TrackerPage() {
  return (
    <>
      <TodosContextProvider>
        <ChallengeTrackerHeader />
        <NewTodo />
        <hr />
        {pageCopy.delete}
        <br />
        <br />
        <Todo />
      </TodosContextProvider>
    </>
  );
}
