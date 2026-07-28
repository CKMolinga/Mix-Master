import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import {
  HomeLayout,
  Landing,
  About,
  Cocktail,
  Newsletter,
  Error,
} from './pages'

const router = createBrowserRouter([
  {
    path: '/',
    element: <HomeLayout />,
  },
  {
    path: '/about',
    element: <About />,
  },
])

const App = () => {
  return <RouterProvider router={router} />
}
export default App
