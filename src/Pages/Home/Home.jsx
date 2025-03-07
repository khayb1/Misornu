/** @format */
import React from "react";
import Hero from "../../Components/Hero";
import { david, mission, about, vision,training, collaboration, proactive, award1,award2,award3} from "../../assets";
import InfoSection from "../../Components/InfoSection";
import Card from "../../Components/Card";
import { FaArrowRightLong, FaQ } from "react-icons/fa6";
import "./Home.css";
import { FAQ } from "../../Components/FAQ";
import { faqData1, faqData2 } from "../../assets/data/faqData";

const Home = () => {
  return (
    <>
      <Hero />

      {/* overview section  */}
      <section id="overview" className=" w-[100%] h-fit px-[10%] py-[5%] overflow-y-hidden ">
        <h2 className="text-3xl font-bold text-center w-[100%]">Overview</h2>
        <div className=" flex flex-col md:flex-row md:max-h-[70vh]  w-[100%] h-[100%] overflow-y-hidden gap-10">
     <div className="h-[400px] md:h-full  overflow-y-auto w-full pl-5 mt-12 flex flex-wrap justify-between gap-5 md:w-[50%]" >
      <InfoSection 
      img={about}
      title="About Us"
      description="Misornu Safety Centre is a dedicated non-profit organization committed to creating safer communities through education and collaboration. Our mission enhances community safety and builds trust by offering programs focused on crime prevention, best safety practices, and conflict resolution through mediation. We believe in the power of partnerships and effective communication to address safety concerns, empowering individuals to take an active role in their safety and the safety of others. Join us in fostering a culture of vigilance and preparedness for all."      
      />

      <InfoSection
        img={mission}
        title="Our Mission"
        description="We are dedicated to educating, equipping, and inspiring individuals to become vigilant stewards of their own safety and the safety of others, fostering a united effort for a more secure environment." />

      <InfoSection 
      img={vision}
      title="Our Vision"
      description="To build and train communities where every individual is safety-conscious, looking out for one another, and working together to create a culture of shared responsibility and mutual care for a safer society."/>
      </div>

      {/* image */}
      <div className="md:w-[50%] h-full flex-grow-1">
        <img src={david}
          className="w-full h-full object-cover rotate-y-180 object-center" alt="David Misornu"
        />
      </div>
      </div>
      </section>

      {/* What we do section  */}
      <section id="What-we-do" className="px-[10%] py-[5%] bg-gray-100 overflow-x-hidden">
        <h2 className="text-center text-3xl font-bold pb-5"> What We Do</h2> 
        <div className=" flex flex-col md:flex-row flex-wrap gap-5 justify-between ">
        <Card
        image={training}
        title="Education & Training"
        description="Equipping communities with safety tools."
        buttonText="Know More"
        link="/gallery"
      />
       <Card
        image={collaboration}
        title="Collaboration & Partnerships"
        description="Building strong safety partnerships."
        buttonText="Know More"
        link="/gallery"
      />
       <Card
        image={proactive}
        title="Education & Training"
        description="Equipping communities with safety tools."
        buttonText="Know More"
        link="/gallery"
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
        <section className="w-full h-fit px-[10%] py-[5%]" id="FAQ">
          <h2 className="text-3xl font-bold text-center mb-5">Frequently Asked Questions</h2>
          <div className="flex flex-col md:flex-row gap-4">
          <FAQ items={faqData1} />
          <FAQ items={faqData2} />
        </div>
        </section>

        {/* Award section */}
        <section className="w-full px-[10%] py-[5%] bg-gray-100 flex flex-col items-center justify-center">
          <h2 className="text-3xl font-bold text-center mb-5">Awards & Recognition</h2>
            <div className="flex w-fit overflow-x-scroll md:overflow-hidden md:flex-row gap-2 px-3 md:px-0">
              <img className="w-[80%] md:w-[32%] border-2 b object-cover rounded-lg" src={award1} alt='award1' />
              <img className="w-[80%] md:w-[32%] border-2 b object-cover rounded-lg" src={award2} alt='award2' />
              <img className="w-[80%] md:w-[32%] border-2 b object-cover rounded-lg" src={award3} alt='award3' />
            </div>
          <a className="hero-btn mx-auto mt-5" href="https://www.graphic.com.gh/news/general-news/ghana-news-national-cadet-corps-congratulates-dcop-david-eklu.html">Read More</a>
        </section>

        {/* Contact section  */}
        <section className="w-full h-fit px-[10%] py-[5%] bg-white" id="contact">
        <div className="flex flex-col items-center justify-center gap-2">
          <div>
            
          </div>

          <form className="flex flex-col md:flex-row gap-5">
            <input type="text" placeholder="Full Name" className="p-2 border border-gray-300 rounded-lg" />
            <input type="email" placeholder="Email" className="p-2 border border-gray-300 rounded-lg" />
            <input type="tel" placeholder="Phone Number" className="p-2 border border-gray-300 rounded-lg" />
            <textarea placeholder="Message" className="p-2 border border-gray-300 rounded-lg" />
            <button className="hero-btn w-full md:w-auto">Send</button>
          </form>
        </div>
        </section>
    </>
  );
};

export default Home;  