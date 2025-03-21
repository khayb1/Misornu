import React from "react";
import {
  Navbar,
  Collapse,
  Typography,
  IconButton,
} from "@material-tailwind/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import {logo} from '../assets/index.js';
import { NavLink, useNavigate, useLocation } from "react-router-dom";

function NavList() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScroll = (e, id) => {
    e.preventDefault();
    if (location.pathname !== '/') {
      navigate('/');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h4"
        className="p-1 font-lg"
      >
        <a 
          href="#overview"
          onClick={(e) => handleScroll(e, 'overview')}
          className="flex items-center text-blue-700 hover:text-blue-500 transition-colors"
        >
          Overview
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        className="p-1 font-lg"
      >
        <a 
          href="#faqs"
          onClick={(e) => handleScroll(e, 'faqs')}
          className="flex items-center text-blue-700 hover:text-blue-500 transition-colors"
        >
          FAQs
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        className="p-1 font-lg"
      >
        <a 
          href="#awards"
          onClick={(e) => handleScroll(e, 'awards')}
          className="flex items-center text-blue-700 hover:text-blue-500 transition-colors"
        >
          Awards
        </a>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        className="p-1 font-lg"
      >
        <NavLink 
          to="/gallery" 
          className="flex items-center text-blue-700 hover:text-blue-500 transition-colors"
        >
          Gallery
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        className="p-1 font-lg"
      >
        <NavLink 
          to="/blog" 
          className="flex items-center text-blue-700 hover:text-blue-500 transition-colors"
        >
          Blog
        </NavLink>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        className="p-1 font-lg"
      >
        <NavLink 
          to="/contact" 
          className="flex items-center text-blue-700 hover:text-blue-500 transition-colors"
        >
          Contact
        </NavLink>
      </Typography>
    </ul>
  );
}
 
export function NavBar() {
  const [openNav, setOpenNav] = React.useState(false);
 
  const handleWindowResize = () =>
    window.innerWidth >= 960 && setOpenNav(false);
 
  React.useEffect(() => {
    window.addEventListener("resize", handleWindowResize);
 
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
 
  return (
    <Navbar className="px-6 py-1 sticky top-0 z-50">
      <div className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as={NavLink}
          to="/"
          variant="h6"
          className="text-blue-700 mr-4 cursor-pointer py-1.5"
        >
          <img src={logo} alt='logo' className="md:w-[200px] md:h-[70px] w-[150px] h-[60px]" />
        </Typography>
        <div className="hidden lg:block">
          <NavList />
        </div>
        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <XMarkIcon className="text-blue-700 h-8 w-8" strokeWidth={2} />
          ) : (
            <Bars3Icon className="text-blue-700 h-8 w-8" strokeWidth={2} />
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <NavList />
      </Collapse>
    </Navbar>
  );
}