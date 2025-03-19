import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { Home, Gallery, Blog } from "./Pages/index.js";
// import Footer from "./Components/Footer";
import {NavBar} from "./Components/NavBar.jsx";

const routes = [
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
];

const router = createBrowserRouter(routes);

function App() {
  return (
    <div className="app-container">
      <NavBar />
      <RouterProvider router={router} />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
