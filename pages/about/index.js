import React, { useState } from "react";

import {
  FaHtml5,
  FaCss3,
  FaJs,
  FaReact,
  FaNodeJs,
  FaFigma,
  FaGit,
  FaDocker,
  FaLinux,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiMysql,
  SiPrisma,
  SiSequelize,
  SiRedis,
  SiExpress,
  SiNestjs,
  SiJest,
  SiCypress,
  SiRedux,
} from "react-icons/si";

export const aboutData = [
  {
    title: "habilidades",
    info: [
      {
        title: "Front-End:",
        icons: [
          <FaHtml5 key={0} title="HTML5" />,
          <FaCss3 key={1} title="CSS3" />,
          <FaJs key={2} title="JavaScript" />,
          <SiTypescript key={3} title="TypeScript" />,
          <FaReact key={4} title="React" />,
          <SiNextdotjs key={5} title="Next.js" />,
          <SiTailwindcss key={6} title="Tailwind CSS" />,
          <SiRedux key={7} title="Redux" />,
        ],
      },
      {
        title: "Design UI/UX:",
        icons: [<FaFigma key={0} title="Figma" />],
      },
      {
        title: "Back-End:",
        icons: [
          <FaNodeJs key={0} title="Node.js" />,
          <SiExpress key={2} title="Express" />,
          <SiNestjs key={3} title="NestJS" />,
          <SiPrisma key={4} title="Prisma" />,
          <SiPostgresql key={5} title="PostgreSQL" />,
          <SiMysql key={6} title="MySQL" />,
          <SiRedis key={7} title="Redis" />,
          <SiMongodb key={8} title="MongoDB" />,
          <SiSequelize key={9} title="Sequelize" />,
        ],
      },
      {
        title: "Ferramentas e Testes:",
        icons: [
          <SiJest key={0} title="Jest" />,
          <SiCypress key={1} title="Cypress" />,
          <FaGit key={2} title="Git" />,
          <FaDocker key={3} title="Docker" />,
          <FaLinux key={4} title="Linux" />,
        ],
      },
    ],
  },
  {
    title: "experiência",
    info: [
      {
        title: "Freelancer - Desenvolvedor Full Stack",
        stage: "2022-2023",
      },
      {
        title: "Desenvolvedor Full Stack - Heroica Tecnologia",
        stage: "2024 - atualmente",
      },
      {
        title: "Instrutor de Programação",
        stage: "2025",
      },
    ],
  },
  {
    title: "certificações",
    info: [
      {
        title:
          "Análise e Desenvolvimento de Sistemas - Centro Universitário de João Pessoa - UNIPÊ",
        stage: "2024 - 2025",
      },

      {
        title: "Curso de Next.js - Udemy",
        stage: "2025",
      },
      {
        title: "Curso Docker - One Bit Code",
        stage: "2025",
      },
      {
        title: "Curso Angular - One Bit Code",
        stage: "2025",
      },
      {
        title: "Curso TypeScript - One Bit Code",
        stage: "2024",
      },
      {
        title: "Curso Full Stack JavaScript - One Bit Code",
        stage: "2023 - 2024",
      },

      {
        title: "Rocketseat Discover",
        stage: "2023",
      },
      {
        title: "Curso em Vídeo Python",
        stage: "2023",
      },
    ],
  },
];

import Avatar from "../../components/Avatar";
import Circles from "../../components/Circles";

import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

import CountUp from "react-countup";

const About = () => {
  const [index, setIndex] = useState(0);
  return (
    <div className="md:overflow-visible overflow-auto h-full bg-primary/30 py-32 text-center xl:text-left pb-44">
      <Circles />
      {/* avatar img */}
      <motion.div
        key="about-avatar"
        variants={fadeIn("up", 0.8)}
        initial="hidden"
        animate="show"
        exit="hidden"
        className="hidden xl:flex w-full max-w-[750px] max-h-[750px] absolute left-[-350px] bottom-0"
      >
        <Avatar className="w-[750px] h-[750px] scale-x-[-1] object-bottom" />
      </motion.div>
      <div className="container justify-center mx-auto px-4 flex flex-col items-center xl:flex-row gap-x-6 min-h-[100vh]">
        {/* text */}
        <div className=" flex flex-col z-50 justify-center">
          <motion.h2
            variants={fadeIn("right", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h2 mb-4"
          >
            Sobre <span className="text-accent">mim</span>
          </motion.h2>
          <motion.p
            variants={fadeIn("right", 0.4)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-[500px] mx-auto xl:mx-0 mb-6 xl:mb-12 px-2 xl:px-0"
          >
            Mais do que escrever código, estruturo soluções. Penso em
            arquitetura, performance e evolução do produto desde o primeiro
            commit.
          </motion.p>
          {/* counters */}
          <motion.div
            variants={fadeIn("right", 0.6)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden md:flex md:max-w-xl xl:max-w-none mx-auto xl:mx-0 mb-8"
          >
            <div className="flex flex-1 xl:gap-x-6">
              {/* experience */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp
                    start={0}
                    end={4}
                    duration={10}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />{" "}
                  +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Anos de experiência
                </div>
              </div>
              {/* courses */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp
                    start={0}
                    end={15}
                    duration={8}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />{" "}
                  +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Cursos concluídos
                </div>
              </div>
              {/* projects */}
              <div className="relative flex-1 after:w-[1px] after:h-full after:bg-white/10 after:absolute after:top-0 after:right-0">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp
                    start={0}
                    end={10}
                    duration={8}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />{" "}
                  +
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Projetos finalizados
                </div>
              </div>
              {/* awards */}
              <div className="relative flex-1">
                <div className="text-2xl xl:text-4xl font-extrabold text-accent mb-2">
                  <CountUp
                    start={0}
                    end={1}
                    duration={5}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                </div>
                <div className="text-xs uppercase tracking-[1px] leading-[1.4] max-w-[100px]">
                  Hackathons vencidos
                </div>
              </div>
            </div>
          </motion.div>
        </div>
        {/* info */}
        <motion.div
          variants={fadeIn("left", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="flex xl:mt-40 flex-col w-full xl:max-w-[48%] h-[480px]"
        >
          <div className="flex gap-x-4 xl:gap-x-8 mx-auto xl:mx-0 mb-4">
            {aboutData.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className={`${
                    index === itemIndex &&
                    "text-accent after:w-[100%] after:bg-accent after:transition-all after:duration-300"
                  }  cursor-pointer capitalize xl:text-lg relative after:w-8 after:h-[2px] after:bg-white after:absolute after:-bottom-1 after:left-0`}
                  onClick={() => setIndex(itemIndex)}
                >
                  {item.title}
                </div>
              );
            })}
          </div>
          <div className="py-2 xl:py-6 flex flex-col gap-y-2 xl:gap-y-4 items-center xl:items-start">
            {aboutData[index].info.map((item, itemIndex) => {
              return (
                <div
                  key={itemIndex}
                  className="flex-1 flex flex-col md:flex-row max-w-max gap-x-2 items-center text-white/60"
                >
                  {/* title */}
                  <div className="font-light mb-2 md:mb-0">{item.title}</div>
                  {/* <div className="hidden md:flex">-</div> */}
                  <div>{item.stage}</div>
                  <div className="flex flex-wrap gap-2 justify-center xl:justify-start lg:gap-4">
                    {/* icons */}
                    {item.icons?.map((icon, itemIndex) => {
                      return (
                        <div
                          key={itemIndex}
                          className="text-xl sm:text-2xl text-white"
                        >
                          {icon}
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default About;
