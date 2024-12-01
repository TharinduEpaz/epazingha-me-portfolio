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

function DevelopmentRoadmap() {
 
  return (
    <>
      {/* <h1 class="mb-10 text-9xl font-extrabold text-gray-600 absolute"><span class="text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-sky-400">Skills</span> & Experience.</h1> */}
     <div style={{height:'100vh',}}>
      <VerticalTimeline layout="2-columns" >
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
         
        </VerticalTimelineElement>
      </VerticalTimeline>
      </div>
    </>
  );
}

export default DevelopmentRoadmap;
