/** @format */
import Hero from "../../Components/Hero";
import { david, Mis8, award1, award2, award3, Img1, Mis9 } from "../../assets";
import InfoSection from "../../Components/InfoSection";
import Card from "../../Components/Card";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaShieldAlt, FaBullseye, FaBinoculars } from "react-icons/fa";
import "./Home.css";
import { FAQ } from "../../Components/FAQ";
import { faqData1, faqData2 } from "../../assets/data/faqData";
import Form from "../../Components/Form";
import { Helmet } from "react-helmet";



const Home = () => {
  return (
    <>  
    <Helmet>
      <meta charSet="utf-8" />
      <title>Home - Misornu</title>
      <link rel="canonical" href="http://mysite.com/example" />
    </Helmet>
      <Hero />

      {/* overview section  */}
      <section id="overview" className="w-[100%] px-[10%] py-[5%]">
        <h2 className="text-3xl font-bold text-center mb-8">Overview</h2>
        <div className="flex flex-col md:flex-row gap-8">
          {/* Text content with scroll */}
          <div className="md:w-[50%] bg-white p-5 rounded-md shadow-lg">
            <div className="h-[450px] overflow-y-auto custom-scrollbar pr-4">
              <div className="space-y-1">
                <InfoSection
                  icon={FaShieldAlt}
                  title="About Us"
                  description="Misornu Safety Centre is a dedicated non-profit organization committed to creating safer communities through education and collaboration. Our mission enhances community safety and builds trust by offering programs focused on crime prevention, best safety practices, and conflict resolution through mediation. We believe in the power of partnerships and effective communication to address safety concerns, empowering individuals to take an active role in their safety and the safety of others. Join us in fostering a culture of vigilance and preparedness for all."
                />
                <InfoSection
                  icon={FaBullseye}
                  title="Our Mission"
                  description="We are dedicated to educating, equipping, and inspiring individuals to become vigilant stewards of their own safety and the safety of others, fostering a united effort for a more secure environment."
                />
                <InfoSection
                  icon={FaBinoculars}
                  title="Our Vision"
                  description="To build and train communities where every individual is safety-conscious, looking out for one another, and working together to create a culture of shared responsibility and mutual care for a safer society."
                />
              </div>
            </div>
          </div>

          {/* Image container */}
          <div className="md:w-[50%] flex items-center justify-center">
            <div className="w-[70%] aspect-[3/4] rounded-lg overflow-hidden">
              <img
                src={david}
                className="w-full h-full object-contain object-center scale-x-[-1]"
                alt="David Misornu"
              />
            </div>
          </div>
        </div>
      </section>

      {/* What we do section  */}
      <section id="What-we-do" className="px-[10%] py-[5%] bg-gray-100 overflow-x-hidden">
        <h2 className="text-center text-3xl font-bold pb-5"> What We Do</h2> 
        <div className=" flex flex-col md:flex-row flex-wrap gap-5 justify-between ">
        <Card
        image={Img1}
        title="Education & Training"
        description="Equipping communities with safety tools."
        buttonText="Know More"
        popoverHeader="Education & Training"
        popoverText="We provide comprehensive programs and training focused on crime prevention, safety best practices, and community mediation. By equipping individuals and organizations with the necessary tools, we promote a Safety First mindset at every level."
      />
       <Card
        image={Mis8}
        title="Collaboration & Partnerships"
        description="Building strong safety partnerships."
        buttonText="Know More"
        popoverHeader="Collaboration & Partnerships"
        popoverText="Our approach emphasizes collaboration with key stakeholders to foster strong partnerships. We believe that safety is a shared responsibility, and by encouraging open communication, we ensure a united front in addressing local and regional safety issue"
        
      />
       <Card
        image={Mis9}
        title="Education & Training"
        description="Equipping communities with safety tools."
        buttonText="Know More"
        popoverHeader="Proactive Engagement"
        popoverText="We are dedicated to building safer communities by actively engaging with individuals and organizations. Through hands-on initiatives and tailored interventions, we work to create environments where safety is prioritized, and communities can thrive without fear."
    
      />
        </div>
      </section>

      {/* we champion section  */}
        <section className="champion w-full h-[400px] px-[10%] py-[5%]">
          <div className="flex flex-col items-center justify-center h-full">
          <h2 className="text-3xl md:text-4xl font-bold md:font-extrabold text-white mb-5 text-center w-full md:w-lg relative ">We champion the safety & security needs for everyone</h2>
        <a href="#contact" className="hero-btn flex text-center items-center">Let's get to work <FaArrowRightLong className="ml-2"/></a>
        </div>
        </section>

        {/* FAQ section */}
        <section className="w-full h-fit px-[10%] my-[5%]   " id="faqs">
          <h2 className="text-3xl font-bold text-center mb-5">Frequently Asked Questions</h2>
          <div className="flex flex-col md:flex-row gap-4">
          <FAQ items={faqData1} />
          <FAQ items={faqData2} />
        </div>
        <div className="mt-10 pt-6 border-t border-gray-700"></div>
        </section>
        

        {/* Award section */}
        <section id="awards" className="w-full px-[10%] py-[5%] bg-white flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center mb-5">Awards & Recognition</h2>
            <div className="flex w-fit overflow-x-scroll md:overflow-hidden md:flex-row gap-2 px-3 md:px-0">
              <img className="w-[80%] md:w-[32%] border-1  object-cover rounded-lg" src={award1} alt='award1' />
              <img className="w-[80%] md:w-[32%] border-1  object-cover rounded-lg" src={award2} alt='award2' />
              <img className="w-[80%] md:w-[32%] border-1  object-cover rounded-lg" src={award3} alt='award3' />
            </div>
          <a className="hero-btn mx-auto mt-5" href="https://www.graphic.com.gh/news/general-news/ghana-news-national-cadet-corps-congratulates-dcop-david-eklu.html">Read More</a>
        </section>

        
        {/* Contact section  */}
        <section className="w-full h-fit px-[10%] py-[5%] bg-gray-100" id="contact">
          {/* map  */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-3">
          <div className="md:w-[50%] w-[100%] h-[450px]"> 
          <iframe src="https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d7939.512356558922!2d-0.194285!3d5.748200000000001!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNcKwNDQnNTMuNiJOIDDCsDExJzMzLjIiVw!5e0!3m2!1sen!2sgh!4v1742897881633!5m2!1sen!2sgh" className="w-full h-full"  allowfullscreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          
          </div>
          <div className="md:w-[45%] w-[100%] bg-white p-5 rounded-lg shadow-lg"  >
            <h4 className="text-3xl font-bold text-center mb-5">Contact us</h4>
            <p className="text-center text-gray-500 mb-5">We work with ambitious leaders who want to define the future, not hide from it.</p>
          <Form />  
          </div>
        </div>
        </section>

        
    </>
  );
};

export default Home;  