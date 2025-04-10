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
import {motion} from 'framer-motion';

const ContainerVariant ={
  hidden: { opacity: 1, y: -60 },
  visible:{opacity: 1, y: 0,
    transition:{type: 'spring', duration: 2, stiffness: 120},
    whileHover:{scale: 1.1,}

  }

}

function NavList({ setOpenNav }) {
  const navigate = useNavigate();
  const location = useLocation();

  const MotionNavLink = motion.create(NavLink);
 

  const handleScroll = (sectionId) => {
    if (location.pathname !== "/") {
      navigate("/");
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          const navbarHeight = 80;
          const elementPosition = element.getBoundingClientRect().top;
          const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
          window.scrollTo({
            top: offsetPosition,
            behavior: "smooth",
          });
        }
        setOpenNav(false); // Close menu after navigation
      }, 100);
    } else {
      const element = document.getElementById(sectionId);
      if (element) {
        const navbarHeight = 80;
        const elementPosition = element.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - navbarHeight;
        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });
      }
      setOpenNav(false); // Close menu after navigation
    }
  };

  return (
    <ul className="flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="h4"
        className="p-1 font-lg"
      >
        <motion.a 
          variants={ContainerVariant}
          initial="hidden"
          animate="visible"
          href="#overview"
          onClick={(e) => handleScroll('overview')}
          className="flex items-center text-blue-700 hover:text-blue-500  transition-colors duration-300 w-fit"
        >
          Overview
        </motion.a>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        className="p-1 font-lg"
      >
        <motion.a 
          variants={ContainerVariant}
          initial="hidden"
          animate="visible"
          href="#faqs"
          onClick={(e) => handleScroll('faqs')}
          className="flex items-center text-blue-700 hover:text-blue-500  transition-colors duration-300 w-fit"
        >
          FAQs
        </motion.a>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        className="p-1 font-lg"
      >
        <motion.a 
          variants={ContainerVariant}
          initial="hidden"
          animate="visible"
          href="#awards"
          onClick={(e) => handleScroll('awards')}
          className="flex items-center text-blue-700 hover:text-blue-500 transition-colors duration-300 w-fit"
        >
          Awards
        </motion.a>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        className="p-1 font-lg"
      >
        <MotionNavLink
      to="/gallery"
      onClick={() => setOpenNav(false)}
      variants={ContainerVariant}
      initial="hidden"
      animate="visible"
      className="flex items-center text-blue-700 hover:text-blue-500  transition-colors duration-300 w-fit"
    >
      Gallery
    </MotionNavLink>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        className="p-1 font-lg"
      >
       <MotionNavLink
      to="/blog"
      onClick={() => setOpenNav(false)}
      variants={ContainerVariant}
      initial="hidden"
      animate="visible"
      className="flex items-center text-blue-700 hover:text-blue-500 transition-colors duration-300 w-fit"
    >
      Blog
    </MotionNavLink>
      </Typography>
      <Typography
        as="li"
        variant="h4"
        className="p-1 font-lg"
      >
        <MotionNavLink
      to="/contact"
      onClick={() => setOpenNav(false)}
      variants={ContainerVariant}
      initial="hidden"
      animate="visible"
      className="flex items-center text-blue-700 hover:text-blue-500 transition-colors duration-300 w-fit"
    >
      Contact
    </MotionNavLink>
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
      <motion.div
      variants={ContainerVariant}
      initial="hidden"
      animate="visible"
      className="flex items-center justify-between text-blue-gray-900">
        <Typography
          as={NavLink}
          to="/"
          variant="h6"
          className="text-blue-700 mr-4 cursor-pointer py-1.5"
        >
          <img src={logo} alt='logo' className="md:w-[200px] md:h-[70px] w-[150px] h-[60px]" />
        </Typography>
        <div className="hidden lg:block">
          <NavList setOpenNav={setOpenNav} />
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
      </motion.div>
      <Collapse open={openNav}>
        <NavList setOpenNav={setOpenNav} />
      </Collapse>
    </Navbar>
  );
}