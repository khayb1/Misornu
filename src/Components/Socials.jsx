import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaWhatsapp, FaYoutube } from 'react-icons/fa6';


const Socials = () => {
  return (
   <>
        <div className="flex justify-end items-end md:flex-col md:items-center md:fixed md:left-0 md:top-50 z-50 bg-blue-100">
        <a 
                        href="https://facebook.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 transition-colors border-none md:border-2 border-black p-2 "
                      >
                        <FaFacebook size={30} />
                      </a>
                      <a 
                        href="https://wa.me/233201240091" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-green-500 transition-colors  border-none md:border-2 border-black p-2"
                      >
                        <FaWhatsapp size={30} />
                      </a>
                      <a 
                        href="https://instagram.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-pink-500 transition-colors border-none md:border-2 border-black p-2 "
                      >
                        <FaInstagram size={30}/>
                      </a>
                      <a 
                        href="https://youtube.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-red-500 transition-colors border-none md:border-2 border-black p-2 "
                      >
                        <FaYoutube size={30}/>
                      </a>
                      <a 
                        href="https://linkedin.com" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-blue-500 transition-colors border-none md:border-2 border-black p-2 "
                      >
                        <FaLinkedin size={30}/>
                      </a>
        </div>
   </>
  )
}

export default Socials