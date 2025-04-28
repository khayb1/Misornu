
import { Helmet } from 'react-helmet';
import MainHeader from '../../Components/MainHeader';
import Form from '../../Components/Form';
import { FaFacebook, FaInstagram, FaLinkedin,  FaTwitter, FaYoutube } from 'react-icons/fa';

const Contact = () => {
  return (
    <>
     <Helmet>
      <meta charSet="utf-8" />
      <title>Contact - Misornu</title>
      <link rel="canonical" href="http://misornu.org/contact" />
    </Helmet>
    <MainHeader />

    <section className="w-full  h-fit px-[10%] py-[5%] bg-gray-100" id="contact">
           {/* map  */}
    <div className=' flex flex-col items-center justify-center mb-5 mx-auto w-fit  bg-gray-200 p-6 rounded-lg shadow-lg'>
            <h2 className='text-3xl text-black font-bold border-b-1 pb-2'>Contact Info</h2>
            <h3 className='text-2xl text-black font-bold'>Hotline</h3>
            <a href="tel:+233201240091" className='text-blue-500'>+233 20 124 0091</a>
            <h3 className='text-2xl text-black font-bold'>
              Email
            </h3>
            <a href="mailto:info@misornu.org" className='text-blue-500'>info@misornu.org</a>
            <h3 className='text-2xl text-black font-bold'>Socials</h3> 
            <div className='flex gap-5'>
            <a href="https://www.facebook.com/misornu.org" className='text-blue-500 hover:text-blue-600'><FaFacebook size={28} /></a>
            <a href="https://www.instagram.com/misornu.org" className='text-blue-500 hover:text-red-500'><FaInstagram  size={28}/></a>
            <a href="https://www.linkedin.com/company/misornu.org" className='text-blue-500 hover:text-cyan-400'><FaLinkedin size={28}/></a>
            <a href="https://www.twitter.com/misornu.org" className='text-blue-500 hover:text-gray-900'><FaTwitter size={28} /></a>
            <a href="https://www.youtube.com/misornu.org" className='text-blue-500 hover:text-red-600'><FaYoutube size={28}/></a>
            </div>
          </div>
     
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          {/* card  */}
          
          <div className="md:w-[50%] w-[100%] h-[450px]"> 
          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7939.512356558922!2d-0.194285!3d5.748200000000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNDQnNTMuNiJOIDDCsDExJzMzLjIiVw!5e0!3m2!1sen!2sgh!4v1742897881633!5m2!1sen!2sgh" className="w-full h-full"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          
          </div>
            <div className="md:w-[45%] w-[100%] bg-white p-5 rounded-lg shadow-lg"  >
              <h4 className="text-3xl font-bold text-center mb-5">Contact us</h4>
              <p className="text-center text-gray-500 mb-5">We work with ambitious leaders who want to define the future, not hide from it.</p>
            <Form />  
            </div>
          </div>
          <div>

          </div>
        </section>



    </>
  )
}

export default Contact