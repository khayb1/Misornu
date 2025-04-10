import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import { Home, Gallery, Blog, NotFound, Contact } from "./Pages/index.js";
import Footer from "./Components/Footer";
import { NavBar } from "./Components/NavBar.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Socials from "./Components/Socials.jsx";
import Loader from "./Components/Loader"; 

// Layout component that includes the common elements
const Layout = () => {
  return (
    <div className="app-container">
      <ScrollToTop />
      <Socials />
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
      { path: "/", element: <Home /> },
      { path: "/gallery", element: <Gallery /> },
      { path: "/blog", element: <Blog /> },
      { path: "/contact", element: <Contact /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 3000); // 2.5s loader
    return () => clearTimeout(timer);
  }, []);

  return (
    <AnimatePresence mode="wait">
      {loading ? (
        <motion.div
          key="loader"
          initial={{ opacity: 1 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Loader />
        </motion.div>
      ) : (
        <RouterProvider router={router} />
      )}
    </AnimatePresence>
  );
}

export default App;
