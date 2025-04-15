import { useState, useRef, useEffect } from "react";
import './Btn.css';

const Card = ({ image, title, description, buttonText, popoverText, popoverHeader }) => {
  const [showPopover, setShowPopover] = useState(false);
  const popoverRef = useRef(null);

  const togglePopover = () => setShowPopover(true);
  const closePopover = () => setShowPopover(false);

  // Close on ESC key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') closePopover();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <div className="relative flex-1 max-w-[400px] text-center pb-2 border border-gray-300 rounded-lg shadow-md bg-white/7 overflow-hidden">
        {/* Image */}
        <div className="h-[250px] w-full overflow-hidden">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>

        {/* Content Section */}
        <div className="p-4 flex flex-col items-center">
          <h2 className="text-[1.2rem] font-bold text-black">{title}</h2>
          <p className="text-gray-600 font-semibold text-center mt-2">{description}</p>

          <button
            onClick={togglePopover}
            className="hero-btn mt-4 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition text-center"
          >
            {buttonText}
          </button>
        </div>
      </div>

      {/* Fullscreen Popover Modal */}
      {showPopover && (
        <div className="fixed inset-0 bg-black/80 flex justify-center items-center z-50">
          <div
            ref={popoverRef}
            className="bg-white p-6 max-w-xl w-[90%] rounded-lg shadow-lg relative text-center"
          >
             <h3 className="text-xl font-bold text-bold text-[2rem]">{popoverHeader}</h3>
            <button
              onClick={closePopover}
              className="absolute top-4 right-4 text-red-500 hover:text-red-600 text-4xl font-bold"
            >
              &times;
            </button>
            <div className="text-gray-800 text-lg font-medium">{popoverText}</div>
          </div>
        </div>
      )}
    </>
  );
};

export default Card;
