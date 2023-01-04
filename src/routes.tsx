import {createBrowserRouter} from "react-router-dom"

import MainLayout from "pages/MainLayout"
import Home from "pages/Home/Home"
import Foods from "pages/Foods/Foods"
import FoodCheck from "pages/FoodCheck/FoodCheck"


const routes = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />
      },
      {
        path: "menu",
        element: <Foods />
      },
      {
        path: "menu/order",
        element: <FoodCheck />
      },
    ]

  }
])


export default routes