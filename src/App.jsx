import { createBrowserRouter, RouterProvider } from "react-router-dom";
import DogsPage from "./pages/dogs/DogsPage";
import HomePage from "./pages/home/HomePage";
import ChallengeGreeting from "./pages/trackerUI/greeting/greeting.component";
// import ChallengeTracker from "./pages/challenge/tracker/trackerHeader.component";
import TrackerPage from "./pages/trackerUI/tracker/trackerPage.component";
import AlienPage from "./pages/alien/alien.component";

function App() {
  const router = createBrowserRouter([
    { path: "/", element: <HomePage /> },
    { path: "/dogs", element: <DogsPage /> },
    { path: "/challenge", element: <ChallengeGreeting /> },
    { path: "/challenge-tracker", element: <TrackerPage /> },
    { path: "/alien", element: <AlienPage /> },
  ]);

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
