import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import './Btn.css';

const MotionNavLink = motion.create(NavLink);

const ContainerVariant = {
  hover: {
    scale: [1, 1.1, 1, 1.1, 1], 
    textShadow: "0px 0px 8px rgb(255,255,255)",
    boxShadow: "0px 0px 8px rgb(255,255,255)",
    transition: {
      type: 'spring',
      duration: 1,
      stiffness: 300,
    },
  },
};

const Button = ({ text, to }) => {
  return (
    <MotionNavLink
      to={to}
      variants={ContainerVariant}
      whileHover="hover"
      className="hero-btn w-fit"
    >
      {text}
    </MotionNavLink>
  );
};

export default Button;
