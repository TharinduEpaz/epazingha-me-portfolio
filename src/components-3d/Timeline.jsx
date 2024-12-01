import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";

import "react-vertical-timeline-component/style.min.css";
import { CgIfDesign } from "react-icons/cg";
import { FaCode } from "react-icons/fa";
import { MdEngineering } from "react-icons/md";

import { motion } from "framer-motion";

function Timeline() {
 
  return (
    <>
      {/* <h1 class="mb-10 text-9xl font-extrabold text-gray-600 absolute"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-sky-400">Skills</span> & Experience.</h1> */}
     
      <VerticalTimeline layout="1-column-left" >
        <VerticalTimelineElement
          contentStyle={{
            background: "radial-gradient(circle at 10% 20%, rgb(59, 149, 237) 0%, rgb(7, 91, 173) 90%)",
            color: "#fff",
            width: "40%",
            marginTop: "40px",
            
          }}
          contentArrowStyle={{ borderRight: "8px solid gray" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<CgIfDesign />}
          style={{
            height: "120px",
            width: "1200px",
          }}
        >
          <span
            style={{ fontSize: "24px", color: "white", fontWeight: "bold" }}
          >
            Designer
          </span>
          <p style={{fontSize:'12px'}}>
            I loved designing since 2015. I worked as a freelancer in both Fiverr and Upwork Platforms.
            After I learned about UI UX and the UX psychology I fall in love with it.
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{
            background: "radial-gradient(circle at 10% 20%, rgb(59, 149, 237) 0%, rgb(7, 91, 173) 90%)",
            color: "#fff",
            width: "40%",
          }}
          contentArrowStyle={{ borderRight: "8px solid gray" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<FaCode />}
          style={{
            height: "120px",
            width: "1200px",
          }}
        >
          <span
            style={{ fontSize: "24px", color: "white", fontWeight: "bold" }}
          >
            Developer
          </span>

          <p style={{fontSize:'12px'}}>
            After I started Studying computer science in UCSC, My true passion
            came out. I used my creativity towards building new apps and user
            experiences
          </p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          contentStyle={{

            background: "radial-gradient(circle at 10% 20%, rgb(59, 149, 237) 0%, rgb(7, 91, 173) 90%)",
            color: "#fff",
            width: "40%",

          }}
          contentArrowStyle={{ borderRight: "8px solid gray" }}
          iconStyle={{ background: "rgb(33, 150, 243)", color: "#fff" }}
          icon={<MdEngineering/>}
          style={{
            height: "120px",
            width: "1200px",
          }}
        >
          <span
            style={{ fontSize: "24px", color: "white", fontWeight: "bold" }}
          >
            Engineer
          </span>
          <p style={{fontSize:'12px'}}>
            Learning Systems Architecture, Data Structures and Algorithms and
            Database Design made my critical thinking ability to improve. I
            loved building Full Stack Apps ever since.{" "}
          </p>
        </VerticalTimelineElement>
      </VerticalTimeline>
   
    </>
  );
}

export default Timeline;
