import React from "react";

const InfoSection = ({ imageSrc, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      {/* Image */}
      <img src={imageSrc} alt={title} className="w-[60px] h-[60px] rounded-lg" />
      
      {/* Text Content */}
      <div className=" text-center md:text-left">
        <h4 className="text-2xl font-bold text-blue-700">{title}</h4>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default InfoSection;
