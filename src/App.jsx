import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DogsPage from "./pages/dogs/DogsPage";
import HomePage from "./pages/home/HomePage";
import ChallengeGreeting from "./pages/challenge/greeting/greeting.component";
import ChallengeTracker from "./pages/challenge/tracker/tracker";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/dogs", element: <DogsPage /> },
    { path: "/challenge", element: <ChallengeGreeting /> },
    { path: "/challenge-tracker", element: <ChallengeTracker /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
