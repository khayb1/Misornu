import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'
import { hero } from '../assets'
import './Btn.css'

const MainHeader = ({ title = "Welcome" }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x);

  return (
    <div className="relative h-[40vh] w-full bg-cover bg-center bg-no-repeat" style={{ backgroundImage: `url(${hero})` }}>
      <div className="absolute inset-0 bg-[rgba(10,10,10,0.4)]"></div>

      <div className="relative z-10 h-full flex flex-col justify-center items-center text-white px-4">
        {/* Title */}
        <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">{title}</h1>

        {/* Breadcrumbs */}
        <div className="flex items-center space-x-2 text-lg md:text-xl">
          <NavLink to="/" className="hover:text-blue-400 transition-colors">
            Home
          </NavLink>
          {pathnames.map((name, index) => {
            const routeTo = `/${pathnames.slice(0, index + 1).join('/')}`;
            const isLast = index === pathnames.length - 1;

            return (
              <React.Fragment key={name}>
                <span className="text-gray-300">/</span>
                {isLast ? (
                  <span className="text-blue-400 capitalize">{name}</span>
                ) : (
                  <NavLink
                    to={routeTo}
                    className="hover:text-blue-400 transition-colors capitalize"
                  >
                    {name}
                  </NavLink>
                )}
              </React.Fragment>
            );
          })}
        </div>
      </div>
    </div>
  )
}

export default MainHeader
