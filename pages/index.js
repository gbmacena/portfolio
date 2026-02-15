import Image from "next/image";

import ParticlesContainer from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from "../components/Avatar";

import { motion } from "framer-motion";

import { fadeIn } from "../variants";

const Home = () => {
  return (
    <div className="bg-primary/60 h-[100vh]">
      {/* text */}
      <div className="z-10 w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="z-10 text-center flex flex-col justify-center xl:pt-40 xl:text-left h-full container mx-auto">
          {/* título */}
          <motion.h1
            variants={fadeIn("down", 0.1)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1"
          >
            Desenvolvedor <br />
            Full
            <span className="text-accent"> Stack</span>
          </motion.h1>
          {/* subtítulo */}
          <motion.p
            variants={fadeIn("down", 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-10 xl:mb-16"
          >
            Desenvolvedor Full Stack focado em construir aplicações escaláveis,
            rápidas e orientadas a resultado. Transformo problemas complexos em
            soluções digitais simples e eficientes.
          </motion.p>
          {/* botão */}
          <div className="flex justify-center xl:hidden relative z-50">
            <ProjectsBtn />
          </div>
          <motion.div
            variants={fadeIn("down", 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="hidden xl:flex z-50"
          >
            <ProjectsBtn />
          </motion.div>
        </div>
      </div>
      {/* imagem */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">
        {/* bg img */}
        <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0"></div>
        {/* partículas */}
        <ParticlesContainer />
        {/* avatar */}
        <motion.div
          variants={fadeIn("up", 0.4)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full h-full max-w-[750px] max-h-[750px] absolute bottom-0 lg:bottom-0 lg:right-[0%]"
        >
          <Avatar />
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
