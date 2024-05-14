import React from "react";
import ResumeTitle from "./ResumeTitle";
import { MdWork } from "react-icons/md";
import { GiGraduateCap } from "react-icons/gi";
import ResumeCard from "./ResumeCard";

const Education = () => {
  return (
    <div className="w-full grid grid-cols-9 px-6">
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Experience" icon={<MdWork />} />
        <ResumeCard
          badge=""
          title="Software Engineer"
          subTitle="VirtualMaze Softys"
          des="Make the responsive and scalable UI/UX using ReactJs, React
          Native and other UI Libraries and integrate Node.js for
          backend operations, and MongoDB for data management,
          enhancing real-time decision-making capabilities.
          Project's Worked 
          ❖ VmRoutes 
          ❖ International Preparation of Battlefield (IPB)
          ❖ Oil Rig Machine Maintenance (RIG)"
        />
        
      </div>
      <div className="w-full h-full hidden lgl:flex justify-center items-center">
        <span className="w-[1px] h-full bg-zinc-800 inline-flex"></span>
      </div>
      <div className="col-span-9 md:col-span-4">
        <ResumeTitle title="Education" icon={<GiGraduateCap />} />
        <ResumeCard
          badge="2018 - 2022"
          title="B.E. Computer Science"
          subTitle="Vellore"
          des="Completed Bachelor's degree in computer Science with 7.71 CGPA"
        />
        <ResumeCard
          badge="2017 - 2018"
          title="HSC - Computer Science"
          subTitle="Vellore"
          des="Completed HSC with 67% marks"
        />
        <ResumeCard
          badge="2015 - 2016"
          title="SSLC - General"
          subTitle="Vellore"
          des="Completed SSLC with 69% marks"
        />
      </div>
    </div>
  );
};

export default Education;
