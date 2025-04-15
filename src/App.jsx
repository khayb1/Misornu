import { useState, useEffect } from "react";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import { Home, Gallery, Blog, NotFound, Contact,Signup, Login, Logout, UploadBlog, SingleBlog } from "./Pages/index.js";
import Footer from "./Components/Footer.jsx";
import { NavBar } from "./Components/NavBar.jsx";
import ScrollToTop from "./Components/ScrollToTop.jsx";
import Socials from "./Components/Socials.jsx";
import Loader from "./Components/Loader.jsx"; 
import PrivateRoute from "./Components/PrivateRoute.jsx";

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
      { path: "/signup", element: <Signup /> },
      { path: "/login", element: <Login /> },
      { path: "/logout", element: <Logout /> },
      { path: "/upload", element: <PrivateRoute><UploadBlog /></PrivateRoute> },
      {path:"/blog", element:<Blog />},
      {path:"/blogs/:id", element:<SingleBlog />},
      { path: "*", element: <NotFound /> }
    ],
  },
];

const router = createBrowserRouter(routes);

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000); 
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
