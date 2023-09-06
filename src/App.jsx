import DogsPage from './pages/dogs/DogsPage';
import HomePage from './pages/home/HomePage';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

function App() {

  const router = createBrowserRouter([
    {path: '/', element: <HomePage />},
    {path: '/dogs', element: <DogsPage />}
  ]);
  
  return (
    <>
    <RouterProvider router={router} />
    </>
  )
}

export default App
