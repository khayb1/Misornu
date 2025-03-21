import React from "react";

const InfoSection = ({ icon: Icon, title, description }) => {
  return (
    <div className="flex flex-col md:flex-row items-center gap-6">
      {/* Icon */}
      <div className="w-[60px] h-[60px] rounded-lg bg-blue-100 flex items-center justify-center">
        <Icon className="w-8 h-8 text-blue-700" />
      </div>
      
      {/* Text Content */}
      <div className="text-center md:text-left flex-1">
        <h4 className="text-2xl font-bold text-blue-700">{title}</h4>
        <p className="mt-2 text-gray-700">{description}</p>
      </div>
    </div>
  );
};

export default InfoSection;
