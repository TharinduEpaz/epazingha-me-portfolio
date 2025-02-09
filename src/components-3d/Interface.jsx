import { FlipWords } from "@/components/ui/flip-words";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import { motion } from "framer-motion";
import { useState } from "react";
import { HeroHighlight } from "@/components/ui/hero-highlight";
import { Highlight } from "@/components/ui/hero-highlight";
import { cn } from "@/lib/utils";

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
  const [displayedParagraphs, setDisplayedParagraphs] = useState([]);

  const combinedParagraph = [
    "Hi! I am Tharindu Epasingha. I work as a developer and also love to write and create beautiful designs. Welcome to my website!",
    "From when I started learning to code, I always wanted to make good websites and apps. I try my best to write clean code and make things work well. Every time I finish a project, I feel happy because I can see my code turning into something useful.",
    "On this website, I want to share what I learn and create. If you are also learning programming, like to write, or just interested in design, you might find something useful here.",
  ];

  const paragraphOne =
    "Hi! I am Tharindu Epasingha. I work as a developer and also love to write and create beautiful designs. Welcome to my website!";
  const paragraphTwo =
    "From when I started learning to code, I always wanted to make good websites and apps. I try my best to write clean code and make things work well. Every time I finish a project, I feel happy because I can see my code turning into something useful.";
  const paragraphThree =
    "On this website, I want to share what I learn and create. If you are also learning programming, like to write, or just interested in design, you might find something useful here.";

  return (
    <div className="flex flex-col items-center w-screen">
      <Section>
        <AboutSection />
      </Section>
      <Section>
        {/* <SkillsSection name={"JavaScript"} percentage={90} /> */}
        <div className="w-full flex flex-col items-center">
          <div className="w-full max-w-4xl flex flex-col gap-8">
            <div
              className={cn(
                "w-1/3 self-start group cursor-pointer overflow-hidden card rounded-md p-4 "
              )}
            >
              <TextGenerateEffect
                words={paragraphOne}
                duration={0.5}
                className="text-md font-normal text-secondary whitespace-pre-line text-center"
              />
            </div>

            <div className="w-1/3 self-end">
              <TextGenerateEffect
                words={paragraphTwo}
                duration={0.5}
                className="text-md font-normal text-secondary whitespace-pre-line text-center"
              />
            </div>

            <div className="w-1/3 self-start">
              <TextGenerateEffect
                words={paragraphThree}
                duration={0.5}
                className="text-md font-normal text-secondary whitespace-pre-line text-center"
              />
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

const AboutSection = () => {
  return (
    <>
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
          className="text-2xl px-4 mt-10 font-bold md:text-4xl lg:text-5xl text-neutral-700 dark:text-white  lg:leading-snug"
        >
          Hello, I&apos;m Tharindu, &nbsp;
          <Highlight className="text-black dark:text-white">
            A Digital Craftsman
          </Highlight>
        </motion.h1>
      </HeroHighlight>
    </>
  );
  x;
};

export default Interface;
