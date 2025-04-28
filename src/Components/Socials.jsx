import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa6';
import { motion } from 'framer-motion';

const ContainerVariant = {
  hidden: { opacity: 0, x:'-100vw' },
  visible: { opacity: 1, x: '0',
    transition: {
      duration: 0.5,
      stiffness: 120,
      delay: 0.5,
    }
   }
 
};

const Socials = () => {
  return (
   <>
        <motion.div 
         variants={ContainerVariant}
         initial="hidden"
         animate="visible"
        //  whileHover={{ scale: 1.1 }}
        
            className="flex justify-end items-end md:flex-col md:items-center md:fixed md:left-0 md:top-50 z-50 bg-gray-100 p-2">
          <motion.a 
                        whileHover={{ scale: 1.1 }}
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 transition-colors border-none md:border-2 border-black p-2 "
                      >
                        <FaFacebook size={30} />
                      </motion.a>
                      <motion.a 
                       whileHover={{ scale: 1.1 }}
                        href="https://wa.me/233201240091" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-green-500 transition-colors  border-none md:border-2 border-black p-2"
                      >
                        <FaWhatsapp size={30} />
                      </motion.a>
                      <motion.a 
                       whileHover={{ scale: 1.1 }}
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-pink-500 transition-colors border-none md:border-2 border-black p-2 "
                      >
                        <FaInstagram size={30}/>
                      </motion.a>
                      <motion.a
                       whileHover={{ scale: 1.1 }} 
                        href="https://youtube.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-red-500 transition-colors border-none md:border-2 border-black p-2 "
                      >
                        <FaYoutube size={30}/>
                      </motion.a>
                      <motion.a 
                       whileHover={{ scale: 1.1 }}
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 transition-colors border-none md:border-2 border-black p-2 "
                      >
                        <FaLinkedin size={30}/>
                      </motion.a>
        </motion.div>
   </>
  )
}

export default Socials