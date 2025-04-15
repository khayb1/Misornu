/** @format */
import Button from './Button'
import "./Hero.css"
import { motion } from 'framer-motion'


const ContainerVariant = {
  hidden: { opacity: 0, x:'-100vw' },
  visible: { opacity: 1, x: '0',
    transition: {
      duration: 0.5,
      stiffness: 120,
    }
   }
 
};


const Hero = () => {
  return (
    <main className="hero">
      <div className=" flex flex-col mx-[10%] justify-center h-screen">
        <motion.h1 
        variants={ContainerVariant}
        initial="hidden"
        animate="visible"
        className="text-5xl text-white font-bold  mb-5 tracking-wide flex flex-col w-fit ">
            <span>REAL SECURITY</span>
            <span>YOU NEED</span>
        </motion.h1>
        <Button
          to="/contact"
          text="Contact Us" 
        />
      </div>
    </main>
  )
}

export default Hero