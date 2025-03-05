
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./App.css"; 
import {Home, Gallery, Blog} from "./Pages/index.js";
// import { Navbar } from "./Components/NavBar";

const router = createBrowserRouter([
  {
      path: "/",
      element: <Home />,
    },
{
      path: "/gallery",
      element: <Gallery />,
    },
{
      path: "/blog",
      element: <Blog />,
    },

]);

function App() {
  return (
    <div>
      {/* <Navbar /> */}
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
    