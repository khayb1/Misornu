import React from 'react'
import { Link } from "react-router-dom";

const Card = ({ image, title, description, buttonText, link }) => {
  return (
    <div className="w-full max-w-sm bg-white shadow-lg rounded-2xl overflow-hidden">
      {/* Image - Takes 70% of the card height */}
      <div className="h-[70%]">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      {/* Content Section */}
      <div className="p-4 flex flex-col items-center">
        {/* Header */}
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>

        {/* Description */}
        <p className="text-gray-600 text-center mt-2">{description}</p>

        {/*  Button */}
        <Link
          to={link}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition text-center"
        >
          {buttonText}
        </Link>
      </div>
    </div>
  );
};

export default Card;