/** @format */
import React from "react";
import Hero from "../../Components/Hero";
import { david, mission, about, vision } from "../../assets";
import InfoSection from "../../Components/InfoSection";

const Home = () => {
  return (
    <>
      <Hero />
      <section id="overview" className="flex gap-3 w-[100%] h-[80vh] py-[2rem] overflow-y-hidden">
      <div className="h-[100%] overflow-y-scroll w-[50%] pl-5 mt-12 flex flex-wrap justify-between p-1  ">
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
      <div className="w-[50%] h-[100%]">
        <img src={david}
          className="w-[100%] h-[100%] object-contain" alt="David Misornu"
        />
      </div>
      </section>
    </>
  );
};

export default Home;  
