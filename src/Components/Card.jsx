import React from 'react'
import { Link } from "react-router-dom";
import './Btn.css'
const Card = ({ image, title, description, buttonText, link }) => {
  return (
    <div className="flex-1 max-w-[400px] text-center pb-2 border border-gray-300 rounded-lg shadow-md bg-white overflow-hidden">
      {/* Image - Takes 70% of the card height */}
      <div className="max-h-[250px] w-full overflow-hidden">
        <img src={image} alt={title} className="w-full h-full object-fit" />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col items-center ">
        {/* Header */}
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-center mt-2">{description}</p>

        {/*  Button */}
        <Link
          to={link}
          className="hero-btn mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Card;