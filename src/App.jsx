import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import "./App.css";
import { Home, Gallery, Blog, NotFound, Contact } from "./Pages/index.js";
import Footer from "./Components/Footer";
import {NavBar} from "./Components/NavBar.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";

// Layout component that includes the common elements
const Layout = () => {
  return (
    <div className="app-container">
      <ScrollToTop />
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
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
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
