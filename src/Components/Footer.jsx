import React from 'react'
import { Flogo } from '../assets';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationPin, FaMailchimp, FaPhone, FaWhatsapp, FaYoutube } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Footer = () => {
const date = new Date().getFullYear();

  return (
    <>
    <footer className="bg-gray-800 text-white p-5 flex flex-col items-center justify-center overflow-y-hidden px-[10%] py-[5%]">
        <div className='flex flex-col md:flex-row gap-5 justify-between w-full'>
            <div className='w-full'>
                <a href="/" className='w-23%'><img src={Flogo} width={350} alt='footer-logo'/></a>
                <div className='flex justify-center gap-5'>
                    <a className='hover:text-blue-500' href='#'><FaFacebook size={30} /></a>
                    <a className='hover:text-green-600' href='#'><FaWhatsapp size={30} /></a>
                    <a className='hover:text-red-400' href='#'><FaInstagram size={30}/></a>
                    <a className='hover:text-red-500' href='#'><FaYoutube size={30}/></a>
                    <a className='hover:text-blue-500' href='#'><FaLinkedin size={30 }/></a>
                </div>
            </div>
            {/* contact info  */}
            <div>
            <h3 className='text-2xl font-bold'>Contact Us</h3>
            <a href='tel:+233201240091' className='hover:text-blue-500'><FaPhone/> +233201240091</a>
            <a href='#' className='hover:text-blue-500'><FaMailchimp /> infor@misornu.org</a>
            <a href='#' className='hover:text-blue-500'><FaLocationPin />Office Location: Cloverleaf street, Opposite Sheepgate Outreach Ministries, Teiman- Oyarifa</a>
            </div>
            
            <div>
            <h3 className='text-2xl font-bold'>Quick Links</h3>
            <NavLink to='/'>Home</NavLink>
            <NavLink to='/gallery'>Gallery</NavLink>
            <NavLink to='/blog'>Blog</NavLink>
            <NavLink to='/contact'>Contact Us</NavLink>

            </div>
        </div> 

        <div>
            <p className="text-center"> &copy; {date} Origin8 Limited. All rights reserved. </p>
        </div>
    </footer>        
    </>
  )
}

export default Footer