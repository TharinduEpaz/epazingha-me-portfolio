
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion, useInView } from "framer-motion";
import { useState, useRef } from "react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Highlight } from "@/components/ui/hero-highlight";

const Section = (props) => {
  const { children, innerRef } = props;

  return (
    <motion.section
      ref={innerRef}
      className={`
        h-screen w-screen p-8 max-w-screen-2xl flex flex-col
      `}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, delay: 0.5 }}
      viewport={{ once: true }}
    >
      {children}
    </motion.section>
  );
};

export const Interface = () => {
  const [displayedParagraphs, setDisplayedParagraphs] = useState([]);
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true });

  const combinedParagraph = [
    "Hi! I am Tharindu Epasingha. I work as a developer and also love to write and create beautiful designs. Welcome to my website!",
    "From when I started learning to code, I always wanted to make good websites and apps. I try my best to write clean code and make things work well. Every time I finish a project, I feel happy because I can see my code turning into something useful.",
    "On this website, I want to share what I learn and create. If you are also learning programming, like to write, or just interested in design, you might find something useful here.",
  ];

  return (
    <div className="flex flex-col items-center w-screen">
      <Section innerRef={sectionRef}>
        <AboutSection />
      </Section>
      <Section>
        <div className="w-full flex justify-left items-start">
          <div className="flex flex-col">
            <TextGenerateEffect
              words={combinedParagraph.join("\n\n")}
              duration={0.5}
              className="w-96 text-xl font-normal text-secondary mb-4 whitespace-pre-line"
              start={isInView}
            />
          </div>
        </div>
      </Section>
    </div>
  );
};

const AboutSection = () => {
  return (
    <>
      {/* Existing AboutSection content */}
      <HeroHighlight>
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 font-bold md:text-4xl lg:text-5xl text-neutral-700 dark:text-white  lg:leading-snug block"
        >
          Hello, I&apos;m Tharindu, &nbsp;
          <br/>
          <Highlight className="text-black dark:text-white ">
            A Digital Craftsman
          </Highlight>
        </motion.h1>
      </HeroHighlight>
    </>
  );
};

export default Interface;