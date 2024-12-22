import './App.css'
import Home from './Pages/Home'
import About from './Pages/About'
import Contact from './Pages/Contact'
import Country from './Pages/Country'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import AppLayout from './Components/Layouts/AppLayout';
import ErrorPage from './Pages/ErrorPage'
import CountryDetails from './Components/Layouts/CountryDetails'


const router = createBrowserRouter([
  {
    path: '/',
    errorElement:<ErrorPage/>,
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "about",
        element: <About />
      },
      {
        path: "contact",
        element: <Contact />
      },
      {
        path:'country/:id',
        element:<CountryDetails/>
      },
      {
        path: "country",
        element: <Country />
      }
    ]
  }
]);


function App() {

  return (
    <>
      <RouterProvider router={router}></RouterProvider>;
    </>
  )
}

export default App
