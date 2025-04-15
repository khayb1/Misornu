import { useState } from "react";
import MainHeader from "../../Components/MainHeader";
import images from "../../assets/gallery.js";
import LightGallery from "lightgallery/react";
import "lightgallery/css/lightgallery.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lg-thumbnail.css";
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

const Gallery = () => {
  const [activeTab, setActiveTab] = useState("All");

  const categories = ["All", ...new Set(images.map((img) => img.category))];

  const filteredImages =
    activeTab === "All"
      ? images
      : images.filter((img) => img.category === activeTab);

  return (
    <>
      <MainHeader title="Gallery" />

      {/* Tabs */}
      <div className="flex lg:justify-center space-x-4 mb-6 overflow-x-scroll md:overflow-x-auto md:flex-wrap whitespace-nowrap scrollbar-hide px-4 py-2  bg-white rounded-lg">
  {categories.map((category) => (
    <button
      key={category}
      className={`px-4 py-2 rounded-lg transition flex-shrink-0 ${
        activeTab === category
          ? "bg-blue-600 text-white"
          : "bg-gray-200 text-gray-700 hover:bg-gray-300"
      }`}
      onClick={() => setActiveTab(category)}
    >
      {category}
    </button>
  ))}
</div>
      {/* Grid Layout */}
      <LightGallery
        speed={500}
        plugins={[lgThumbnail, lgZoom]}
        mode="lg-fade"
        elementClassNames="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-4 px-10"
      >
        {filteredImages.map((img, index) => (
          <a key={index} href={img.src} className="block w-full relative">
            <img
              src={img.src}
              alt={img.category}
              className="rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-full h-[350px] object-cover "
              loading="lazy"
            />
            <div className="absolute w-full p-3 text-center bottom-0 left-0 bg-black/70 font-bold text-white rounded-lg ">{img.caption}</div>
          </a>
        ))}
      </LightGallery>
    </>
  );
};

export default Gallery;