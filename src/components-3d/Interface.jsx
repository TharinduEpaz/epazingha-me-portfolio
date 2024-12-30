import React from "react";
import { motion } from "framer-motion";
import Timeline from "./Timeline";
import Projects from "./Projects";
import DevelopmentRoadmap from "./DevelopmentRoadmap";
import Image from "next/image";
import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import ModernVerticalTimeline from "@/components/VerticalTimeline";

const words = ["A Digital Craftsman", "Designer", "Developer", "Engineer"];

const Section = (props) => {
  const { children } = props;

  return (
    <motion.section
      className={`
  h-screen w-screen p-8 max-w-screen-2xl flex flex-col
  `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  return (
    <div className="flex flex-col items-center w-screen">
      <Section>
        <AboutSection />
      </Section>
      <Section>
        {/* <SkillsSection name={"JavaScript"} percentage={90} /> */}
        <div className="w-full flex justify-left items-start">
        
          <ModernVerticalTimeline />
        </div>
      </Section>
      {/* <Section>
        <ProjectsSection />
      </Section>

      <Section>
        <ContactSection />
      </Section> */}
    </div>
  );
};

const AboutSection = () => {
  return (
    <div>
      <h1 className=" text-[50px] sm:text-[100px] text-transparent bg-clip-text bg-gradient-to-r to-black from-gray-500 ">
        Hi I&apos;m <span className="text-gray-600 font-bold">Tharindu</span>
      </h1>
      {/* <h3 className=" text-4xl ">A Digital Craftsman</h3>  */}
      <div className="flex flex-col mb-12">
        <FlipWords words={words} duration={2000} className="text-[30px] sm:text-[75px] text-gray-600" />
      </div>

      {/* <TextGenerateEffect words="Hi I&apos;m Tharindu" duration={0.5} />
      <TextGenerateEffect words="A Digital Craftsman" duration={0.5} /> */}

      <motion.p
        className="text-lg font-light mt-10 ml-2"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1 }}
      >
        I love creating awesome User Experiences, <br></br> Designs and Full
        Stack Apps
      </motion.p>
      {/* <span className="  text-xl font-light text-gray-600">
        I love creating awesome User Experiences, Designs and Full
        Stack Apps
      </span> */}
      {/* <motion.button
        type="button"
        className="text-white bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-gradient-to-bl font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 mt-10"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, delay: 1.5 }}
      >
        Contact``
      </motion.button> */}
    </div>
  );
};

const SkillsSection = ({ percentage, name }) => {
  return (
    <>
      <h1 className="mb-3 ml-2 font-bold mt-5">{name}</h1>

      <div className=" w-80 h-4 bg-gray-300 rounded-full">
        <motion.div
          className="h-full rounded-full bg-blue-600"
          style={{ width: `${percentage}%` }}
          initial={{ scaleX: 0, originX: 0 }}
          whileInView={{ scaleX: 1, originX: 0 }}
          transition={{ duration: 1 }}
        >
          {" "}
        </motion.div>
      </div>
    </>
  );
};

const ProjectsSection = () => {
  return (
    <>
      <div className="flex gap-10 flex-col ">
        <h1 className="mb-10 text-6xl font-extrabold text-gray-600 experiences m-auto">
          <span className="text-transparent bg-clip-text bg-gradient-to-r to-blue-500 from-sky-400">
            Projects
          </span>{" "}
          & Experience.
        </h1>
        <div className="flex mt-0 flex-wrap gap-4 justify-center">
          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-r from-gray-100 to-gray-300 ">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                BookShelf
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-600">
              Online E commerce platform for a bookstore including more
              functionalities such as book subscriptions, Book Exchange and
              Donations. Advanced industry standard quality platform with the
              best practices.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-r from-gray-100 to-gray-300 ">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Epazingha.me - Portfolio
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-600">
              My personal portfolio, this site you are currently viewing. Built
              using react 3JS and tailwind css and hosted on netlify.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-r from-gray-100 to-gray-300 ">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Audex LK
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-600">
              E commerce platform for sound equipment and a platform for the
              people to find the sound engineering professionals to their
              events. Platform for sound engineers to manage their events etc.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-r from-gray-100 to-gray-300 ">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Mini Game - GODOT
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-600">
              A mini game developing using godot engine. The game includes the
              features such as combat system leveling system physics and the
              score and health system. More features like sound effects and
              animations are to be added.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>

          <div class="max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow bg-gradient-to-r from-gray-100 to-gray-300 ">
            <a href="#">
              <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900">
                Sorting Algorithm Visualizer
              </h5>
            </a>
            <p class="mb-3 font-normal text-gray-600">
              A web application to visualize the sorting algorithms. The
              application is built using react. The application includes the
              features such as sorting speed control, array size control and the
              algorithm selection.
            </p>
            <a
              href="#"
              class="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              View
              <svg
                class="w-3.5 h-3.5 ml-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

function ContactSection() {
  return (
    <div className="w-full max-w-sm bg-white border border-gray-200 rounded-lg shadow m-auto">
      <div className="flex justify-end px-4 pt-4">
        {/* Dropdown menu */}
        <div
          id="dropdown"
          className="z-10 hidden text-base list-none bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        >
          <ul className="py-2" aria-labelledby="dropdownButton">
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Edit
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Export Data
              </a>
            </li>
            <li>
              <a
                href="#"
                className="block px-4 py-2 text-sm text-red-600 hover:bg-gray-100 dark:hover:bg-gray-600 dark:text-gray-200 dark:hover:text-white"
              >
                Delete
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="flex flex-col items-center pb-10">
        <Image
          className="w-24 h-24 mb-3 rounded-full shadow-lg"
          src="/profile.jpeg"
          alt="Bonnie image"
        />
        <h5 className="mb-1 text-xl font-medium text-gray-900">
          Tharindu Epasingha
        </h5>
        <span className="text-sm text-gray-500 dark:text-gray-400">
          Developer X Designer
        </span>
        <div className="flex mt-4 space-x-3 md:mt-6">
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            Add friend
          </a>
          <a
            href="#"
            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-gray-900 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-200 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-700 dark:focus:ring-gray-700"
          >
            Message
          </a>
        </div>
      </div>
    </div>
  );
}

export default Interface;
