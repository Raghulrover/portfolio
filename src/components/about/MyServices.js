import React from "react";
import { FaAppStoreIos } from "react-icons/fa";
import { AiTwotoneAppstore } from "react-icons/ai";
import { SiAntdesign } from "react-icons/si";
import { BiCodeAlt } from "react-icons/bi";
import ServicesCard from "./ServicesCard";

const MyServices = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2">
      <ServicesCard
        icons={<BiCodeAlt />}
        title="Web Development"
        subTitle="Custom solutions for dynamic, robust websites; tailored for scalability and integration with modern technologies."
      />
      <ServicesCard
        icons={<SiAntdesign />}
        title="Web Design"
        subTitle="Creating visually appealing, user-friendly designs that enhance user engagement and elevate brand identity."
      />
      <ServicesCard
        icons={<AiTwotoneAppstore />}
        title="Mobile Application"
        subTitle="Develop innovative, efficient mobile apps tailored for iOS and Android to boost connectivity and functionality."
      />
      <ServicesCard
        icons={<FaAppStoreIos />}
        title="SEO"
        subTitle="Optimize your online presence with strategic SEO techniques to improve visibility, drive traffic, and increase conversions."
      />
    </div>
  );
};

export default MyServices;
