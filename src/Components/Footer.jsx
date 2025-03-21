import React from 'react'
import { Flogo } from '../assets';
import { FaFacebook, FaInstagram, FaLinkedin, FaLocationPin, FaEnvelope, FaPhone, FaWhatsapp, FaYoutube } from 'react-icons/fa6';
import { NavLink } from 'react-router-dom';

const Footer = () => {
  const date = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-[10%]">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo and Social Media */}
          <div className="flex flex-col items-center md:items-start gap-6">
            <NavLink to="/" className="block">
              <img src={Flogo} className="w-[250px] h-auto" alt="footer-logo"/>
            </NavLink>
            <div className="flex gap-4">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-500 transition-colors"
              >
                <FaFacebook size={30} />
              </a>
              <a 
                href="https://wa.me/233201240091" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-green-500 transition-colors"
              >
                <FaWhatsapp size={30} />
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-pink-500 transition-colors"
              >
                <FaInstagram size={30}/>
              </a>
              <a 
                href="https://youtube.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-red-500 transition-colors"
              >
                <FaYoutube size={30}/>
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="hover:text-blue-500 transition-colors"
              >
                <FaLinkedin size={30}/>
              </a>
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-xl font-bold mb-2">Contact Us</h3>
            <a 
              href="tel:+233201240091" 
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <FaPhone className="text-blue-500"/> +233 20 124 0091
            </a>
            <a 
              href="mailto:info@misornu.org" 
              className="flex items-center gap-2 hover:text-blue-400 transition-colors"
            >
              <FaEnvelope className="text-blue-500" /> info@misornu.org
            </a>
            <div className="flex items-start gap-2 text-sm">
              <FaLocationPin  className="mt-1 flex-shrink-0 text-blue-500" />
              <p>Office Location: Cloverleaf street, Opposite Sheepgate Outreach Ministries, Teiman-Oyarifa</p>
            </div>
          </div>
          
          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-4">
            <h3 className="text-xl font-bold mb-2">Quick Links</h3>
            <NavLink 
              to="/" 
              className={({ isActive }) => 
                `transition-colors ${isActive ? 'text-blue-400' : 'hover:text-blue-400'}`
              }
            >
              Home
            </NavLink>
            <NavLink 
              to="/gallery" 
              className={({ isActive }) => 
                `transition-colors ${isActive ? 'text-blue-400' : 'hover:text-blue-400'}`
              }
            >
              Gallery
            </NavLink>
            <NavLink 
              to="/blog" 
              className={({ isActive }) => 
                `transition-colors ${isActive ? 'text-blue-400' : 'hover:text-blue-400'}`
              }
            >
              Blog
            </NavLink>
            <NavLink 
              to="/contact" 
              className={({ isActive }) => 
                `transition-colors ${isActive ? 'text-blue-400' : 'hover:text-blue-400'}`
              }
            >
              Contact Us
            </NavLink>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-gray-700">
          <p className="text-center text-sm">
            &copy; {date} Origin8 Limited. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer;