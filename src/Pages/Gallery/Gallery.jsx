import MainHeader from "../../Components/MainHeader";
import gallery from "../../assets/gallery.js";
import LightGallery from 'lightgallery/react';

// import styles
import 'lightgallery/css/lightgallery.css';
import 'lightgallery/css/lg-zoom.css';
import 'lightgallery/css/lg-thumbnail.css';
import 'lightgallery/scss/lightgallery.scss';
import 'lightgallery/scss/lg-zoom.scss';

// import plugins
import lgThumbnail from 'lightgallery/plugins/thumbnail';
import lgZoom from 'lightgallery/plugins/zoom';

const onInit = () => {
  console.log('lightGallery has been initialized');
};

const Gallery = () => {
  return (
    <>
      <MainHeader title="Gallery" />
      <div className="flex flex-col  min-h-screen p-4">
        <LightGallery
          onInit={onInit}
          speed={500}
          plugins={[lgThumbnail, lgZoom]}
          className="flex gap-4 flex-wrap justify-center items-center"
          mode="lg-fade"
        >
          {gallery.map((img, index) => (
            <a key={index} href={img.src}>
              <img
                src={img.src}
                alt={`Gallery image ${index + 1}`}
                className="flex rounded-lg shadow-md hover:scale-105 transition-transform duration-300 w-[400px] h-[500px] object-cover"
                loading="lazy"
              />
            </a>
          ))}
        </LightGallery>
      </div>
    </>
  );
};

export default Gallery;
